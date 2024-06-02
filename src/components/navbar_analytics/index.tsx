import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { ReactComponent as HomeSimpleDoor } from "../../assets/icons/home-simple-door.svg"; /* icon added */
import './navbar_analytics.css';

interface MenuItem {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Home', link: '/', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor }
];

const bottomMenuItems: MenuItem[] = [
  { title: 'Home', link: '', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor },
  { title: 'Home', link: '', icon: HomeSimpleDoor }
];

const Navbar: React.FC = () => {
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
        <Link to={item.link} className="menu-link">
          <item.icon className="menu-icon large" />
          <span className="menu-text">{item.title}</span>
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
          <img src={logo} alt="Logo" className={`logo`} />
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
