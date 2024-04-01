import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const SocialLinks = () => {
  return (
    <section className='fixed top-[33%] right-3 z-[50] max-sm:top-[3%] max-sm:right-[30px] max-sm:bg-black max-sm:p-2 max-sm:rounded-full'>
        <div className='w-[65px] h-[280px] border-2 border-neutral-600 rounded-full flex justify-evenly items-center flex-col max-sm:flex-row max-sm:w-[215px] max-sm:h-[45px] '>
            <div className='border-[1px] border-white rounded-full p-2 hover:bg-zinc-700 ease-in-out duration-200 transition-all'>
                <a href="https://github.com/SaranshBangar" target='_blank'>
                    <FaGithub className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px]' />
                </a>
            </div>
            <div className='border-[1px] border-white rounded-full p-2 hover:bg-zinc-700 ease-in-out duration-200 transition-all'>
                <a href="https://leetcode.com/SaranshBangar/" target='_blank'>
                    <SiLeetcode className='w-[22px] h-[22px] max-sm:w-[15px] max-sm:h-[15px]' />
                </a>
            </div>
            <div className='border-[1px] border-white rounded-full p-2 hover:bg-zinc-700 ease-in-out duration-200 transition-all'>
                <a href="https://auth.geeksforgeeks.org/user/saranshbangar" target='_blank'>
                    <SiGeeksforgeeks className='w-[22px] h-[22px] max-sm:w-[15px] max-sm:h-[15px]' />
                </a>
            </div>
            <div className='border-[1px] border-white rounded-full p-2 hover:bg-zinc-700 ease-in-out duration-200 transition-all'>
                <a href="https://www.linkedin.com/in/saransh-bangar/" target='_blank'>
                    <FaLinkedin className='w-[22px] h-[22px] max-sm:w-[15px] max-sm:h-[15px]' />
                </a>
            </div>
            <div className='border-[1px] border-white rounded-full p-2 hover:bg-zinc-700 ease-in-out duration-200 transition-all'>
                <a href="https://www.instagram.com/saransh.bangar?igsh=MTg4MnM2ODRhdnJ0MQ==" target='_blank'>
                    <FaInstagram className='w-[22px] h-[22px] max-sm:w-[15px] max-sm:h-[15px]' />
                </a>
            </div>
        </div>
    </section>
  )
}

export default SocialLinks