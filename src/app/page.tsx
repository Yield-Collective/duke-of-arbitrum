import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import { client } from "./client";
import duke from "@public/duke.svg";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import NavBar from './components/Navbar';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: "#28A0F0" }}>
      {/* Content */}
    <NavBar />
    <header className="p-4 flex justify-center items-center relative z-10 pt-16">
  <a href="/">
    <Image
      src={duke}
      alt=""
      className="w-20 h-20"
      style={{
        filter: "drop-shadow(0px 0px 24px #96BEDC)",
      }}
    />
  </a>
  <a href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitrum" className="text-black-900 text-lg font-semibold">Buy Now</a>
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

      {/* Background overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={duke}
          alt="Duke Background"
          layout="fixed"
          width={540}
          height={540} 
          style={{ opacity: 0.7 }} 
        />
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center relative z-10">
        <p>CA: 0xee095Eb6354473E4066054c5B06c82E99fa2b96e</p>
        <a href="https://arbiscan.io/token/0xee095Eb6354473E4066054c5B06c82E99fa2b96e" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
          View DUKE contract on Arbiscan <br />
          Contact the team: team@dukeofarbitrum.com
        </a>
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

      <p className="text-white-800 text-3xl md:text-4xl mb-8">
        Connect your wallet to get started.
      </p>
      <div>
    </div>
  </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center items-center text-center">
      <ArticleCard
        title="About"
        href="https://x.com/dukeofarbitrum"
        description="Learn more about the onchain culture coin DUKE and what it is all about."
      />

      <ArticleCard
        title="Buy DUKE"
        href="https://app.uniswap.org/swap?outputCurrency=0xee095Eb6354473E4066054c5B06c82E99fa2b96e&chain=arbitru"
        description="Head to Uniswap or Camelot to get your pawwwwwws on some DUKE tokens!"
      />

      <ArticleCard
        title="Arbitrum Ecosystem"
        href="https://portal.arbitrum.io/"
        description="Learn more about Arbitrum, the leading Ethereum Layer 2 ecosystem."
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

