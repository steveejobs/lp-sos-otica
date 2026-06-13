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

export function LensHero() {
  const reduceMotion = useReducedMotion();
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

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
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
      className="cinematic-hero hero-grau"
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
            <LensBoundCopy />
            <Image
              src="/assets/glasses/eyeglasses-hero.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 680px) 112vw, 1120px"
              className="cinematic-glasses-image"
            />
            <span className="hero-lens-map hero-lens-map-grau hero-lens-left eyeglasses-left-lens" />
            <span className="hero-lens-map hero-lens-map-grau hero-lens-right eyeglasses-right-lens" />
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
        <span>{mainLine}</span>
        <span>{mainLine}</span>
        <span>{mainLine}</span>
        <span>{mainLine}</span>
      </div>
      <div className="cinematic-copy-line cinematic-copy-secondary">
        <span>{secondaryLine}</span>
        <span>{secondaryLine}</span>
        <span>{secondaryLine}</span>
        <span>{secondaryLine}</span>
      </div>
    </div>
  );
}
