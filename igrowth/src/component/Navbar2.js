import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar2() {
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
          <Link to='/midwife/Measure' className='nav-item'>Monthly Measurement</Link>
          <Link to='/midwife/Baby_Detail' className='nav-item'>Details of Babies</Link>
          <Link to='/midwife/Vacc_Detail' className='nav-item'>Vaccination Details</Link>
          <Link to='/midwife/Consult_Advices' className='nav-item'>Consultation Advices</Link>
          <Link to='/midwife/Marke_Activity' className='nav-item'>Marked Activities</Link>
          <Link to='/midwife/Create_Account' className='nav-item'>Create Account</Link>
          
        </>
      )}
    </div>
  );
}

export default Navbar2;
