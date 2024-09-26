import Image from "next/image";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Carousel from "@/components/Carousel";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Education />
      <Carousel />
    </main>
  );
}
