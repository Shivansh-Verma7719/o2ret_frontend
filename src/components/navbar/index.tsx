import { useState, useEffect } from 'react'
import  styles from './index.module.css';
import Logo from '../../assets/images/logo.png';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 7;
      setIsSticky(isScrolled);
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null; // Cleanup function
    };
  }, []);
  // ${scroll ? styles.sticky : ""}
  return (
    <div className="App" style={{ zIndex: 1000 }}>
      <header className="App-header">
        <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
          <a href='/' className={`${styles.logo}`}><img src={Logo} alt="Logo" width={200}/> </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#about' className={`${styles.navLink}`}>About us</a>
            </li>
            <li onClick={removeActive}>
              <a href='#team' className={`${styles.navLink}`}>Our Team</a>
            </li> 
            <li onClick={removeActive}>
              <a href='#contact' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
