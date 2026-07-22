import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ExameNewsSection } from "@/components/ExameNewsSection";
import { FeaturedCollectionsSection } from "@/components/FeaturedCollectionsSection";
import { Header } from "@/components/Header";
import { HeroProofBar } from "@/components/HeroProofBar";
import { LensHero } from "@/components/LensHero";
import { ProcessSection } from "@/components/ProcessSection";
import { RoutineLensSection } from "@/components/RoutineLensSection";
import { StorePhotosSection } from "@/components/StorePhotosSection";
import { AccessoriesSection } from "@/components/AccessoriesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <HeroProofBar />
        <RoutineLensSection />
        <FeaturedCollectionsSection />
        <ProcessSection />
        <StorePhotosSection />
        <AccessoriesSection />
        <ExameNewsSection />
        <GoogleReviewsSection />
        <FocusGallery />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
