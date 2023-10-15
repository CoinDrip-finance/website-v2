export default function FeaturedMvx() {
  return (
    <div className="mt-56 relative hidden sm:block">
      <div className="section flex space-x-24 sm:items-center">
        <img src="/multiversx/featured_on_mvx.png" alt="Featured by MultiversX" className="w-1/2" />
        <div className="flex-1">
          <div className="text-5xl mb-10">
            Featured by
            <br />
            MultiversX
          </div>
          <div className="font-semibold text-lg text-neutral-400 mb-6">
            Programmable Money Streaming On
            <br /> MultiversX Via CoinDrip
          </div>
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

      <img src="/multiversx/gradient.png" className="pointer-events-none absolute -left-64 top-0 w-1/3 -z-10" />
    </div>
  );
}
