// src/components/StatCard.jsx
import React, { useEffect, useState } from "react";

const StatCard = ({ start = 0, end = 2, label, duration = 2000, delay = 60000 }) => {
  const [number, setNumber] = useState(start);

  const animateCount = () => {
    let current = start;
    const stepTime = duration / (end - start);
    const timer = setInterval(() => {
      current += 1;
      setNumber(current);
      if (current >= end) {
        clearInterval(timer);
        // After finishing, wait for 'delay' then restart
        setTimeout(animateCount, delay);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateCount(); // start immediately when mounted
  }, []);

  return (
    <div className="flex flex-col text-white justify-center px-5 w-full h-32 gap-4 bg-[#0E0E10] border border-[#282828] rounded-lg shadow-lg">
      <h1
        className="text-4xl font-bold"
        style={{
          textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.4)",
        }}
      >
        {number}+
      </h1>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};

export default function YearCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-3 w-full p-2 sm:p-8">
      <StatCard start={0} end={2} label="Years of Experience" duration={2000} delay={60000} />
      <StatCard start={0} end={24} label="Years Old" duration={2500} delay={60000} />
      <StatCard start={0} end={6} label="Completed Projects" duration={2500} delay={60000} />
      <StatCard start={0} end={10} label="Tech Languages" duration={2500} delay={60000} />
    </div>
  );
}
