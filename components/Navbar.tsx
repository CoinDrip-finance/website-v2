import { APP_URL } from "@/config";

export default function Navbar() {
  return (
    <div>
      <img src="/navbar/gradient.png" className="absolute -z-10 -top-36 -left-36 pointer-events-none" />
      <div className="section flex items-center justify-between py-12">
        <img src="/logo.svg" alt="Coindrip" className="h-8 sm:h-auto" />
        <a
          href={APP_URL}
          target="_blank"
          className="text-sm font-semibold py-2 px-6 bg-neutral-800 rounded-lg hover:bg-opacity-75"
        >
          Open Coindrip
        </a>
      </div>
    </div>
  );
}
