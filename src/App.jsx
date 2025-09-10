// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/* =========================
   ASSETS (must exist in src/assets/)
   ========================= */
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

/* =========================================================
   NOTE:
   - This file is intentionally verbose and organized as many
     inline components to make it single-file but readable.
   - It attempts to match the reference image layout exactly.
   ========================================================= */

/* ---------------------------
   Small utility components
   --------------------------- */
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
    {children}
  </div>
);

const NavLink = ({ to = "#", children, className = "" }) => (
  <Link to={to} className={`text-white/80 hover:text-white ${className}`}>
    {children}
  </Link>
);

/* =========================
   NAVBAR
   ========================= */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Vulue logo" className="h-7 w-7" />
            <span className="text-white font-semibold tracking-wide">VULUE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="#about">About</NavLink>
            <NavLink to="#partners">Partners</NavLink>
            <NavLink to="#insights">Insights</NavLink>
            <NavLink to="#cta">Get started</NavLink>
            <Link
              to="/login"
              className="ml-2 inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#1511D1]"
            >
              Log in
            </Link>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden">
            <Link
              to="/login"
              className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-[#1511D1]"
            >
              Log in
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* =========================
   HERO
   - Blue (#1511D1) hero background with texture overlay
   - Left aligned headline "Say hello to Vulue!"
   ========================= */
function Hero() {
  return (
    <section className="relative min-h-[60vh] pt-24">
      {/* Blue base */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #1511D1 0%, #1511D1 45%, #08081B 100%)",
        }}
      />
      {/* texture overlay */}
      <img
        src={HeroBG}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay -z-5"
      />

      <Container>
        <div className="flex w-full items-center justify-start">
          <div className="max-w-xl py-28">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Say
              <br />
              hello
              <br />
              to
              <br />
              Vulue!
            </h1>

            <p className="mt-6 text-white/85 text-base md:text-lg max-w-lg">
              We build data-informed strategy tools that help teams move from
              insights to measurable impact — faster and with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1] shadow"
              >
                Log in
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/20"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* thin black divider area to match reference where hero transitions */}
      <div className="mt-6 h-6 w-full bg-black" />
    </section>
  );
}

/* =========================
   TOGETHER WE CREATE (dark section)
   - features with icons
   ========================= */
