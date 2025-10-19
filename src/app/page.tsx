// app/page.tsx
import Hero from "./component/Hero";
import WhyChoose from "./component/Whychoose";
import EssentialFeatures from "./component/EssentialFeatures";
import OurServices from "./component/Ourservices";
import Earn from "./component/Earn";
import FAQSection from "./component/Faq";
import Footer from "./component/footer";
export default function Home() {
  return (
    <main>
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
