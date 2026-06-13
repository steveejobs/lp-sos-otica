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
  "ÓCULOS PRONTO EM ATÉ 30 MINUTOS • CUIDADO VISUAL • CENTRO DE ARAGUAÍNA";

const POINTER_EASE = 0.1;
const HERO_COPY_DURATION = 96000;
const DEBUG_LENS_MASK = false;

const leftLensPath =
  "M0.064 0.251 C0.096 0.126 0.248 0.055 0.482 0.057 C0.678 0.06 0.868 0.122 0.939 0.249 C0.976 0.361 0.967 0.566 0.886 0.75 C0.78 0.904 0.599 0.952 0.365 0.908 C0.177 0.87 0.078 0.733 0.045 0.561 C0.025 0.443 0.028 0.339 0.064 0.251 Z";
const rightLensPath =
  "M0.936 0.251 C0.904 0.126 0.752 0.055 0.518 0.057 C0.322 0.06 0.132 0.122 0.061 0.249 C0.024 0.361 0.033 0.566 0.114 0.75 C0.22 0.904 0.401 0.952 0.635 0.908 C0.823 0.87 0.922 0.733 0.955 0.561 C0.975 0.443 0.972 0.339 0.936 0.251 Z";

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
        d="M229 372 C248 315 336 282 470 283 C583 285 693 313 734 371 C756 422 751 516 704 600 C643 670 539 692 404 672 C296 654 239 592 220 512 C208 457 210 410 229 372 Z"
      />
      <path
        className="lens-calibration-path lens-calibration-right"
        d="M1443 372 C1424 315 1336 282 1202 283 C1089 285 979 313 938 371 C916 422 921 516 968 600 C1029 670 1133 692 1268 672 C1376 654 1433 592 1452 512 C1464 457 1462 410 1443 372 Z"
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
