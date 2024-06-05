import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { ReactComponent as HomeSimpleDoor } from "../../assets/icons/home-simple-door.svg"; // icon added
import collapsedLogo from "../../assets/images/image.png";
import './navbar_analytics.css';

interface MenuItem {
  title: string;
  mapNo: number;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

interface BottomMenuItem {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Main Map', mapNo: 0, icon: HomeSimpleDoor },
  { title: 'Heatmap 1', mapNo: 1, icon: HomeSimpleDoor },
  { title: 'Heatmap 2', mapNo: 2, icon: HomeSimpleDoor },
];

const bottomMenuItems: BottomMenuItem[] = [
  { title: 'Home', link: '/', icon: HomeSimpleDoor },
];

const Navbar: React.FC<{ handleMapChange: (mapNumber: number) => void }> = ({ handleMapChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <div className="menu-link">
          <item.icon className="menu-icon large" />
          <span className={`menu-text ${isOpen ? 'visible' : 'hidden'}`}>{item.title}</span>
          <button onClick={() => handleMapChange(item.mapNo)}></button>
        </div>
      </li>
    ));
  };

  const renderBottomMenuItems = (items: BottomMenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        <Link to={item.link} className="menu-link">
          <item.icon className="menu-icon large" />
          <span className={`menu-text ${isOpen ? 'visible' : 'hidden'}`}>{item.title}</span>
        </Link>
      </li>
    ));
  };

  return (
    <div
      className={`sidebar-container ${isOpen ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
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
