import { useState } from "react";

const InvoiceForm = () => {
  const [form, setForm] = useState({
    userId: "",
    status: "",
    sub_total: "",
    discount: "",
    total: "",
    dateCreated: "",
    dateDueDate: "",
  });
};

export default InvoiceForm;
