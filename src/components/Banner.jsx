import React from 'react';
import bannerimg from '/hero.png';
import Trust from './Trust';

const Banner = () => {
    return (
        <div className='mt-25'>
            <div className='flex flex-col items-center '>
                <h1 className='text-5xl font-bold text-center mb-4'>We Build <br /> <span className='text-[#632EE3]'>Productive</span>  Apps</h1>
                <p className='text-gray-400 text-center mb-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <img src={bannerimg} alt="Banner" />
            </div>
            <Trust/>
        </div>
    );
};

export default Banner;