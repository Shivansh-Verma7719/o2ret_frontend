import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { ReactComponent as HomeSimpleDoor } from "../../assets/icons/home-simple-door.svg";
import { ReactComponent as GraphArrow } from "../../assets/icons/Graph-Arrow-Increase--Streamline-Core.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import image1 from "../../assets/images/Frame 443.png";
import image2 from "../../assets/images/Frame 442.png";
import image3 from "../../assets/images/Frame 441.png";
import image4 from "../../assets/images/Frame 440.png";

import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";
import collapsedLogo from "../../assets/images/image.png";
import './dashboard.css';

interface MenuItem {
  title: string;
  link?: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Home', link: " ", icon: HomeSimpleDoor },
  { title: 'List', link: " ", icon: MenuIcon },
  { title: 'Dashboard', link: " ", icon: GraphArrow },
];

const bottomMenuItems: MenuItem[] = [
  { title: 'Profile', link: ' ', icon: SettingIcon },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    console.log('Menu item clicked');
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item">
        {item.link ? (
          <Link to={item.link} className="menu-link">
            <item.icon className="menu-icon large" />
            <span className={`menu-text ${isOpen ? 'visible' : 'hidden'}`}>{item.title}</span>
          </Link>
        ) : (
          <div className="menu-link" onClick={handleMenuClick}>
            <item.icon className="menu-icon large" />
            <span className={`menu-text ${isOpen ? 'visible' : 'hidden'}`}>{item.title}</span>
          </div>
        )}
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
          {renderMenuItems(bottomMenuItems)}
        </ul>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [showFullStoreList, setShowFullStoreList] = useState(false);

  const summaryItems = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  const storeItems = [
    { name: "Store Name 1", address: "Address 1", phone: "+91 99999 00000" },
    { name: "Store Name 2", address: "Address 2", phone: "+91 99999 00000" },
    { name: "Store Name 3", address: "Address 3", phone: "+91 99999 00000" },
    { name: "Store Name 4", address: "Address 4", phone: "+91 99999 00000" },
    { name: "Store Name 5", address: "Address 5", phone: "+91 99999 00000" },
  ];

  const handleSeeMoreClick = () => {
    setShowFullStoreList(true);
  };

  const handleSeeMoreFullClick = () => {
    //  to handle next click
  }

  const renderMainContent = () => (
    <div>
      <header className="header">
        <div className="menu-text-active">Home</div>
        <div className="brand-info">
          <div className="brand-name">Brand Name</div>
          <div className="profile-icon">
            <i className="icon-profile-circle"></i>
          </div>
        </div>
      </header>
      <section className="overview">
        <div className="stats-card">
          <div className="stats">
            <span className="number">9,741</span>
            <span className="decrease">13.5% Decrease</span>
          </div>
          <div className="chart">
            <img src="/path-to-chart.png" alt="Chart" />
          </div>
        </div>
        <div className="summary-card-container">
          <h2>Summary</h2>
          <div className="summary-card">
            {summaryItems.map((item, index) => (
              <div className="summary-item" key={index}>
                <img src={item.image} alt={`summary-icon-${index}`} className="summary-icon" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="stores">
        <h2>List of Stores</h2>
        <div className="see-more">
          <a href="#" onClick={handleSeeMoreClick}>See More</a>
        </div>
        <div className="stores-list">
          {storeItems.slice(0, 3).map((store, index) => (
            <div className="store-card" key={index}>
              <div className="store-info">
                <div className="store-logo"></div>
                <div className="store-details">
                  <h3>{store.name}</h3>
                  <p>{store.address}</p>
                </div>
                <div className="store-phone">
                  <p>{store.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderFullStoreList = () => (
    <div className="full-store-list">
       <header className="header">
       <div className="menu-text-active">
          <form className="search-form">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          </div>
        <div className="brand-info">
          <div className="brand-name">Brand Name</div>
          <div className="profile-icon">
            <i className="icon-profile-circle"></i>
          </div>
        </div>
      </header>
      <div className="full-stores-list">
        {storeItems.map((store, index) => (
          <div className="full-store-card" key={index}>
            <div className="full-store-info">
              <div className="full-store-logo"></div>
              <div className="full-store-details">
                <h3>{store.name}</h3>
                <p>{store.address}</p>
              </div>
              <div className="full-store-phone">
                <p>{store.phone}</p>
              </div>
              <div className="full-store-see-more">
               <button><a href="#" onClick={handleSeeMoreFullClick}>see more</a></button> 
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <Navbar />
      <main className="main-content">
        {showFullStoreList ? renderFullStoreList() : renderMainContent()}
      </main>
    </div>
  );
};

export default Dashboard;
