import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io"; 
import logo from "../../assets/images/logo.png";
import collapsedLogo from "../../assets/images/image.png"; 
import './navbar_analytics.css';

interface MenuItem {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Home', link: '/', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome }
];

const bottomMenuItems: MenuItem[] = [
  { title: 'Home', link: '', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome },
  { title: 'Home', link: '', icon: IoMdHome }
];

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  }, []);

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <Link to={item.link} className="menu-link">
          {!isOpen && <item.icon className="menu-icon large" />}
          {isOpen && <span className="menu-text">{item.title}</span>}
        </Link>
      </li>
    ));
  };

  return (
    <div className={`navbar-analytics-container ${isActive ? 'active' : ''}`}>
      <div 
        className={`sidebar ${isActive ? 'active' : ''} ${isOpen ? 'open' : 'collapsed'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo" className={`logo ${isOpen ? 'open' : 'hidden'}`} />
          <img src={collapsedLogo} alt="Collapsed Logo" className={`collapsed-logo ${isOpen ? 'hidden' : 'open'}`} />
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
