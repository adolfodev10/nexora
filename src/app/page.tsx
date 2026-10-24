import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}