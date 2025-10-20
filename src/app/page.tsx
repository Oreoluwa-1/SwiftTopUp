// app/page.tsx
import Navbar from "./component/landingpage/Navbar";

import Hero from "./component/landingpage/Hero";
import WhyChoose from "./component/landingpage/Whychoose";
import EssentialFeatures from "./component/landingpage/EssentialFeatures"
import OurServices from "./component/landingpage/Ourservices";
import Earn from "./component/landingpage/Earn";
import FAQSection from "./component/landingpage/Faq";
import Footer from "./component/landingpage/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <WhyChoose/>
      <EssentialFeatures/>
      <OurServices/>
      <Earn/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
