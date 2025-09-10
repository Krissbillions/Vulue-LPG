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
            }
