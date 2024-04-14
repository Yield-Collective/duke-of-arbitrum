import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-4 z-50">
      <ul className="flex justify-around">
        <li><a href="#about" className="text-blue-900 font-bold">About</a></li>
        <li><a href="#tokenomics" className="text-blue-900 font-bold">Tokenomics</a></li>
        <li><a href="#community" className="text-blue-900 font-bold">Community</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;