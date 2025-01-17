import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function MultiversX() {
  return (
    <div className="section mt-20">
      <div className="text-4xl sm:text-5xl flex-shrink-0">
        <div className="bg-gradient-to-br from-primary via-[#B6F7F2] to-white bg-clip-text text-center">
          Available on <span className="text-transparent">Sui</span>
          <br className="hidden sm:block" /> and <span className="text-transparent">MultiversX</span>
        </div>
      </div>
      <p className="text-center text-lg text-neutral-400 mt-4 mb-8 sm:mb-16">
        Coindrip is compatible with any token like USDC or SUI
      </p>

      <div className="flex items-center sm:space-x-16 flex-col sm:flex-row space-y-7 sm:space-y-0">
        <div className="flex-1 mt-8 sm:mt-0">
          <div className="text-sm text-primary mb-3">MultiversX</div>
          <div className="text-3xl mb-3">The Internet-Scale Blockchain</div>
          <p className="text-neutral-400">
            MultiversX, the EGLD network, is a distributed blockchain network for next-gen applications. Decentralized via 3,000+ nodes, scalable through sharding, fast, secure & green.
          </p>
        </div>
        <img
          src="/multiversx/powered_by.png"
          alt="Powered by MultiversX"
          className="w-full sm:w-1/3 flex-1 order-first sm:order-none animate-pulse"
        />
        <div className="flex-1">
          <div className="text-sm text-primary mb-3">Sui</div>
          <div className="text-2xl mb-3">Sui delivers the benefits of Web3 with the ease of Web2</div>
          <p className="text-neutral-400">
            Sui is a next-generation Layer 1 blockchain designed to be infinitely scalable and lightning-fast, delivering the benefits of Web3 with the ease of Web2. It features a unique architecture that allows for massive parallelization of transactions, reducing latency and enhancing performance.
          </p>
        </div>
      </div>

      <a href="https://github.com/CoinDrip-finance" target="_blank" className="hover:underline">
        <div className="flex items-center justify-center mt-10">
          <img src="/multiversx/github_icon.svg" alt="Github" />
          <span className="pl-3 pr-1 font-medium text-sm">Our code-base is fully open-source</span>
          <ArrowRightIcon className="h-4" />
        </div>
      </a>
    </div>
  );
}
