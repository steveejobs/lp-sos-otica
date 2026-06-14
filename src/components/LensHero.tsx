"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { site } from "@/lib/site";

const mainLine =
  "CLAREZA PARA SUA ROTINA • CONFORTO PARA SEUS OLHOS • SOS ÓTICA ARAGUAÍNA";
const secondaryLine =
  "ÓCULOS PRONTO EM ATÉ 30 MINUTOS • CUIDADO VISUAL • CENTRO DE ARAGUAÍNA";

const POINTER_EASE = 0.1;
const HERO_COPY_DURATION = 96000;
const DEBUG_LENS_MASK = false;

const leftLensPath =
  "M0.075 0.218 C0.105 0.083 0.247 0.018 0.478 0.018 C0.689 0.018 0.893 0.084 0.957 0.224 C0.993 0.342 0.974 0.574 0.883 0.768 C0.775 0.918 0.591 0.968 0.357 0.924 C0.182 0.886 0.086 0.746 0.058 0.561 C0.042 0.431 0.046 0.317 0.075 0.218 Z";
const rightLensPath =
  "M0.948 0.218 C0.917 0.083 0.763 0.018 0.522 0.018 C0.311 0.018 0.107 0.084 0.043 0.224 C0.007 0.342 0.026 0.574 0.117 0.768 C0.225 0.918 0.409 0.968 0.643 0.924 C0.832 0.886 0.935 0.746 0.968 0.561 C0.989 0.431 0.983 0.317 0.948 0.218 Z";

export function LensHero() {
  const reduceMotion = useReducedMotion();
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointer = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
  });

  const glassesX = useTransform(
    pointerX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-5, 5],
  );
  const glassesY = useTransform(
    pointerY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-3, 3],
  );
  const glassesRotateY = useTransform(
    pointerX,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [1.2, -1.2],
  );
  const glassesRotateX = useTransform(
    pointerY,
    [-0.5, 0.5],
    reduceMotion ? [0, 0] : [-0.8, 0.8],
  );

  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero) return;

    const debugLens =
      DEBUG_LENS_MASK ||
      new URLSearchParams(window.location.search).get("debugLens") === "1";

    if (debugLens) {
      hero.dataset.lensDebug = "true";
    } else {
      hero.removeAttribute("data-lens-debug");
    }
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      smoothPointer.current = {
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
      };
      pointerX.set(0);
      pointerY.set(0);
      return;
    }

    let frame = 0;
    const tick = () => {
      const pointer = smoothPointer.current;
      pointer.currentX += (pointer.targetX - pointer.currentX) * POINTER_EASE;
      pointer.currentY += (pointer.targetY - pointer.currentY) * POINTER_EASE;

      if (Math.abs(pointer.targetX - pointer.currentX) < 0.001) {
        pointer.currentX = pointer.targetX;
      }
      if (Math.abs(pointer.targetY - pointer.currentY) < 0.001) {
        pointer.currentY = pointer.targetY;
      }

      pointerX.set(pointer.currentX);
      pointerY.set(pointer.currentY);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [pointerX, pointerY, reduceMotion]);

  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero) return;

    if (!heroImageLoaded) {
      hero.style.setProperty("--hero-copy-progress", "14");
      return;
    }

    if (reduceMotion) {
      hero.style.setProperty("--hero-copy-progress", "14");
      return;
    }

    let frame = 0;
    const tick = (time: number) => {
      const progress = ((time % HERO_COPY_DURATION) / HERO_COPY_DURATION) * 50;
      hero.style.setProperty("--hero-copy-progress", progress.toFixed(4));
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [heroImageLoaded, reduceMotion]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    smoothPointer.current.targetX = Math.max(
      -0.5,
      Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5),
    );
    smoothPointer.current.targetY = Math.max(
      -0.5,
      Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5),
    );
  }

  function resetPointer() {
    smoothPointer.current.targetX = 0;
    smoothPointer.current.targetY = 0;
  }

  return (
    <section
      ref={sectionRef}
      className={`cinematic-hero hero-grau${heroImageLoaded ? " is-hero-ready" : ""}`}
      data-lens-debug={DEBUG_LENS_MASK ? "true" : undefined}
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <h1 id="hero-title" className="sr-only">
        SOS Ótica em Araguaína: óculos pronto em até 30 minutos
      </h1>

      <div className="hero-brand-signal" aria-hidden="true">
        <span>SOS Ótica</span>
        <span>Centro de Araguaína</span>
      </div>

      <div className="hero-state hero-state-grau">
        <HeroCopyLayer />
        <motion.div
          className="hero-pointer-frame"
          style={{
            x: glassesX,
            y: glassesY,
            rotateX: glassesRotateX,
            rotateY: glassesRotateY,
          }}
        >
          <motion.div
            className="cinematic-glasses cinematic-glasses-grau"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            <LensClipDefs />
            <LensBoundCopy />
            <Image
              src="/assets/glasses/eyeglasses-hero.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 680px) 112vw, 1120px"
              className="cinematic-glasses-image"
              onLoad={() => setHeroImageLoaded(true)}
              onError={() => setHeroImageLoaded(true)}
            />
            <LensCalibrationOverlay />
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-ui">
        <div className="hero-mini-panel">
          <a
            href={site.whatsappUrl}
            aria-label="Chamar a SOS Ótica no WhatsApp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function LensClipDefs() {
  return (
    <svg className="lens-clip-defs" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="leftLensPath" clipPathUnits="objectBoundingBox">
          <path d={leftLensPath} />
        </clipPath>
        <clipPath id="rightLensPath" clipPathUnits="objectBoundingBox">
          <path d={rightLensPath} />
        </clipPath>
      </defs>
    </svg>
  );
}

