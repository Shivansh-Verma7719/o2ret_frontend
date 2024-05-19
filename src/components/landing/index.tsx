import React from 'react';
import Navbar from '../navbar/index';
import './index.css';
import ThreeDCard from '../ui/3dcard';
import About from '../ui/about/about';
import Frame from '../ui/frame/FrameComponent3';
import pf1 from '../../assets/images/shivansh-verma.jpg';
import pf2 from '../../assets/images/tejas-mehta.jpg';
import Typewriter from '../ui/typewriter';
import Footer from '../footer/footer';

const Landing: React.FC = () => {
    return (
        <>
        <Navbar />
        <main className='margin-auto'>
        <Frame/>
        <a id="about">
        <About/>
        </a>
        <h1 className="text-black text-center text-6xl mt-5">Our Team</h1>
        <a id='team' className='flex flex-col md:flex-row mt-5 md:mt-0 justify-center'>
             <ThreeDCard name="Tejas Mehta" link="https://www.linkedin.com/in/tejas-mehta-064b9118b/" title='Co-founder & CEO' image={pf2} description='Interested in building, selling and scaling solutions for Bharat’s CPG space since high school. Ex-cofounder of WhyQ(a kirana-tech solution). Brand-building/PR for luxury F&B brands @Beam&Words. Worked on e-commerce analytics @1digitalstack (developed an understanding of marketplaces). Computer Science Sophomore @Ashoka University.'/> 
             <ThreeDCard name="Shivansh Verma" link="https://www.linkedin.com/in/shivanshvermao8/" title='Co-founder & CTO' image={pf1} description='CS Freshman @ Ashoka University experienced in app development and system design since high school. Worked on several projects using JS and Python. Worked on outreach and growth using tech for non-profits. Built a practice stock trading platform Testock (worked on integrating analytics and stock predictions) Interested in analytics and market optimization'/>
             </a>

        <a id='contact'><Typewriter /></a>
        <Footer/>
        </main>
        
        </>
    );
};

export default Landing;