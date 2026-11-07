"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cpu,
  Layers3,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const deliveryAreas = [
  {
    label: "BUILD",
    detail: "Infrastructure & hardware",
    href: "/services/build",
    icon: Cpu,
  },
  {
    label: "TRANSFORM",
    detail: "Software, AI & digital solutions",
    href: "/services/transform",
    icon: Layers3,
  },
  {
    label: "SECURE",
    detail: "Cybersecurity & protection",
    href: "/services/secure",
    icon: LockKeyhole,
  },
  {
    label: "VALIDATE",
    detail: "CSV & compliance",
    href: "/services/validate",
    icon: ShieldCheck,
  },
];

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: { effectiveType?: string; saveData?: boolean };
      }
    ).connection;
    const isSlowConnection = ["slow-2g", "2g", "3g"].includes(
      connection?.effectiveType ?? "",
    );
    const canPlayBackground =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !connection?.saveData &&
      !isSlowConnection;

    if (canPlayBackground) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#E8EDF2] px-5 pb-8 pt-10 text-brand-navy sm:px-8 sm:py-14 lg:px-10 lg:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {videoLoaded ? (
          <video
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onError={() => setVideoLoaded(false)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
          >
            <source src="/ai.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(197,103,53,0.22),transparent_34%),linear-gradient(125deg,#102653_0%,#06143D_52%,#030B22_100%)]" />
        )}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,11,34,0.72)_0%,rgba(3,11,34,0.52)_48%,rgba(3,11,34,0.34)_100%),linear-gradient(0deg,rgba(3,11,34,0.28)_0%,rgba(3,11,34,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-64 z-[2] h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-orange-200/35 via-amber-100/15 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="mx-auto max-w-2xl text-left lg:mx-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#C56735]" />
            Your partner for technology that works
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.1rem] xl:text-6xl">
            Move forward with
            <span className="mt-1 block">
              <span className="text-[#FDBA74]">confidence</span>{" "}
              <span>in every system.</span>
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-100 sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl">
            From modernizing enterprise technology to validating critical
            systems, Coreridge helps your teams make complex change feel clear,
            secure, and manageable.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:items-center sm:mt-7">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/70 bg-[#315579]/95 px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-10px_rgba(6,20,61,0.55)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#274766] hover:shadow-[0_12px_24px_-10px_rgba(6,20,61,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-navy active:translate-y-0 motion-reduce:transition-none"
            >
              <span className="relative">Talk to our team</span>
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-[#C56735]">
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </span>
            </Link>
            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm backdrop-blur-md transition hover:border-white/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore our services
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#A95122] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap justify-start gap-x-3 gap-y-3 text-sm font-medium text-slate-100 sm:mt-6">
            {[
              "Practical expertise",
              "Clear communication",
              "Built around your needs",
            ].map((item) => (
              <span
                key={item}
                className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-3.5 py-2 shadow-sm backdrop-blur-md ${
                  item === "Practical expertise" ? "bg-white/15" : "bg-white/10"
                }`}
              >
                <Check aria-hidden="true" className="h-4 w-4 text-[#FDBA74]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/55 bg-white/30 p-4 text-brand-navy shadow-2xl shadow-brand-navy/10 backdrop-blur-[2px] sm:p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/25 pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FDBA74]">
                  Our services
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  One partner. A clearer path.
                </h2>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-orange-200">
                <Cpu aria-hidden="true" className="h-4 w-4" />
              </div>
            </div>

            <div className="divide-y divide-white/15 py-2">
              {deliveryAreas.map(({ label, detail, href, icon: Icon }, index) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold tracking-wide text-white">
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-slate-100">
                      {detail}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#FDBA74]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>

            <div className="p-2">
              <p className="text-xs font-medium text-slate-100">
                From planning to ongoing support
              </p>
              <div className="mt-2 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 flex-1 rounded-full bg-white" />
                <span className="h-1 flex-1 rounded-full bg-white/55" />
                <span className="h-1 flex-1 rounded-full bg-[#FDBA74]" />
              </div>
              <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-200">
                <span>Plan</span>
                <span>Deliver</span>
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-3 hidden w-fit items-center justify-center gap-3 rounded-2xl border border-white/55 bg-white/10 px-4 py-3 text-white shadow-xl shadow-brand-navy/5 backdrop-blur-[2px] sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-[#FDBA74]">
              <Check aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold">Thoughtful delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
