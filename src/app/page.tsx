import Image from "next/image";
import Link from 'next/link';
import styles from "./Home.module.css";
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ConnectButton } from "@/app/thirdweb";
import { client } from "./client";
import duke from "@public/duke.svg";
import uniswap from "@public/uniswap_logo_pink.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: "#28A0F0" }}>
      <Navbar />
      <header className="p-4 flex flex-col md:flex-row justify-center items-center relative z-10 pt-16">
        <div className="flex items-center">
          <a href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitrum">
            <Image
              src={uniswap}
              alt="Uniswap"
              className="w-40 h-40 mb-1"
              style={{
                filter: "drop-shadow(0px 0px 24px #F50DB4)",
              }}
            />
          </a>
          <a href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitrum" style={{ color: '#ffffff' }} className="text-2xl font-bold ml-2">Buy Now</a>
        </div>
      </header>
      <main className="flex-grow p-4 pb-10 relative z-10 flex">
        <div className="container max-w-screen-lg mx-auto">
          <div className="py-20">
            <Header />
            <div className="flex justify-center mb-20">
              <ConnectButton
                client={client}
                appMetadata={{
                  name: "Duke of Arbitrum",
                  url: "https://dukeofarbitrum.com",
                }}
              />
            </div>
            <ThirdwebResources />
          </div>
        </div>
      </main>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={duke}
          alt="Duke Background"
          layout="fixed"
          width={540}
          height={540} 
          style={{ opacity: 0.6 }} 
        />
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center relative z-10">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://x.com/dukeofarbitrum" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
          </a>
          <a href="https://t.me/+L1dTzvPXOw9hOGIx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
          </a>
        </div>
        
        <a href="https://arbiscan.io/token/0xee095Eb6354473E4066054c5B06c82E99fa2b96e" target="_blank" rel="noopener noreferrer">
          CA: 0xee095Eb6354473E4066054c5B06c82E99fa2b96e  <br />
          View DUKE contract on Arbiscan
        </a>
        <p>
        --------------------------------- <br />  
        Contact the team: team@dukeofarbitrum.com  <br />
        © 2024 Duke of Arbitrum</p>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-4 md:mb-20 relative z-10">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-2 md:mb-6 text-zinc-100">
        <span className="inline-block -skew-x-6 text-white-900"> Duke of Arbitrum </span>
      </h1>
      <div>
    </div>
  </header>
  );
}


<div className="bg-blue-900 text-white text-center py-4">
  <Link href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitrum">
    <a target="_blank" rel="noopener noreferrer">
    <Image src="@/public/uniswap_logo_pink.svg" alt="Uniswap" />
      <p>Buy on Uniswap</p>
    </a>
  </Link>
</div>

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center items-center text-center">
      <ArticleCard
        title="About Duke of Arbitrum"
        href="https://x.com/dukeofarbitrum"
        description="Learn more about how the DUKE token can solve funding for helping dogs."
      />

      <ArticleCard
        title="Buy DUKE"
        href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitru"
        description="Head to Uniswap to get your pawwwwwws on some DUKE tokens!"
      />

      <ArticleCard
        title="Contract Details"
        href="https://arbiscan.io/token/0xee095Eb6354473E4066054c5B06c82E99fa2b96e"
        description="Contract ownership renounced, liquidity locked, 10,000,000,000 total supply."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex flex-col justify-center items-center text-center border border-zinc-800 p-4 rounded-lg transition-colors"
      style={{ backgroundColor: "#1F2937", borderColor: "#374151" }}
    >
      <article>
        <h2 className="text-lg font-semibold mb-2 text-white">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}