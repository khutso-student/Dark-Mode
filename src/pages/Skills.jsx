import { useEffect, useRef, useState } from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { DiMysql, DiDjango } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  const skills = [
    { icon: <BiLogoMongodb className="text-[#11DAD1] text-8xl" />, name: "MongoDB", desc: "Stores application data flexibly." },
    { icon: <SiExpress className="text-[#fff] text-8xl" />, name: "Express.js", desc: "Handles backend logic efficiently." },
    { icon: <FaReact className="text-[#11DAD1] text-8xl" />, name: "React.js", desc: "Builds dynamic UI components." },
    { icon: <FaNode className="text-[#6EFA8A] text-8xl" />, name: "Node.js", desc: "Runs server-side JavaScript." },
    { icon: <DiDjango className="text-[#0ECF76] text-8xl" />, name: "Django", desc: "Python framework for robust backends." },
    { icon: <FaHtml5 className="text-[#E34C26] text-8xl" />, name: "HTML5", desc: "Structures web pages semantically." },
    { icon: <FaCss3Alt className="text-[#2965F1] text-8xl" />, name: "CSS3", desc: "Styles and animates layouts." },
    { icon: <RiJavascriptLine className="text-[#F0DB4F] text-8xl" />, name: "JavaScript", desc: "Adds interactivity and logic." },
    { icon: <TbBrandTypescript className="text-[#007ACC] text-8xl" />, name: "TypeScript", desc: "Strongly-typed JavaScript." },
    { icon: <BiLogoPostgresql className="text-[#336791] text-8xl" />, name: "PostgreSQL", desc: "Database design, CRUD operations, and query optimization." },
    { icon: <DiMysql className="text-[#00758F] text-8xl" />, name: "MySQL", desc: "Relational database management." },
    { icon: <MdOutlineDesignServices className="text-[#DA0E9D] text-8xl" />, name: "UX/UI Design", desc: "Designs user-centered experiences." },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && scrolling) {
        scrollRef.current.scrollBy({
          left: 250,
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrolling]);

  // Manual scroll buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-auto  p-2 sm:p-8">
      {/* Header */}
      <p className="text-[#11DAD1] font-bold tracking-widest flex justify-center sm:justify-start">
        MY SKILLS
      </p>
      <h1 className="text-3xl text-center sm:text-4xl text-white font-extrabold flex justify-center sm:justify-start mb-4">
        MY CONTRIBUTION & KEY SKILLS
      </h1>

      {/* Skills Scroll Section */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth w-full p-4  rounded-2xl"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
        onMouseEnter={() => setScrolling(false)}
        onMouseLeave={() => setScrolling(true)}
      >
        <style>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center text-white items-center gap-3 min-w-[220px] sm:min-w-[350px] h-[400px] bg-[#0E0E10] border border-[#868686] rounded-3xl p-2 sm:p-4 hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <h1 className="font-bold text-xl sm:text-4xl"  style={{
                textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.2)",
                }}>{skill.name}
        </h1>
            <p className="text-md text-gray-300 text-center">{skill.desc}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center sm:justify-start  gap-3 w-full p-4 mt-2">
        <button
          onClick={() => scroll("left")}
          className="flex justify-center items-center w-12 h-12 rounded-full bg-[#0E0E10] border border-[#868686] text-white hover:text-[#11DAD1] duration-300 cursor-pointer"
        >
          <IoIosArrowBack
            className="text-3xl"
            style={{
              filter:
                "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
            }}
          />
        </button>

        {/* Indicators */}
        <div className="bg-[#6E6E6E] w-5 h-2 rounded-full"></div>
        <div className="bg-[#6E6E6E] w-10 h-2 rounded-full"></div>
        <div className="bg-[#6E6E6E] w-5 h-2 rounded-full"></div>

        <button
          onClick={() => scroll("right")}
          className="flex justify-center items-center w-12 h-12 rounded-full bg-[#0E0E10] border border-[#868686] text-white hover:text-[#11DAD1] duration-300 cursor-pointer"
        >
          <IoIosArrowForward
            className="text-3xl"
            style={{
              filter:
                "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
            }}
          />
        </button>
      </div>
    </div>
  );
}
