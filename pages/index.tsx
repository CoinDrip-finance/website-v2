import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import FeaturedMvx from "@/components/FeaturedMvx";
import Features2 from "@/components/Features2";
import Header from "@/components/Header";
import MultiversX from "@/components/MultiversX";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Header />

      {/* <Features /> */}

      <Features2 />

      <MultiversX />

      <FeaturedMvx />

      <Cta />

      <Team />

      <Faq />

      <Testimonials />

      <Footer />
    </main>
  );
}
