"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type InstagramFixedWhatsAppProps = {
  href: string;
};

const MAIN_LINKS_ID = "instagram-main-links";

export function InstagramFixedWhatsApp({
  href,
}: InstagramFixedWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateVisibility = () => {
      const mainLinks = document.getElementById(MAIN_LINKS_ID);

      if (mainLinks) {
        setIsVisible(mainLinks.getBoundingClientRect().bottom < 0);
      }
    };

    const handleViewportChange = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <a
      href={href}
      className={`instagram-fixed-cta${isVisible ? " is-visible" : ""}`}
      aria-label="Falar com a SOS Ótica no WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? undefined : -1}
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>Falar no WhatsApp</span>
    </a>
  );
}
