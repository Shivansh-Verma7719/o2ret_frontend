import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { ReactComponent as HomeSimpleDoor } from "../../assets/icons/home-simple-door.svg";
import { ReactComponent as GraphArrow } from "../../assets/icons/Graph-Arrow-Increase--Streamline-Core.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";
import collapsedLogo from "../../assets/images/image.png";
import SelfSpaceTable from '../selfSpace/SelfSpaceTable'; // Import the new component
import '../distributor/dashboard_distributor.css';

interface MenuItem {
  title: string;
  link?: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Upcoming', link: " ", icon: HomeSimpleDoor },
  { title: 'Brands', link: " ", icon: MenuIcon },
  { title: 'Self Space', link: " ", icon: GraphArrow },
  { title: 'Sales Reporting', link: " ", icon: GraphArrow },
];

const bottomMenuItems: MenuItem[] = [
  { title: 'Profile', link: ' ', icon: SettingIcon },
];

const Navbar: React.FC<{ onMenuItemClick: (title: string) => void }> = ({ onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (title: string) => {
    onMenuItemClick(title);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className="menu-item" onClick={() => handleMenuClick(item.title)}>
        <div className="menu-link">
          <item.icon className="menu-icon large" />
          <span className={`menu-text ${isOpen ? 'visible' : 'hidden'}`}>{item.title}</span>
        </div>
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

const Distributor: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Brands');
  const [showPopup, setShowPopup] = useState(false);
  const selectedStore = {
    name: "Sample Store",
    address: "123 Sample St, Sample City, SC",
    phone: "123-456-7890"
  }; // Example store details

  const handleSendSamplesClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const renderFullStoreDetails = () => (
    <div className="full-store-details">
     
      <div id='customer-card'>
        <div className="custom-store-detail-card">
          <div className="store-name-custom"></div>
          <h3>{selectedStore.name}</h3>
          <div className="custom-store-logos">
            <div className="custom-store-logo"></div>
            <div className="custom-store-logo"></div>
            <div className="custom-store-logo"></div>
          </div>
          <div className="custom-store-info">
            <p>Address: {selectedStore.address}</p>
            <p>Phone: {selectedStore.phone}</p>
            <p>Shelf Space: --------------------</p>
            <p>Line Of Credit: -----------------</p>
            <p>Avg Product Price Range: --------</p>
            <p>Ticket Size: ---------------------</p>
            <p>Product Category: ---------------</p>
            <button className="custom-button" onClick={handleSendSamplesClick}>Send the Samples</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPopup = () => (
    <div className="popup-overlay">
      <div className="popup">
        <p>The samples have to be shipped to the xyz address.</p>
        <button onClick={() => navigator.clipboard.writeText('xyz address')}>Copy the address</button>
        <button onClick={handleClosePopup}>Continue</button>
      </div>
    </div>
  );

  const brandItems = [
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
    { name: "Brand Name", about: "About ------------------------------------------", shelfSpace: "Shelf Space text", loc: "LOC text" },
  ];

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'Upcoming':
      case 'Brands':
        return (
          <div className="brand-cards-container">
            {brandItems.map((brand, index) => (
              <div key={index} className="brand-card">
                <div className="brand-header">
                  <div className="brand-icon"></div>
                  <div className="brand-name">{brand.name}</div>
                </div>
                <div className="brand-details">
                  <p>{brand.about}</p>
                  <p>Samples are sent in {brand.shelfSpace}</p>
                  <p>{brand.loc}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Self Space':
        return <SelfSpaceTable />; // Render the table component
      case 'Sales Reporting':
        return renderFullStoreDetails(); // Render the full store details
      case 'Profile':
        return <div>Profile Content</div>;
      case 'Home':
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="dashboard">
      <Navbar onMenuItemClick={(title) => setSelectedMenuItem(title)} />
      <main className="main-content">
        <header className="header">
          <div className="menu-text-active">{selectedMenuItem}</div>
          <div className="brand-info">
            <div className="brand-name">Brand Name</div>
            <div className="profile-icon">
              <i className="icon-profile-circle"></i>
            </div>
          </div>
        </header>
        {renderContent()}
        {showPopup && renderPopup()}
      </main>
    </div>
  );
};

export default Distributor;
