import { useEffect, useState } from "react";
import axios from "axios";

const LatestInvoices = () => {
  const [latestInvoices, setLatestInvoices] = useState([]);

  useEffect(() => {
    const getLastFiveInvoices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5086/api/invoice/with-user"
        );

        const sorted = [...response.data].sort(
          (a, b) => new Date(b.invoiceCreated) - new Date(a.invoiceCreated)
        );

        setLatestInvoices(sorted.slice(0, 5));
      } catch (error) {
        console.error("Error incoming", error);
      }
    };

    getLastFiveInvoices();
  }, []);

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <div className="flex flex-col gap-4">
        {latestInvoices.length === 0 && (
          <p className="text-gray-500">No invoices found.</p>
        )}
        {latestInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex justify-between border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-semibold">
                {invoice.firstName} {invoice.lastName}
              </p>
              <p className="text-sm text-gray-600">
                Due: {new Date(invoice.invoiceDueDate).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right font-bold">${invoice.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestInvoices;
