import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({img, title, description, techno, live, repo}) => {
    return (
        <div data-aos="fade-right" className=' md:h-[400px] h-[250px] rounded-lg group relative overflow-hidden shadow-lg  shadow-orange-600  duration-500 hover:shadow-none'>
            <Image src={img} width={500} height={500} alt='project' className='w-full h-full absolute rounded-lg bg-contain'/>
            <div className='relative w-full h-full bg-orange-600/90 rounded-lg opacity-0 group-hover:opacity-100 text-white duration-700 2xl:p-10 md:p-5 p-3 flex flex-col justify-center  '>
                <h2 className='text-white font-bold md:text-3xl text-base'>Priject Name: {title}.</h2>
                <p className='text-white underline md:mt-10 text-[14px]'>Overview</p>
                <p className=' text-white text-[10px] md:text-lg'>{description}</p>
                <h2 className='md:mt-10 mt-2 md:text-xl font-semibold text-[11px]'>Used Technology: {techno}</h2>
                <div className='grid md:grid-cols-2 md:gap-10 md:mt-5 mt-2 text-black gap-2'>
                    <Link href={live} target='blank'><button className='bg-white text-light md:py-2 md:text-2xl font-bold rounded md:rounded-lg w-full h-full hover:bg-gray-900 hover:text-white hover:scale-105 duration-500'>Live</button></Link>
                    <Link href={repo} target='blank'><button className='bg-white text-light md:py-2 md:text-2xl font-bold rounded md:rounded-lg w-full h-full hover:bg-gray-900 hover:text-white hover:scale-105 duration-500'>Repository</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;