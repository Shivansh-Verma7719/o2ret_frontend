import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import './navbar_analytics.css';

/**
  *Task: Navbar Component
  * 
  * Description: Create a navbar component for the analytics page. The navbar should follow the figma design.
**/

interface MenuItem {
  title: string;
  link: string;
}

const topMenuItems: MenuItem[] = [
  { title: 'Home', link: '/' },
  { title: 'Home', link: '' },
  { title: 'Home', link: '' },
  { title: 'Home', link: '' },
  { title: 'Home', link: ''}
];

const bottomMenuItems: MenuItem[] = [
  { title: 'Home', link: '' },
  { title: 'Home', link:'' },
  { title: 'Home', link: '' }
];

const Navbar: React.FC = () => {
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index}>
        <Link to={item.link}>{item.title}</Link>
      </li>
    ));
  };

  return (
    <div className='navbar-analytics-container'>
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      
      <div className="border-nav"></div>

      <ul className="menu">
        {renderMenuItems(topMenuItems)}
      </ul>
      
      <ul className="menu-bottom">
      <div className="border-nav"></div>
        {renderMenuItems(bottomMenuItems)}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
