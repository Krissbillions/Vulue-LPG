// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";
import icon1 from "./assets/icon-1.png";
import icon2 from "./assets/icon-2.png";
import icon3 from "./assets/icon-3.png";
import icon4 from "./assets/icon-4.png";
import chainImg from "./assets/chain.png";
import gradient1 from "./assets/gradient-1.png";
import wavePattern from "./assets/wave-pattern.png";
import partner1 from "./assets/partner-1.png";
import partner2 from "./assets/partner-2.png";
import partner3 from "./assets/partner-3.png";
import partner4 from "./assets/partner-4.png";

/**
 * Overly-detailed single-file App.jsx that follows the supplied
 * section order and text. All sections are implemented inside a
 * single Landing component. Login route + waitlist modal included.
 *
 * Required assets (in src/assets/):
 *  - logo.png
 *  - hero-bg.png
 *  - icon-1.png, icon-2.png, icon-3.png, icon-4.png
 *  - chain.png
 *  - gradient-1.png
 *  - wave-pattern.png
 *  - partner-1.png .. partner-4.png
 */

/* ---------------- small helpers ---------------- */
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
);

/* ---------------- navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur-md bg-black/20 border-b border-white/5">
        <Container className="py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Vulue" className="h-8 w-8" />
            <span className="text-white font-semibold tracking-wide">VULUE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-white/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#suite" className="hover:text-white">TrailX Suite</a>
            <Link to="/login" className="ml-4 inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#1511D1]">
              Log in
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </Container>

        {open && (
          <div className="md:hidden bg-black/50 backdrop-blur border-t border-white/5">
            <div className="px-4 py-3 space-y-2">
              <a href="#about" className="block px-3 py-2 rounded-md text-white/90">About</a>
              <a href="#partners" className="block px-3 py-2 rounded-md text-white/90">Partners</a>
              <a href="#insights" className="block px-3 py-2 rounded-md text-white/90">Insights</a>
              <a href="#suite" className="block px-3 py-2 rounded-md text-white/90">TrailX Suite</a>
              <Link to="/login" className="block px-3 py-2 rounded-md text-white/90">Log in</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- hero ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #1511D1 0%, #1511D1 40%, #08081B 100%)" }}
      />
      <img src={heroBg} alt="hero texture" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none" />
      <Container className="relative flex min-h-[80vh] items-center pt-24 pb-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">Say hello <br /> to Vulue!</h1>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            The data-intelligent platform for strategy teams. Build hypotheses, test them with proprietary analytics, and move from <em>insight</em> to <em>impact</em> faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1]">Log in</Link>
            <a href="#about" className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">Learn more</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- software & intelligence section (with 4 icons) ---------------- */
