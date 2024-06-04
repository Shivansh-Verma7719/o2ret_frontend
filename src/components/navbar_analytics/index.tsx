import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { ReactComponent as HomeSimpleDoor } from "../../assets/icons/home-simple-door.svg"; /* icon added */
import collapsedLogo from "../../assets/images/image.png";
import './navbar_analytics.css';

interface MenuItem {
  title: string;
  mapNo: number;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

interface bottomMenuItems {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Main Map', mapNo: 0, icon: HomeSimpleDoor },
  { title: 'Heatmap 1', mapNo: 1, icon: HomeSimpleDoor },
  { title: 'Heatmap 2', mapNo: 2, icon: HomeSimpleDoor },
];

const bottomMenuItems: bottomMenuItems[] = [
  { title: 'Home', link: '/', icon: HomeSimpleDoor },
];

const Navbar: React.FC<{
  handleMapChange: (mapNumber: number) => void;
  }> = ({ handleMapChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  }, []);

    const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <div className="menu-link">
          <item.icon className="menu-icon large" />
          <button onClick={() => handleMapChange(item.mapNo)}><span className="menu-text">{item.title}</span></button>
        </div>
      </li>
    ));
  };

  const renderBottomMenuItems = (items: bottomMenuItems[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <Link to={item.link} className="menu-link">
          <item.icon className="menu-icon large" />
          <button onClick={() => handleMapChange(1)}><span className="menu-text">{item.title}</span></button>
        </Link>
      </li>
    ));
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'expanded' : 'collapsed'}`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <div className="sidebar">
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
          {renderBottomMenuItems(bottomMenuItems)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
