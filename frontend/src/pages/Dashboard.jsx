import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DonutChart from "@/Pages/Budget/components/DonutChart";

const DashboardPage = ({ latestInvoices = [] }) => {
  return (
    <AuthenticatedLayout>
      <div className="py-7">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-gray-100 shadow-sm sm:rounded-lg">
            <div className="grid grid-cols-1">
              <div className="col-span-1 grid">
                <div className="col-span-1 grid place-items-center sm:place-items-start">
                  <h1 className="py-6 text-left text-4xl font-bold">
                    Overview
                  </h1>
                </div>

                {/* Summary Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <SummaryCard title="Current Balance" amount="$ 4836" />
                  <SummaryCard title="Income" amount="$ 3836" />
                  <SummaryCard title="Expenses" amount="$ 1700" />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Pots Section */}
                  <div className="rounded-xl bg-white p-4">
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between px-5">
                        <span className="text-2xl font-bold">Pots</span>
                        <Link to="/pots">See Details &gt;</Link>
                      </div>
                      <div className="flex flex-col gap-5 pb-6 md:flex-row">
                        <PotCard />
                        <div className="flex flex-row gap-10">
                          <PotItem
                            label="Savings"
                            amount="$ 159"
                            border="border-emerald-700"
                          />
                          <PotItem
                            label="Concert Ticket"
                            amount="$ 110"
                            border="border-gray-500"
                          />
                          <PotItem
                            label="Gift"
                            amount="$ 40"
                            border="border-sky-500"
                          />
                          <PotItem
                            label="New Laptop"
                            amount="$ 10"
                            border="border-rose-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Budgets Section */}
                  <div className="row-span-2 flex max-h-[500px] flex-col justify-center rounded-xl bg-white">
                    <div className="flex justify-between p-5">
                      <span className="text-2xl font-bold">Budgets</span>
                      <Link to="/budget">See Details &gt;</Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                      <DonutChart />
                    </div>
                  </div>

                  {/* Invoices Section */}
                  <div className="row-span-2 max-h-[600px] rounded-xl bg-white p-4">
                    <div className="flex justify-between p-5">
                      <span className="text-2xl font-bold">Invoices</span>
                      <Link to="/invoices">View All &gt;</Link>
                    </div>
                    <div className="flex flex-col gap-6 px-5 pb-5">
                      {latestInvoices.map((invoice) => (
                        <div
                          key={invoice.id}
                          className="flex items-center justify-between border-b py-2"
                        >
                          <div>
                            <p className="font-semibold">
                              {invoice.user.firstname} {invoice.user.lastname}
                            </p>
                            <p className="text-sm text-gray-600">
                              Due: {invoice.invoice_due_date}
                            </p>
                          </div>
                          <div className="text-right font-bold">
                            ${invoice.total}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bills Section */}
                  <div className="col-span-1 flex flex-col rounded-xl bg-white">
                    <div className="flex justify-between px-5 py-5">
                      <span className="text-2xl font-bold">
                        Recurring Bills
                      </span>
                      <Link to="/bills">See Details &gt;</Link>
                    </div>
                    <div className="flex flex-col gap-5 px-5 py-5">
                      <BillItem
                        label="Paid Bills"
                        amount="$ 200"
                        border="border-emerald-500"
                      />
                      <BillItem
                        label="Total Upcoming"
                        amount="$ 400"
                        border="border-rose-500"
                      />
                      <BillItem
                        label="Due Soon"
                        amount="$ 50"
                        border="border-sky-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

const SummaryCard = ({ title, amount }) => (
  <div className="flex flex-col place-items-center gap-2 rounded-xl bg-gray-200 px-6 py-6 sm:place-items-start">
    <span>{title}</span>
    <span className="text-4xl font-bold">{amount}</span>
  </div>
);

const PotCard = () => (
  <div className="h-30 ml-5 flex w-full items-center gap-3 rounded-xl bg-gray-100 px-5 py-2 md:w-60">
    <img src="/images/dollar.png" alt="Dollar Icon" className="h-10 w-14" />
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span className="ml-5 w-full">Total Saved</span>
      <span className="ml-5 w-full text-2xl font-extrabold">$850</span>
    </div>
  </div>
);

const PotItem = ({ label, amount, border }) => (
  <div className={`flex flex-col ${border} border-l-4 px-2`}>
    <span>{label}</span>
    <span className="text-base font-extrabold">{amount}</span>
  </div>
);

const BillItem = ({ label, amount, border }) => (
  <div
    className={`flex flex-row items-center justify-between rounded-xl ${border} border-l-4 bg-gray-200 p-4`}
  >
    <span>{label}</span>
    <span className="text-base font-extrabold">{amount}</span>
  </div>
);

export default DashboardPage;
