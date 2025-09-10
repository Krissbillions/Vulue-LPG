// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// ==== ASSETS ====
import Logo from "./assets/logo.png";
import HeroBG from "./assets/hero-bg.png";
import Icon1 from "./assets/icon-1.png";
import Icon2 from "./assets/icon-2.png";
import Icon3 from "./assets/icon-3.png";
import Icon4 from "./assets/icon-4.png";
import Gradient1 from "./assets/gradient-1.png";
import ChainImg from "./assets/chain.png";
import WavePattern from "./assets/wave-pattern.png";
import Partner1 from "./assets/partner-1.png";
import Partner2 from "./assets/partner-2.png";
import Partner3 from "./assets/partner-3.png";
import Partner4 from "./assets/partner-4.png";

// ========================================================
// Small helpers
// ========================================================
const Section = ({ id, className = "", children, style }) => (
  <section id={id} className={`w-full ${className}`} style={style}>
    {children}
  </section>
);

const Max = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Button
const Button = ({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles = {
    primary:
      "bg-white text-[#1511D1] hover:bg-slate-100 focus-visible:ring-white/60 ring-offset-[#1511D1]",
    ghost:
      "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md focus-visible:ring-white/60 ring-offset-[#1511D1]",
    dark:
      "bg-neutral-900 text-white hover:bg-black/80 focus-visible:ring-white/60 ring-offset-neutral-900",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
};

// Fancy diagonal background for Login
const DiagonalBG = ({ children }) => (
  <div className="relative">
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 140px)",
        maskImage:
          "radial-gradient(100% 100% at 0% 0%, black 0%, transparent 70%)",
      }}
    />
    {children}
  </div>
);

