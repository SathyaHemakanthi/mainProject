import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
//import {Link} from 'react-router-dom';

function Header() {
    return (
      <>
      <div className='hed'>
          <h1>i-Growth</h1>
      </div>
          <div className='hed2'>
            <h2>Monitor Baby Growth & Suggest Advice</h2>
           <div className='btn_gap'>
           
            <button type="button" className="btn btn-light">Profile</button>
            <Link to ='/Logout' className="logout">
            <button type="button" className="btn btn-light ">Log out</button>
            </Link>
           </div> 
           <div className='my'></div>
           </div>
        </>
           
    );
  }
  
  export default Header;
  