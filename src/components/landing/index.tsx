import React from 'react';
import Sparkles from '../ui/sparkles';
import  TextGenerateEffect from '../ui/text-generate';
import TracingBeam from '../ui/tracing-beam'; 

const Landing: React.FC = () => {
    return (
        <>
        <TracingBeam className='px-6'>
        <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
        <Sparkles />
        <TextGenerateEffect words='Level up your distributer management with O2RET.' />
        </div>
        </TracingBeam>
        
        </>
    );
};

export default Landing;