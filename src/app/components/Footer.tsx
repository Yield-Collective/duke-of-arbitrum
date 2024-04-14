import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center relative z-10">
        <p>CA: 0xee095Eb6354473E4066054c5B06c82E99fa2b96e</p>
        <a href="https://arbiscan.io/token/0xee095Eb6354473E4066054c5B06c82E99fa2b96e" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
          View DUKE contract on Arbiscan <br />
          Contact the team: team@dukeofarbitrum.com
        </a>
      </footer>
  );
};

export default Footer;