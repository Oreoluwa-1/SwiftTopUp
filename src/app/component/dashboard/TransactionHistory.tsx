"use client";

import { useState } from "react";
import { Search, MoreVertical } from "lucide-react";

const allTransactions = [
  {
    id: "ALP008",
    date: "1 Feb, 2020 02:34 am",
    type: "Data",
    desc: "MTN 5GB Data Bundle 08123456789",
    amount: "₦500",
    status: "Failed",
  },
  {
    id: "HHP0553",
    date: "24 May, 2020 02:10 pm",
    type: "Airtime",
    desc: "AEDC Electricity Bill Meter: 1234567890",
    amount: "₦1,000",
    status: "Success",
  },
  {
    id: "HHP0096",
    date: "21 Sep, 2020 10:41 pm",
    type: "Electricity",
    desc: "Airtel Airtime Top-up 08098765432",
    amount: "₦2,000",
    status: "Success",
  },
  {
    id: "HHP0013",
    date: "17 Oct, 2020 08:20 pm",
    type: "TV",
    desc: "DSTV Compact Plus Smart Card: 1234567890",
    amount: "₦5,000",
    status: "Pending",
  },
];

const statusColors: Record<string, string> = {
  Success: "bg-green-100 text-green-700",
  Failed: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("Transaction Type");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = allTransactions.filter((tx) => {
    const matchesSearch =
      tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      typeFilter === "Transaction Type" ||
      tx.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus =
      statusFilter === "All Status" ||
      tx.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm overflow-x-auto">
      {/* ===== Header & Filters ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <h2 className="font-medium text-gray-800 text-lg">
          Transaction history
        </h2>

        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search transactions..."
              className="border border-gray-200 rounded-md pl-8 pr-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Transaction Type Dropdown */}
          <select
            className="border border-gray-200 rounded-md py-1.5 px-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none text-gray-700"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option>Transaction Type</option>
            <option>Data</option>
            <option>Airtime</option>
            <option>Electricity</option>
            <option>TV</option>
          </select>

          {/* Status Dropdown */}
          <select
            className="border border-gray-200 rounded-md py-1.5 px-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none text-gray-700"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Success</option>
            <option>Failed</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* ===== Table ===== */}
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-blue-50 text-gray-600 font-medium">
          <tr>
            <th className="py-3 px-4">Transaction ID</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-6 text-center text-gray-500">
                No transactions found.
              </td>
            </tr>
          ) : (
            paginated.map((tx) => (
              <tr key={tx.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{tx.id}</td>
                <td className="py-3 px-4">{tx.date}</td>
                <td className="py-3 px-4">{tx.type}</td>
                <td className="py-3 px-4">{tx.desc}</td>
                <td className="py-3 px-4">{tx.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusColors[tx.status]}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        tx.status === "Success"
                          ? "bg-green-600"
                          : tx.status === "Failed"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    />
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <MoreVertical
                    size={16}
                    className="text-gray-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ===== Pagination ===== */}
      <div className="flex justify-center items-center mt-6 space-x-1 text-sm font-medium text-gray-700">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1.5 border rounded-md hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1.5 border rounded-md ${
              currentPage === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 border rounded-md hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
