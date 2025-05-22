import InvoiceTable from "../components/InvoiceTable";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const navigate = useNavigate();

  const handleCreateInvoice = () => {
    navigate("/invoice/createInvoice");
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4 px-7">Invoice</h1>
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
            onClick={handleCreateInvoice}
            className="mt-4 bg-zinc-600 hover:bg-blue-700 text-white p-2 mb-4 rounded-xl"
          >
            + Download Invoices
          </button>
        </div>
      </div>

      <InvoiceTable />
    </>
  );
};

export default Invoice;
