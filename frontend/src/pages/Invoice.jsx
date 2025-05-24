import { useState } from "react";
import InvoiceTable from "../components/InvoiceTable";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const [filterTable, setFilterTable] = useState("");
  const navigate = useNavigate();

  const handleCreateInvoice = () => {
    navigate("/invoice/createInvoice");
  };

  const handleDownloadAllInvoices = () => {};

  return (
    <>
      <div>
        <h1>Invoice</h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <input
              name="filterTable"
              type="text"
              placeholder="Filter Table"
              className="w-64 p-2 mb-4 rounded-l border bg-white"
              value={filterTable}
              onChange={(e) => setFilterTable(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row gap-5">
            <button
              type="button"
              onClick={handleCreateInvoice}
              className="mt-4 bg-zinc-600 hover:bg-blue-700 text-white p-2 mb-4 rounded-xl"
            >
              + Create Invoice
            </button>{" "}
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
