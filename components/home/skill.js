import React from 'react';


// import tailwind from 
// import bootstrap from 
// import react from 
// import next from 
// import animation from 
// import nodejs from 
// import express from 
// import github from 
// import mongodb from 
// import firebase from 
import SkillCard from './skill-card';

const Skill = () => {
    return (
        <div className='container pt-[100px]'>
            <h1 data-aos="fade-down" className='text-3xl font-semibold text-center decoration-wavy underline tracking-[3px]'>My Skills</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6  mt-10 relative w-full'>
                <SkillCard name='HTML' icons ={'/icons/html.png'}/>
                <SkillCard name='CSS' icons ={'/icons/css.png'}/>
                <SkillCard name='JAVASCRIPT' icons ={'/icons/java.png'}/>
                <SkillCard name='TAILWIND CSS' icons ={'/icons/tailwind.png'}/>
                <SkillCard name='BOOTSTRAP' icons ={'/icons/bootstrap.png'}/>
                <SkillCard name='REACT JS' icons ={'/icons/reactjs.png'}/>
                <SkillCard name='NEXT JS' icons ={'/icons/next.png'}/>
                <SkillCard name='FRAMER MOTION' icons ={'/icons/framermotion.png'}/>
                <SkillCard name='NODE JS' icons ={'/icons/nodejs.png'}/>
                <SkillCard name='EXPRESS' icons ={'/icons/express.png'}/>                
                <SkillCard name='MONGODB' icons ={'/icons/github.png'}/>
                <SkillCard name='GITHUB' icons ={'/icons/mongodb.png'}/>
                <SkillCard name='FIRE BASE' icons ={'/icons/firebase.png'}/>
            </div>
        </div>
    );
};

export default Skill;