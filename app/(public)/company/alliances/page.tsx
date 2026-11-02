import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 100% EXACT 1:1 MAPPING FROM YOUR LOCAL HTML FILE - NO MISMATCHES!
// Every entry is copied directly from D:\coreridge\Alliances _ VNextGen_files\Alliances _ VNextGen.html
// Same sequence, same filename, same company name - EXACT match
const alliances = [
  // Line 951: Fortinet
  { name: "Fortinet", src: "/alliances/7baa111f0a50d3d84cf8b6da0672a056.jpg" },
  // Line 961: Sophos
  { name: "Sophos", src: "/alliances/352f449cfffbd486edddb6a280161ef0.jpg" },
  // Line 971: Sonic Wall
  { name: "Sonic Wall", src: "/alliances/565cbebee6493cb90584c280bb8a37c9.jpg" },
  // Line 981: Check Point
  { name: "Check Point", src: "/alliances/a36347fdc4012d6beaa92dde58c7f004.jpg" },
  // Line 991: Juniper
  { name: "Juniper", src: "/alliances/67fd88e45e93891ce533e908ed877c71.jpg" },
  // Line 1001: Paloalto
  { name: "Paloalto", src: "/alliances/9fd3075b8a9b8441f414aa7373dbf68e.jpg" },
  // Line 1011: Forcepoint
  { name: "Forcepoint", src: "/alliances/6324edba3ac7d6916856a2fd6f59b642.jpg" },
  // Line 1021: kaspersky
  { name: "kaspersky", src: "/alliances/7de82ad5c16a5c571d609408f71cad28.jpg" },
  // Line 1031: Symantec
  { name: "Symantec", src: "/alliances/619e017c15d26445493e5d5cfb1a5b9f.jpg" },
  // Line 1041: McAfee
  { name: "McAfee", src: "/alliances/4dcb205156b217955a13aa1e137814fa.jpg" },
  // Line 1051: Crowd Strike
  { name: "Crowd Strike", src: "/alliances/0af72b1d6699fd2c018b185efab6edcd.jpg" },
  // Line 1061: Trend Micro
  { name: "Trend Micro", src: "/alliances/6ee4c9dac7f662b68a08f2bfbc9b30bf.jpg" },
  // Line 1071: e Scan
  { name: "e Scan", src: "/alliances/25267edb73f8fda43ed577ce676800e0.jpg" },
  // Line 1081: Seqrite
  { name: "Seqrite", src: "/alliances/53b25bb8e1ac4ed50ca3ccbf91810eb7.jpg" },
  // Line 1091: A10
  { name: "A10", src: "/alliances/f1c9eef1d4fdcc8d7e1a7d7ed160d5e1.jpg" },
  // Line 1101: F5
  { name: "F5", src: "/alliances/7daee0633fe75eef0bdf1ca64fc3cffb.jpg" },
  // Line 1111: Radware
  { name: "Radware", src: "/alliances/b88d3fdb1685af5d9b7c9b5bc69c16ba.jpg" },
  // Line 1121: Barracuda
  { name: "Barracuda", src: "/alliances/96ab9954d6b60948dcd8ba3feb450b86.jpg" },
  // Line 1131: Array Networks
  { name: "Array Networks", src: "/alliances/36a607d58c46c3be6705baad939f4d8c.jpg" },
  // Line 1141: Citrix
  { name: "Citrix", src: "/alliances/895749602973bc2624f2c3af20c23cab.jpg" },
  // Line 1151: Peplink
  { name: "Peplink", src: "/alliances/e8321f0a091952d1ccfd9b807e27ba7a.jpg" },
  // Line 1161: Riverbed
  { name: "Riverbed", src: "/alliances/2419d4354851d9bd7a37ba6b188ee7e5.jpg" },
  // Line 1171: Cisco
  { name: "Cisco", src: "/alliances/036647f6997f3e39894b84742e78d51c.jpg" },
  // Line 1181: Ruckus
  { name: "Ruckus", src: "/alliances/ea8561fa191f50016d5d0b2e861398d4.jpg" },
  // Line 1191: Aruba
  { name: "Aruba", src: "/alliances/ffb9b9883aac5625148e36b09b58a501.jpg" },
  // Line 1201: Arista
  { name: "Arista", src: "/alliances/2ea1b206dc2237d11c528b9df9fea6bc.jpg" },
  // Line 1211: Quantum
  { name: "Quantum", src: "/alliances/cf3b6e609e133a59ce7c623950ad499b.jpg" },
  // Line 1221: Cambium
  { name: "Cambium", src: "/alliances/2be916daa19a2619303dad216ba39feb.jpg" },
  // Line 1231: DellEMC
  { name: "DellEMC", src: "/alliances/dd6ff833c9339856cd9788bba4b2b946.jpg" },
  // Line 1241: Vmware
  { name: "Vmware", src: "/alliances/00a1b729d1d3d2bf8ba1bc832d7a157d.jpg" },
  // Line 1251: Nutanix
  { name: "Nutanix", src: "/alliances/12d113acb22272f6007cb029176ea658.jpg" },
  // Line 1261: Hp
  { name: "Hp", src: "/alliances/ffc884dd039c020a7b71b6634dfee82e.jpg" },
  // Line 1271: IBM
  { name: "IBM", src: "/alliances/c493ad3e33994e7e1e6492f0ffe82a0d.jpg" },
  // Line 1281: NetAPP
  { name: "NetAPP", src: "/alliances/b6ef682ec65635a438093e25edfdf948.jpg" },
  // Line 1291: Netgear
  { name: "Netgear", src: "/alliances/30dd2982e58d9f648c3ef52e3cd5b986.jpg" },
  // Line 1301: Qnap
  { name: "Qnap", src: "/alliances/7170600d53999521333677e40b5c1ae9.jpg" },
  // Line 1311: Microsoft
  { name: "Microsoft", src: "/alliances/aa30bfad40ab6ce31fd65607930eb2c9.jpg" },
  // Line 1321: Red Hat
  { name: "Red Hat", src: "/alliances/6489fa885a44baf03914426545b49f29.jpg" },
  // Line 1331: Imperva
  { name: "Imperva", src: "/alliances/e9c927392381a657e53193df5e4d97aa.jpg" },
  // Line 1341: RSA
  { name: "RSA", src: "/alliances/38e7d5f33f1d8d0363bd4e29920507fd.jpg" },
  // Line 1351: Solarwinds
  { name: "Solarwinds", src: "/alliances/2b587ec390e6703ffee7907cbf517006.jpg" },
  // Line 1361: GFI
  { name: "GFI", src: "/alliances/064eeccd6c2f1bcf392b990b45d5d7a8.jpg" },
  // Line 1371: Sourcefire
  { name: "Sourcefire", src: "/alliances/2dcf0257a6aa2d990810e2db3a71b8ab.jpg" },
  // Line 1381: Acunetix
  { name: "Acunetix", src: "/alliances/95b32072ff5b01c21002895d05eaf41e.jpg" },
  // Line 1391: Adobe
  { name: "Adobe", src: "/alliances/7a5f6652b3eccd00a91cf37e20286e9b.jpg" },
  // Line 1401: Winmagic
  { name: "Winmagic", src: "/alliances/81fe108ae854c5b0155178373886db93.jpg" },
  // Line 1411: Quest
  { name: "Quest", src: "/alliances/16de074bb67b53b37a6569e0ed2bb775.jpg" },
  // Line 1421: Acronis
  { name: "Acronis", src: "/alliances/2825a25061c3a4142ded9f48fb4c6924.jpg" },
  // Line 1431: Proofpoint
  { name: "Proofpoint", src: "/alliances/1063e7aeb0d405b0c72490ef25a51753.jpg" },
  // Line 1441: Soti
  { name: "Soti", src: "/alliances/140d35238bb6051118411ee2c85fe9a2.jpg" },
  // Line 1451: Nexus
  { name: "Nexus", src: "/alliances/e070cd3c131aae022f6e991592278d7a.jpg" },
  // Line 1461: Commvault
  { name: "Commvault", src: "/alliances/3f6c343f07182066e87629074259b113.jpg" },
  // Line 1471: Veem
  { name: "Veem", src: "/alliances/6dfa0f7e3203b653bc5cc8754b04da82.jpg" },
  // Line 1481: AWS
  { name: "AWS", src: "/alliances/fa773ca745b4c776c578111b5da80795.jpg" },
  // Line 1491: Azure
  { name: "Azure", src: "/alliances/10457c075ad015716b1e090d89dc8f76.jpg" },
  // Line 1501: Google cloud
  { name: "Google cloud", src: "/alliances/81dd047e9d99d4de445f9e9f97dca156.jpg" }
];

