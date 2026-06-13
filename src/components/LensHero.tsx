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
import { useEffect, useMemo, useState } from "react";
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

export function LensHero() {
  const reduceMotion = useReducedMotion();
  const [activeState, setActiveState] = useState<HeroState>("grau");
  const [skipMotion, setSkipMotion] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const sceneX = useTransform(pointerX, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-16, 16]);
  const sceneY = useTransform(pointerY, [-0.5, 0.5], reduceMotion || skipMotion ? [0, 0] : [-9, 9]);

  const motionDisabled = Boolean(reduceMotion || skipMotion);
  const activeLabel = useMemo(
    () => heroStates.find((item) => item.id === activeState)?.label ?? "Grau",
    [activeState]
  );

  useEffect(() => {
    if (motionDisabled) return;
    const timer = window.setInterval(() => {
      setActiveState((state) => (state === "grau" ? "solar" : "grau"));
    }, 7200);
    return () => window.clearInterval(timer);
  }, [motionDisabled]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className={`cinematic-hero hero-${activeState}`}
      aria-labelledby="hero-title"
      onPointerMove={activeState === "solar" ? handlePointerMove : undefined}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
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
              className="cinematic-glasses cinematic-glasses-grau"
              animate={motionDisabled ? undefined : { rotateY: [-2.4, 2.6, -2.4], y: [0, -7, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
                  src="/assets/scenes/sunset-dark.jpg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="hero-sunset-image"
                />
              </motion.div>
              <motion.div className="hero-sunset hero-sunset-filtered" style={{ x: sceneX, y: sceneY }}>
                <Image
                  src="/assets/scenes/sunset-dark.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="hero-sunset-image"
                />
              </motion.div>
            </div>

            <motion.div
              className="cinematic-glasses cinematic-glasses-solar"
              animate={motionDisabled ? undefined : { rotateY: [-2.8, 2.8, -2.8], y: [0, -6, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
        )}
      </AnimatePresence>

      <div className="hero-ui">
        <div className="hero-state-controls" aria-label="Estados do hero">
          {heroStates.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeState === item.id ? "is-active" : ""}
              onClick={() => setActiveState(item.id)}
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

        <button
          type="button"
          className="skip-motion"
          onClick={() => setSkipMotion(true)}
          disabled={skipMotion}
        >
          {skipMotion ? "Animação pausada" : "Pular animação"}
        </button>
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
