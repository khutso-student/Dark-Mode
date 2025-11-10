import { MdOutlineDesignServices } from "react-icons/md";
import { GoCodeSquare } from "react-icons/go";
import { BsJournalCode } from "react-icons/bs";
import { motion } from "framer-motion";

// ✅ Reusable Card Component

function StatusCard({ Icon, color, title, description }) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full p-2 sm:p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center gap-2 w-full rounded-2xl text-white bg-[#0E0E10] border border-[#6E6E6E] p-4 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Icon className="text-5xl" style={{ color }} />
        </motion.div>

        <motion.h1
          className="font-bold text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-sm text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ✅ Main Section that uses the Card
export default function Status() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  w-full ">
      <StatusCard
        Icon={MdOutlineDesignServices}
        color="#DA0E9D"
        title="UX/UI Designer"
        description="I design intuitive and visually appealing interfaces using Figma, from wireframes to prototypes, ensuring seamless user experiences through testing and iteration."
      />

      <StatusCard
        Icon={GoCodeSquare}
        color="#11DAD1"
        title="Front-End Developer"
        description="I build responsive, interactive interfaces using React, Tailwind CSS, and modern JavaScript frameworks for seamless user experiences."
      />

      <StatusCard
        Icon={BsJournalCode}
        color="#FFD700"
        title="Back-End Developer"
        description="I develop secure and scalable backends using Node.js, Express, Django and databases like MongoDB and Supabase, ensuring  data management and API integration."
      />
    </div>
  );
}
