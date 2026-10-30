"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Cpu,
  Layers3,
  LockKeyhole,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";

const deliveryAreas = [
  { label: "BUILD", detail: "Infrastructure & hardware", icon: Cpu },
  {
    label: "TRANSFORM",
    detail: "Software, AI & digital solutions",
    icon: Layers3,
  },
  { label: "SECURE", detail: "Cybersecurity & protection", icon: LockKeyhole },
  { label: "VALIDATE", detail: "CSV & compliance", icon: ShieldCheck },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(
        () => setIsPlaying(true),
        () => setIsPlaying(false),
      );
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fc] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-10 lg:pb-12">
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70 motion-reduce:hidden"
      >
        <source src="/ai.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleVideoPlayback}
        aria-label={`${isPlaying ? "Pause" : "Play"} background video`}
        aria-pressed={!isPlaying}
        className="absolute bottom-4 right-14 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/25 text-brand-navy/70 backdrop-blur-sm transition hover:border-white/60 hover:bg-white/60 hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange motion-reduce:hidden sm:right-16"
      >
        {isPlaying ? (
          <Pause aria-hidden="true" className="h-3.5 w-3.5" />
        ) : (
          <Play aria-hidden="true" className="h-3.5 w-3.5" />
        )}
      </button>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/70 via-white/55 to-blue-50/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 -left-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-100/40 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="mx-auto max-w-2xl text-center lg:mx-0">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white/85 px-5 py-2.5 text-base font-semibold text-brand-navy shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
            Your partner for technology that works
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-brand-navy drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            Move forward with
            <span className="mt-1 block">
              <span className="text-brand-orange">confidence</span> in every
              system.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-7 text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] sm:text-lg sm:leading-8 lg:text-xl">
            From modernizing enterprise technology to validating critical
            systems, Coreridge helps your teams make complex change feel clear,
            secure, and manageable.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Talk to our team
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 text-brand-orange-light transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-brand-navy/25 bg-white/85 px-6 py-3.5 text-base font-semibold text-brand-navy transition hover:border-brand-navy/50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-800">
            {["Practical expertise", "Clear communication", "Built around your needs"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check aria-hidden="true" className="h-4 w-4 text-brand-orange" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/35 p-3 shadow-lg shadow-brand-navy/10 backdrop-blur-sm sm:p-4">
            <div className="flex items-center justify-between gap-3 border-b border-brand-navy/15 pb-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-navy">
                  Our services
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight text-brand-navy sm:text-xl">
                  One partner. A clearer path.
                </h2>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-brand-orange">
                <Cpu aria-hidden="true" className="h-4 w-4" />
              </div>
            </div>

            <div className="divide-y divide-brand-navy/15 py-1">
              {deliveryAreas.map(({ label, detail, icon: Icon }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-2 py-2 transition-colors hover:bg-white/20 sm:gap-3 sm:py-2.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center text-brand-navy">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-bold tracking-wide text-brand-navy">{label}</p>
                    <p className="mt-0.5 text-xs font-medium text-slate-700">{detail}</p>
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-brand-orange">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-2">
              <p className="text-xs font-semibold text-brand-navy">
                From planning to ongoing support
              </p>
              <div className="mt-2 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 flex-1 rounded-full bg-brand-navy/80" />
                <span className="h-1 flex-1 rounded-full bg-brand-navy/55" />
                <span className="h-1 flex-1 rounded-full bg-brand-orange/75" />
              </div>
              <div className="mt-1 flex justify-between text-[10px] font-semibold text-slate-700">
                <span>Plan</span>
                <span>Deliver</span>
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="relative ml-4 mt-3 hidden w-fit items-center gap-3 rounded-2xl border border-brand-navy/10 bg-white/90 px-4 py-3 shadow-xl sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <Check aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-brand-navy">
              Thoughtful delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
