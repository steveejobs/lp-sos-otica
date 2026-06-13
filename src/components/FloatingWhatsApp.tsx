"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector(".cinematic-hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) =>
        setHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.28),
      { threshold: [0, 0.28, 0.6] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.whatsappUrl}
      className={`floating-whatsapp${heroVisible ? " is-hidden-on-hero" : ""}`}
      aria-label="Chamar a SOS Ótica no WhatsApp"
      aria-hidden={heroVisible}
      tabIndex={heroVisible ? -1 : undefined}
    >
      <Image
        src={site.logoIcon}
        width={30}
        height={30}
        alt=""
        aria-hidden="true"
      />
      <span>WhatsApp</span>
      <MessageCircle size={17} aria-hidden="true" />
    </a>
  );
}
