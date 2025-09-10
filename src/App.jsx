// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/*
  Extremely long single-file App.jsx that follows the reference corrections:
  - Navbar is dark/transparent (no white band above it)
  - "A look at our partners paving the future!" is white text on a textured gradient background (no partner logos in that section)
  - "We are a Technology Provider & Partner to Proprietary Partners LLP" section uses blue heading text on white background with the long legal/business write-up
  - "From insights to impact!" is left-aligned; chain graphic sits behind content
  - The section above "Plata × Vulue" is a blue background block with the long "We took their strategies..." copy
  - "Plata × Vulue" has a large decorative gradient/glass text treatment (visual effect only)
  - "Take Your Next Leap" uses the wave background and visible CTA
  - "Our TrailX Suite" is a smaller square quadrant block (not huge) positioned left, with TrailX label/text beside it
  - Footer contains X and LinkedIn links (embedded SVG)
  - Login page matches the supplied login aesthetic, with diagonal lines and waitlist modal
  - Required assets must exist in src/assets/: logo.png, hero-bg.png, icon-1..4, chain.png, gradient-1.png, wave-pattern.png, partner-1..4
*/

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

/* ----------------- Helpers ----------------- */
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
    dark: "bg-neutral-900 text-white hover:bg-black/80",
  };
  return to ? (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

/* ----------------- NAVBAR ----------------- */
/* Transparent/dark navbar (no white gap). Fixed at top. */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/30 backdrop-blur-md border-b border-white/6">
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
            <div className="md:hidden mt-3 rounded-xl bg-black/60 p-3 ring-1 ring-white/10">
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
      </div>
    </header>
  );
}

