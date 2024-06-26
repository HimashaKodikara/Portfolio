import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import logo1 from '../assets/logo-white.png';
const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
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
          <p className="text-[18px] font-bold cursor-pointer text-white flex">Himasha &nbsp;
            <span className='hidden sm:block'> | Undergraduate</span></p>

        </Link>
        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-end flex-1 sm:hidden rounded-xl'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer ' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='flex-col items-start gap-4 list-none flex-justify-end'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"}
          font-poppins font-medium cursor-pointer text-[16px]
          `}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);}}
            >
              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}
        </ul>
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;