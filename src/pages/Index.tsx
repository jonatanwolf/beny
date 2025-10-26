import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import DonateSection from "@/components/DonateSection";
import ThanksSection from "@/components/ThanksSection";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <JourneySection />
      <DonateSection />
      <ThanksSection />
      <Footer />
      <FloatingDonateButton />
    </main>
  );
};

export default Index;
