import '@/styles/globals.scss';

import { Poppins } from 'next/font/google';

import type { AppProps } from "next/app";

const poppinsFont = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppinsFont.className}>
      {" "}
      <Component {...pageProps} />
    </div>
  );
}
