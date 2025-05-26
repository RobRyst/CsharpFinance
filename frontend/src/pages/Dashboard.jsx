import { NavLink } from "react-router-dom";
import BudgetDiagram from "../components/BudgetDiagram";
import LatestInvoices from "../components/LatestInvoices";

const DashboardPage = () => {
  return (
    <div className="bg-gray-300 w-full min-h-screen px-4 py-6">
      <div className="max-w-10xl mx-auto">
        <div className="p-7 mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col border rounded-xl p-6 bg-white flex-1 min-w-[200px]">
            <span>Current Balance</span>
            <span className="text-4xl font-bold">$ 4836</span>
          </div>
          <div className="flex flex-col border rounded-xl p-6 bg-white flex-1 min-w-[200px]">
            <span>Income</span>
            <span className="text-4xl font-bold">$ 3836</span>
          </div>
          <div className="flex flex-col border rounded-xl p-6 bg-white flex-1 min-w-[200px]">
            <span>Expenses</span>
            <span className="text-4xl font-bold">$ 1700</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 max-h-[350px] row-start-1 col-start-1">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Pots</span>
              <NavLink to="/pot" className="text-sm font-semibold">
                See Details &gt;
              </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex items-center gap-5 bg-gray-200 p-4 rounded-xl flex-1">
                <span>Icon</span>
                <div>
                  <span>Total Saved</span>
                  <div className="text-2xl font-bold">$ 1700</div>
                </div>
              </div>
              <div className="flex flex-1 gap-4">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border-l-4 border-emerald-700 pl-2">
                    <span>Savings</span>
                    <div className="font-bold">$ 159</div>
                  </div>
                  <div className="border-l-4 border-gray-500 pl-2">
                    <span>Concert Ticket</span>
                    <div className="font-bold">$ 110</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="border-l-4 border-sky-500 pl-2">
                    <span>Gift</span>
                    <div className="font-bold">$ 40</div>
                  </div>
                  <div className="border-l-4 border-rose-400 pl-2">
                    <span>New Laptop</span>
                    <div className="font-bold">$ 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-300 rounded-xl p-6 min-h-[500px]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Budget</span>
              <NavLink to="/budget" className="text-sm font-semibold">
                See Details &gt;
              </NavLink>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
              <BudgetDiagram />
              <div className="flex flex-wrap gap-5 flex-row sm:flex-row md:flex-row lg:flex-col">
                <div className="border-l-4 border-blue-500 pl-2">
                  <span>Dining Out</span>
                  <div className="font-bold">$ 75</div>
                </div>
                <div className="border-l-4 border-orange-400 pl-2">
                  <span>Personal Care</span>
                  <div className="font-bold">$ 100</div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-2">
                  <span>Bills</span>
                  <div className="font-bold">$ 750</div>
                </div>
                <div className="border-l-4 border-sky-300 pl-2">
                  <span>Entertainment</span>
                  <div className="font-bold">$ 50</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-4 ">
              <span className="text-2xl font-bold">Invoices</span>
              <NavLink to="/invoice" className="text-sm font-semibold">
                See Details &gt;
              </NavLink>
            </div>
            <LatestInvoices />
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Recurring Bills</span>
              <NavLink to="/bill" className="text-sm font-semibold">
                See Details &gt;
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-l-4 border-emerald-500 bg-gray-100 p-4 rounded-xl">
                <span>Paid Bills</span>
                <span className="font-bold">$ 200</span>
              </div>
              <div className="flex justify-between items-center border-l-4 border-rose-500 bg-gray-100 p-4 rounded-xl">
                <span>Total Upcoming</span>
                <span className="font-bold">$ 400</span>
              </div>
              <div className="flex justify-between items-center border-l-4 border-sky-500 bg-gray-100 p-4 rounded-xl">
                <span>Due Soon</span>
                <span className="font-bold">$ 50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