/* ----------------- HERO ----------------- */
function Hero() {
  return (
    <Section className="relative isolate overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #1511D1 0%, #1511D1 40%, #08081B 100%)" }} />
      <img src={HeroBG} alt="texture" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay pointer-events-none" />
      <Max className="relative min-h-[82vh] flex flex-col justify-center pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-white/95 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">Say hello <br /> to Vulue!</h1>
          <p className="mt-6 text-white/80 text-base/7 max-w-xl">
            The data-intelligent platform for strategy teams. Build hypotheses, test them with proprietary analytics, and move from <em>insight</em> to <em>impact</em> faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/login" variant="primary">Log in</CTAButton>
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">Learn more</a>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- TOGETHER WE CREATE (icons + text) ----------------- */
function TogetherSection() {
  return (
    <Section className="bg-[#0A0B14] text-white py-24">
      <Max>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Together we <span className="text-white/60">create</span></h2>
            <p className="mt-5 max-w-xl text-white/70">
              A collaborative analytics surface where strategists, operators and partners converge to build the future—faster, safer, and with better signal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur">
              <img src={Icon1} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-white font-semibold">Actionable Insights</h3>
              <p className="mt-2 text-sm text-white/70">Decision-grade dashboards built on live data streams.</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur">
              <img src={Icon2} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-white font-semibold">Private & Secure</h3>
              <p className="mt-2 text-sm text-white/70">Zero-trust posture with rigorous permissioning.</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur">
              <img src={Icon3} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-white font-semibold">Workflow Native</h3>
              <p className="mt-2 text-sm text-white/70">Integrates with the tools your team already uses.</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur">
              <img src={Icon4} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-white font-semibold">Measurable Impact</h3>
              <p className="mt-2 text-sm text-white/70">Tie initiatives to outcomes and share the value.</p>
            </div>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- PARTNERS HERO (white text on gradient background — NO logos here) ----------------- */
function PartnersHero() {
  return (
    <Section className="relative">
      {/* full bleed gradient texture */}
      <div className="absolute inset-0 -z-10">
        <img src={Gradient1} alt="gradient texture" className="w-full h-full object-cover" />
      </div>

      {/* overlay dark tint so white text is readable */}
      <div className="absolute inset-0 bg-black/30 -z-5" />

      <Max className="py-20 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">A look at our partners paving the future!</h2>
          <p className="mt-6 text-white/80">
            We collaborate with industry leaders to unlock new value with proprietary frameworks and real-world deployments.
          </p>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- TECHNOLOGY PROVIDER (white page with blue heading text) ----------------- */
function TechnologyProvider() {
  return (
    <Section className="bg-white text-[#0A0B14] py-20">
      <Max>
        <div className="max-w-4xl">
          <h3 className="text-2xl font-semibold text-[#1511D1]">We are a Technology Provider & Partner to Proprietary Partners LLP</h3>

          <div className="mt-6 prose prose-neutral max-w-none text-[#0A0B14] leading-relaxed">
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
      </Max>
    </Section>
  );
}

/* ----------------- INSIGHTS (chain image behind; left-aligned text) ----------------- */
function Insights() {
  return (
    <Section className="relative bg-[#0A0B14] text-white overflow-hidden py-20">
      {/* Chain graphic sits behind content */}
      <div className="absolute inset-0 -z-10">
        <img src={ChainImg} alt="chain" className="w-full h-full object-cover opacity-20" />
      </div>

      <Max>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left-aligned headline + copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From <span className="text-white/60">insights</span> to impact!</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              We took a multi-stage approach and built a Quantamental Analytics Framework for improved decision-making across the organization. Results: faster execution cycles, clearer KPIs, and higher ROI.
            </p>
            <div className="mt-6">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                Read the approach →
              </a>
            </div>
          </div>

          {/* Right visual placeholder — chain close-up */}
          <div className="relative flex items-center justify-end">
            <div className="w-[60%] md:w-[80%] max-w-[520px]">
              <img src={ChainImg} alt="chain graphic" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </Max>

      {/* TrailX small label bottom-left with low opacity */}
      <div className="absolute left-6 bottom-6 text-white/10 text-sm font-extrabold">TrailX</div>

      {/* Decorative Plata × Vulue faint typography behind (separate section visually but included here) */}
      <div className="pointer-events-none select-none mt-8">
        <Max>
          <div className="text-[10vw] font-extrabold leading-none text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.03)", textStroke: "2px rgba(255,255,255,0.03)" }}>
            Plata × Vulue
          </div>
        </Max>
      </div>
    </Section>
  );
}

/* ----------------- STRATEGIES BUILT (blue background long copy) ----------------- */
function StrategiesBuilt() {
  return (
    <Section className="bg-[#1511D1] text-white py-24">
      <Max>
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold">We took their strategies and built a Quantamental Analytics Framework for In-House Growth</h3>
          <div className="mt-6 text-white/90 space-y-4 text-base leading-relaxed">
            <p>
              It is the proprietary software layer and third party integrations streamlined, augmenting the research, simulation, of curated strategies exclusively within the Proprietary Partners LLP network. Enhancing value capture, we help build and maintain a semi-custom graphical user interface for which they carry out performance reporting, user management, and the analytics behind long/short, actively rebalanced, dividend-yielding, and passively structured baskets — with deep (manual and electronic) integration into ‘wealth-techs’ and legacy financial houses for equities, fixed income and alternatives access across Nigeria, the United States, and select global jurisdictions.
            </p>
            <p>
              It is a restricted-use system serving the internal strategy and analytics needs of LLP member-shareholders and pre-approved strategy providers. Through direct integration with broker-dealer, sub-broker, advisory pipes and curated data flows, TRAILX enables our users to navigate high-alpha signal, Multi-Asset compression trends, Dividend resilience, Macro-regional correlation shifts, rapid suggestive weightings, inflation-devaluation hedged returns modelling.
            </p>
            <p>
              VULUE continues to act as the technology partner, providing ongoing consulting, system upkeep, and new development. This relationship is structured around technology license royalties and bespoke PaaS fees, ensuring the family office’s infrastructure remains both exclusive and adaptable to future opportunities.
            </p>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- VULUE + PLATA DESCRIPTION (white background) ----------------- */
function VuluePlata() {
  return (
    <Section className="bg-white text-[#0A0B14] py-20">
      <Max>
        <div className="max-w-4xl">
          <h4 className="text-xl font-semibold mb-3">Vulue partners with Plata</h4>
          <div className="prose prose-neutral">
            <p>
              Vulue partners with Plata to unlock the full potential of Real-World Assets and Strategies. Our purpose is to democratize access to high-value assets by providing a streamlined, end-to-end solution for tokenization. Functionally, we offer some of the tools for Plata to carry out asset wrapping, and the minting of Strategy Vaults as a class of our broader Real World Asset-Linked Vault Tokens. The project's core utility is twofold: for asset owners, it unlocks immediate liquidity and access to global capital markets; for investors, it offers fractional, transparent, and liquid access to investment classes like private credit notes and infrastructure bonds, with the value of the tokens engineered to mirror the underlying RWASs performances.
            </p>

            <p>
              Vulue acts as the technology provider. It builds the rails (TrailX+ quant tools, order, reconciliation & settlement system, monitoring, token infrastructure). Vulue issues the Asset-Linked Vault Tokens as digital wrappers but doesn’t “own” the strategies themselves. While Plata acts as the service provider & structuring arm (like a global holding wrapper). It sets up the subsidiaries/LLCs/LLPs in each market and holds/executes the real-world assets or strategies that the tokens mirror.
            </p>

            <p>
              The vault strategies sit inside Plata (jurisdictional entities). The tokens sit inside Vulue (as wrappers/tracking instruments). The two are linked 1:1 as Vulue can transparently monitor what Plata is doing and reflect that in token performance. Vulue makes it portable, visible, tokenized. Plata makes it legally holdable, bankable, compliant.
            </p>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- PLATA × VULUE VISUAL (gradient/glass text, separate visual block) ----------------- */
function PlataVulueVisual() {
  return (
    <Section className="relative py-20 overflow-hidden">
      <div className="bg-gradient-to-r from-[#0b2370] via-[#1511D1] to-[#2aa6f6] py-16">
        <Max>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Plata × Vulue</h2>
            <p className="text-white/90">A collaborative partnership to deliver tokenized real-world asset strategies and regulated structuring across global markets.</p>
          </div>
        </Max>
      </div>

      {/* big decorative gradient text behind (glass-like) */}
      <div className="pointer-events-none select-none mt-6">
        <Max>
          <div style={{ background: "linear-gradient(90deg,#6dd3ff,#7b61ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} className="text-[12vw] font-extrabold leading-none">
            Plata × Vulue
          </div>
        </Max>
      </div>
    </Section>
  );
}

/* ----------------- TAKE YOUR NEXT LEAP (wave background) ----------------- */
function TakeNextLeap() {
  return (
    <Section className="relative py-20">
      <img src={WavePattern} alt="waves" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      <Max className="relative text-white py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">Take Your Next Leap with us</h3>
          <p className="mt-4 text-white/90">Join our early access program and be first to pilot new modules, shape roadmaps, and co-create value.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/login" className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1]">Log in to join wait-list</Link>
            <a href="#contact" className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 text-sm text-white">Contact team</a>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- TRAILX SUITE (small quadrant square left with text on right) ----------------- */
function TrailxSuite() {
  return (
    <Section id="suite" className="bg-white py-20">
      <Max>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: small square quadrant (not huge) */}
          <div className="md:col-span-1">
            <div className="max-w-xs">
              <div className="aspect-square max-w-[240px] grid grid-cols-2 grid-rows-2 gap-1 rounded-lg overflow-hidden border border-neutral-100 shadow-sm">
                <div className="flex items-center justify-center bg-gray-50"><img src={Partner1} alt="p1" className="max-h-20 object-contain" /></div>
                <div className="flex items-center justify-center bg-gray-50"><img src={Partner2} alt="p2" className="max-h-20 object-contain" /></div>
                <div className="flex items-center justify-center bg-gray-50"><img src={Partner3} alt="p3" className="max-h-20 object-contain" /></div>
                <div className="flex items-center justify-center bg-gray-50"><img src={Partner4} alt="p4" className="max-h-20 object-contain" /></div>
              </div>
              <div className="mt-4 text-sm text-neutral-600 font-semibold">Our TrailX Suite</div>
            </div>
          </div>

          {/* Right: descriptive text spanning two columns on md */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#0A0B14]">Our TrailX Suite</h3>
            <p className="mt-3 text-[#0A0B14]/80">
              The TrailX Suite is Vulue’s complete ecosystem of tools, insights, and partner solutions. It’s built to accelerate outcomes and unlock enterprise-scale value. The square on the left represents partner integrations and platform modules combining into a single cohesive experience.
            </p>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ----------------- FOOTER (with X + LinkedIn icons) ----------------- */
function Footer() {
  const X_LINK = "https://x.com/Vulueng";
  const LI_LINK = "https://www.linkedin.com/company/vulue-ltd/";

  return (
    <footer className="bg-[#0A0B14] text-white py-12">
      <Max>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Vulue" className="h-8 w-8" />
            <div className="font-semibold">VULUE</div>
          </div>

          <nav className="flex items-center gap-6 text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#suite" className="hover:text-white">TrailX Suite</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={X_LINK} target="_blank" rel="noreferrer" className="hover:opacity-90">
              {/* X icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M23 4.559a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0022.337 3a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.95 4.1 6.87 1.671 3.865a4.92 4.92 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 01.96 9.1v.062c0 2.386 1.697 4.374 3.95 4.826a4.935 4.935 0 01-2.212.084c.623 1.942 2.432 3.357 4.576 3.399A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 21.5c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0023 4.559z" />
              </svg>
            </a>

            <a href={LI_LINK} target="_blank" rel="noreferrer" className="hover:opacity-90">
              {/* LinkedIn icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/90">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h4.98V24H0zM9 8h4.79v2.16h.07c.67-1.27 2.31-2.6 4.75-2.6 5.08 0 6.01 3.35 6.01 7.71V24h-4.98v-7.55c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 4v7.67H9V8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-white/50 text-center">
          © {new Date().getFullYear()} Vulue — All Rights Reserved
        </div>
      </Max>
    </footer>
  );
}

/* ----------------- WAITLIST MODAL (used by Login) ----------------- */
function WaitlistModal({ onClose, emailPrefill = "" }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState(emailPrefill || "");
  const canSubmit = first.trim() && last.trim() && /\S+@\S+\.\S+/.test(email);

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${first} ${last}! You’ve been added to the waitlist. We'll contact you at ${email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Vulue" className="h-6 w-6" />
            <div className="font-semibold">VULUE</div>
          </div>
          <button onClick={onClose} className="text-sm text-gray-500">Close</button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Join the waitlist</h3>
        <p className="text-sm text-gray-600 mb-4">We’ll notify you when sign-up opens.</p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">First name</label>
            <input value={first} onChange={(e) => setFirst(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Jane" />
          </div>
          <div>
            <label className="block text-sm mb-1">Surname</label>
            <input value={last} onChange={(e) => setLast(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Doe" />
          </div>
          <div>
            <label className="block text-sm mb-1">Work email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 border rounded-md" placeholder="you@example.com" />
          </div>

          <div className="flex gap-3 items-center">
            <button type="submit" disabled={!canSubmit} className={`px-4 py-2 rounded-md font-semibold ${canSubmit ? "bg-[#1511D1] text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>
              Join waitlist
            </button>
            <button type="button" onClick={onClose} className="text-sm text-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------- LOGIN (page that follows supplied aesthetic) ----------------- */
function Login() {
  const [accountType, setAccountType] = useState("Professional Account");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWaitlist, setShowWaitlist] = useState(false);

  const canConfirm = email.length > 3 && otp.length >= 4;

  const onConfirm = (e) => {
    e.preventDefault();
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* diagonal line overlay to mimic design */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="#cfcfcf" strokeWidth="0.6" opacity="0.12" />
        </svg>
      </div>

      <Max className="pt-24 pb-24">
        <div className="mx-auto max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tight mb-10">Log In</h1>

          <form onSubmit={onConfirm} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">Account Type</label>
              <div className="relative">
                <select value={accountType} onChange={(e) => setAccountType(e.target.value)} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 pr-10 text-white/90 outline-none ring-1 ring-white/10">
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
              <label className="block text-sm text-white/70 mb-2">Work Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter in your work email" className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">8-digit OTP</label>
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
            <img src={Logo} alt="Vulue" className="h-6 w-6" />
            <span className="tracking-wider text-white/70">VULUE</span>
          </div>
        </div>
      </Max>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} emailPrefill={email} />}
    </div>
  );
}

/* ----------------- LANDING (assemble all corrected sections in the requested sequence) ----------------- */
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
        <VuluePlata />
        <PlataVulueVisual />
        <TakeNextLeap />
        <TrailxSuite />
        <Footer />
      </main>
    </div>
  );
}

/* ----------------- APP (routes) ----------------- */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
              }
