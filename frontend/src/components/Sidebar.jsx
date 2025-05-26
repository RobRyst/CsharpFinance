import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden bg-zinc-800 text-white flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">TEMP ICON</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`md:hidden bg-zinc-800 text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col sm:flex-row sm:justify-around p-4 gap-2 font-bold text-sm">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/invoice" onClick={() => setIsOpen(false)}>
            Invoices
          </NavLink>
          <NavLink to="/budget" onClick={() => setIsOpen(false)}>
            Budgets
          </NavLink>
          <NavLink to="/pot" onClick={() => setIsOpen(false)}>
            Pots
          </NavLink>
          <NavLink to="/bill" onClick={() => setIsOpen(false)}>
            Recurring Bills
          </NavLink>
        </nav>
      </div>

      <div className="hidden md:flex flex-col w-64 bg-zinc-800 text-white p-4 h-screen-max">
        <h2 className="text-2xl font-bold px-4 mb-8">TEMP ICON</h2>
        <nav className="flex flex-col gap-5 px-4 text-lg font-bold">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/invoice">Invoices</NavLink>
          <NavLink to="/budget">Budgets</NavLink>
          <NavLink to="/pot">Pots</NavLink>
          <NavLink to="/bill">Recurring Bills</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
