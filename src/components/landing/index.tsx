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

const Landing: React.FC = () => {
    return (
        <>
        <Navbar />
        <main>
        <TracingBeam className='px-7'>
        <div className='w-full flex items-center justify-center flex-col antialiased relative'>
        <Sparkles />
        <LampContainer className='section'>
        <TextGenerateEffect className='ml-20 md:ml-10' words='Oxygenate Your Offline Retail Journey' />
        </LampContainer>
        <HeroScroll />
        <StickyScrollReveal/>
        <Typewriter />
        </div>
        </TracingBeam>
        </main>
        
        </>
    );
};

export default Landing;