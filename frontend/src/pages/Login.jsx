import { useState } from "react";
import { userLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(form);
      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: response.data.firstname,
          lastName: response.data.lastname,
          email: form.email,
        })
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "You successfully logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect Email or Password",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-700 px-6">
        <div className="bg-white border rounded-lg shadow-lg p-20 w-full max-w-3xl">
          <h1 className="text-4xl text-zinc-600 font-bold pb-6 text-center">
            Sign in
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            Not signed up?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Click here to register!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
