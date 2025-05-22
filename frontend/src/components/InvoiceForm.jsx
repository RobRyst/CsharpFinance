import { useEffect, useState } from "react";
import axios from "axios";

const InvoiceForm = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    userId: "",
    status: "draft",
    subTotal: 0,
    discount: 0,
    total: 0,
    invoiceCreated: "",
    invoiceDueDate: "",
  });

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error("Unexpected response:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const discountList = {
    zero: 0,
    five: 5,
    ten: 10,
    fifteen: 15,
    twenty: 20,
  };

  const updateTotal = (Sub_Total, discountItem) => {
    const discountPercent = discountList[discountItem] || 0;
    const total = Sub_Total - (Sub_Total * discountPercent) / 100;
    setForm((prev) => ({ ...prev, total }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let inputValue = value;

    if (name === "sub_total" || name === "total") {
      inputValue = parseFloat(value) || 0;
    } else if (name === "discount") {
      inputValue = discountList[value] ?? 0;
    } else if (name === "userId") {
      inputValue = parseInt(value, 10);
    }

    setForm((prev) => {
      const updateForm = { ...prev, [name]: inputValue };

      if (name === "sub_total" || name === "discount") {
        updateTotal(updateForm.sub_total, updateForm.discount);
      }

      return updateForm;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Fiks senere
      await axios.post("http://localhost:5086/api/invoice", form);
      alert("INVOICE SUCCESS");
    } catch (error) {
      console.error("INVOICE ERROR", error);
      alert("Failed to create");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-2">Create Invoice</h2>

      <div className="flex flex-col gap-1">
        <label>User:</label>
        <select
          name="userId"
          value={form.userId}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option disabled value="">
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Status:</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="draft">Draft</option>
          <option value="sent">Sent</option>
          <option value="paid">Paid</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Subtotal:</label>
        <input
          name="sub_total"
          type="number"
          value={form.sub_total}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Discount:</label>
        <select
          name="discount"
          value={form.discount}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="zero">0%</option>
          <option value="five">5%</option>
          <option value="ten">10%</option>
          <option value="fifteen">15%</option>
          <option value="twenty">20%</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Total:</label>
        <input
          type="number"
          value={form.total}
          disabled
          className="p-2 border rounded bg-gray-100"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Created Date:</label>
        <input
          name="invoiceCreated"
          type="date"
          value={form.invoiceCreated}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Due Date:</label>
        <input
          name="invoiceDueDate"
          type="date"
          value={form.invoiceDueDate}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Create Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;
