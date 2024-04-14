import React from 'react';
import Footer from '../components/Footer';

const Tokenomics = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-blue-900">
      <h1>Tokenomics - we refer to them as Dukonomics someimtes - are as follows:
        Total Supply: 10,0000,000,000
        <br />
        Breakdown: 40% to liquidity, 30% to the BOOP community, 20% for growth and incentives, 10% for the team.
      </h1>
      <Footer />
    </div>
  );
};

export default Tokenomics;