import React from 'react';
import Project from './project-card';
const Projects = () => {
    return (
        <div className=' py-[100px] container'>
            <h1 data-aos="fade-down" className='text-3xl font-semibold text-center decoration-wavy underline tracking-[3px] '>My Projects</h1>
            <div className='grid lg:grid-cols-2 gap-10  mt-10'>
                <Project img={'/img/portfolio.png'} title='My Portfolio' description='Assalamu Alaikum I am Md. Nijam Hussen, This is my portfolio. This site has been created using html , tailwindcss, next js. You will find all my information on this website. ' techno='HTML5, Tailwind Css, Next js' live='https://nijam-hossen.vercel.app/' repo='https://github.com/NH-Nijam/NijamHossen' />
                <Project img={'/img/foodblogger.png'} title='Food Blogger' description='Assalamu Alaikum I am Md. Nijam Hussen, This is my Food Blogger website. This site has been created using html , tailwindcss, next js, Firebase etc. You will find all foods information on this website.' techno='HTML5, Tailwind Css, Next js, Firebase' live='https://food-blogger-lejr.vercel.app/' repo='https://github.com/NH-Nijam/Food-Blogger' />
                <Project img={'/img/soptosi.png'} title='Saptarshi Vidyapeeth' description='Assalamu Alaikum I am Md. Nijam Hussen, This is a Coaching Centre website. This site has been created using html , tailwindcss, reactjs and firebase . You will find this information for Coaching Centre website.' techno='HTML5, Tailwind Css, React js, Firebase' live='https://coruscating-otter-50d003.netlify.app/' repo='https://github.com/NH-Nijam/shaptorshibiddya' />              
            </div>
        </div>
    );
};

export default Projects;