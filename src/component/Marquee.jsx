import { TbDeviceDesktopCode } from "react-icons/tb"; // full stack icon
import { LiaLaptopCodeSolid } from "react-icons/lia"; // front-end icon
import { PiCodeBold, PiCodepenLogoLight } from "react-icons/pi"; // backend + database icons
import { SiAntdesign } from "react-icons/si"; // ux/ui design icon

export default function Marquee() {
  return (
    <>
      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          .marquee-item {
            display: flex;
            align-items: center;
            gap: 10px;
           
            background: #0e0e10;
           
            border-radius: 12px;
            margin-right: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(17, 218, 209, 0.05);
          }

          .marquee-item:hover {
            transform: scale(1.08);
            box-shadow: 0 0 12px rgba(17, 218, 209, 0.3);
          }
        `}
      </style>

      <div className="relative overflow-hidden w-full p-4  ">
        <div className="marquee">
          {/* Duplicate content twice for infinite loop */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center">
              {/* Full Stack */}
             <div className="flex justify-center items-center gap-5 mr-4 text-white p-4">
                <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                    <TbDeviceDesktopCode
                    className="text-2xl text-white"
                    style={{
                        filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.8))",
                    }}
                    />
                </div>

                <p className="font-semibold">Full Stack Developer</p>
                </div>


              {/* Front-End */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <LiaLaptopCodeSolid
                        className="text-2xl text-white"
                        style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Back-End Developer</p>
              </div>

              {/* Back-End */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <PiCodeBold
                        className="text-2xl text-white"
                          style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Front-End Developer</p>
              </div>

              {/* Database */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <PiCodepenLogoLight
                        className="text-2xl text-white"
                         style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Database Design</p>
              </div>

              {/* UX/UI Design */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <SiAntdesign
                        className="text-2xl text-white"
                        style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">UX/UI Designer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