function Together() {
  const features = [
    {
      icon: Icon1,
      title: "Actionable Insights",
      text: "Decision-grade dashboards and hypothesis testing for strategy teams.",
    },
    {
      icon: Icon2,
      title: "Private & Secure",
      text: "Enterprise-grade controls, role-based permissions, and data isolation.",
    },
    {
      icon: Icon3,
      title: "Workflow Native",
      text: "Embed insights into the tools your team uses every day.",
    },
    {
      icon: Icon4,
      title: "Measurable Impact",
      text: "Tie workstreams to outcomes and measure real ROI.",
    },
  ];

  return (
    <section id="about" className="bg-[#0A0B14] text-white py-14 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Together We Create</h2>
            <p className="mt-4 text-white/70 max-w-lg">
              We combine strategy, analytics, and execution frameworks to help
              organisations discover opportunity, validate hypotheses, and scale
              what works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-sm"
              >
                <img src={f.icon} alt={f.title} className="h-9 w-9" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* small icons row as in reference */}
        <div className="mt-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-white/5" />
            <div className="text-sm text-white/70">Data-ops & models</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-white/5" />
            <div className="text-sm text-white/70">Proprietary Controls</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-white/5" />
            <div className="text-sm text-white/70">Stakeholder ROI</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   PARTNERS SECTION
   - left: white text area (title + a white content card with LLP text)
   - right: vibrant gradient background (Gradient1) visually matching the blue pixel texture in ref
   - ensure exact alignment and white box sits above gradient as per reference
   ========================= */
function Partners() {
  return (
    <section id="partners" className="relative py-12 md:py-20 bg-white">
      {/* gradient background sits behind right half */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <img
            src={Gradient1}
            alt="partners gradient"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/0" />
      </div>

      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Title + white content block */}
          <div className="py-8 md:py-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A0B14]">
              A look at our partners paving the future!
            </h3>
            <div className="mt-6 text-[#0A0B14]/80 max-w-lg">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed">
                  This is a fictional copy representing “Partners Proprietary
                  Partners LLP.” We collaborate with leading organisations to
                  pilot new frameworks, co-develop innovation roadmaps and
                  run outcome-driven pilots that deliver measurable financial
                  and strategic value.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#0A0B14]/70">
                  Where appropriate, we create joint governance models and
                  operational centres to accelerate scale and adoption.
                </p>
              </div>

              {/* partner logos below */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <img src={Partner1} className="h-10 w-auto object-contain" alt="p1" />
                <img src={Partner2} className="h-10 w-auto object-contain" alt="p2" />
                <img src={Partner3} className="h-10 w-auto object-contain" alt="p3" />
                <img src={Partner4} className="h-10 w-auto object-contain" alt="p4" />
              </div>
            </div>
          </div>

          {/* Right: purely visual gradient area (already behind) - add decorative items */}
          <div className="relative hidden md:block">
            {/* For a close match to the reference, overlay a semi-transparent white card with sample text */}
            <div className="absolute bottom-8 left-8 w-[70%] rounded-xl bg-white/70 p-6 backdrop-blur-sm">
              <p className="text-sm text-[#0A0B14]/90 font-semibold">Partner Highlight</p>
              <p className="mt-2 text-sm text-[#0A0B14]/80">
                Example: Strategic deployment across finance and product teams
                delivered uplift in pursuit velocity.
              </p>
            </div>
            {/* keep the gradient imagery visible */}
            <div className="h-64 w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   CHAIN INSIGHT SECTION
   - Black/dark background with the chain image prominently placed on the right
   - Left side headline "From insights to impact!"
   ========================= */
function ChainInsight() {
  return (
    <section className="relative bg-[#0A0B14] text-white py-16 md:py-20 overflow-hidden">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">
              From <span className="text-white/60">insights</span> to impact!
            </h3>
            <p className="mt-4 text-white/70 max-w-lg">
              We combine quant and qualitative signal into a single decision
              surface — enabling prioritisation, execution and measurement in
              one place.
            </p>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              Read the approach →
            </a>
          </div>

          <div className="relative flex items-center justify-center">
            {/* container for chain - ensure large, balanced placement */}
            <div className="relative w-full max-w-[520px]">
              <div className="absolute -right-8 -top-16 w-[420px] md:w-[560px]">
                <img src={ChainImg} alt="chain" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative large faint text behind */}
      <div className="pointer-events-none select-none mt-8 ">
        <Container>
          <div className="relative">
            <div
              className="text-[10vw] font-extrabold leading-none text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.03)",
                textStroke: "2px rgba(255,255,255,0.03)",
              }}
            >
              Plata × Vulue
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================
   LONG BLUE CONTENT SECTIONS
   - Several blocks of blue background with long paragraphs to match reference
   - Ensure responsive line-lengths and spacing
   ========================= */
function LongBlueContent() {
  return (
    <section className="bg-[#1511D1] text-white">
      <Container>
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <p className="text-base/6">
              We build strategies and a Quantamental Analytics Framework for
              improved growth. Our approach is iterative—start small, measure
              outcomes, double down on what works. The result is faster
              decision cycles and clearer alignment across product, finance and
              strategy teams.
            </p>

            <p className="mt-6 text-sm/6 opacity-90">
              Deployments include secure data integration, model governance,
              and outcome-based reporting. We prioritize accessibility of
              insights so non-technical stakeholders can make confident choices.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   CTA (Wave pattern background)
   - left: "Take Your Next Leap with us"
   - right: image card and button
   - wave background uses wave-pattern.png with overlay
   ========================= */
function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#1511D1] text-white py-16 md:py-24">
      {/* wave background */}
      <img
        src={WavePattern}
        alt="wave background"
        className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-overlay -z-10"
      />

      <Container>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Take Your Next Leap with us</h3>
            <p className="mt-4 text-white/90 max-w-lg">
              Join early access to pilot modules, shape the roadmap and help us
              prioritise features that matter to you.
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                to="/login"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1511D1]"
              >
                Log in
              </Link>
              <a
                href="#contact"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm text-white"
              >
                Contact team
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm">
                “Vulue turned our scattered insights into an execution stack.
                We shipped faster and measured better.“
              </p>
              <div className="mt-4 h-1 w-24 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   Small image grid area & white tile content like reference
   - four small tiles in a compact grid
   ========================= */
function ImageGrid() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-[#1511D1] to-[#00D1FF]" />
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-[#00D1FF] to-[#1511D1]" />
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-[#1511D1] to-[#00D1FF]" />
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-[#00D1FF] to-[#1511D1]" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-md">
              <h4 className="text-lg font-semibold text-[#0A0B14]">Explore more</h4>
              <p className="mt-3 text-[#0A0B14]/70 text-sm">
                Example captions/links. The layout intentionally mirrors the
                reference composition with a white area beside the tiled imagery.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================
   FOOTER
   ========================= */
function Footer() {
  return (
    <footer className="bg-[#05060A] text-white py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="h-6 w-6" />
            <div className="text-sm font-semibold">VULUE</div>
          </div>

          <nav className="flex items-center gap-6 text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#cta" className="hover:text-white">Get started</a>
          </nav>

          <div className="text-sm text-white/50">© {new Date().getFullYear()} Vulue — All rights reserved</div>
        </div>
      </Container>
    </footer>
  );
}

/* =========================
   LOGIN PAGE
   - Slightly updated: includes the pre-copy "Login to join wait-list"
   - Keeps the same fields (account type, email, OTP)
   - On Confirm, since sign-up not available, shows WaitlistModal
   ========================= */
function LoginPage() {
  const [accountType, setAccountType] = useState("Professional Account");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWaitlist, setShowWaitlist] = useState(false);

  const canConfirm = email.length > 3 && otp.length >= 4;

  const handleConfirm = (e) => {
    e.preventDefault();
    // We intentionally do not perform login — instead request waitlist.
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white pt-24">
      <Container>
        <div className="mx-auto max-w-xl py-12">
          <h1 className="text-4xl font-extrabold">Log In</h1>
          <p className="mt-2 text-white/70">Login to join wait-list</p>

          <form onSubmit={handleConfirm} className="mt-8 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">Account Type</label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10"
              >
                <option>Individual Account</option>
                <option>Professional Account</option>
                <option>Enterprise Account</option>
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">Work Email</label>
              <input
                type="email"
                placeholder="Enter in your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <label className="block text-sm text-white/70 mb-2">8-digit OTP</label>
              <input
                type="password"
                placeholder="Enter 8-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                className="text-sm text-[#1511D1]"
                onClick={() => alert("Password resets will be available at launch.")}
              >
                Forgot Password?
              </button>
              <div />
            </div>

            <button
              type="submit"
              disabled={!canConfirm}
              className={`mt-4 w-full rounded-[28px] px-6 py-4 text-lg font-semibold transition ${
                canConfirm ? "bg-white text-[#0A0B14]" : "bg-white/30 text-white/70 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </form>

          <div className="mt-12 flex items-center gap-3 opacity-80">
            <img src={Logo} alt="logo" className="h-6 w-6" />
            <span className="text-white/70 tracking-wider">VULUE</span>
          </div>
        </div>
      </Container>

      {showWaitlist && (
        <WaitlistModal onClose={() => setShowWaitlist(false)} defaultAccount={accountType} defaultEmail={email} />
      )}
    </div>
  );
}

/* =========================
   WAITLIST MODAL
   - Collects First name, Surname, Email only (per your request)
   - Very clean, professional look
   ========================= */
function WaitlistModal({ onClose, defaultAccount = "Professional Account", defaultEmail = "" }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState(defaultEmail || "");
  const [accountType, setAccountType] = useState(defaultAccount);

  const canSubmit = firstName.trim() && surname.trim() && /\S+@\S+\.\S+/.test(email);

  const submit = (e) => {
    e.preventDefault();
    // Placeholder: in future, POST to API. For now the user is queued.
    alert(`Thanks ${firstName} ${surname}! You’re on the waitlist (${accountType}). We’ll follow up at ${email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white text-[#0A0B14] shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="hidden md:flex md:flex-col md:gap-4 md:p-6 md:bg-[#1511D1] md:text-white">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Vulue" className="h-6 w-6" />
              <div className="font-semibold">VULUE</div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">Join the waitlist</h3>
              <p className="mt-2 text-white/80 text-sm">
                Sign up for early access—we’ll invite you to pilot builds and
                keep you updated on launch progress.
              </p>
            </div>
            <img src={Gradient1} alt="" className="mt-auto h-28 w-full object-cover opacity-90 rounded-lg" />
          </div>

          <div className="col-span-1 md:col-span-2 p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Request early access</h4>
              <button onClick={onClose} className="text-sm text-[#0A0B14]/60">Close</button>
            </div>

            <form onSubmit={submit} className="mt-4 grid gap-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-[#0A0B14]/80">First name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2"
                    placeholder="Jane"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#0A0B14]/80">Surname</label>
                  <input
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#0A0B14]/80">Work email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[#0A0B14]/80">Account type</label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E6E6E6] px-4 py-2"
                >
                  <option>Individual Account</option>
                  <option>Professional Account</option>
                  <option>Enterprise Account</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={!canSubmit}
                  type="submit"
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold ${
                    canSubmit ? "bg-[#1511D1] text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Join the waitlist
                </button>
                <button type="button" onClick={onClose} className="text-sm text-[#0A0B14]/70">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   ROOT Landing (assembled)
   ========================= */
function Landing() {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="mt-6">
        <Hero />
        <Together />
        <Partners />
        <ChainInsight />
        <LongBlueContent />
        <CTA />
        <ImageGrid />
      </main>
      <Footer />
    </div>
  );
}

/* =========================
   APP root with routes
   - "/" -> Landing
   - "/login" -> LoginPage (login -> waitlist flow)
   ========================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
                    style={{
          bacgroundImage:
            "repeating-linear-gradient(120deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 140px)",
          maskImage:
            "radial-gradient(100% 100% at 0% 0%, black 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
};

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
            <img src={Logo} alt="Vulue" className="h-6 w-6" />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              VULUE
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-white/80 hover:text-white">
              About
            </a>
            <a href="#partners" className="text-white/80 hover:text-white">
              Partners
            </a>
            <a href="#insights" className="text-white/80 hover:text-white">
              Insights
            </a>
            <a href="#contact" className="text-white/80 hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden gap-3 md:flex">
            <Button to="/login" variant="primary">
              Log in
            </Button>
            <Button to="#cta" variant="ghost">
              Get Started
            </Button>
          </div>

          {/* mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:bg-white/10"
          >
            <span className="sr-only">Toggle</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl bg-black/50 backdrop-blur ring-1 ring-white/10 md:hidden">
            <nav className="grid gap-1 p-2">
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
              >
                About
              </a>
              <a
                href="#partners"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Partners
              </a>
              <a
                href="#insights"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Contact
              </a>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
              >
                Log in
              </Link>
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
const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Deep blue hero layer (#1511D1) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1511D1 0%, #1511D1 30%, #08081B 100%)",
        }}
      />
      {/* texture overlay */}
      <img
        src={HeroBG}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
      />

      {/* content */}
      <Max className="relative flex min-h-[82vh] flex-col justify-center pt-28 pb-24">
        <div className="max-w-2xl">
          <p className="text-white/90 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Say hello <br /> to Vulue!
          </p>
          <p className="mt-6 text-white/80 text-base/7 max-w-xl">
            The data-intelligent platform for strategy teams. Build hypotheses,
            test them with proprietary analytics, and move from <em>insight</em>{" "}
            to <em>impact</em> faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/login" variant="primary">
              Log in
            </Button>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Learn more
            </a>
          </div>
        </div>
      </Max>
    </div>
  );
};

// ========================================================
// TOGETHER WE CREATE (features)
// ========================================================
const Together = () => {
  const features = [
    {
      icon: Icon1,
      title: "Actionable Insights",
      text: "Decision-grade dashboards built on live data streams.",
    },
    {
      icon: Icon2,
      title: "Private & Secure",
      text: "Zero-trust posture with rigorous permissioning.",
    },
    {
      icon: Icon3,
      title: "Workflow Native",
      text: "Integrates with the tools your team already uses.",
    },
    {
      icon: Icon4,
      title: "Measurable Impact",
      text: "Tie initiatives to outcomes and share the value.",
    },
  ];
  return (
    <Section
      id="about"
      className="relative bg-[#0A0B14] py-24 sm:py-28 md:py-32"
    >
      <Max>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Together we <span className="text-white/50">create</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              A collaborative analytics surface where strategists, operators and
              partners converge to build the future—faster, safer, and with
              better signal.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <img src={f.icon} alt="" className="h-8 w-8" />
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
// PARTNERS
// ========================================================
const Partners = () => {
  const partners = [Partner1, Partner2, Partner3, Partner4];
  return (
    <Section id="partners" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={Gradient1}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      <Max className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0B14]">
              A look at our partners paving the future!
            </p>
            <p className="mt-4 max-w-xl text-[#0A0B14]/70">
              We collaborate with industry leaders to unlock new value with
              proprietary frameworks and real-world deployments.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:gap-8">
            {partners.map((p, i) => (
              <img
                key={i}
                src={p}
                className="h-10 w-auto sm:h-12 md:h-14 object-contain opacity-80"
                alt={`partner-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Max>
    </Section>
  );
};

// ========================================================
// INSIGHTS (chain image + case study style block)
// ========================================================
const Insights = () => {
  return (
    <Section
      id="insights"
      className="relative isolate overflow-hidden bg-[#0A0B14]"
    >
      <Max className="py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              From <span className="text-white/60">insights</span> to impact!
            </p>
            <p className="mt-4 text-white/70">
              We took a multi-stage approach and built a Quantamental Analytics
              Framework for improved decision-making across the organization.
              Results: faster execution cycles, clearer KPIs, and higher ROI.
            </p>
            <div className="mt-6">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                Read the approach
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#1511D1] to-cyan-400 opacity-20 blur-2xl" />
            <img
              src={ChainImg}
              alt="chain"
              className="mx-auto w-[80%] max-w-[480px]"
            />
          </div>
        </div>
      </Max>

      {/* Big decorative text like “Plata × Vulue” */}
      <div className="pointer-events-none select-none py-14 md:py-20">
        <Max>
          <div className="relative">
            <span
              className="block text-[14vw] leading-none font-extrabold tracking-tight text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.05)",
                textStroke: "2px rgba(255,255,255,0.05)",
              }}
            >
              Plata × Vulue
            </span>
          </div>
        </Max>
      </div>
    </Section>
  );
};

// ========================================================
// CTA section (Take Your Next Leap)
// ========================================================
const CTA = () => {
  return (
    <Section
      id="cta"
      className="relative overflow-hidden bg-[#1511D1] py-20 sm:py-24"
    >
      {/* background waves */}
      <img
        src={WavePattern}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay"
      />
      <Max>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Take Your Next Leap with us
            </h3>
            <p className="mt-4 text-white/80">
              Join our early access program and be first to pilot new modules,
              shape roadmaps, and co-create value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/login" variant="primary">
                Log in
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                Contact team
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white/80 backdrop-blur">
            <p className="text-sm">
              “Vulue turned our scattered insights into an execution stack. We
              shipped faster and measured better.“
            </p>
            <div className="mt-4 h-1 w-24 rounded-full bg-white/40" />
          </div>
        </div>
      </Max>
    </Section>
  );
};

// ========================================================
// Footer
// ========================================================
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A0B14]">
      <Max className="py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Vulue" className="h-6 w-6" />
            <span className="text-white/90">VULUE</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/70">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#partners" className="hover:text-white">
              Partners
            </a>
            <a href="#insights" className="hover:text-white">
              Insights
            </a>
            <a href="#cta" className="hover:text-white">
              Get started
            </a>
          </nav>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Vulue — All Rights Reserved
          </p>
        </div>
      </Max>
    </footer>
  );
};

// ========================================================
// LOGIN PAGE (with waitlist prompt on confirm)
// ========================================================
const Login = () => {
  const nav = useNavigate();
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [accountType, setAccountType] = useState("Professional Account");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const canConfirm = email.length > 3 && otp.length >= 4; // pretend

  const onConfirm = (e) => {
    e.preventDefault();
    // Since there is no sign up, we prompt to join the waitlist.
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <Navbar />
      <DiagonalBG>
        <Max className="flex min-h-screen flex-col justify-center pt-28 pb-20">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-5xl font-extrabold tracking-tight">Log In</h1>

            <form
              onSubmit={onConfirm}
              className="mt-10 space-y-5 rounded-3xl"
              autoComplete="off"
            >
              {/* Account Type */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="mb-1 block text-sm text-white/70">
                  Account Type
                </label>
                <div className="relative">
                  <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-[#0C0F17] px-4 py-3 pr-10 text-white/90 outline-none ring-1 ring-white/10 focus:ring-white/30"
                  >
                    <option>Individual Account</option>
                    <option>Professional Account</option>
                    <option>Enterprise Account</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="mb-1 block text-sm text-white/70">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="Enter in your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 text-white/90 outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-white/30"
                />
              </div>

              {/* OTP */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <label className="mb-1 block text-sm text-white/70">
                  8-digit OTP
                </label>
                <div className="relative">
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={8}
                    placeholder="Enter 8-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full rounded-xl bg-[#0C0F17] px-4 py-3 pr-10 text-white/90 outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-white/30"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="opacity-70"
                    >
                      <path
                        d="M3 3l18 18M10.58 10.58A2 2 0 1113.41 13.4M9.88 5.1a9.6 9.6 0 018.96 4.34M5.1 9.88A9.6 9.6 0 0014.12 18.9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  className="text-sm text-[#1511D1]"
                  onClick={() => alert("Password resets will be available at launch.")}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={!canConfirm}
                className={`mt-4 w-full rounded-[28px] px-6 py-4 text-lg font-semibold transition ${
                  canConfirm
                    ? "bg-white text-[#0A0B14] hover:bg-slate-100"
                    : "bg-white/30 text-white/70 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </form>

            {/* brand at bottom */}
            <div className="mt-16 flex items-center gap-2 opacity-80">
              <img src={Logo} alt="" className="h-6 w-6" />
              <span className="tracking-wider text-white/70">VULUE</span>
            </div>
          </div>
        </Max>
      </DiagonalBG>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <WaitlistModal
          onClose={() => setShowWaitlist(false)}
          accountType={accountType}
          emailPrefill={email}
        />
      )}
    </div>
  );
};

// ========================================================
// WAITLIST MODAL (shown when login confirm is clicked)
// ========================================================
const WaitlistModal = ({ onClose, accountType, emailPrefill = "" }) => {
  const [form, setForm] = useState({
    name: "",
    email: emailPrefill,
    company: "",
    role: "",
    accountType,
    message: "",
    agree: false,
  });
  const canSubmit =
    form.name &&
    form.email &&
    form.accountType &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.agree;

  const submit = (e) => {
    e.preventDefault();
    // you can wire this to any endpoint later
    alert(
      `Thanks ${form.name}! You’re on the waitlist as ${form.accountType}. We’ll follow up at ${form.email}.`
    );
    onClose();
  };

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-2 text-black/60 hover:bg-black/5"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-5">
          <div className="hidden md:block md:col-span-2 bg-[#1511D1] p-6 text-white">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Vulue" className="h-6 w-6" />
              <span className="text-white/90 font-semibold tracking-wide">
                VULUE
              </span>
            </div>
            <div className="mt-8">
              <p className="text-2xl font-bold">Join the waitlist</p>
              <p className="mt-2 text-white/80">
                We’re polishing the main web app. Sign up for early access and
                launch updates.
              </p>
            </div>
            <div className="mt-8">
              <img
                src={Gradient1}
                alt=""
                className="w-full rounded-2xl border border-white/10 opacity-90"
              />
            </div>
          </div>

          <div className="md:col-span-3 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-neutral-900">
              Request early access
            </h3>
            <form onSubmit={submit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Full name
                  </label>
                  <input
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => set({ name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => set({ email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Company / Organization
                  </label>
                  <input
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={(e) => set({ company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Role / Title
                  </label>
                  <input
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
                    placeholder="Strategy Lead"
                    value={form.role}
                    onChange={(e) => set({ role: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Account Type
                  </label>
                  <select
                    value={form.accountType}
                    onChange={(e) => set({ accountType: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400"
                  >
                    <option>Individual Account</option>
                    <option>Professional Account</option>
                    <option>Enterprise Account</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-600">
                    Notes (optional)
                  </label>
                  <input
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
                    placeholder="Use cases, timelines, etc."
                    value={form.message}
                    onChange={(e) => set({ message: e.target.value })}
                  />
                </div>
              </div>

              <label className="mt-2 inline-flex items-start gap-3 text-sm text-neutral-600">
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-neutral-300"
                  checked={form.agree}
                  onChange={(e) => set({ agree: e.target.checked })}
                />
                <span>
                  I agree to be contacted about early access and updates. I can
                  opt out anytime.
                </span>
              </label>

              <div className="mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    canSubmit
                      ? "bg-[#1511D1] text-white hover:opacity-90"
                      : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                  }`}
                >
                  Join the waitlist
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// LANDING PAGE (all sections)
// ========================================================
const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <Navbar />
      <main>
        <Hero />
        <Together />
        <Partners />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

// ========================================================
// ROOT APP + ROUTES
// ========================================================
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Login />} path="/login" />
        {/* You can add /waitlist as a dedicated route later if you prefer */}
      </Routes>
    </BrowserRouter>
  );
}
