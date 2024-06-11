import React ,{useEffect, useState}from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';
import logo1 from '../assets/logo-white.png';
const Navbar = () => {

  const [active, setActive] = useState("");
  return (
    <nav className={`
    ${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20 bg-primary `}>
      
    <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
      <Link to="/" className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}>
      <img src={logo1} alt="logo" style={{ width: '40px', height: '40px' }} />
      <p className="text-[18px] font-bold cursor-pointer text-white">Himasha<span className='hidden sm:block'> | Undergraduate</span></p>

      </Link>
      </div>
    </nav>
  );
};

export default Navbar;