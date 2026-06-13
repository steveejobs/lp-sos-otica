"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { site } from "@/lib/site";

const mainLine =
  "CLAREZA PARA SUA ROTINA • CONFORTO PARA SEUS OLHOS • SOS ÓTICA ARAGUAÍNA";
const secondaryLine =
  "ÓCULOS PRONTO EM ATÉ 40 MINUTOS • CUIDADO VISUAL • CENTRO DE ARAGUAÍNA";

const POINTER_EASE = 0.1;
const HERO_COPY_DURATION = 96000;
const DEBUG_LENS_MASK = false;

const leftLensPath =
  "M0.073 0.261 C0.104 0.135 0.254 0.063 0.482 0.065 C0.672 0.068 0.858 0.13 0.929 0.258 C0.965 0.365 0.956 0.563 0.876 0.742 C0.772 0.896 0.595 0.944 0.369 0.899 C0.186 0.86 0.089 0.727 0.056 0.558 C0.036 0.442 0.038 0.345 0.073 0.261 Z";
const rightLensPath =
  "M0.927 0.261 C0.896 0.135 0.746 0.063 0.518 0.065 C0.328 0.068 0.142 0.13 0.071 0.258 C0.035 0.365 0.044 0.563 0.124 0.742 C0.228 0.896 0.405 0.944 0.631 0.899 C0.814 0.86 0.911 0.727 0.944 0.558 C0.964 0.442 0.962 0.345 0.927 0.261 Z";

export function LensHero() {
  const reduceMotion = useReducedMotion();
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
  }, [reduceMotion]);

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
      className="cinematic-hero hero-grau"
      data-lens-debug={DEBUG_LENS_MASK ? "true" : undefined}
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <h1 id="hero-title" className="sr-only">
        SOS Ótica em Araguaína: óculos pronto em até 40 minutos
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
              sizes="(max-width: 680px) 112vw, 1120px"
              className="cinematic-glasses-image"
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
            WhatsApp
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
        d="M238 378 C255 326 337 296 462 297 C566 298 668 324 707 377 C727 421 722 503 678 577 C621 641 524 661 400 642 C300 626 247 571 229 501 C218 453 219 413 238 378 Z"
      />
      <path
        className="lens-calibration-path lens-calibration-right"
        d="M1434 378 C1417 326 1335 296 1210 297 C1106 298 1004 324 965 377 C945 421 950 503 994 577 C1051 641 1148 661 1272 642 C1372 626 1425 571 1443 501 C1454 453 1453 413 1434 378 Z"
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
        <HeroCopyStack />
      </div>
      <div className="lens-bound-copy-panel lens-bound-right eyeglasses-right-lens">
        <HeroCopyStack />
      </div>
    </div>
  );
}

function HeroCopyStack() {
  return (
    <div className="cinematic-copy-stack">
      <div className="cinematic-copy-line cinematic-copy-main">
        <span className="cinematic-copy-segment">{mainLine} • {mainLine} • </span>
        <span className="cinematic-copy-segment">{mainLine} • {mainLine} • </span>
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
