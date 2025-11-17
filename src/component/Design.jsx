import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";

import StandardBank from "../assets/StandardBank.png";
import TymBank from "../assets/TymBank App.png";
import Hotel from "../assets/Hotel.png";
import WaxMovies from "../assets/WaxMovies.png";
import Plants from "../assets/PlantsLogin.png";
import TruckDebo from "../assets/TruckDEBO.png";
import Queue from "../assets/QueueCare.png";
import Adidas from "../assets/Adidas.png";
import Meetify from "../assets/Meetify.png";
import Jays from "../assets/Jays.png";
import VibeConnect from "../assets/VibeConnect.png";
import FetchMate from '../assets/FetchMate.png';

// ✅ Design Card Component
const DesignCard = ({ image, title, subtitle, tools = [] }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#121212] border border-[#2d2d2d] rounded-xl p-2 hover:shadow-lg hover:shadow-[#0a473f]/40 hover:border-[#0a473f] transition-all duration-300">
        {/* Image Section */}
        <div className="w-full h-56 rounded-md bg-[#1c1c1c] mb-3 relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md transition duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-30"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <button
              onClick={() => setModal(true)}
              className="text-white hover:text-[#0a473f] cursor-pointer"
            >
              <HiOutlineViewfinderCircle className="text-[50px]" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-[#bbbbbb] text-sm mb-2">{subtitle}</p>

        {/* Tools Section */}
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-[#303031] text-[#D5D5D5] border border-[#868686]"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Modal View */}
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-w-3xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// ✅ Main Design Component
export default function Design() {
  const [viewAll, setViewAll] = useState(false);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Initial Grid */}
      <DesignCard
        image={StandardBank}
        title="Standard Bank"
        subtitle="UX Redesign"
        tools={["Figma", "UI Kit", "User Flow"]}
      />
      <DesignCard
        image={TymBank}
        title="TymBank"
        subtitle="UX Redesign"
        tools={["Figma", "Prototyping", "WireFrames"]}
      />
      <DesignCard
        image={Hotel}
        title="Hotel"
        subtitle="App Design"
        tools={["Figma", "Mobile UI", "Icon Design"]}
      />
      <DesignCard
        image={WaxMovies}
        title="WAX-Movies"
        subtitle="App Design"
        tools={["Figma", "UI Components", "Dark Theme"]}
      />
      <DesignCard
        image={Plants}
        title="Plants Login"
        subtitle="App Design"
        tools={["Figma", "Illustrations", "Material Design"]}
      />
      <DesignCard
        image={TruckDebo}
        title="Truck DEBO"
        subtitle="App Design"
        tools={["Figma", "UX Research", "Prototype"]}
      />

      {/* View All Button */}
      <div className="w-full p-2 flex justify-center z-2000">
        <button
          onClick={() => setViewAll(!viewAll)}
          className="bg-[#0E0E10] border border-[#868686] hover:bg-[#0a473f] text-sm text-white w-full sm:w-auto px-6 py-2 rounded-md cursor-pointer duration-300"
        >
          {viewAll ? "Close" : "View All"}
        </button>
      </div>

      {/* View All Modal */}
      {viewAll && (
        <div
          onClick={() => setViewAll(false)}
          className="fixed top-0 left-0 bg-[#000000f8] w-full h-full flex justify-center items-center z-50 p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] w-full h-full p-3 rounded-md overflow-y-auto no-scrollbar"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DesignCard image={StandardBank} title="Standard Bank" subtitle="UX Redesign" tools={["Figma", "User Flow", "Prototype"]} />
              <DesignCard image={TymBank} title="TymBank" subtitle="UX Redesign" tools={["Figma", "Prototyping", "WireFrames"]} />
              <DesignCard image={Hotel} title="Hotel" subtitle="App Design" tools={["Figma", "Mobile UI", "Icon Design"]} />
              <DesignCard image={WaxMovies} title="WAX-Movies" subtitle="App Design" tools={["Figma", "UI Components", "Dark Theme"]} />
              <DesignCard image={Plants} title="Plants Login" subtitle="App Design" tools={["Figma", "Material Design", "Illustrations"]} />
              <DesignCard image={TruckDebo} title="Truck DEBO" subtitle="App Design" tools={["Figma", "Prototype", "UX Research"]} />
              <DesignCard image={Queue} title="QueueCare" subtitle="Software Design" tools={["Figma", "UX Flow", "Prototype"]} />
              <DesignCard image={Adidas} title="Adidas Product" subtitle="Product Design" tools={["Figma", "Illustrations", "Materia Design"]} />
              <DesignCard image={Meetify} title="Meetify" subtitle="Software" tools={["Figma", "UI Design", "WireFrame"]} />
              <DesignCard image={Jays} title="Jays Electronics" subtitle="Ecommerce" tools={["Figma", "Material Designs", "Brand Colors"]} />
              <DesignCard image={VibeConnect} title="VibeConnect" subtitle="Software Design" tools={["Figma", "Prototype", "Dark Mode UI"]} />
              <DesignCard image={FetchMate} title="FetchMate" subtitle="Software Design" tools={["Figma", "User Flow", "Dark Theme", "UX Reserach"]} />
            </div>
          </div>

          <div
            onClick={() => setViewAll(false)}
            className="absolute top-5 right-5 flex justify-center items-center bg-[#3a3a3a] hover:bg-[#074643] text-white w-10 h-10 rounded-md duration-300 cursor-pointer"
          >
            <TfiClose />
          </div>
        </div>
      )}
    </motion.div>
  );
}