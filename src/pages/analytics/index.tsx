// TODO: Create Analytics Page
import React from 'react';
import Navbar from '../../components/navbar_analytics/index';
import './index.css';

// Follow a 95-5 rule for the map and the navbar use the map as the main component and the navbar as a sidebar
// Implement the Navbar component in the components directory first according to the figma design

const AnalyticsPage: React.FC = () => {
    return (
        <div className="analytics-page">
            <Navbar />
            {/* iframe link to the map below for reference if needed for design */}
            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1-X2hHZ7X_pai2ETudwiUxlK_CfLhT4s&ehbc=2E312F"></iframe> */}
        </div>
    );
};

export default AnalyticsPage;