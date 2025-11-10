import { MdOutlineDesignServices } from "react-icons/md";
import { GoCodeSquare } from "react-icons/go";
import { BsJournalCode } from "react-icons/bs";

// ✅ Reusable Card Component
function StatusCard({ Icon, color, title, description }) {
  return (
    <div className="flex justify-center items-center w-full h-full p-2 sm:p-4">
      <div className="flex flex-col justify-center gap-2 w-full rounded-2xl text-white bg-[#0E0E10] border border-[#6E6E6E] p-4 hover:scale-105 transition-transform duration-300">
        <Icon className="text-5xl" style={{ color }} />
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
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
