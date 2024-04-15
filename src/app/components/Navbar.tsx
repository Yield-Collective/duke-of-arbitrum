import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const NavBar = () => {
  return (
    <nav className="top-0 left-0 w-full bg-gray-800 text-white p-4 text-center relative z-10">
      <ul className="flex justify-around">
        <li><a href="#about" className="text-white-900 font-bold">About</a></li>
        <li><a href="#tokenomics" className="text-white-900 font-bold">Tokenomics</a></li>
        <li><a href="#community" className="text-white-900 font-bold">Community</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
