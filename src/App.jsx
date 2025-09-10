// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

/* ----------------- ASSETS ----------------- */
import Logo from "./assets/logo.png";
import HeroBG from "./assets/hero-bg.png";
import Icon1 from "./assets/icon-1.png";
import Icon2 from "./assets/icon-2.png";
import Icon3 from "./assets/icon-3.png";
import Icon4 from "./assets/icon-4.png";
import ChainImg from "./assets/chain.png";
import Gradient1 from "./assets/gradient-1.png";
import WavePattern from "./assets/wave-pattern.png";
import Partner1 from "./assets/partner-1.png";
import Partner2 from "./assets/partner-2.png";
import Partner3 from "./assets/partner-3.png";
import Partner4 from "./assets/partner-4.png";

/* ----------------- Small layout helpers ----------------- */
const Max = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ id, children, className = "", style }) => (
  <section id={id} className={`w-full ${className}`} style={style}>
    {children}
  </section>
);

const CTAButton = ({ to, children, variant = "primary", onClick }) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-white text-[#1511D1] hover:bg-slate-100",
    ghost: "bg-white/10 text-white hover:bg-white/20",
  };
  const cls = `${base} ${styles[variant] || styles.primary}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
};

/* ----------------- NAVBAR ----------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0A0B14]/80 backdrop-blur-md border-b border-white/10">
      <Max className="py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Vulue" className="h-8 w-8" />
            <span className="text-white font-semibold tracking-wide">VULUE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-white/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#suite" className="hover:text-white">TrailX Suite</a>
            <Link to="/login" className="ml-4 inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#1511D1]">Log in</Link>
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
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-xl bg-[#0A0B14]/95 p-3 ring-1 ring-white/10">
            <nav className="grid gap-2">
              <a href="#about" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/5">About</a>
              <a href="#partners" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/5">Partners</a>
              <a href="#insights" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/5">Insights</a>
              <a href="#suite" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/5">TrailX Suite</a>
              <Link to="/login" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/5">Log in</Link>
            </nav>
          </div>
        )}
      </Max>
    </header>
  );
}

/* ----------------- PARTNERS HERO (fixed: white text, no logos) ----------------- */
function PartnersHero() {
  return (
    <Section className="relative bg-[#0A0B14]">
      <div className="absolute inset-0 -z-10">
        <img src={WavePattern} alt="wave texture" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="absolute inset-0 bg-[#0A0B14]/70 -z-5" />
      <Max className="py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          A look at our partners paving the future!
        </h2>
      </Max>
    </Section>
  );
}

/* ----------------- TECHNOLOGY PROVIDER (blue heading text) ----------------- */
function TechnologyProvider() {
  return (
    <Section className="bg-white text-[#0A0B14] py-24">
      <Max>
        <h3 className="text-2xl font-semibold text-[#1511D1]">
          We are a Technology Provider & Partner to Proprietary Partners LLP
        </h3>
        <div className="mt-6 space-y-4 text-[#0A0B14]/90 leading-relaxed">
          <p>
            As a Private Family Office Partnership, our members and partners enjoy structured access to hedge-fund-style strategies while retaining the stability of traditional assets. With the support of trusted broker/dealers and sub-brokerages, VULUE enables the electronic infrastructure through which our family office operates.
          </p>
          <p>
            Together with VULUE, we maintain proprietary systems for the curation, aggregation, and in-house distribution of non-discretionary strategies — including speculative long/short trades, active rebalancing, passive baskets, and dividend-focused portfolios. These strategies are available exclusively to our limited partners and family office members.
          </p>
          <p>
            Our managing and limited member-shareholders gain exposure to consistently outperforming strategies and tailored planning across global and domestic Fixed Income and Money Market instruments, Equities, Derivatives, and selected alternative classes such as REITs, Infrastructure Funds, and digital assets. Both our in-house and third-party strategy contributors rely on VULUE’s proprietary technology to scrutinize the capital markets and identify opportunities.
          </p>
          <p className="uppercase text-sm font-semibold text-[#1511D1]">
            Access remains restricted to pre-admitted limited liability partners and members. The strategies provided do not constitute asset management services nor investment advice.
          </p>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- INSIGHTS (fixed left-aligned headline + TrailX) ----------------- */
function Insights() {
  return (
    <Section className="relative bg-[#0A0B14] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={ChainImg} alt="chain" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 bg-black/50 -z-5" />
      <Max className="relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-left">
            From <span className="text-white/70">insights</span> to impact!
          </h2>
          <p className="mt-4 text-white/80 text-left">
            We took a multi-stage approach and built a Quantamental Analytics Framework for improved decision-making across the organization. Results: faster execution cycles, clearer KPIs, and higher ROI.
          </p>
          <div className="mt-6 text-left">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
              Read the approach →
            </a>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 text-white/10 text-8xl font-extrabold select-none">
          TrailX
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- STRATEGIES BUILT (blue background) ----------------- */
function StrategiesBuilt() {
  return (
    <Section className="bg-[#1511D1] text-white py-24">
      <Max>
        <h3 className="text-2xl md:text-3xl font-bold">We took their strategies and built a Quantamental Analytics Framework for In-House Growth</h3>
        <div className="mt-6 space-y-4 text-white/90">
          <p>
            It is the proprietary software layer and third-party integrations streamlined, augmenting the research, simulation, of curated strategies exclusively within the Proprietary Partners LLP network. Enhancing value capture, we help build and maintain a semi-custom graphical user interface...
          </p>
          <p>
            It is a restricted-use system serving the internal strategy and analytics needs of LLP member-shareholders and pre-approved strategy providers. Through direct integration with broker-dealer, sub-broker, advisory pipes and curated data flows...
          </p>
          <p>
            VULUE continues to act as the technology partner, providing ongoing consulting, system upkeep, and new development. This relationship is structured around technology license royalties and bespoke PaaS fees...
          </p>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- PLATA × VULUE (gradient, glassmorphism fixed) ----------------- */
function PlataAndVulueCombined() {
  return (
    <Section className="relative bg-gradient-to-b from-[#08103a] to-[#0b2b6b] text-white py-24 overflow-hidden">
      <Max>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#6dd3ff] to-[#7b61ff]">
              Plata × Vulue
            </h2>
            <p className="mt-4 text-white/90">
              Vulue partners with Plata to unlock the full potential of Real-World Assets and Strategies. Our purpose is to democratize access to high-value assets...
            </p>
            <p className="mt-3 text-white/85">
              Vulue acts as the technology provider. It builds the rails (TrailX+ quant tools, order, reconciliation & settlement system, monitoring, token infrastructure). Plata acts as the service provider...
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[10vw] font-extrabold leading-none opacity-15 bg-gradient-to-r from-[#6dd3ff] to-[#7b61ff] bg-clip-text text-transparent">
                Plata × Vulue
              </div>
            </div>
            <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <h4 className="font-semibold">How it works</h4>
              <p className="mt-2 text-white/80">
                The vault strategies sit inside Plata (jurisdictional entities). The tokens sit inside Vulue (as wrappers/tracking instruments). The two are linked 1:1...
              </p>
            </div>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- TRAILX SUITE (quadrant smaller, TrailX beside) ----------------- */
function TrailxSuite() {
  return (
    <Section id="suite" className="bg-white py-24">
      <Max>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-0 w-48 h-48 rounded-lg overflow-hidden border border-neutral-200 shadow">
              <img src={Partner1} alt="p1" className="w-full h-full object-cover" />
              <img src={Partner2} alt="p2" className="w-full h-full object-cover" />
              <img src={Partner3} alt="p3" className="w-full h-full object-cover" />
              <img src={Partner4} alt="p4" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-neutral-600 font-semibold">TrailX</div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#0A0B14]">Our TrailX Suite</h3>
            <p className="mt-3 text-[#0A0B14]/80">
              The TrailX Suite is Vulue’s complete ecosystem of tools, insights, and partner solutions. The quadrant illustrates partner integrations combining into a single cohesive experience.
            </p>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- LANDING ----------------- */
function Landing() {
  return (
    <div className="bg-[#0A0B14] text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TogetherSection />
        <PartnersHero />
        <TechnologyProvider />
        <Insights />
        <StrategiesBuilt />
        <PlataAndVulueCombined />
        <TakeNextLeap />
        <TrailxSuite />
        <Footer />
      </main>
    </div>
  );
}

/* ----------------- EXPORT ----------------- */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
