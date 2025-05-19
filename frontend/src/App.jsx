import "./App.css";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Invoice />} />
      </Routes>

      <Dashboard />
      <Invoice />
    </>
  );
}

export default App;
