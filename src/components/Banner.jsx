import React from 'react';
import bannerimg from '/hero.png';
import Trust from './Trust';

const Banner = () => {
    return (
        <div className="mt-12 px-0 md:px-0 lg:px-0">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    We Build <br /> 
                    <span className="text-[#632EE3]">Productive</span> Apps
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                    <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <img 
                    src={bannerimg} 
                    alt="Banner" 
                    className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl object-contain"
                />
            </div>
            <Trust />
        </div>
    );
};

export default Banner;
