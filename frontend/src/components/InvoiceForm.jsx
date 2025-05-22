import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvoiceForm = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userId: "",
    status: "draft",
    sub_total: 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    let inputValue = value;

    if (name === "sub_total" || name === "total") {
      inputValue = parseFloat(value) || 0;
    } else if (name === "discount") {
      inputValue = parseInt(value, 10) || 0;
    } else if (name === "userId") {
      inputValue = parseInt(value, 10);
    }

    setForm((prev) => {
      const updatedForm = { ...prev, [name]: inputValue };
      return updatedForm;
    });

    // update total based on latest values (use latest values, not stale)
    // But because setState is async, get the latest values explicitly:
    if (name === "sub_total" || name === "discount") {
      // compute total using the updated values:
      let newSubTotal = name === "sub_total" ? inputValue : form.sub_total;
      let newDiscount = name === "discount" ? inputValue : form.discount;
      const newTotal = newSubTotal - (newSubTotal * newDiscount) / 100;

      setForm((prev) => ({ ...prev, total: newTotal }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Fiks senere
      await axios.post("http://localhost:5086/api/invoice", form);
      setSuccess(true);
      setTimeout(() => {
        navigate("/invoice");
      }, 1000);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("FAILED");
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
        <label>Sub total:</label>
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
          <option value={0}>0%</option>
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
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
