import { MdOutlineLocalPhone, MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";


// 👇 Named export
export function ContactInfoCard({ Icon, text }) {
  return (
    <div className="flex justify-start sm:justify-center items-center gap-2 sm:gap-3 w-full sm:w-auto  h-auto p-2">
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#0F0F11] border border-[#6E6E6E]">
        <Icon
          className="text-[#D5D5D5] text-xl transition-all duration-300"
          style={{
            filter:
              "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 3px rgba(255,255,255,0.2))",
          }}
        />
      </div>
      <p className="text-[#D5D5D5] text-sm sm:text-md">{text}</p>
    </div>
  );
}

const IconCard = ({ icon: Icon, link }) => {
  return (
    <div className="flex justify-center items-center text-[#D5D5D5] w-8  h-8 p-2  rounded-full bg-[#0E0E10] border border-[#868686] transition-all duration-300 hover:shadow-[0_0_10px_#ffffff50] hover:scale-105">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-xs sm:text-md"
         style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.1))",
                            }}
      >
        <Icon
          className="text-lg transition-all duration-300"
          style={{
            textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.4)",
          }}
        />
      </a>
    </div>
  );
};

// 👇 Default export
export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-auto p-2 sm:p-5">
      <p className="text-[#11DAD1] font-bold tracking-widest flex justify-center sm:justify-start">
        CONTACT ME
      </p>
      <h1 className="text-3xl text-center sm:text-4xl text-white font-extrabold flex justify-center sm:justify-start mb-4">
        GET IN TOUCH WITH ME
      </h1>
      <p className="text-white text-center">
        I’m currently open to full-time opportunities, freelance work, or developer roles
        where I can contribute and grow.
      </p>

      <div className="flex flex-col sm:flex-row justify-center  items-center gap-1 sm:gap-4 w-full h-auto">
        <ContactInfoCard Icon={MdOutlineMail} text="khutsomakunyane1@gmail.com" />
        <ContactInfoCard Icon={MdOutlineLocalPhone} text="064 857 1755" />
        <ContactInfoCard Icon={MdOutlineLocationOn} text="South Africa, Pretoria" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full bg-[#0E0E10] px-4 py-2 rounded-md">

            <footer className="w-auto text-center py-4  text-[#868686] text-sm">
             © {new Date().getFullYear()} K Makunyane. All Rights Reserved.
          </footer>

        <div className="flex items-center justify-center  w-auto  h-auto gap-3 sm:gap-2 p-2 mt-1.5 ">
            <IconCard icon={FaGithub} link="https://github.com/khutso-student" />
            <IconCard icon={FaLinkedinIn } link="https://www.linkedin.com/in/khutso-makunyane-5353b1329" />
            <IconCard icon={FaFacebookF} link="https://www.facebook.com/khutso.makunyane.2025/" />
            <IconCard icon={FaInstagram} link="https://www.instagram.com/mern_engineer" />
        </div>

      </div>


    </div>
  );
}
