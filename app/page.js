import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Pricing from "@/components/Pricing"
import BottomImg from "@/components/BottomImg"

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Services />
      <Pricing />
      <Contacts />
      <BottomImg />
    </main>
  );
}
