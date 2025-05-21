import { useEffect, useState } from "react";
import axios from "axios";

const InvoiceForm = () => {
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({
    userId: "",
    status: "draft",
    sub_total: 0,
    discount: "zero",
    total: 0,
    dateCreated: "",
    dateDueDate: "",
  });

  useEffect(() => {
    axios.get("api/users");
  });
};

export default InvoiceForm;
