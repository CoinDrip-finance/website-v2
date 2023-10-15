import { APP_URL } from "@/config";

export default function Navbar() {
  return (
    <div>
      <img src="/navbar/gradient.png" className="absolute -z-10 -top-36 -left-36 pointer-events-none" />
      <div className="section flex items-center justify-between py-12">
        <img src="/logo.svg" alt="Coindrip" className="h-8 sm:h-auto" />
        <div className="flex items-center space-x-5 sm:space-x-8">
          {/* <a href={V1_APP_URL} target="_blank" className="text-sm font-semibold">
            <span className="hidden sm:inline-block">Go to</span> V1
          </a> */}
          <div className="items-center space-x-3 hidden sm:flex">
            <a href="https://twitter.com/CoinDripHQ" target="_blank">
              <img src="/navbar/twitter.svg" alt="Twitter" className="h-6" />
            </a>
            <a href="https://www.linkedin.com/company/coindrip" target="_blank">
              <img src="/navbar/linkedin.svg" alt="Twitter" className="h-6" />
            </a>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            className="text-sm font-semibold py-2  px-4 sm:px-6 bg-neutral-800 rounded-lg hover:bg-opacity-75"
          >
            <span className="hidden sm:inline-block">Open</span> App
          </a>
        </div>
      </div>
    </div>
  );
}
