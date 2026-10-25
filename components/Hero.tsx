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
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fc] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10 lg:pb-28 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 -left-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-100/70 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#184491] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Your partner for technology that works
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Move forward with
            <span className="mt-1 block text-[#184491]">
              confidence in every system.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            From modernizing enterprise technology to validating critical
            systems, Coreridge helps your teams make complex change feel clear,
            secure, and manageable.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#184491] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#123975] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#184491]"
            >
              Talk to our team
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#184491]"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            {["Practical expertise", "Clear communication", "Built around your needs"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-white/20 to-cyan-100/70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-4 shadow-[0_28px_80px_-32px_rgba(15,42,86,0.32)] sm:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#184491]">
                  Our services
                </p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                  One partner. A clearer path.
                </h2>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#184491]">
                <Cpu aria-hidden="true" className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-2 py-4">
              {deliveryAreas.map(({ label, detail, icon: Icon }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 transition hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#184491] shadow-sm">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-bold tracking-wide text-slate-900">{label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{detail}</p>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#102b55] p-4 text-white">
              <p className="text-xs font-medium text-blue-100">
                From planning to ongoing support
              </p>
              <div className="mt-3 flex items-center gap-2" aria-hidden="true">
                <span className="h-1 flex-1 rounded-full bg-blue-300" />
                <span className="h-1 flex-1 rounded-full bg-blue-400/80" />
                <span className="h-1 flex-1 rounded-full bg-cyan-300/80" />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] font-medium text-blue-100/80">
                <span>Plan</span>
                <span>Deliver</span>
                <span>Support</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Check aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-slate-800">
              Thoughtful delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
