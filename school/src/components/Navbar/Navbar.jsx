import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';
import { navLinks } from '../../Data';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsEnvelope
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  const isDesktop = window.innerWidth > 1024;

  return (
    <div className={`${active ? "shadow-lg bg-Solitude" : ""} fixed w-full top-0 left-0 z-20`}>
      <div className={`bg-Teal p-0.03 ${isDesktop ? 'py-4' : 'py-2'}`}>
        <div className={`${active ? "py-2 transition-all duration-300" : "py-4"}
          container mx-auto flex items-center justify-between px-2`}>
          <div className='flex items-center gap-5'>
            <HiMenu className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)} />
            {isDesktop && <img src="/logo.png" alt="Logo" className="h-12 w-auto cursor-pointer" />}
          </div>

          <div className='sm:flex items-center hidden'>
            {navLinks.map(navLink => {
              return <NavLink key={navLink.id} {...navLink} />
            })}
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/ManaratKenya/" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/misk.manarat/" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/manarat_misk" className="hover:scale-110 text-xl">
              <FaXTwitter />
            </a>
            <a href="https://wa.me/254795058718" className="hover:scale-110 text-xl">
              <BsWhatsapp />
            </a>
            <a href="mailto:manarat.misk@gmail.com" className="hover:scale-110 text-xl">
              <BsEnvelope />
            </a>
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white 
              flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
              {navLinks.map((navLink) => {
                return <MobileNavLink key={navLink.id} {...navLink} setToggle={setToggle} />;
              })}
              <HiX className='absolute right-12 top-12 text-3xl cursor pointer'
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Navbar;
