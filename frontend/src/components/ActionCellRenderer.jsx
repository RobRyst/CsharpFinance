import axios from "axios";
import { useState } from "react";

const ActionCellRenderer = (props) => {
  const { id } = props.data;
  const { onDeleteSuccess } = props;
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5086/api/invoice/${id}`);
      setSuccess(true);

      if (onDeleteSuccess) {
        onDeleteSuccess(id);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Could not delete Invoice");
    }
  };

  const handleDownloadInvoice = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5086/api/invoice/download-pdf/${id}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Invoice_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("PDF download failed", error);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
      >
        Delete
      </button>
      <button
        onClick={handleDownloadInvoice}
        className="bg-green-500 text-white px-2 py-1 rounded text-sm"
      >
        Download
      </button>
    </div>
  );
};

export default ActionCellRenderer;
