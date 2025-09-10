// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/*
  Overly long App.jsx designed to closely replicate the provided reference.
  Required assets in src/assets/:
    logo.png
    hero-bg.png
    icon-1.png
    icon-2.png
    icon-3.png
    icon-4.png
    gradient-1.png
    chain.png
    wave-pattern.png
    partner-1.png
    partner-2.png
    partner-3.png
    partner-4.png
*/

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

/* ---------------------------
   Small layout helpers
   --------------------------- */
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

/* ---------------------------
   Button primitive
   --------------------------- */
const Btn = ({ to, onClick, variant = "primary", children, className = "" }) => {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const palette = {
    primary: "bg-white text-[#1511D1] hover:bg-slate-100",
    ghost: "bg-white/10 text-white hover:bg-white/20",
  };
  const cls = `${base} ${palette[variant] || palette.primary} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

/* ---------------------------
   NAVBAR (fixed)
   --------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur-md bg-black/25">
        <Max className="py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Vulue logo" className="h-7 w-7" />
              <span className="text-white font-semibold tracking-wide">VULUE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white/80 hover:text-white">About</a>
              <a href="#partners" className="text-white/80 hover:text-white">Partners</a>
              <a href="#insights" className="text-white/80 hover:text-white">Insights</a>
              <a href="#cta" className="text-white/80 hover:text-white">Get started</a>
              <Link to="/login" className="ml-2 inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#1511D1]">Log in</Link>
            </nav>

            <div className="md:hidden">
              <button onClick={() => setOpen((v) => !v)} className="rounded-md bg-white/10 p-2 text-white/90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-2 rounded-xl bg-black/50 p-3 md:hidden">
              <a href="#about" className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10">About</a>
              <a href="#partners" className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10">Partners</a>
              <a href="#insights" className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10">Insights</a>
              <Link to="/login" className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10">Log in</Link>
            </div>
          )}
        </Max>
      </div>
    </header>
  );
}

/* ---------------------------
   HERO - large left-aligned stacked title
   --------------------------- */
function Hero() {
  return (
    <Section className="relative isolate overflow-hidden">
      {/* Blue base */}
      <div className="absolute inset-0 -z-20" style={{ background: "linear-gradient(180deg,#1511D1 0%,#1511D1 40%,#08081B 100%)" }} />

      {/* texture overlay */}
      <img src={HeroBG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay -z-10 pointer-events-none" />

      <Max className="relative min-h-[78vh] flex items-center pt-28 pb-20">
        <div className="max-w-xl">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">Say hello to Vulue!</h1>
          <p className="mt-6 text-white/85 max-w-lg">
            The data-intelligent platform for strategy teams. Build hypotheses, test them with proprietary analytics, and move from <em>insight</em> to <em>impact</em>.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Btn to="/login" variant="primary">Log in</Btn>
            <a href="#about" className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white">Learn more</a>
          </div>
        </div>
      </Max>

      {/* thin black divider exactly like the reference */}
      <div className="h-6 w-full bg-black" />
    </Section>
  );
}

/* ---------------------------
   TOGETHER WE CREATE - dark block with features
   --------------------------- */
function Together() {
  const features = [
    { icon: Icon1, title: "Actionable Insights", text: "Decision-grade dashboards built on live data streams." },
    { icon: Icon2, title: "Private & Secure", text: "Zero-trust posture with rigorous permissioning." },
    { icon: Icon3, title: "Workflow Native", text: "Integrates with the tools your team already uses." },
    { icon: Icon4, title: "Measurable Impact", text: "Tie initiatives to outcomes and share the value." },
  ];

  return (
    <Section id="about" className="bg-[#0A0B14] text-white py-20">
      <Max>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Together we <span className="text-white/50">create</span></h2>
            <p className="mt-4 text-white/70 max-w-xl">A collaborative analytics surface where strategists, operators and partners converge to build the future—faster, safer, and with better signal.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <img src={f.icon} alt={f.title} className="h-8 w-8" />
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* small quick icons row */}
        <div className="mt-10 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-white/6" />
            <div className="text-sm text-white/70">Data Strategy</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-white/6" />
            <div className="text-sm text-white/70">Proprietary Analytics</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-white/6" />
            <div className="text-sm text-white/70">Execution</div>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ---------------------------
   PARTNERS SECTION - critical: left white block with blue text; right gradient background
   This is where the user said the white part and blue text must appear.
   We'll create a two-column layout where left column is white with blue headings/text,
   and right column shows the gradient1 image scaled to fill the right half.
   --------------------------- */
function Partners() {
  return (
    <Section id="partners" className="relative bg-white">
      {/* Right-half gradient background behind content */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
          <img src={Gradient1} alt="gradient texture" className="h-full w-full object-cover" />
        </div>
      </div>

      <Max className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT: white area with blue heading and LLP white card */}
          <div className="pr-4">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A0B14]">A look at our partners paving the future!</h3>

            {/* White card with blue headline text inside */}
            <div className="mt-6 rounded-lg bg-white border p-6 shadow-sm max-w-xl">
              <h4 className="text-[#1511D1] font-semibold text-lg">Partners Proprietary Partners LLP</h4>
              <p className="mt-4 text-[#0A0B14]/80 text-sm leading-relaxed">
                Partners Proprietary Partners LLP is a fictional name used here to represent the collaborative agreements and governance models we build with our partners. Together we co-design pilots, implement measurement frameworks and scale what proves valuable.
              </p>

              <p className="mt-3 text-sm text-[#0A0B14]/70">
                Each partnership begins with a clear set of KPIs and a roadmap for operational adoption. Our team supports integration, pilot design and outcome measurement until value is realized.
              </p>
            </div>

            {/* Partner logos row (white area) */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              <img src={Partner1} alt="partner 1" className="h-10 w-auto object-contain" />
              <img src={Partner2} alt="partner 2" className="h-10 w-auto object-contain" />
              <img src={Partner3} alt="partner 3" className="h-10 w-auto object-contain" />
              <img src={Partner4} alt="partner 4" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* RIGHT: visual gradient / textured area (keep gradient visible on wide screens) */}
          <div className="relative">
            {/* Provide a tall region that shows gradient; for smaller screens it will sit beneath */}
            <div className="h-72 md:h-96 w-full rounded-lg overflow-hidden border border-white/10">
              <img src={Gradient1} alt="gradient" className="h-full w-full object-cover" />
            </div>

            {/* Decorative overlay card to mimic reference white text on gradient */}
            <div className="hidden md:block absolute -left-14 bottom-6 w-80 rounded-xl bg-white/80 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-[#0A0B14]">Featured collaboration</p>
              <p className="mt-2 text-sm text-[#0A0B14]/80">Co-created pilot that improved decision speed and clarity.</p>
            </div>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ---------------------------
   INSIGHTS / CHAIN SECTION
   Chain graphic placed large and to the right; left is headline/copy.
   Ensure the chain scales responsively.
   --------------------------- */
function Insights() {
  return (
    <Section id="insights" className="relative bg-[#0A0B14] text-white">
      <Max className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">From <span className="text-white/60">insights</span> to impact!</h2>
            <p className="mt-4 text-white/70 max-w-lg">
              We took a multi-stage approach and built a Quantamental Analytics Framework for improved decision-making across the organization. Results: faster execution cycles, clearer KPIs, and higher ROI.
            </p>
            <a href="#cta" className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Read the approach →</a>
          </div>

          <div className="relative">
            {/* Use a large container and absolutely position the chain so it overlaps and appears on the right */}
            <div className="flex justify-end">
              <div className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[640px] -mr-8">
                <img src={ChainImg} alt="chain graphic" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </Max>

      {/* Decorative large faint text (Plata × Vulue) behind content */}
      <div className="pointer-events-none select-none mt-10">
        <Max>
          <div className="relative">
            <div
              className="text-[12vw] font-extrabold leading-none text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.03)",
                textStroke: "2px rgba(255,255,255,0.03)",
              }}
            >
              Plata × Vulue
            </div>
          </div>
        </Max>
      </div>
    </Section>
  );
}

/* ---------------------------
   LONG BLUE CONTENT BLOCKS (multiple stacked blocks to match long page)
   --------------------------- */
function LongBlueBlocks() {
  return (
    <>
      <Section className="bg-[#1511D1] text-white">
        <Max className="py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed">
              We build strategies and a Quantamental Analytics Framework for improved growth. Our approach connects commercial hypotheses, product measures and operational execution in a single framework so teams can learn faster and scale what works.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/90">
              Deployments include data integrations, model governance and impact reporting. We work with your teams to embed analytics into decision rituals so insights become repeatable.
            </p>
          </div>
        </Max>
      </Section>

      <Section className="bg-[#1511D1] text-white">
        <Max className="py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed">
              We also provide playbooks and enablement so partner teams can autonomously extract value after the pilot. Our goal is to make insight adoption durable — not one-off.
            </p>
          </div>
        </Max>
      </Section>
    </>
  );
}

/* ---------------------------
   CTA with wave-pattern background
   Wave image is full bleed overlay with blend
   --------------------------- */
function CTA() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Wave background fills area */}
      <img src={WavePattern} alt="wave pattern" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay -z-10 pointer-events-none" />

      <div className="bg-transparent">
        <Max className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Take Your Next Leap with us</h3>
              <p className="mt-4 text-white/90 max-w-lg">Join our early access program and be first to pilot new modules, shape roadmaps, and co-create value.</p>

              <div className="mt-8 flex gap-3">
                <Link to="/login" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1]">Log in</Link>
                <a href="#contact" className="rounded-2xl border border-white/30 px-5 py-3 text-sm text-white">Contact team</a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-white/90">“Vulue turned our scattered insights into an execution stack. We shipped faster and measured better.“</p>
                <div className="mt-4 h-1 w-24 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </Max>
      </div>
    </Section>
  );
}

/* ---------------------------
   IMAGE GRID + WHITE PANEL (tile area near bottom)
   --------------------------- */
function ImageGrid() {
  return (
    <Section className="bg-white">
      <Max className="py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="h-36 rounded-lg overflow-hidden bg-gradient-to-br from-[#1511D1] to-[#00D1FF]" />
            <div className="h-36 rounded-lg overflow-hidden bg-gradient-to-br from-[#00D1FF] to-[#1511D1]" />
            <div className="h-36 rounded-lg overflow-hidden bg-gradient-to-br from-[#1511D1] to-[#00D1FF]" />
            <div className="h-36 rounded-lg overflow-hidden bg-gradient-to-br from-[#00D1FF] to-[#1511D1]" />
          </div>

          <div className="flex items-center">
            <div>
              <h4 className="text-lg font-semibold text-[#0A0B14]">Explore our approach</h4>
              <p className="mt-3 text-[#0A0B14]/70 text-sm max-w-md">Short captions and calls to action that follow the visual layout of your reference. Use these tiles to link to case studies, docs, or product pages.</p>
            </div>
          </div>
        </div>
      </Max>
    </Section>
  );
}

/* ---------------------------
   FOOTER
   --------------------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0B14] text-white">
      <Max className="py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="h-6 w-6" />
            <div className="font-semibold">VULUE</div>
          </div>

          <nav className="flex gap-6 text-white/70">
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
            <a href="#insights">Insights</a>
          </nav>

          <div className="text-sm text-white/50">© {new Date().getFullYear()} Vulue — All rights reserved</div>
        </div>
      </Max>
    </footer>
  );
}

/* ---------------------------
   LOGIN PAGE (pre-copy: "Login to join wait-list")
   Fields same as before (account select, email, otp).
   On confirm, opens WAITLIST modal that only collects First/Surname/Email (per your direction).
   --------------------------- */
function Login() {
  const [accountType, setAccountType] = useState("Professional Account");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWaitlist, setShowWaitlist] = useState(false);

  const canConfirm = email.length > 3 && otp.length >= 4;

  const handleConfirm = (e) => {
    e.preventDefault();
    // no signups yet; prompt waitlist
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white pt-24">
      <Max className="py-12">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-extrabold">Log In</h1>
          <p className="mt-2 text-white/70">Login to join wait-list</p>

          <form onSubmit={handleConfirm} className="mt-8 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">Account Type</label>
              <select value={accountType} onChange={(e) => setAccountType(e.target.value)} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90">
                <option>Individual Account</option>
                <option>Professional Account</option>
                <option>Enterprise Account</option>
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">Work Email</label>
              <input type="email" placeholder="Enter in your work email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">8-digit OTP</label>
              <input type="password" placeholder="Enter 8-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={8} className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90" />
            </div>

            <div className="flex items-center justify-between">
              <button type="button" onClick={() => alert("Password resets will be available at launch.") } className="text-sm text-[#1511D1]">Forgot Password?</button>
            </div>

            <button type="submit" disabled={!canConfirm} className={`mt-4 w-full rounded-[28px] px-6 py-4 text-lg font-semibold ${canConfirm ? "bg-white text-[#0A0B14]" : "bg-white/30 text-white/70 cursor-not-allowed"}`}>Confirm</button>
          </form>

          <div className="mt-12 flex items-center gap-3 opacity-80">
            <img src={Logo} alt="logo" className="h-6 w-6" />
            <span className="text-white/70">VULUE</span>
          </div>
        </div>
      </Max>

      {showWaitlist && <WaitlistSimple onClose={() => setShowWaitlist(false)} defaultEmail={email} />}
    </div>
  );
}

/* ---------------------------
   WAITLIST SIMPLE - collects First name, Surname, Email only
   (this replaces the previous longer form; minimal fields as requested)
   --------------------------- */
function WaitlistSimple({ onClose, defaultEmail = "" }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState(defaultEmail || "");
  const canSubmit = firstName.trim() && surname.trim() && /\S+@\S+\.\S+/.test(email);

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${firstName} ${surname}! You’ve been added to the waitlist. We will contact you at ${email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="h-6 w-6" />
            <div className="font-semibold">VULUE</div>
          </div>
          <button onClick={onClose} className="text-sm text-[#0A0B14]/60">Close</button>
        </div>

        <h3 className="mt-4 text-lg font-semibold">Join the waitlist</h3>
        <p className="mt-2 text-sm text-[#0A0B14]/70">We’ll notify you when sign-up opens.</p>

        <form onSubmit={submit} className="mt-4 grid gap-3">
          <div>
            <label className="text-sm text-[#0A0B14]/80">First name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2" placeholder="Jane" />
          </div>
          <div>
            <label className="text-sm text-[#0A0B14]/80">Surname</label>
            <input value={surname} onChange={(e) => setSurname(e.target.value)} className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2" placeholder="Doe" />
          </div>
          <div>
            <label className="text-sm text-[#0A0B14]/80">Work email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2" placeholder="jane@company.com" />
          </div>

          <div className="flex gap-3 items-center">
            <button type="submit" disabled={!canSubmit} className={`rounded-2xl px-4 py-2 font-semibold ${canSubmit ? "bg-[#1511D1] text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>Join waitlist</button>
            <button type="button" onClick={onClose} className="text-sm text-[#0A0B14]/70">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------------------
   ROOT landing assembly (all sections)
   --------------------------- */
function Landing() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <Navbar />
      <main>
        <Hero />
        <Together />
        <Partners />
        <Insights />
        <LongBlueBlocks />
        <CTA />
        <ImageGrid />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------
   Export App with routes
   --------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
                }
