export default function HowItWorks() {
  const steps = [
    { id: 1, text: "Copy and share your referral link or code.", color: "bg-[#FFF1F1] text-[#DA1E28]" },
    { id: 2, text: "Your friend signs up and makes their first transaction.", color: "bg-[#F2F4F8] text-[#697077]" },
    { id: 3, text: "You both get a bonus in your wallet.", color: "bg-[#B6F6C8] text-[#028743]" },
  ];

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h2>

      <ol className="space-y-5 text-sm text-gray-700">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center gap-3">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full font-semibold text-sm ${step.color}`}
            >
              {step.id}
            </div>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
