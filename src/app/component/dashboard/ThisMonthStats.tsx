"use client";

export default function ThisMonthStats() {
  const stats = [
    { label: "Data", color: "bg-blue-500", value: 20 },
    { label: "Airtime", color: "bg-orange-500", value: 12 },
    { label: "Electricity", color: "bg-red-500", value: 13 },
    { label: "TV", color: "bg-green-500", value: 0 },
  ];

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="font-medium text-gray-800 mb-3">This month</h2>
      <ul className="space-y-2">
        {stats.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-gray-700">{item.label}</span>
            </div>
            <span className="text-gray-600 font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
