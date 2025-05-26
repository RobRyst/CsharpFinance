import DashboardLayout from "../layout/DashboardLayout";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Bill from "./pages/Bill";
import Budget from "./pages/Budget";
import CreateInvoice from "./pages/createInvoice";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Login from "./pages/Login";
import Pot from "./pages/Pot";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="budget" element={<Budget />} />
          <Route path="pot" element={<Pot />} />
          <Route path="bill" element={<Bill />} />
          <Route path="invoice/createInvoice" element={<CreateInvoice />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
