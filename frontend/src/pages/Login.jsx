import { useState } from "react";
import { userLogin } from "../api/auth";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userLogin(form);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      setError("Login Failed");
    }
  };

  return (
    <>
      <h1 className="text-4xl text-green-600 font-bold">Hello Tailwind</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded px-3 py-2 mb-2 w-full"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="border rounded px-3 py-2 mb-2 w-full"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        <button
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
