import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <WhyChooseUs/>
      <Process/>
      <Projects/>
      <Trust/>
      <FAQ/>
      <CTA/>
    </main>
  );
}
