"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { site } from "@/lib/site";

const mainLine = "ENXERGUE COM CLAREZA • ENXERGUE COM CONFORTO • ENXERGUE COM ESTILO";
const secondaryLine =
  "SOS ÓTICA • ARAGUAÍNA • ÓCULOS PRONTO EM ATÉ 40 MINUTOS • CUIDADO COM A SUA VISÃO";

const heroStates = [
  { id: "grau", label: "Grau", index: "01" },
  { id: "solar", label: "Solar", index: "02" }
] as const;

type HeroState = (typeof heroStates)[number]["id"];

const AUTOPLAY_INTERVAL_MS = 9800;
const POINTER_EASE = 0.12;

export function LensHero() {
  const reduceMotion = useReducedMotion();
  const [activeState, setActiveState] = useState<HeroState>("grau");
  const [skipMotion, setSkipMotion] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointer = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0 });
  const sceneX = useTransform(pointerX, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-18, 18]);
  const sceneY = useTransform(pointerY, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-10, 10]);
  const glassesX = useTransform(pointerX, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-8, 8]);
  const glassesY = useTransform(pointerY, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-5, 5]);
  const glassesRotateY = useTransform(pointerX, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [2.2, -2.2]);
  const glassesRotateX = useTransform(pointerY, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-1.2, 1.2]);

  const motionDisabled = Boolean(reduceMotion || skipMotion);
  const autoplayStopped = Boolean(motionDisabled || autoplayPaused);
  const activeLabel = useMemo(
    () => heroStates.find((item) => item.id === activeState)?.label ?? "Grau",
    [activeState]
  );

  useEffect(() => {
    if (autoplayStopped) return;
    const timer = window.setInterval(() => {
      setActiveState((state) => (state === "grau" ? "solar" : "grau"));
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [autoplayStopped]);

  useEffect(() => {
    if (motionDisabled) {
      smoothPointer.current = { currentX: 0, currentY: 0, targetX: 0, targetY: 0 };
      pointerX.set(0);
      pointerY.set(0);
      return;
    }

    let frame = 0;
    const tick = () => {
      const pointer = smoothPointer.current;
      pointer.currentX += (pointer.targetX - pointer.currentX) * POINTER_EASE;
      pointer.currentY += (pointer.targetY - pointer.currentY) * POINTER_EASE;

      if (Math.abs(pointer.targetX - pointer.currentX) < 0.001) pointer.currentX = pointer.targetX;
      if (Math.abs(pointer.targetY - pointer.currentY) < 0.001) pointer.currentY = pointer.targetY;

      pointerX.set(pointer.currentX);
      pointerY.set(pointer.currentY);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [motionDisabled, pointerX, pointerY]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (motionDisabled || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    smoothPointer.current.targetX = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
    smoothPointer.current.targetY = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
  }

  function resetPointer() {
    smoothPointer.current.targetX = 0;
    smoothPointer.current.targetY = 0;
  }

  function selectHeroState(state: HeroState) {
    setActiveState(state);
    setAutoplayPaused(true);
  }

  function toggleAutoplay() {
    if (autoplayStopped) {
      setSkipMotion(false);
      setAutoplayPaused(false);
      return;
    }

    setAutoplayPaused(true);
  }

  function skipHeroMotion() {
    setSkipMotion(true);
    setAutoplayPaused(true);
    resetPointer();
  }

  return (
    <section
      className={`cinematic-hero hero-${activeState}`}
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

      <AnimatePresence mode="wait">
        {activeState === "grau" ? (
          <motion.div
            key="grau"
            className="hero-state hero-state-grau"
            initial={motionDisabled ? false : { opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={motionDisabled ? undefined : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCopyLayer sharp={false} />
            <motion.div
              className="hero-pointer-frame"
              style={{ x: glassesX, y: glassesY, rotateX: glassesRotateX, rotateY: glassesRotateY }}
            >
              <motion.div
                className="cinematic-glasses cinematic-glasses-grau"
                animate={motionDisabled ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <LensBoundCopy />
                <Image
                  src="/assets/glasses/eyeglasses-hero.webp"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 680px) 142vw, 1180px"
                  className="cinematic-glasses-image"
                />
                <span className="hero-lens-map hero-lens-map-grau hero-lens-left" />
                <span className="hero-lens-map hero-lens-map-grau hero-lens-right" />
                <span className="hero-refraction" />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="solar"
            className="hero-state hero-state-solar"
            initial={motionDisabled ? false : { opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={motionDisabled ? undefined : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-sunset-stage" aria-hidden="true">
              <motion.div className="hero-sunset hero-sunset-glare" style={{ x: sceneX, y: sceneY }}>
                <Image
                  src="/imagens/araguaina-1.jpg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="hero-sunset-image"
                />
              </motion.div>
              <motion.div className="hero-sunset hero-sunset-filtered" style={{ x: sceneX, y: sceneY }}>
                <Image
                  src="/imagens/araguaina-1.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="hero-sunset-image"
                />
              </motion.div>
            </div>

            <motion.div
              className="hero-pointer-frame"
              style={{ x: glassesX, y: glassesY, rotateX: glassesRotateX, rotateY: glassesRotateY }}
            >
              <motion.div
                className="cinematic-glasses cinematic-glasses-solar"
                animate={motionDisabled ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <Image
                  src="/assets/glasses/sunglasses-hero.webp"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 680px) 138vw, 1100px"
                  className="cinematic-glasses-image"
                />
                <span className="hero-lens-map hero-lens-map-solar hero-lens-left" />
                <span className="hero-lens-map hero-lens-map-solar hero-lens-right" />
                <span className="hero-solar-glint" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hero-ui">
        <div className="hero-state-controls" aria-label="Estados do hero">
          {heroStates.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeState === item.id ? "is-active" : ""}
              onClick={() => selectHeroState(item.id)}
              aria-pressed={activeState === item.id}
            >
              <span>{item.index}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hero-mini-panel">
          <span>{activeLabel}</span>
          <strong>{activeState === "grau" ? "clareza calibrada para a rotina" : "conforto para o sol forte"}</strong>
          <a href={site.whatsappUrl} aria-label="Chamar a SOS Ótica no WhatsApp">
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <div className="hero-control-actions">
          <button type="button" className="animation-toggle" onClick={toggleAutoplay}>
            {autoplayStopped ? "Retomar animação" : "Pausar animação"}
          </button>
          <button type="button" className="skip-motion" onClick={skipHeroMotion} disabled={skipMotion}>
            {skipMotion ? "Animação pulada" : "Pular animação"}
          </button>
        </div>
      </div>

      <a href="#rapidez" className="hero-scroll" aria-label="Ir para a mensagem principal">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}

function HeroCopyLayer({ sharp }: { sharp: boolean }) {
  return (
    <div className={sharp ? "cinematic-copy cinematic-copy-sharp" : "cinematic-copy cinematic-copy-blur"} aria-hidden="true">
      <HeroCopyStack />
    </div>
  );
}

function LensBoundCopy() {
  return (
    <div className="lens-bound-copy" aria-hidden="true">
      <div className="lens-bound-copy-panel lens-bound-left">
        <HeroCopyStack />
      </div>
      <div className="lens-bound-copy-panel lens-bound-right">
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
      </div>
      <div className="cinematic-copy-line cinematic-copy-secondary">
        <span>{secondaryLine}</span>
        <span>{secondaryLine}</span>
        <span>{secondaryLine}</span>
      </div>
    </div>
  );
}
