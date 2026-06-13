"use client";

/* eslint-disable @next/next/no-img-element */

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { ExameNewsItem } from "@/lib/exame-news";

type ExameNewsCarouselProps = {
  items: ExameNewsItem[];
};

export function ExameNewsCarousel({ items }: ExameNewsCarouselProps) {
  const resumeTimer = useRef<number | null>(null);
  const reduceMotion = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const autoScroll = useMemo(
    () =>
      AutoScroll({
        speed: 0.34,
        startDelay: 900,
        playOnInit: false,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: false,
      dragFree: true,
      loop: true,
    },
    [autoScroll],
  );

  const clearResumeTimer = useCallback(() => {
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const stopAutoScroll = useCallback(() => {
    clearResumeTimer();
    emblaApi?.plugins().autoScroll?.stop();
  }, [clearResumeTimer, emblaApi]);

  const playAutoScroll = useCallback(
    (delay = 0) => {
      clearResumeTimer();

      if (reduceMotion.current || items.length <= 1) {
        return;
      }

      const autoScrollPlugin = emblaApi?.plugins().autoScroll;

      if (!autoScrollPlugin) {
        return;
      }

      if (delay > 0) {
        resumeTimer.current = window.setTimeout(() => {
          autoScrollPlugin.play(0);
          resumeTimer.current = null;
        }, delay);
        return;
      }

      autoScrollPlugin.play(0);
    },
    [clearResumeTimer, emblaApi, items.length],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reduceMotion.current = media.matches;

      if (media.matches) {
        stopAutoScroll();
      } else {
        playAutoScroll(2400);
      }
    };

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => {
      media.removeEventListener("change", syncMotionPreference);
      clearResumeTimer();
      emblaApi.plugins().autoScroll?.stop();
    };
  }, [clearResumeTimer, emblaApi, playAutoScroll, stopAutoScroll]);

  function scrollCarousel(direction: 1 | -1) {
    stopAutoScroll();

    if (direction < 0) {
      emblaApi?.scrollPrev();
    } else {
      emblaApi?.scrollNext();
    }

    playAutoScroll(1800);
  }

  function handlePointerDown(_: ReactPointerEvent<HTMLDivElement>) {
    setIsDragging(true);
    stopAutoScroll();
  }

  function handlePointerUp() {
    setIsDragging(false);
    playAutoScroll(1800);
  }

  return (
    <div
      className={`exame-news-carousel${isDragging ? " is-dragging" : ""}`}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={() => playAutoScroll(0)}
      onFocusCapture={stopAutoScroll}
      onBlurCapture={() => playAutoScroll(0)}
    >
      <div className="exame-news-controls" aria-hidden={items.length <= 1}>
        <button
          type="button"
          className="exame-news-arrow"
          aria-label="Notícia anterior"
          onClick={() => scrollCarousel(-1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="exame-news-arrow"
          aria-label="Próxima notícia"
          onClick={() => scrollCarousel(1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div
        ref={emblaRef}
        className="exame-news-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={() => {
          if (isDragging) {
            handlePointerUp();
          }
        }}
      >
        <div className="exame-news-track">
          {items.map((item) => (
            <a
              className="exame-news-card"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ler na Exame: ${item.title}`}
            >
              <span
                className={`exame-news-thumb${
                  item.image && !failedImages.has(item.href)
                    ? " has-image"
                    : " is-placeholder"
                }`}
              >
                {item.image && !failedImages.has(item.href) ? (
                  <img
                    className="exame-news-thumb-image"
                    src={item.image}
                    alt=""
                    loading="lazy"
                    onError={() => {
                      setFailedImages((current) => {
                        const next = new Set(current);
                        next.add(item.href);
                        return next;
                      });
                    }}
                  />
                ) : null}
              </span>

              <span className="exame-news-body">
                <span className="exame-news-meta">
                  <span>{item.source}</span>
                  <span>{item.meta}</span>
                </span>
                <span className="exame-news-title">{item.title}</span>
              </span>

              <span className="exame-news-link">
                Ler na Exame
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
