import React from 'react';
import Sparkles from '../ui/sparkles';
import  TextGenerateEffect from '../ui/text-generate';
import TracingBeam from '../ui/tracing-beam';
import HeroScroll from '../ui/container-scroll';
import Navbar from '../navbar/index';
import { LampContainer } from '../ui/lamp';
import StickyScrollReveal from '../ui/sticky-scroll';
import './index.css';
import Typewriter from '../ui/typewriter';
import ThreeDCard from '../ui/3dcard';
import pf1 from '../../assets/images/shivansh-verma.jpg';
import pf2 from '../../assets/images/tejas-mehta.jpg';

const Landing: React.FC = () => {
    return (
        <>
        <Navbar />
        <main>
        <TracingBeam className='px-7'>
        <div className='w-full flex items-center justify-center flex-col antialiased relative'>
        <a id='home'> <Sparkles /> </a>
        <LampContainer className='section'>
        <TextGenerateEffect className='md:ml-20 ml-10' words='Oxygenate Your Offline Retail Journey' />
        </LampContainer>
        <HeroScroll />
        <a id='about'><StickyScrollReveal/></a>
        <a id='team' className='flex flex-col md:flex-row mt-7'>
             <ThreeDCard title='Co-founder & CEO' image={pf2} description='Interested in building, selling and scaling solutions for Bharat’s CPG space since high school. Ex-cofounder of WhyQ(a kirana-tech solution). Brand-building/PR for luxury F&B brands @Beam&Words. Worked on e-commerce analytics @1digitalstack (developed an understanding of marketplaces). Computer Science Sophomore @Ashoka University.'/> 
             <ThreeDCard title='Co-founder & CTO' image={pf1} description='CS Freshman @ Ashoka University experienced in app development and system design since high school. Worked on several projects using JS and Python. Worked on social outreach and growth using tech for non-profits. Built a practice stock trading platform Testock (worked on integrating analytics and stock predictions) Interested in analytics and market optimization'/>
             </a>
        <a id='contact'><Typewriter /></a>
        
        </div>
        </TracingBeam>
        </main>
        
        </>
    );
};

export default Landing;