export default function Footer() {
  return (
    <div className="relative">
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 bg-transparent font-light relative z-10">
        <img src="/logo.svg" alt="Coindrip" className="mx-auto mb-12 h-8" />
        <ul className="flex items-center justify-center sm:space-x-8 text-sm text-white flex-wrap space-x-8 space-y-2 sm:space-y-0">
          <li>
            <a href="https://coindrip.finance/" target="_blank" rel="noreferrer" className="hover:underline">
              Website
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CoinDripHQ" target="_blank" rel="noreferrer" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/coindrip"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:contact@coindrip.finance" className="hover:underline">
              contact@coindrip.finance
            </a>
          </li>
        </ul>
      </footer>

      <img
        src="/footer-gradient.png"
        alt=""
        className="hidden sm:block absolute bottom-0 inset-x-0 mx-auto pointer-events-none"
      />
      <img
        src="/footer-gradient.png"
        alt=""
        className="sm:hidden absolute bottom-0 inset-x-0 mx-auto pointer-events-none h-1/3 object-cover"
      />
    </div>
  );
}
