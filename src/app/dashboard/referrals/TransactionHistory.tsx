"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const allTransactions = [
  { date: "Jan 20, 2025", name: "John Doe", status: "Completed", bonus: "₦500" },
  { date: "Feb 4, 2025", name: "Jane Smith", status: "Pending", bonus: "₦300" },
  { date: "Feb 14, 2025", name: "Samuel Ade", status: "Completed", bonus: "₦400" },
  { date: "Feb 20, 2025", name: "Grace Ola", status: "Pending", bonus: "₦200" },
];

export default function TransactionHistory() {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [search, setSearch] = useState("");

  // Filter logic
  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesStatus =
      statusFilter === "All Status" || tx.status === statusFilter;
    const matchesSearch = tx.name
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      {/* Header And Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Transaction History
        </h2>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-8 pr-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dropdowns */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-blue-50 text-gray-700 font-medium">
            <tr>
              <th className="py-3 px-4">Date Joined</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Bonus Earned</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{tx.date}</td>
                <td className="py-3 px-4">{tx.name}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        tx.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        tx.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">{tx.bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-8 h-8 rounded-full font-medium transition-all duration-200 ${
              page === num
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
