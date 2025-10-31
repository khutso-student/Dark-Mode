import { useState, useEffect } from "react";

const works = [
  {
    title: "Authentication",
    description:
      "I can build secure authentication systems using JWT, bcrypt, and session management. This includes login, signup, password resets, and signup by Google role-based access.",
  },
  {
    title: "REST-Full APIs",
    description:
      "I can design and develop scalable REST APIs with Express.js, Node.js & Django, enabling seamless communication between frontend and backend.",
  },
    {
    title: "Socket IO",
    description:
      "I can build real time communication between clients and servers. This including live updates and chat applications",
  },
  {
    title: "Database Management",
    description:
      "I can design schemas, optimize queries, and manage data efficiently using MongoDB & SQL for both structured and unstructured data.",
  },
  {
    title: "Frontend Development",
    description:
      "I create responsive and interactive UIs using React, Tailwind CSS, Html & CSS, JavaScript and TypeScript, focusing on user experience and performance optimization.",
  },
  {
    title: "Deployment",
    description:
      "I can deploy full-stack apps to cloud platforms like Vercel, Render, MongoDB Clusters and, ensuring CI/CD and scalability.",
  },
    {
    title: "UX/UI Designer",
    description:
      "Passionate about user research and testing, wireframing and prototyping, visual design and usability, design systems and accessibility",
  },
];

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center  w-full h-full text-white py-4 px-3 sm:px-10  shadow-md text-center">
      {/* Slide */}
      <h2 className="text-2xl sm:text-5xl font-bold mb-4">
        {works[current].title}
      </h2>
      <p className="text-sm sm:text-lg mt-3 text-center">{works[current].description}</p>

      {/* Dots */}
      <div className="absolute flex justify-center gap-2 bottom-5 cursor-pointer">
        {works.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
            current === index
                ? "bg-[#868686]"
                : "bg-[#0E0E10] border border-[#868686]"
            }`}
            style={
            current === index
                ? { boxShadow: "0 0 3px #ffffff, 0 0 8px rgba(255,255,255,0.4)" }
                : {}
            }
        />
        ))}
      </div>
    </div>
  );
}