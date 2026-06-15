"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type {
  FeaturedCollection,
  CollectionMedia,
} from "@/components/FeaturedCollectionsSection";

type FeaturedCollectionsCarouselProps = {
  collections: FeaturedCollection[];
  whatsappUrl: string;
};

export function FeaturedCollectionsCarousel({
  collections,
  whatsappUrl,
}: FeaturedCollectionsCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const appliedInitialSlide = useRef(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: collections.length > 1,
    duration: 34,
  });

  const canAutoplay = collections.length > 1 && !reduceMotion;

  const syncSelected = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", syncSelected);
    emblaApi.on("reInit", syncSelected);

    return () => {
      emblaApi.off("select", syncSelected);
      emblaApi.off("reInit", syncSelected);
    };
  }, [emblaApi, syncSelected]);

  useEffect(() => {
    if (!emblaApi || appliedInitialSlide.current) return;

    const requestedCollection = Number(
      new URLSearchParams(window.location.search).get("colecao"),
    );
    const requestedIndex = collections.findIndex(
      (collection) => collection.number === requestedCollection,
    );

    appliedInitialSlide.current = true;

    if (requestedIndex >= 0) {
      emblaApi.scrollTo(requestedIndex, true);
      window.setTimeout(() => {
        document
          .querySelector("#colecoes")
          ?.scrollIntoView({ block: "center", inline: "nearest" });
      }, 300);
    }
  }, [collections, emblaApi]);

  useEffect(() => {
    if (!emblaApi || !canAutoplay || isPaused || isDragging) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 7600);

    return () => window.clearInterval(timer);
  }, [canAutoplay, emblaApi, isDragging, isPaused]);

  function scroll(direction: 1 | -1) {
    if (!emblaApi) return;

    setIsPaused(true);

    if (direction < 0) {
      emblaApi.scrollPrev();
    } else {
      emblaApi.scrollNext();
    }

    window.setTimeout(() => setIsPaused(false), 2200);
  }

  return (
    <div
      className={`featured-collections-carousel${isDragging ? " is-dragging" : ""}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="featured-collections-controls">
        <button
          type="button"
          className="featured-collections-arrow"
          aria-label="Coleção anterior"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="featured-collections-arrow"
          aria-label="Próxima coleção"
          onClick={() => scroll(1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div
        className="featured-collections-viewport"
        ref={emblaRef}
        onPointerDown={() => {
          setIsDragging(true);
          setIsPaused(true);
        }}
        onPointerUp={() => {
          setIsDragging(false);
          setIsPaused(false);
        }}
        onPointerCancel={() => {
          setIsDragging(false);
          setIsPaused(false);
        }}
      >
        <div className="featured-collections-track">
          {collections.map((collection, index) => (
            <CollectionSlide
              key={collection.number}
              collection={collection}
              isActive={index === selectedIndex}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>

      <div
        className="featured-collections-dots"
        aria-label="Selecionar coleção"
      >
        {collections.map((collection, index) => (
          <button
            type="button"
            key={collection.number}
            className={index === selectedIndex ? "is-active" : ""}
            aria-label={`Ir para coleção ${collection.number}`}
            aria-current={index === selectedIndex}
            onClick={() => {
              setIsPaused(true);
              emblaApi?.scrollTo(index);
              window.setTimeout(() => setIsPaused(false), 2200);
            }}
          >
            <span>{String(collection.number).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CollectionSlide({
  collection,
  isActive,
  whatsappUrl,
}: {
  collection: FeaturedCollection;
  isActive: boolean;
  whatsappUrl: string;
}) {
  const desktopSupports = useMemo(
    () => collection.supports.slice(0, collection.variant === "duo" ? 1 : 3),
    [collection.supports, collection.variant],
  );
  const mobileSupports = useMemo(
    () =>
      collection.supports.filter(
        (support) => support.src !== collection.dominant.src,
      ),
    [collection.dominant.src, collection.supports],
  );

  return (
    <article
      className={`featured-collection-slide is-${collection.variant}`}
      aria-label={`Coleção ${collection.number}: ${collection.title}`}
    >
      <CollectionMediaBlock
        media={collection.dominant}
        className="featured-collection-media is-dominant"
        isActive={isActive}
        sizes="(max-width: 680px) 92vw, (max-width: 1040px) 62vw, 520px"
      />

      <div className="featured-collection-supports">
        {desktopSupports.map((media, index) => (
          <CollectionMediaBlock
            key={`${collection.number}-${media.src}`}
            media={media}
            className={`featured-collection-media is-support support-${index + 1}`}
            isActive={isActive}
            sizes="(max-width: 680px) 42vw, 260px"
          />
        ))}
      </div>

      <div className="featured-collection-copy">
        <span>{String(collection.number).padStart(2, "0")}</span>
        <h3>{collection.title}</h3>
        <p>{collection.text}</p>
        <a href={whatsappUrl} className="button button-red">
          <MessageCircle size={17} aria-hidden="true" />
          Ver opções pelo WhatsApp
        </a>
      </div>

      {mobileSupports.length > 0 ? (
        <div
          className="featured-collection-mobile-strip"
          aria-label="Detalhes da coleção"
        >
          {mobileSupports.map((media, index) => (
            <CollectionMediaBlock
              key={`mobile-${collection.number}-${media.src}`}
              media={media}
              className="featured-collection-media is-mobile-detail"
              isActive={isActive && index < 2}
              sizes="42vw"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}

function CollectionMediaBlock({
  media,
  className,
  isActive,
  sizes,
}: {
  media: CollectionMedia;
  className: string;
  isActive: boolean;
  sizes: string;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = mediaRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (!isActive || !isVisible) {
      video.pause();
      return;
    }

    void video.play().catch(() => undefined);
  }, [isActive, isVisible]);

  return (
    <div className={`${className} is-${media.type}`} ref={mediaRef}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          quality={92}
          loading="lazy"
          className="featured-collection-image"
        />
      ) : (
        <video
          ref={videoRef}
          className="featured-collection-video"
          src={media.src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
        />
      )}
    </div>
  );
}
