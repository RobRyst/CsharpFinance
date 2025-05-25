import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BudgetDiagram from "../components/BudgetDiagram";
import LatestInvoices from "../components/LatestInvoices";

const DashboardPage = () => {
  return (
    <div className="bg-gray-300">
      <div className="p-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-row justify-between gap-10 mx-6 my-6">
        <div className=" flex flex-col border rounded-xl p-6 basis-1/3">
          <span>Current Balance</span>
          <span className="text-4xl font-bold">$ 4836</span>
        </div>
        <div className="flex flex-col border rounded-xl p-6 basis-1/3">
          <span>Income</span>
          <span className="text-4xl font-bold">$ 3836</span>
        </div>
        <div className="flex flex-col border rounded-xl p-6 basis-1/3">
          <span>Expenses</span>
          <span className="text-4xl font-bold">$ 1700</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white my-6 rounded-xl">
          <div className="flex flex-row justify-between p-4 ml-4 items-center">
            <span className="text-2xl font-bold">Pots</span>
            <NavLink to="/pot">See Details &gt;</NavLink>
          </div>
          <div>
            <div className="flex flex-row p-7">
              <div className="flex flex-row basis-1/2 gap-5 items-center bg-gray-300 p-3 rounded-xl">
                <span>Icon</span>
                <div className="flex flex-col">
                  <span>Total Saved</span>
                  <span className="text-2xl font-bold">$ 1700</span>
                </div>
              </div>
              <div className="flex flex-row basis-1/2 gap-10 ml-4">
                <div className="flex flex-col gap-3 basis-1/2">
                  <div className="flex flex-col border-l-4 border-emerald-700 px-2">
                    <span>Savings</span>
                    <span className="text-base font-bold">$ 159</span>
                  </div>
                  <div className="flex flex-col border-l-4 border-gray-500 px-2">
                    <span>Concert Ticket</span>
                    <span className="text-base font-bold">$ 110</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 basis-1/2">
                  <div className="flex flex-col border-l-4 border-sky-500 px-2">
                    <span>Gift</span>
                    <span className="text-base font-bold">$ 40</span>
                  </div>
                  <div className="flex flex-col border-l-4 border-rose-400 px-2">
                    <span>New Laptop</span>
                    <span className="text-base font-bold">$ 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid flex max-h-[500px] flex-col rounded-xl col-start-2 my-6 bg-sky-300">
          <div className="flex flex-row justify-between p-4 items-center">
            <span className="text-2xl font-bold">Budget</span>
            <NavLink to="/budget">See Details &gt;</NavLink>
          </div>
          <div className="flex flex-row justify-center gap-20 items-center">
            <div>
              <BudgetDiagram />
            </div>
            <div className="flex flex-col it gap-5">
              <div className="flex flex-col border-l-4 border-blue-500 px-2">
                <span>Dining Out</span>
                <span className="text-base font-bold">$ 75</span>
              </div>
              <div className="flex flex-col border-l-4 border-orange-400 px-2">
                <span>Personal Care</span>
                <span className="text-base font-bold">$ 100</span>
              </div>
              <div className="flex flex-col border-l-4 border-emerald-500 px-2">
                <span>Bills</span>
                <span className="text-base font-bold">$ 750</span>
              </div>
              <div className="flex flex-col border-l-4 border-sky-300 px-2">
                <span>Entertainment</span>
                <span className="text-base font-bold">$ 50</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <span className="text-2xl font-bold">Invoices</span>
            <NavLink to="/invoice">See Details &gt;</NavLink>
          </div>
          <div>
            <LatestInvoices />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <span className="text-2xl font-bold">Recurring Bills</span>
            <NavLink to="/bill">See Details &gt;</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
