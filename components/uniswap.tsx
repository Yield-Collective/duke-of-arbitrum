import React from 'react';
import Image from 'next/image';
import uniswap from '../public/uniswap_logo_pink.svg'; 

const UniswapLink: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> {/* Adjust styling as needed */}
      <a href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitrum" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <Image
          src={uniswap}
          alt="Uniswap"
          width={80}  // For a fixed width equivalent to Tailwind's w-20
          height={80} // For a fixed height equivalent to Tailwind's h-20
          style={{
            filter: "drop-shadow(0px 0px 24px #F50DB4)"
          }}
        />
      </a>
    </div>
  );
}

export default UniswapLink;
