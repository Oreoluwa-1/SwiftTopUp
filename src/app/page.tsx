// app/page.tsx
import Hero from "./component/Hero";
import WhyChoose from "./component/Whychoose";
import EssentialFeatures from "./component/EssentialFeatures";
import OurServices from "./component/Ourservices";
export default function Home() {
  return (
    <main>
      <Hero/>
      <WhyChoose/>
      <EssentialFeatures/>
      <OurServices/>
    </main>
  );
}
