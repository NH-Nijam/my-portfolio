'use client'
import React from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from '@/components/home/hero';
import Skill from '@/components/home/skill';
import Projects from '@/components/home/project';
import ContactPage from '@/components/home/contact';
const Home = () => {
  return (
    <ReactLenis root >
      <div>
        <div className='container sticky top-0'>
          <Hero />
        </div>
        <section className="bg-gray-800 h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden"> 
         <Skill />
        </section>
        <section className="text-white  w-full bg-slate-950 sticky top-0">
         <Projects />
        </section>
        <section className="text-white bg-gray-800 w-full sticky top-0">
         <ContactPage />
        </section>
      </div>
    </ReactLenis>
  );
};

export default Home;