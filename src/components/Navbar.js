import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>{navbarOpen ? <MdClose className="menu-close" /> : <FiMenu className="menu-open" />}</button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => <NavLink to={link.path} activeClassName="active-link" key={link.id} onClick={closeMenu} exact>{link.text}</NavLink>)}
      </ul>
    </nav>
  );
};
export default Navbar;
