import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import duke from "@public/duke.svg";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
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
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={duke}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #96BEDC)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="inline-block -skew-x-6 text-blue-500"> Duke of Arbitrum </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Connect your{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          wallet
        </code>{" "}
        to get started.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="About"
        href="https://x.com/dukeofarbitrum"
        description="Learn more about what DUKE is and how it works."
      />

      <ArticleCard
        title="How To Buy"
        href="https://uniswap.org"
        description="Learn how to get your hands on some DUKE tokens or claim the airdrop if eligible."
      />

      <ArticleCard
        title="Arbitrum Ecosystem"
        href="https://portal.arbitrum.io/"
        description="Learn more about the largest Ethereum Layer 2 ecosystem, Arbitrum."
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
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
