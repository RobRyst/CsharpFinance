import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-zinc-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold px-7">TEMP ICON</h2>
      <nav className="flex flex-col gap-5 px-7 text-lg font-bold">
        <NavLink to="/" className="">
          Dashboard
        </NavLink>
        <NavLink to="/invoice" className="">
          Invoices
        </NavLink>
        <NavLink to="/budget" className="">
          Budgets
        </NavLink>
        <NavLink to="/pot" className="">
          Pots
        </NavLink>
        <NavLink to="/bill" className="">
          Recurring Bills
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
