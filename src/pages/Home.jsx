import { Typewriter } from 'react-simple-typewriter';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

import background from '../assets/background.png';
import PROFILE from '../assets/PROFILE.png'

import { GoHome } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBuildOutline } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";


export default function Main() {


const navButtonClass = (isActive) => `
  cursor-pointer transition-all duration-200 text-2xl
  ${isActive ? 'text-[#11DAD1] hover:text-[#fff]' : 'text-[#fff] hover:text-[#11DAD1]'}
`;

    const controls = useAnimation();
    const ref = useRef(null);

    const handleMouseEnter = () => {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 5,
          ease: 'linear',
        },
      });
    };

    const handleMouseLeave = () => {
      controls.stop(); // stops animation
      controls.set({ rotate: 0 }); // reset rotation
    };


    return(
    <main className="w-full h-screen bg-black ">
        <div className="relative flex flex-col justify-center items-center gap-4 w-full h-full px-1 sm:px-8 py-4"
        style={{ backgroundImage: `url(${background})` }}>
            <div className='fixed top-4 flex justify-center items-center w-full  mb-2'>
                <div className='flex justify-center items-center gap-5 w-70 sm:w-90 h-13 rounded-full bg-[#8686861e] border border-[#BDBDBD]'>
                    <a href="#" className={navButtonClass(true)}>
                    <GoHome />
                    </a>

                    <a href="#" className={navButtonClass(false)}>
                    <FaRegCircleUser />
                    </a>

                    <a href="#" className={navButtonClass(false)}>
                    <IoBuildOutline />
                    </a>

                    <a href="#" className={navButtonClass(false)}>
                    <RiApps2Line />
                    </a>

                    <a href="#" className={navButtonClass(false)}>
                    <LuPhone />
                    </a>
                </div>
            </div>

            <div className='flex justify-center items-center w-full h-auto p-4'>

                <motion.img src={PROFILE} alt="Profile" className='w-90'
                       ref={ref}
                                                    initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 2 }}
                      transition={{ delay: 0.6 }}
                
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={controls} />
            </div>

            <h1 className='text-2xl sm:text-6xl text-[#fff]'>
                KHUTSO <span className='text-[#11DAD1] font-bold'>MAKUNYANE</span>
            </h1>

            <h2 className='text-white text-xl sm:text-3xl'>
                 <Typewriter
                words={['Full Stack Software Developer', 'UX/UI Designer', 'Creative Dev']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={80}
                delaySpeed={1000}
            />
              
            </h2> 
        </div>
    </main>
    )
}