// ========================================================
// NAV
// ========================================================
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Max className="py-4">
        <div className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3 backdrop-blur-md ring-1 ring-white/10">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Vulue" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              VULUE
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#white-section" className="text-white/80 hover:text-white">Vision</a>
            <a href="#partners" className="text-white/80 hover:text-white">Partners</a>
            <a href="#insights" className="text-white/80 hover:text-white">Insights</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="hidden gap-3 md:flex">
            <Button to="/login" variant="primary">Log in</Button>
            <Button to="#cta" variant="ghost">Get Started</Button>
          </div>
          {/* mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:bg-white/10"
          >
            <span className="sr-only">Toggle</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl bg-black/50 backdrop-blur ring-1 ring-white/10 md:hidden">
            <nav className="grid gap-1 p-2">
              {["about","white-section","partners","insights","contact"].map((s)=>(
                <a key={s} href={`#${s}`} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10 capitalize">{s}</a>
              ))}
              <Link to="/login" onClick={()=>setOpen(false)} className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10">Log in</Link>
            </nav>
          </div>
        )}
      </Max>
    </header>
  );
};

// ========================================================
// HERO
// ========================================================
const Hero = () => (
  <div className="relative isolate overflow-hidden">
    <div className="absolute inset-0" style={{background:"linear-gradient(180deg, #1511D1 0%, #1511D1 30%, #08081B 100%)"}}/>
    <img src={HeroBG} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"/>
    <Max className="relative flex min-h-[82vh] flex-col justify-center pt-28 pb-24">
      <div className="max-w-2xl">
        <p className="text-white/90 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Say hello <br/> to Vulue!
        </p>
        <p className="mt-6 text-white/80 text-base/7 max-w-xl">
          The data-intelligent platform for strategy teams. Build hypotheses, test them with proprietary analytics, and move from <em>insight</em> to <em>impact</em> faster.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/login" variant="primary">Log in</Button>
          <a href="#about" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">Learn more</a>
        </div>
      </div>
    </Max>
  </div>
);

// ========================================================
// TOGETHER WE CREATE
// ========================================================
const Together = () => {
  const features = [
    { icon: Icon1, title: "Actionable Insights", text: "Decision-grade dashboards built on live data streams." },
    { icon: Icon2, title: "Private & Secure", text: "Zero-trust posture with rigorous permissioning." },
    { icon: Icon3, title: "Workflow Native", text: "Integrates with the tools your team already uses." },
    { icon: Icon4, title: "Measurable Impact", text: "Tie initiatives to outcomes and share the value." },
  ];
  return (
    <Section id="about" className="relative bg-[#0A0B14] py-24 sm:py-28 md:py-32">
      <Max>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Together we <span className="text-white/50">create</span></h2>
            <p className="mt-5 max-w-xl text-white/70">A collaborative analytics surface where strategists, operators and partners converge to build the future—faster, safer, and with better signal.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f,i)=>(
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <img src={f.icon} alt="" className="h-10 w-10 object-contain"/>
                <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Max>
    </Section>
  );
};

// ========================================================
// WHITE SECTION (vision, big blue text)
// ========================================================
const WhiteSection = () => (
  <Section id="white-section" className="relative bg-white py-24 sm:py-32">
    <Max className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1511D1]">
          Building clarity in a noisy world
        </h2>
        <p className="mt-6 max-w-xl text-lg text-neutral-700">
          Our mission is simple: empower teams to cut through complexity and focus on what matters. 
          Vulue transforms raw data into a unified strategy canvas—so every insight translates into measurable value.
        </p>
        <div className="mt-8 flex gap-4">
          <Button to="/login" variant="dark">Get early access</Button>
          <a href="#partners" className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-100">See partners</a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={Gradient1} alt="abstract gradient" className="w-full max-w-md rounded-3xl shadow-lg object-contain"/>
      </div>
    </Max>
  </Section>
);

// ========================================================
// PARTNERS
// ========================================================
const Partners = () => {
  const partners = [Partner1, Partner2, Partner3, Partner4];
  return (
    <Section id="partners" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <img src={Gradient1} alt="" className="h-full w-full object-cover opacity-90"/>
      </div>
      <Max className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0B14]">A look at our partners paving the future!</p>
            <p className="mt-4 max-w-xl text-[#0A0B14]/70">We collaborate with industry leaders to unlock new value with proprietary frameworks and real-world deployments.</p>
          </div>
          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:gap-8">
            {partners.map((p,i)=>(
              <img key={i} src={p} alt={`partner-${i+1}`} className="h-12 w-auto sm:h-14 md:h-16 object-contain opacity-80"/>
            ))}
          </div>
        </div>
      </Max>
    </Section>
  );
};

// ========================================================
// INSIGHTS
// ========================================================
const Insights = () => (
  <Section id="insights" className="relative isolate overflow-hidden bg-[#0A0B14]">
    <Max className="py-16 sm:py-20 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">From <span className="text-white/60">insights</span> to impact!</p>
          <p className="mt-4 text-white/70">We built a Quantamental Analytics Framework for improved decision-making across the organization. Results: faster execution cycles, clearer KPIs, and higher ROI.</p>
          <div className="mt-6">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Read the approach →</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#1511D1] to-cyan-400 opacity-20 blur-2xl"/>
          <img src={ChainImg} alt="chain" className="mx-auto w-[80%] max-w-[480px] object-contain"/>
        </div>
      </div>
    </Max>
    <div className="pointer-events-none select-none py-14 md:py-20">
      <Max>
        <span className="block text-[14vw] leading-none font-extrabold tracking-tight text-transparent" style={{WebkitTextStroke:"2px rgba(255,255,255,0.05)"}}>Plata × Vulue</span>
      </Max>
    </div>
  </Section>
);

// ========================================================
// CTA
// ========================================================
const CTA = () => (
  <Section id="cta" className="relative overflow-hidden bg-[#1511D1] py-20 sm:py-24">
    <img src={WavePattern} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay"/>
    <Max>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Take Your Next Leap with us</h3>
          <p className="mt-4 text-white/80">Join our early access program and be first to pilot new modules, shape roadmaps, and co-create value.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/login" variant="primary">Log in</Button>
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">Contact team</a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white/80 backdrop-blur">
          <p className="text-sm">“Vulue turned our scattered insights into an execution stack. We shipped faster and measured better.“</p>
          <div className="mt-4 h-1 w-24 rounded-full bg-white/40"/>
        </div>
      </div>
    </Max>
  </Section>
);

// ========================================================
// Footer
// ========================================================
const Footer = () => (
  <footer id="contact" className="bg-[#0A0B14]">
    <Max className="py-14">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Vulue" className="h-6 w-6 object-contain"/>
          <span className="text-white/90">VULUE</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#white-section" className="hover:text-white">Vision</a>
          <a href="#partners" className="hover:text-white">Partners</a>
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#cta" className="hover:text-white">Get started</a>
        </nav>
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Vulue — All Rights Reserved</p>
      </div>
    </Max>
  </footer>
);

// ========================================================
// LOGIN + MODAL (same as before, unchanged for brevity)
// ========================================================
// ... keep your Login and WaitlistModal components from before ...

// ========================================================
// LANDING
// ========================================================
const Landing = () => (
  <div className="min-h-screen bg-[#0A0B14] text
