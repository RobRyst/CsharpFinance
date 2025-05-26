import { useState } from "react";
import InvoiceTable from "../components/InvoiceTable";
import axios from "axios";
import InvoiceForm from "../components/InvoiceForm";
//import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const [filterTable, setFilterTable] = useState("");
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [refreshTable, setRefreshTable] = useState(0);
  //const navigate = useNavigate();

  const handleCreateInvoice = () => {
    setShowInvoiceForm(true);
  };

  const handleCloseInvoiceFormModel = () => {
    setShowInvoiceForm(false);
  };

  const handleInvoiceCreated = () => {
    setRefreshTable((prev) => prev + 1);
    setShowInvoiceForm(false);
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
    setFilterTable(value);
  };

  return (
    <>
      <div className="bg-gray-300 w-full min-h-screen px-4 py-6">
        <div className="max-w-10xl mx-auto">
          <h1 className="text-xl font-bold mb-4">Invoice</h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
            <div className="w-full md:w-auto">
              <input
                name="filterTable"
                type="text"
                placeholder="Filter Table"
                className="w-full md:w-80 h-12 p-2 rounded-xl border bg-white text-lg"
                value={filterTable}
                onChange={handleFilterChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                type="button"
                onClick={handleCreateInvoice}
                className="bg-zinc-600 hover:bg-blue-700 text-white p-3 rounded-xl w-full sm:w-auto"
              >
                + Create Invoice
              </button>
              <button
                type="button"
                onClick={handleDownloadAllInvoices}
                className="bg-zinc-600 hover:bg-blue-700 text-white p-3 rounded-xl w-full sm:w-auto"
              >
                Download All Invoices
              </button>
            </div>
          </div>

          <InvoiceTable
            filterTable={filterTable}
            refreshInvoiceTable={refreshTable}
          />
        </div>
      </div>
      {showInvoiceForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleCloseInvoiceFormModel}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={handleCloseInvoiceFormModel}
            >
              &times;
            </button>
            <InvoiceForm onInvoiceCreated={handleInvoiceCreated} />
          </div>
        </div>
      )}
    </>
  );
};

export default Invoice;
