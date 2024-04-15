import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center relative z-10">
    <div className="flex justify-center gap-4 mb-4">
      <a href="https://x.com/dukeofarbitrum" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a href="https://t.me/+L1dTzvPXOw9hOGIx" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
      </a>
    </div>
    <p>CA: 0xee095Eb6354473E4066054c5B06c82E99fa2b96e</p>
    <a href="https://arbiscan.io/token/0xee095Eb6354473E4066054c5B06c82E99fa2b96e" target="_blank" rel="noopener noreferrer">
      View DUKE contract on Arbiscan <br />
      Contact the team: team@dukeofarbitrum.com
    </a>
  </footer>
  );
};

export default Footer;