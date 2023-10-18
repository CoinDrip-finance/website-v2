import { APP_URL, V1_APP_URL } from "@/config";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="section pt-14 flex flex-col justify-center items-center">
        <div className="text-sm text-primary mb-3">Coindrip V2 is here 🎉</div>
        <h1 className="font-medium text-5xl sm:text-6xl text-center bg-gradient-to-b from-primary to-white bg-clip-text mb-8">
          The protocol for <br className="hidden sm:block" />
          <span className="text-transparent">real-time</span> payments
        </h1>
        <h2 className="max-w-2xl text-neutral-400 text-center text-lg mb-14">
          Schedule, collect, and access funds instantly, empowering the financial flexibility needed for a dynamic and
          rapidly evolving world.
        </h2>

        <div className="flex items-center sm:space-x-16 flex-col sm:flex-row space-y-6 sm:space-y-0 w-full sm:w-auto">
          <a
            href={APP_URL}
            target="_blank"
            className="primary-action-button block sm:inline-block w-full sm:w-auto text-center"
          >
            Try Devnet demo
          </a>
          {/* <a href={DOCS_URL} target="_blank" className="font-medium text-sm inline-flex items-center">
            Read docs <ArrowRightIcon className="h-4 w-4 ml-1" />
          </a> */}
          <a href={V1_APP_URL} target="_blank" className="font-medium text-sm inline-flex items-center">
            Open CoinDrip V1 <ArrowRightIcon className="h-4 w-4 ml-1" />
          </a>
        </div>

        {/* // TODO: Change this */}
        <a href="#" target="_blank">
          <div className="relative cursor-pointer group mt-14">
            <img src="/header/app.png" alt="Coindrip App" className="hidden sm:block" />
            <img src="/header/app-mobile.png" alt="Coindrip App" className="sm:hidden" />

            <PlayCircleIcon className="h-24 w-24 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 sm:opacity-30 group-hover:opacity-60 group-hover:scale-105 transition ease-in-out duration-500" />
          </div>
        </a>
      </div>

      <img
        src="/header/gradient.png"
        className="absolute top-64 -right-96 w-1/2 -z-10 pointer-events-none hidden sm:block"
      />
    </div>
  );
}
