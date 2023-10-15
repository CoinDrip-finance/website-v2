import { APP_URL } from "@/config";

export default function Cta() {
  return (
    <div className="section mt-36 flex flex-col items-center">
      <div className="sm:text-9xl text-5xl text-center from-primary via-[#f1f8f7] to-white bg-clip-text bg-gradient-to-bl">
        Get started <span className="text-transparent">today</span>
      </div>
      <p className="text-lg text-neutral-400 max-w-2xl text-center mx-auto mt-8 mb-8">
        Payments should be real-time, not static! Why wait one month to get your salary when you can get paid each
        second with CoinDrip?
      </p>
      <a href={APP_URL} target="_blank" className="primary-action-button">
        Start streaming
      </a>
    </div>
  );
}