function SoftwareIntelligence() {
  return (
    <section id="about" className="bg-[#0A0B14] text-white py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">We are a software and intelligence technology company</h2>
            <div className="mt-6 text-white/80 space-y-4 text-base leading-relaxed">
              <p>
                We are a software and intelligence technology company focused on powering collaborative finance in West Africa and other frontier markets.
              </p>
              <p>
                We aim to provide a platform-as-a-service infrastructure for friends, families, investment clubs, and strategy groups to explore, coordinate, and manage their investment interests — all through a secure, private environment backed by trusted capital market providers.
              </p>
              <p>
                Our platform, powered by TrailX+ enables the formation of digital strategy baskets hosted by LLPs, LPs, and registered capital managers. Each group or firm maintains control over visibility, access, and allocation logic for their unique plans.
              </p>
              <p>
                Vulue's mission is to streamline technology adoption across emerging capital ecosystems by building a regulated-aligned, modular platform where licensed entities and private groups can operate efficiently and transparently.
              </p>
              <p>
                We do not act as a broker-dealer, investment adviser, or asset manager, nor do we hold or move investor funds. All transactional access is provided via integration with duly licensed third-party API partners and intermediaries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6">
              <img src={icon1} alt="icon" className="h-10 mb-4" />
              <h3 className="text-lg font-semibold">Actionable Insights</h3>
              <p className="text-sm text-white/70 mt-2">Decision-grade dashboards built on live data streams.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <img src={icon2} alt="icon" className="h-10 mb-4" />
              <h3 className="text-lg font-semibold">Private & Secure</h3>
              <p className="text-sm text-white/70 mt-2">Zero-trust posture with rigorous permissioning.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <img src={icon3} alt="icon" className="h-10 mb-4" />
              <h3 className="text-lg font-semibold">Workflow Native</h3>
              <p className="text-sm text-white/70 mt-2">Integrates with the tools your team already uses.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <img src={icon4} alt="icon" className="h-10 mb-4" />
              <h3 className="text-lg font-semibold">Measurable Impact</h3>
              <p className="text-sm text-white/70 mt-2">Tie initiatives to outcomes and share the value.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- partners (gradient background; text left) ---------------- */
function PartnersSection() {
  return (
    <section id="partners" className="relative py-24">
      <img src={gradient1} alt="partner gradient" className="absolute inset-0 w-full h-full object-cover opacity-95 pointer-events-none" />
      <Container className="relative py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-[#0A0B14]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0B14]">A look at our partners paving the future!</h2>
            <p className="mt-4 text-[#0A0B14]/80 max-w-xl">We collaborate with industry leaders to unlock new value with proprietary frameworks and real-world deployments.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            <img src={partner1} alt="partner" className="h-12 object-contain" />
            <img src={partner2} alt="partner" className="h-12 object-contain" />
            <img src={partner3} alt="partner" className="h-12 object-contain" />
            <img src={partner4} alt="partner" className="h-12 object-contain" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- technology provider long white section ---------------- */
function TechnologyProviderSection() {
  return (
    <section className="bg-white text-[#0A0B14] py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">We are a Technology Provider & Partner to Proprietary Partners LLP</h3>
          <div className="prose prose-neutral">
            <p>
              ““As a Private Family Office Partnership, our members and partners enjoy structured access to hedge-fund-style strategies while retaining the stability of traditional assets. With the support of trusted broker/dealers and sub-brokerages, VULUE enables the electronic infrastructure through which our family office operates.
            </p>
            <p>
              Together with VULUE, we maintain proprietary systems for the curation, aggregation, and in-house distribution of non-discretionary strategies — including speculative long/short trades, active rebalancing, passive baskets, and dividend-focused portfolios. These strategies are available exclusively to our limited partners and family office members.
            </p>
            <p>
              Our managing and limited member-shareholders gain exposure to consistently outperforming strategies and tailored planning across global and domestic Fixed Income and Money Market instruments, Equities, Derivatives, and selected alternative classes such as REITs, Infrastructure Funds, and digital assets. Both our in-house and third-party strategy contributors rely on VULUE’s proprietary technology to scrutinize the capital markets and identify opportunities.
            </p>
            <p>
              Access remains restricted to pre-admitted limited liability partners and members. THE STRATEGIES PROVIDED THROUGH THIS PLATFORM DO NOT CONSTITUTE ASSET MANAGEMENT SERVICES NOR INVESTMENT ADVICE. THEY ARE DESIGNED SOLELY FOR THE INTERNAL USE OF OUR FAMILY OFFICE NETWORK OF FINANCIALLY SOPHISTICATED PARTNERS.”
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- insights (chain background; text top-right, TrailX bottom-left) ---------------- */
function InsightsSection() {
  return (
    <section id="insights" className="relative bg-[#0A0B14] text-white py-28 overflow-hidden">
      <img src={chainImg} alt="chain" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
      <Container>
        <div className="relative">
          <div className="grid md:grid-cols-2 items-start gap-6">
            <div className="order-2 md:order-1">
              {/* empty left: decorative */}
            </div>
            <div className="order-1 md:order-2 flex flex-col items-end">
              <h2 className="text-3xl md:text-4xl font-bold self-end">From <span className="text-white/60">insights</span> to impact!</h2>
              <p className="mt-4 text-white/70 max-w-md text-right">
                We took a multi-stage approach and built a Quantamental Analytics Framework for improved decision-making across the organization. Results: faster execution cycles, clearer KPIs, and higher ROI.
              </p>
            </div>
          </div>

          {/* TrailX label bottom-left */}
          <div className="absolute left-0 bottom-6 text-white/20 text-sm md:text-base font-extrabold">
            TrailX
          </div>
        </div>
      </Container>

      {/* decorative big faint text behind */}
      <div className="pointer-events-none select-none mt-8">
        <Container>
          <div style={{ WebkitTextStroke: "2px rgba(255,255,255,0.03)", textStroke: "2px rgba(255,255,255,0.03)" }} className="text-[10vw] font-extrabold leading-none text-transparent">
            Plata × Vulue
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ---------------- strategies built (blue block) ---------------- */
function StrategiesBuiltSection() {
  return (
    <section className="bg-[#1511D1] text-white py-28">
      <Container>
        <div className="max-w-4xl mx-auto text-left">
          <h3 className="text-3xl md:text-4xl font-bold">We took their strategies and built a Quantamental Analytics Framework for In-House Growth</h3>
          <div className="mt-6 text-white/90 space-y-4 text-base leading-relaxed">
            <p>
              It is the proprietary software layer and third party integrations streamlined, augmenting the research, simulation, of curated strategies exclusively within the Proprietary Partners LLP network. Enhancing value capture, we help build an maintain a semi-custom graphical user interface for which they carry out performance reporting, user management, and the analytics behind long/short, actively rebalanced, dividend-yielding, and passively structured baskets — with deep (manual and electronic) integration into ‘wealth-techs’ and legacy financial houses for equities, fixed income and alternatives access across Nigeria, the United States, and select global jurisdictions.
            </p>
            <p>
              It is a restricted-use system serving the internal strategy and analytics needs of LLP member-shareholders and pre-approved strategy providers. Through direct integration with broker-dealer, sub-broker, advisory pipes and curated data flows, TRAILX enables our to navigate high-alpha signal, Multi-Asset compression trends, Dividend resilience, Macro-regional correlation shifts, rapid suggestive weightings, inflation-devaluation hedged returns modelling.
            </p>
            <p>
              VULUE continues to act as the technology partner, providing ongoing consulting, system upkeep, and new development. This relationship is structured around technology license royalties and bespoke PaaS fees, ensuring the family office’s infrastructure remains both exclusive and adaptable to future opportunities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Vulue & Plata partnership descriptive section ---------------- */
function VuluePlataSection() {
  return (
    <section className="bg-white text-[#0A0B14] py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-left">
          <p className="text-base leading-relaxed whitespace-pre-line">
            Vulue partners with Plata to unlock the full potential of Real-World Assets and Strategies. Our purpose is to democratize access to high-value assets by providing a streamlined, end-to-end solution for tokenization. Functionally, we offer some of the tools for Plata to carry out asset wrapping, and the minting of Strategy Vaults as a class of our broader Real World Asset-Linked Vault Tokens. The project's core utility is twofold: for asset owners, it unlocks immediate liquidity and access to global capital markets; for investors, it offers fractional, transparent, and Iiquid access to investment classes like private credit notes and infrastructure bonds, with the value of the tokens engineered to mirror the underlying RWASs performances.
          </p>

          <p className="mt-6 text-base leading-relaxed whitespace-pre-line">
            Vulue acts as the technology provider. It builds the rails (TrailX+ quant tools, order, reconciliation & settlement sytem, monitoring, token infrastructure). Vulue issues the Asset-Linked Vault Tokens as digital wrappers but doesn’t “own” the strategies themselves. While Plata acts as the service provider & structuring arm (like a global holding wrapper). It sets up the subsidiaries/LLCs/LLPs in each market and holds/executes the real-world assets or strategies that the tokens mirror.
          </p>

          <p className="mt-6 text-base leading-relaxed whitespace-pre-line">
            The vault strategies sit inside Plata (jurisdictional entities). The tokens sit inside Vulue (as wrappers/tracking instruments). The two are linked 1:1 as Vulue can transparently monitor what Plata is doing and reflect that in token performance. Vulue makes it portable, visible, tokenized. Plata makes it legally holdable, bankable, compliant.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Plata × Vulue visual block ---------------- */
function PlataVulueBlock() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="bg-gradient-to-r from-[#0f2b8b] to-[#1511D1] text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">Plata × Vulue Collaboration</h2>
            <p className="text-white/90">
              By combining our methodologies and tools with Plata’s execution strength, Vulue provides unparalleled solutions designed for scale, adaptability, and future resilience.
            </p>
          </div>
        </Container>
      </div>
      <div className="pointer-events-none select-none text-[12vw] font-extrabold leading-none text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.03)", textStroke: "2px rgba(255,255,255,0.03)" }}>
        <Container>
          <div>Plata × Vulue</div>
        </Container>
      </div>
    </section>
  );
}

/* ---------------- Take your next leap (wave background + visible overlay) ---------------- */
function TakeYourNextLeap() {
  return (
    <section className="relative py-28">
      <img src={wavePattern} alt="wave" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <Container className="relative text-white py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">Take Your Next Leap with us</h3>
          <p className="mt-4 text-white/90">Join our early access program and be first to pilot new modules, shape roadmaps, and co-create value.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/login" className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1]">Log in to join wait-list</Link>
            <a href="#contact" className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 text-sm text-white">Contact team</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Our TrailX Suite (square quad) ---------------- */
function TrailXSuiteSection() {
  return (
    <section id="suite" className="bg-white py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-[#0A0B14]">Our TrailX Suite</h3>
          <p className="text-[#0A0B14]/80 mb-8">The TrailX Suite is Vulue’s complete ecosystem of tools, insights, and partner solutions. It’s built to accelerate outcomes and unlock enterprise-scale value.</p>

          {/* square divided into 4 quadrants */}
          <div className="mx-auto max-w-md aspect-square grid grid-cols-2 grid-rows-2 gap-2">
            <div className="flex items-center justify-center bg-gray-100">
              <img src={partner1} alt="partner" className="max-h-24 object-contain" />
            </div>
            <div className="flex items-center justify-center bg-gray-100">
              <img src={partner2} alt="partner" className="max-h-24 object-contain" />
            </div>
            <div className="flex items-center justify-center bg-gray-100">
              <img src={partner3} alt="partner" className="max-h-24 object-contain" />
            </div>
            <div className="flex items-center justify-center bg-gray-100">
              <img src={partner4} alt="partner" className="max-h-24 object-contain" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Footer (with embedded SVG icons for X + LinkedIn) ---------------- */
function Footer() {
  const X_LINK = "https://x.com/Vulueng";
  const LI_LINK = "https://www.linkedin.com/company/vulue-ltd/";

  return (
    <footer className="bg-[#0A0B14] text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vulue" className="h-8 w-8" />
            <div className="text-white/90 font-semibold">VULUE</div>
          </div>

          <nav className="flex items-center gap-6 text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#suite" className="hover:text-white">TrailX Suite</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={X_LINK} target="_blank" rel="noreferrer" className="hover:opacity-90">
              {/* X (Twitter) SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M23 4.559a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0022.337 3a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.95 4.1 6.87 1.671 3.865a4.92 4.92 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 01.96 9.1v.062c0 2.386 1.697 4.374 3.95 4.826a4.935 4.935 0 01-2.212.084c.623 1.942 2.432 3.357 4.576 3.399A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 21.5c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0023 4.559z" />
              </svg>
            </a>

            <a href={LI_LINK} target="_blank" rel="noreferrer" className="hover:opacity-90">
              {/* LinkedIn SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h4.98V24H0zM9 8h4.79v2.16h.07c.67-1.27 2.31-2.6 4.75-2.6 5.08 0 6.01 3.35 6.01 7.71V24h-4.98v-7.55c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 4v7.67H9V8z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-white/50 text-center">
          © {new Date().getFullYear()} Vulue — All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

/* ---------------- Waitlist modal (used by Login) ---------------- */
function WaitlistModal({ onClose, emailPrefill = "" }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState(emailPrefill || "");
  const canSubmit = firstName.trim() && surname.trim() && /\S+@\S+\.\S+/.test(email);

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${firstName} ${surname}! You’ve been added to the waitlist. We will contact you at ${email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vulue" className="h-6 w-6" />
            <div className="font-semibold">VULUE</div>
          </div>
          <button onClick={onClose} className="text-sm text-gray-500">Close</button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Join the waitlist</h3>
        <p className="text-sm text-gray-600 mb-4">We’ll notify you when sign-up opens.</p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-sm block mb-1">First name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="text-sm block mb-1">Surname</label>
            <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Doe" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="text-sm block mb-1">Work email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="w-full px-3 py-2 border rounded-md" />
          </div>

          <div className="flex gap-3 items-center">
            <button type="submit" disabled={!canSubmit} className={`px-4 py-2 rounded-md font-semibold ${canSubmit ? "bg-[#1511D1] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>Join waitlist</button>
            <button type="button" onClick={onClose} className="text-sm text-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------- login page (styled to match supplied login image aesthetics) ---------------- */
function LoginPage() {
  const [account, setAccount] = useState("Professional Account");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWaitlist, setShowWaitlist] = useState(false);

  const canConfirm = email.length > 3 && otp.length >= 4;

  const onConfirm = (e) => {
    e.preventDefault();
    // no signup; show waitlist modal
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <div className="pt-24">
        <Container>
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-10">Log In</h1>

            <form onSubmit={onConfirm} className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="text-sm text-white/70 block mb-2">Account Type</label>
                <div className="relative">
                  <select value={account} onChange={(e) => setAccount(e.target.value)} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 pr-10 text-white/90 outline-none ring-1 ring-white/10">
                    <option>Individual Account</option>
                    <option>Professional Account</option>
                    <option>Enterprise Account</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="text-sm text-white/70 block mb-2">Work Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter in your work email" className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="text-sm text-white/70 block mb-2">8-digit OTP</label>
                <div className="relative">
                  <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 8-digit OTP" maxLength={8} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 pr-10 text-white/90 outline-none ring-1 ring-white/10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-70">
                      <path d="M3 3l18 18M10.58 10.58A2 2 0 1113.41 13.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button type="button" onClick={() => alert("Password resets will be available at launch.") } className="text-sm text-[#1511D1]">Forgot Password?</button>
              </div>

              <button type="submit" disabled={!canConfirm} className={`mt-4 w-full rounded-[28px] px-6 py-4 text-lg font-semibold transition ${canConfirm ? "bg-white text-[#0A0B14]" : "bg-white/30 text-white/70 cursor-not-allowed"}`}>
                Confirm
              </button>
            </form>

            <div className="mt-16 flex items-center gap-2 opacity-80">
              <img src={logo} alt="Vulue" className="h-6 w-6" />
              <span className="tracking-wider text-white/70">VULUE</span>
            </div>
          </div>
        </Container>
      </div>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} emailPrefill={email} />}
    </div>
  );
}

/* ---------------- Landing page assembles all sections in the exact sequence requested ---------------- */
function Landing() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SoftwareIntelligence />
        <PartnersSection />
        <TechnologyProviderSection />
        <InsightsSection />
        <StrategiesBuiltSection />
        <VuluePlataSection />
        <PlataVulueBlock />
        <TakeYourNextLeap />
        <TrailXSuiteSection />
        <Footer />
      </main>
    </>
  );
}

/* ---------------- App root + routes ---------------- */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
          }
