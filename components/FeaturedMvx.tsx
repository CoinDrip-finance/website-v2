export default function FeaturedMvx() {
  return (
    <div className="mt-56 relative hidden sm:block">
      <div className="section flex space-x-8">
        <div className="flex-1">
          <img src="/multiversx/hackathon.png" alt="Featured by MultiversX" className="mb-6" />
          <div className="flex-1">
            <div className="text-4xl mb-5">xDay Hackathon Winners</div>
            <p className="text-neutral-400 text-lg mb-10">
              Coindrip V2 was awarded the 1st prize 🏆 in the first hackathon organized by MultiversX during xDay 2023.
            </p>
            <a
              className="primary-action-button"
              href="https://blog.coindrip.finance/winning-the-1st-multiversx-hackathon-xday-2023-and-coindrip-v2-21ce901ae221"
              target="_blank"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/multiversx/featured_on_mvx.png" alt="Featured by MultiversX" className="mb-6" />
          <div className="flex-1">
            <div className="text-4xl mb-5">Featured by MultiversX</div>
            <p className="text-neutral-400 text-lg mb-10 italic">
              &quot;This is already a significant leap forward, but solutions such as the one built by the CoinDrip team
              are paving the way for new functionality and more flexibility, which will greatly improve the way we
              interact with money.&quot; - Lucian Mincu
            </p>
            <a
              className="primary-action-button"
              href="https://multiversx.com/blog/multiversx-coindrip-programmable-money-streaming"
              target="_blank"
            >
              Read the article
            </a>
          </div>
        </div>
      </div>

      <img src="/multiversx/gradient.png" className="pointer-events-none absolute -left-64 top-0 w-1/3 -z-10" />
    </div>
  );
}
