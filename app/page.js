import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ImpactStats />
        <About />
        <Programs />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}