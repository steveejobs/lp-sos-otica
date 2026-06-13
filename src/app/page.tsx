import { BrandPillars } from "@/components/BrandPillars";
import { EventsSection } from "@/components/EventsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ExameNewsSection } from "@/components/ExameNewsSection";
import { Header } from "@/components/Header";
import { LensGuidance } from "@/components/LensGuidance";
import { LensHero } from "@/components/LensHero";
import { Manifesto } from "@/components/Manifesto";
import { SolutionsSection } from "@/components/SolutionsSection";
import { StorePhotosSection } from "@/components/StorePhotosSection";
import { WatchesSection } from "@/components/WatchesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <Manifesto />
        <SolutionsSection />
        <WatchesSection />
        <BrandPillars />
        <LensGuidance />
        <EventsSection />
        <StorePhotosSection />
        <GoogleReviewsSection />
        <ExameNewsSection />
        <FocusGallery />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
