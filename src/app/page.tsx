import { BrandPillars } from "@/components/BrandPillars";
import { EventsSection } from "@/components/EventsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LensGuidance } from "@/components/LensGuidance";
import { LensHero } from "@/components/LensHero";
import { Manifesto } from "@/components/Manifesto";
import { SocialProof } from "@/components/SocialProof";
import { SolutionsSection } from "@/components/SolutionsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <Manifesto />
        <SolutionsSection />
        <BrandPillars />
        <LensGuidance />
        <EventsSection />
        <FocusGallery />
        <SocialProof />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
