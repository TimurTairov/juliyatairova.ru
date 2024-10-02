import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Pricing from "@/components/Pricing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Education />
      <Carousel />
      <Services />
      <Pricing />
      <Contacts />
    </main>
  );
}
