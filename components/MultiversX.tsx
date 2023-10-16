import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function MultiversX() {
  return (
    <div className="section mt-20">
      <div className="text-4xl sm:text-5xl flex-shrink-0">
        <div className="bg-gradient-to-br from-primary via-[#B6F7F2] to-white bg-clip-text text-center">
          Powered by the <span className="text-transparent">MultiversX</span>
          <br className="hidden sm:block" /> blockchain
        </div>
      </div>
      <p className="text-center text-lg text-neutral-400 mt-4 mb-8 sm:mb-16">
        CoinDrip is compatible with EGLD or any token like USDC.
      </p>

      <div className="flex items-center sm:space-x-16 flex-col sm:flex-row space-y-7 sm:space-y-0">
        <div className="flex-1 mt-8 sm:mt-0">
          <div className="text-sm text-primary mb-3">Scalable</div>
          <div className="text-3xl mb-3">Adaptive state sharding</div>
          <p className="text-neutral-400">
            Adaptive State Sharding brings a 1000x improvement in throughput compared to previous blockchain iterations
            by enabling parallel transaction processing.
          </p>
        </div>
        <img
          src="/multiversx/powered_by.png"
          alt="Powered by MultiversX"
          className="w-full sm:w-1/3 flex-1 order-first sm:order-none animate-pulse"
        />
        <div className="flex-1">
          <div className="text-sm text-primary mb-3">Low fees</div>
          <div className="text-3xl mb-3">Elrond Standard Digital Token (ESDT)</div>
          <p className="text-neutral-400">
            The ESDT token model enables true ownership of assets, advanced programmability, and low transfer fees,
            making it an essential foundation for building more efficient and robust DeFi products.
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
