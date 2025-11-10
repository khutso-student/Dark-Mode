import { useState, useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import YearCard from "../component/YearCard";
import Marquee from "../component/Marquee";
import Status from "../component/Status";
import WorkCarousel from "../component/WorkCarousel";

import background from "../assets/background.png";
import PROFILE from "../assets/PROFILE.png";
import ArtImage from "../assets/ArtImage.png";

import { GoHome } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBuildOutline } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";

export default function Main() {
  const [active, setActive] = useState("#home");
  const controls = useAnimation();
  const ref = useRef(null);

  // 👇 Refs for each section
  const sections = [
    { id: "#home", ref: useRef(null) },
    { id: "#about", ref: useRef(null) },
    { id: "#skills", ref: useRef(null) },
    { id: "#projects", ref: useRef(null) },
    { id: "#contact", ref: useRef(null) },
  ];

  // 🔍 Detect section in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // section must be 40% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActive(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  // 🎨 Button style
  const navButtonClass = (isActive) => `
    cursor-pointer transition-all duration-300 text-2xl
    ${isActive ? "text-[#11DAD1] scale-110" : "text-[#fff] hover:text-[#11DAD1]"}
  `;

  // 🖱️ Smooth scroll on click
  const handleClick = (id) => {
    setActive(id);
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // 🌀 Profile rotation
  const handleMouseEnter = () => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    });
  };

  const handleMouseLeave = () => {
    controls.stop();
    controls.set({ rotate: 0 });
  };

  return (
    <main className="w-full h-screen">
      {/* Hero Section */}
      <div
        id="home"
        ref={sections[0].ref}
        className="relative flex flex-col justify-center items-center gap-4 w-full h-full px-1 sm:px-8 py-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Navigation Bar */}
        <div className="fixed top-4 flex justify-center z-100 items-center w-[90%] sm:w-1/2 mb-2">
          <div className="flex justify-center items-center gap-5 p-4 w-full sm:w-90 h-13 rounded-full bg-[#8686861e] border border-[#BDBDBD] backdrop-blur-md">
            <button
              onClick={() => handleClick("#home")}
              className={navButtonClass(active === "#home")}
            >
              <GoHome />
            </button>
            <button
              onClick={() => handleClick("#about")}
              className={navButtonClass(active === "#about")}
            >
              <FaRegCircleUser />
            </button>
            <button
              onClick={() => handleClick("#skills")}
              className={navButtonClass(active === "#skills")}
            >
              <IoBuildOutline />
            </button>
            <button
              onClick={() => handleClick("#projects")}
              className={navButtonClass(active === "#projects")}
            >
              <RiApps2Line />
            </button>
            <button
              onClick={() => handleClick("#contact")}
              className={navButtonClass(active === "#contact")}
            >
              <LuPhone />
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center w-full h-auto p-4">
          <motion.img
            src={PROFILE}
            alt="Profile"
            className="w-90"
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 2 }}
            transition={{ delay: 0.6 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
          />
        </div>

        {/* Headings */}
        <h1 className="text-white text-2xl sm:text-6xl">
          KHUTSO{" "}
          <span className="text-[#11DAD1] font-extrabold">MAKUNYANE</span>
        </h1>

        <h2 className="text-white text-xl sm:text-3xl">
          <Typewriter
            words={[
              "Full Stack Software Developer",
              "UX/UI Designer",
              "Creative Dev",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </h2>
      </div>

      {/* Stats Section */}
      <div className="w-full h-auto bg-gradient-to-b from-[#1b161675] to-[#000000de]">
        <YearCard />
      </div>

      {/* About Section */}
      <div id="about" ref={sections[1].ref} className="w-full h-auto mb-5">
        <About />
      </div>

      <div className="flex justify-center items-center w-full h-20 my-4 p-4 sm:p-8">
        <Marquee />
      </div>

      <div className="w-full h-auto mt-8">
        <Status />
      </div>

      <div id="skills" ref={sections[2].ref} className="w-full h-auto mb-5">
        <Skills />
      </div>

      <div id="projects" ref={sections[3].ref} className="w-full h-auto">
        <Projects />
      </div>

      <div className="flex justify-center items-center w-full h-auto p-2 sm:p-5 mt-5">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full h-150 bg-[#0E0E10] border border-[#868686] rounded-xl p-2">
          <div
            className="flex justify-center items-center w-full h-full border rounded-xl border-[#868686]"
            style={{ backgroundImage: `url(${ArtImage})` }}
          >
            <WorkCarousel />
          </div>

          <div className="flex justify-center items-center w-full h-1/2 sm:h-full">
            <h1 className="text-white text-center font-bold text-3xl sm:text-5xl">
              These are my Technical Skills
            </h1>
          </div>
        </div>
      </div>

      <div id="contact" ref={sections[4].ref} className="w-full h-auto mt-10">
        <Contact />
      </div>
    </main>
  );
}