function LensCalibrationOverlay() {
  return (
    <svg
      className="lens-calibration-overlay"
      viewBox="0 0 1672 940"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="lens-calibration-path lens-calibration-left"
        d="M230 349 C247 289 328 261 459 261 C580 261 696 290 733 351 C753 403 742 505 690 590 C629 656 524 678 390 659 C291 642 236 581 220 499 C211 442 213 392 230 349 Z"
      />
      <path
        className="lens-calibration-path lens-calibration-right"
        d="M1455 349 C1438 289 1350 261 1213 261 C1092 261 976 290 939 351 C919 403 930 505 982 590 C1043 656 1148 678 1282 659 C1389 642 1448 581 1467 499 C1479 442 1475 392 1455 349 Z"
      />
    </svg>
  );
}

function HeroCopyLayer() {
  return (
    <div className="cinematic-copy cinematic-copy-blur" aria-hidden="true">
      <HeroCopyStack />
    </div>
  );
}

function LensBoundCopy() {
  return (
    <div className="lens-bound-copy" aria-hidden="true">
      <div className="lens-bound-copy-panel lens-bound-left eyeglasses-left-lens">
        <div className="lens-clean" />
        <HeroCopyStack />
      </div>
      <div className="lens-bound-copy-panel lens-bound-right eyeglasses-right-lens">
        <div className="lens-clean" />
        <HeroCopyStack />
      </div>
    </div>
  );
}

function HeroCopyStack() {
  return (
    <div className="cinematic-copy-stack">
      <div className="cinematic-copy-line cinematic-copy-main">
        <span className="cinematic-copy-segment">
          {mainLine} • {mainLine} •{" "}
        </span>
        <span className="cinematic-copy-segment">
          {mainLine} • {mainLine} •{" "}
        </span>
      </div>
      <div className="cinematic-copy-line cinematic-copy-secondary">
        <span className="cinematic-copy-segment">
          {secondaryLine} • {secondaryLine} •{" "}
        </span>
        <span className="cinematic-copy-segment">
          {secondaryLine} • {secondaryLine} •{" "}
        </span>
      </div>
    </div>
  );
}
