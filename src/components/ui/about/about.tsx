import React from 'react';
import './about.css';

import keyImage from '../../../assets/images/key.png';
import pinMapImage from '../../../assets/images/pin-map.png';
import magnetImage from '../../../assets/images/magnet.png';
import shopImage from '../../../assets/images/shop.png';
import RevealOnScroll from '../reveal-scroll';



function about() {
  return (
    <div className="container1">
        <RevealOnScroll>
      <div className="about-section">
      <img src={keyImage} className='image' alt="Key Icon"/> 

      <div className='about-text'>
        <h1>Discover our Solutions</h1>
        <p>A GIS-based location analytics product for established enterprises to visualize/analyze their offline retail ops. Marketplace for shelf-space/distributorships for digitally native product-first D2C brands in their O2O (Online-to-Offline) journey.</p>
        </div>
        </div>
        </RevealOnScroll>
        <RevealOnScroll>
        <div className="about-section">
        <div className='about-text2 py-10 md:py-0'>
        <h2>Location Analytics</h2>
        <p>Get pincode level Analysis for market sizing, market penetration, product awareness, availability in A+ stores/Q-commerce, E-commerce sales, Expansion Scoring, and In-pincode analytics based on latitude/longitude.</p>
        </div>
        <img src={pinMapImage} className='image' alt="Location Pin on Map" />
      </div>
        </RevealOnScroll>
        <RevealOnScroll>
      <div className="about-section">
      <img src={magnetImage} className='image' alt="Magnet"/> 

      <div className='about-text py-10 md:py-0'>
        <h1>Shelf-Space Acquisition and Curation</h1>
        <p>At Modern Trade/A+ Stores/HoReCa outlets/gyms/mall pop-ups/salons etc. Helps get offline brand discovery thus aiding in purchase intent on marketplaces (reducing your CAC/Retention Costs on Marketplaces and getting traffic to your websites) Also, it’s your entry into ~95% of India’s retail market</p>
        </div>
        </div>
        </RevealOnScroll>
        <RevealOnScroll>
        <div className="about-section">
        <div className='about-text2 py-10 md:py-0'>
        <h2>Distributor Aggregation</h2>
        <p>Distributor aggregation for reaching value-seeking audiences and ensuring repetitive purchases (retention). Helps push products to general trade and other sales channels to reach target consumers. Onboarding distributors/retailers on ONDC.</p>
        </div>
        <img src={shopImage} className='image' alt="Shop" />
      </div>
        </RevealOnScroll>

    </div>
  );
}

export default about;