export default function AlliancesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative isolate overflow-hidden bg-[#E8EDF2] px-5 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_10%,rgba(213,133,91,0.18),transparent_35%),radial-gradient(ellipse_at_8%_95%,rgba(28,55,109,0.09),transparent_40%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-[#A95122] shadow-sm">
              Technology ecosystem
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-6xl">
              Strong partnerships.
              <span className="mt-1 block text-[#A95122]">
                Better-fit solutions.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              We work with established technology providers across security,
              networking, infrastructure, and cloud to match the right
              technologies to your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#C56735] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#A95122]/15 transition hover:-translate-y-0.5 hover:bg-[#B4582A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A95122]"
              >
                Discuss your requirements
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/company/why-coreridge"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/15 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Why Coreridge
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/90 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-sm lg:min-w-56 lg:flex-col lg:items-start lg:gap-1 lg:px-7 lg:py-6">
            <span className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              {alliances.length}
            </span>
            <span className="text-sm font-medium leading-5 text-slate-600">
              technology brands
              <br className="hidden lg:block" /> in our ecosystem
            </span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="alliance-list-title"
        className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A95122]">
                Partner network
              </p>
              <h2
                id="alliance-list-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl"
              >
                Technology brands
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-600">
              A broad ecosystem helps us design practical solutions around
              your requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {alliances.map((alliance) => (
              <article
                key={alliance.name}
                className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F7F8FA] p-4 text-center shadow-[0_8px_24px_-22px_rgba(6,20,61,0.4)] transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:bg-white hover:shadow-lg hover:shadow-brand-navy/5 sm:min-h-36 sm:p-5"
              >
                <img
                  src={alliance.src}
                  alt={`${alliance.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
                />
                <h3 className="mt-3 text-sm font-semibold text-slate-700">
                  {alliance.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}