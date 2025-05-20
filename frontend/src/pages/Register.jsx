import { useState } from "react";
import { userRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRegister(form);
      localStorage.setItem("token", res.data.token);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Registration Failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-700 px-6">
        <div className="bg-white border rounded-lg shadow-lg p-20 w-full max-w-3xl">
          <h1 className="text-4xl text-zinc-600 font-bold pb-6 text-center">
            Become a member
          </h1>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          {success && <div className="text-green-600 text-center mb-4"></div>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              className="border rounded px-3 py-2 mb-2 w-full"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              type="text"
            />
            <input
              className="border rounded px-3 py-2 mb-2 w-full"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              type="text"
            />
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
            <div className="flex flex-row justify-between ">
              <button
                className="bg-zinc-700 text-white rounded-xl p-4 hover:bg-green-700 w-full max-w-3xl"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center pt-4">
            Already got an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Click here to sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
