// Invoice.jsx - Add console logs to debug
import { useState } from "react";
import InvoiceTable from "../components/InvoiceTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Invoice = () => {
  const [filterTable, setFilterTable] = useState("");
  const navigate = useNavigate();

  const handleCreateInvoice = () => {
    navigate("/invoice/createInvoice");
  };

  const handleDownloadAllInvoices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5086/api/invoice/download-summary-pdf",
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "InvoiceSummary.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download all invoices", error);
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log("Filter input changed to:", value); // Debug log
    setFilterTable(value);
  };

  return (
    <>
      <div>
        <h1>Invoice</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <input
              name="filterTable"
              type="text"
              placeholder="Filter Table"
              className="w-64 h-12 p-2 rounded-l border bg-white text-l"
              value={filterTable}
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex flex-row gap-5">
            <button
              type="button"
              onClick={handleCreateInvoice}
              className="mt-4 bg-zinc-600 hover:bg-blue-700 text-white p-2 mb-4 rounded-xl"
            >
              + Create Invoice
            </button>
            <button
              type="button"
              onClick={handleDownloadAllInvoices}
              className="mt-4 bg-zinc-600 hover:bg-blue-700 text-white p-2 mb-4 rounded-xl"
            >
              + Download All Invoices
            </button>
          </div>
        </div>
      </div>

      <InvoiceTable filterTable={filterTable} />
    </>
  );
};

export default Invoice;
