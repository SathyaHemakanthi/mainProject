import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavItems, setShowNavItems] = useState(window.innerWidth >= 900);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  // Add an event listener to update showNavItems when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setShowNavItems(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }; 
   }, []);

  return (
    <div className='navbar'>
      <div className='nav_toggler' onClick={toggleNavItems}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      {showNavItems && (
        <>
          <Link to='/parent/news' className='nav-item'>News Feed</Link>
          <Link to='/parent/growth' className='nav-item'>Growth Tracker</Link>
          <Link to='/parent/develop' className='nav-item'>Development Tracker</Link>
          <Link to='/parent/vaccination' className='nav-item'>Vaccination Tracker</Link>
          <Link to='/parent/health' className='nav-item'>Health Tips</Link>
          <Link to='/parent/consultation' className='nav-item'>Consultations</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
