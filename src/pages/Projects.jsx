import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import Design from "../component/Design";

import worksync from "../assets/worksync.png";
import Que from "../assets/Que.png";
import QueFiling from "../assets/QueFiling.png";
import WisePrice from "../assets/WisePrice.png";
import SmartBiz from "../assets/SmartBiz.png";
import Vibe from "../assets/Vibe.png";
import FetchMateBG from '../assets/FetchMateBG.png';

// ✅ Project Card Component (No TypeScript)
const ProjectCard = ({ image, title, demoLink, githubLink, category, index, tools = [] }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col bg-[#121212] border border-[#2d2d2d] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#0a473f]/40 hover:border-[#11DAD1] transition-all duration-300">
        {/* Image Section */}
        <div
          className="w-full h-40 sm:h-48 md:h-56 bg-cover bg-center relative group"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 justify-center gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#11DAD1]/20 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#11DAD1]/40 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#222222] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#333333] transition"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col px-4 py-3">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-white font-semibold text-base"
                    style={{
                textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.4)",
                }}>{title}
            </h2>
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#11DAD1]/20">
                <span className="text-[#11DAD1] text-sm font-bold">{index}</span>
            </div>
          </div>

          <p className="text-[#bbbbbb] text-sm mb-2">{category}</p>

          {/* Tools / Tech Stack */}
          {tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
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
      </div>
    </motion.div>
  );
};

// ✅ Main Projects Component
export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex justify-center items-center w-full pt-20 pb-10 px-2 sm:px-6 ">
      <div className="flex flex-col w-full ">
        {/* Heading */}
      <p className="text-[#11DAD1] font-bold tracking-widest flex justify-center sm:justify-start">
        MY SKILLS
      </p>
      <h1 className="text-3xl text-center sm:text-4xl text-white font-extrabold flex justify-center sm:justify-start mb-4">
        MY CONTRIBUTION & KEY SKILLS
      </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center mt-4">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-8 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-[#D9D9D9] hover:bg-[#D9D9D9] text-[#282828] "
                : "bg-[#000] text-white hover:text-[#282828] hover:bg-[#D9D9D9] border border-[#D5D5D5]"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("designs")}
            className={`px-8 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === "designs"
                 ? "bg-[#D9D9D9] hover:bg-[#D9D9D9] text-[#282828] "
                : "bg-[#000] text-white hover:text-[#282828] hover:bg-[#D9D9D9] border border-[#D5D5D5]"
            }`}
          >
            Designs
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full ">
            
          {activeTab === "projects" && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-1 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard
                image={Que}
                title="QueueCare"
                demoLink="https://queue-care-swart.vercel.app/"
                githubLink="https://github.com/khutso-student/QueueCare"
                category="Software"
                tools={["React","JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]}
                index="01"
              />
              <ProjectCard
                image={QueFiling}
                title="QueueCare Filing"
                demoLink="https://queue-care-filing.vercel.app/"
                githubLink="https://github.com/khutso-student/QueueCareFiling"
                category="Software"
                tools={["React", "JavaScript", "Tailwind CSS", "Node.js","Express.js", "MongoDB"]}
                index="02"
              />
              <ProjectCard
                image={Vibe}
                title="VibeConnect"
                demoLink="https://vibeconnect-seven.vercel.app/"
                githubLink="https://github.com/khutso-student/vibeconnect"
                category="Software"
                tools={["React","JavaScript","Tailwing CSS", "Socket.io", "Express","Nodde.js", "MongoDB"]}
                index="03"
              />

              <ProjectCard
                image={FetchMateBG}
                title="FetchMate"
                demoLink="https://fetch-mate-dusky.vercel.app/"
                githubLink="https://github.com/khutso-student/FetchMate"
                category="Software"
                tools={["React","JavaScript","Tailwing CSS", "Django","PostgreSQL", "SQLIte", "yt-dlp"]}
                index="04"
              />

              <ProjectCard
                image={worksync}
                title="WorkSync"
                demoLink="https://work-sync-nine.vercel.app/"
                githubLink="https://github.com/khutso-student/WorkSync"
                category="Software"
                tools={["React","JavaScript", "Express.js", "Socket.io", "Node.js", "Tailwind CSS", "MongoDB"]}
                index="05"
              />
              <ProjectCard
                image={WisePrice}
                title="Wise ShopKeeper"
                demoLink="https://price-wise-shopkeeper.vercel.app/"
                githubLink="https://github.com/khutso-student/price-wise-shopkeeper"
                category="Software"
                tools={["React","TypeScript", "Supabase", "AI APIs","HTML", "CSS"]}
                index="06"
              />
              <ProjectCard
                image={SmartBiz}
                title="SmartBiz Digital"
                demoLink="https://www.smartbizdigital.co.za/"
                category="Website Live"
                tools={["WordPress", "JavaScript", "Elementor","HTML", "CSS"]}
                index="07"
              />
            </motion.div>
          )}

          {activeTab === "designs" && (
            <div className="w-full">
              <Design />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}