// src/components/StatCard.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col text-white justify-center px-5 w-full h-32 gap-4 bg-[#0E0E10] border border-[#282828] rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl font-bold"
        style={{
          textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.4)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {number}+
      </motion.h1>
      <motion.p
        className="text-sm text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
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
