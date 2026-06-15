"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

type InstagramVideoCardProps = {
  whatsappUrl: string;
};

const videoSrc = "/galeria%20cole%C3%A7%C3%A3o/video%20(2).mp4";
const posterSrc =
  "/galeria%20cole%C3%A7%C3%A3o/cole%C3%A7%C3%A3o%204%20(1).jpg";

export function InstagramVideoCard({ whatsappUrl }: InstagramVideoCardProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setShouldRenderVideo(true);
      }
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldRenderVideo || prefersReducedMotion) {
      return;
    }

    const lazyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderVideo(true);
          lazyObserver.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    lazyObserver.observe(section);

    return () => {
      lazyObserver.disconnect();
    };
  }, [prefersReducedMotion, shouldRenderVideo]);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video || !shouldRenderVideo) {
      return;
    }

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.34) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: [0, 0.34, 0.7] },
    );

    playbackObserver.observe(section);

    return () => {
      playbackObserver.disconnect();
      video.pause();
    };
  }, [prefersReducedMotion, shouldRenderVideo]);

  return (
    <section
      ref={sectionRef}
      className="instagram-video instagram-shell"
      aria-labelledby="instagram-video-title"
    >
      <div className="instagram-section-heading">
        <div>
          <h2 id="instagram-video-title">Veja por dentro da SOS</h2>
          <p>
            Um pouco da loja, das coleções e do atendimento no Centro de
            Araguaína.
          </p>
        </div>
      </div>

      <div className="instagram-video-card">
        <div className="instagram-video-frame">
          {shouldRenderVideo ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              autoPlay={!prefersReducedMotion}
              aria-label="Vídeo visual sem áudio mostrando coleção de óculos da SOS Ótica."
            />
          ) : (
            <div className="instagram-video-placeholder" aria-hidden="true" />
          )}
        </div>

        <a
          href={whatsappUrl}
          className="instagram-video-cta"
          aria-label="Gostei do vídeo e quero atendimento da SOS Ótica pelo WhatsApp"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>Gostei, quero atendimento</span>
        </a>
      </div>
    </section>
  );
}
