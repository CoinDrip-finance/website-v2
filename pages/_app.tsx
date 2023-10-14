import "@/styles/globals.scss";

import { DefaultSeo } from "next-seo";
import { Poppins } from "next/font/google";

import type { AppProps } from "next/app";
const poppinsFont = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppinsFont.className}>
      <DefaultSeo
        defaultTitle="Coindrip"
        description="The token streaming protocol that facilitates web3 real-time payments, serving the needs of DAOs and businesses for tasks such as vesting, payroll, airdrops, and more."
        openGraph={{
          images: [
            {
              url: "https://devnet-v2.coindrip.finance/og-image.jpg",
              width: 2763,
              height: 1691,
              type: "image/jpeg",
            },
          ],
          siteName: "Coindrip",
        }}
        twitter={{
          handle: "@CoinDripHQ",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
