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
import { WatchesSection } from "@/components/WatchesSection";

type HomeProps = {
  searchParams?: Promise<{
    hero?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const heroParam = Array.isArray(params?.hero)
    ? params?.hero[0]
    : params?.hero;
  const initialHeroState = heroParam === "solar" ? "solar" : "grau";

  return (
    <>
      <Header />
      <main id="top">
        <LensHero initialState={initialHeroState} />
        <Manifesto />
        <SolutionsSection />
        <WatchesSection />
        <BrandPillars />
        <LensGuidance />
        <EventsSection />
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
