import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { SparklesCore } from './ui/Sparkles'

const Header = () => {
  return (
    <>
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md max-sm:h-[360px]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <>
                <h1 className="text-5xl max-sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-10">
                    <span>Saransh</span>
                    <span>Bangar</span>
                </h1>
                <div className="w-[90%] h-24 relative z-[0]">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </>
            <div className='flex justify-center items-center'>
                <p className='text-center font-serif text-xl max-sm:text-sm w-[75%]'>
                    A second-year B.Tech. student majoring in Software Engineering at SRM Institute of Science and Technology, Chennai
                </p>
            </div>
        </div>
    </>
  )
}

export default Header