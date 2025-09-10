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

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Vulue Logo" className="h-10" />
        <div className="hidden md:flex gap-8 items-center text-gray-900 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#partners" className="hover:text-blue-600 transition">
            Partners
          </a>
          <a href="#insights" className="hover:text-blue-600 transition">
            Insights
          </a>
          <a href="#suite" className="hover:text-blue-600 transition">
            TrailX Suite
          </a>
          <Link
            to="/login"
            className="ml-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundColor: "#1511D1" }}
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Say hello to Vulue!
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Vulue is the future-ready data-intelligent platform that transforms
          the way organizations create value from data. With Vulue, your
          strategies are not just written, they’re realized.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <a
            href="#about"
            className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TOGETHER WE CREATE ---------------- */
function TogetherWeCreate() {
  return (
    <section id="about" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Together we create
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            We believe collaboration is at the heart of innovation. Vulue brings
            people, data, and technology together to craft solutions that move
            industries forward. From insight to execution, our approach is built
            on partnership.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold">Data Strategy</span>
              <span className="text-sm text-gray-400">
                Frameworks for clarity.
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold">
                Proprietary Analytics
              </span>
              <span className="text-sm text-gray-400">
                Insights built for you.
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold">Execution</span>
              <span className="text-sm text-gray-400">
                From plan to practice.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-8 bg-white/10 rounded-2xl">
            <img src={icon1} alt="" className="h-12 mb-4" />
            <h3 className="font-semibold mb-2">Clarity</h3>
            <p className="text-sm text-gray-300">
              Data clarity that drives decisions.
            </p>
          </div>
          <div className="p-8 bg-white/10 rounded-2xl">
            <img src={icon2} alt="" className="h-12 mb-4" />
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-gray-300">
              Teams working seamlessly with data.
            </p>
          </div>
          <div className="p-8 bg-white/10 rounded-2xl">
            <img src={icon3} alt="" className="h-12 mb-4" />
            <h3 className="font-semibold mb-2">Execution</h3>
            <p className="text-sm text-gray-300">
              Transforming insights into action.
            </p>
          </div>
          <div className="p-8 bg-white/10 rounded-2xl">
            <img src={icon4} alt="" className="h-12 mb-4" />
            <h3 className="font-semibold mb-2">Enablement</h3>
            <p className="text-sm text-gray-300">
              Empowering enterprises to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function Partners() {
  return (
    <section
      id="partners"
      className="relative py-32 bg-white text-gray-900 overflow-hidden"
    >
      <img
        src={gradient1}
        alt=""
        className="absolute top-0 right-0 w-2/3 opacity-20 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          A look at our partners paving the future!
        </h2>
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Partners Proprietary LLP
          </h3>
          <p className="text-lg leading-relaxed">
            We work hand-in-hand with our partners to pioneer the technologies
            of tomorrow. Our collaborations focus on driving impact where it
            matters most—helping industries adapt, evolve, and lead.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          <img src={partner1} alt="Partner 1" className="h-20 mx-auto" />
          <img src={partner2} alt="Partner 2" className="h-20 mx-auto" />
          <img src={partner3} alt="Partner 3" className="h-20 mx-auto" />
          <img src={partner4} alt="Partner 4" className="h-20 mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGY PROVIDER ---------------- */
function TechnologyProvider() {
  return (
    <section className="py-32 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">We are a technology provider</h2>
        <p className="text-lg leading-relaxed">
          Our role is to empower organizations with cutting-edge tools,
          analytics, and actionable frameworks. Vulue’s data-intelligent
          approach means every solution is tailored to your unique business
          challenges, ensuring measurable and sustainable value.
        </p>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  return (
    <section
      id="insights"
      className="relative py-40 bg-[#0A0A1A] text-white overflow-hidden"
    >
      <img
        src={chainImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          From insights to impact!
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          We unlock the full potential of your data to create transformation at
          scale. With Vulue, actionable insights evolve into meaningful change
          that reshapes industries and fuels innovation.
        </p>
        <a
          href="#approach"
          className="inline-block mt-6 text-blue-400 font-semibold hover:underline"
        >
          Read the approach →
        </a>
      </div>
    </section>
  );
}

/* ---------------- STRATEGIES BUILT ---------------- */
function StrategiesBuilt() {
  return (
    <section className="py-32 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          We took their strategies and built…
        </h2>
        <p className="text-lg leading-relaxed">
          By translating innovative strategies into structured execution, we
          help organizations realize tangible impact. Our frameworks deliver
          measurable progress that withstands disruption and uncertainty.
        </p>
      </div>
    </section>
  );
}

/* ---------------- PLATA × VULUE ---------------- */
function PlataVulue() {
  return (
    <section className="relative py-40 bg-gradient-to-r from-blue-900 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-[10rem] font-extrabold text-white/10">
        Plata × Vulue
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Plata × Vulue Collaboration
        </h2>
        <p className="text-lg leading-relaxed">
          By combining our methodologies and tools with Plata’s execution
          strength, Vulue provides unparalleled solutions designed for scale,
          adaptability, and future resilience.
        </p>
      </div>
    </section>
  );
}

/* ---------------- TAKE NEXT LEAP ---------------- */
function TakeNextLeap() {
  return (
    <section
      className="relative py-40 text-white text-center"
      style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: "cover" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Take your next leap with us
        </h2>
        <p className="text-lg leading-relaxed mb-10">
          Become part of Vulue’s early access program. Log in to join our wait
          list and shape the future with us—or connect directly with our team to
          explore tailored solutions.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Log in to join wait-list
          </Link>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRAILX SUITE ---------------- */
function TrailXSuite() {
  return (
    <section
      id="suite"
      className="py-32 bg-white text-gray-900 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our TrailX Suite
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          The TrailX Suite is Vulue’s complete ecosystem of tools, insights, and
          partner solutions. It’s built to accelerate outcomes and unlock
          enterprise-scale value.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          <img src={partner1} alt="Partner 1" className="h-20 mx-auto" />
          <img src={partner2} alt="Partner 2" className="h-20 mx-auto" />
          <img src={partner3} alt="Partner 3" className="h-20 mx-auto" />
          <img src={partner4} alt="Partner 4" className="h-20 mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[#0A0A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <img src={logo} alt="Vulue Logo" className="h-12" />
        <div className="flex justify-center md:justify-start gap-8">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#partners" className="hover:text-blue-400">
            Partners
          </a>
          <a href="#insights" className="hover:text-blue-400">
            Insights
          </a>
        </div>
        <p className="text-sm text-gray-400 md:text-right">
          © {new Date().getFullYear()} Vulue. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- WAITLIST MODAL ---------------- */
function WaitlistModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Join the Wait-list
        </h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="First and Surname"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Join Wait-list
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ---------------- LOGIN PAGE ---------------- */
function Login() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Login to join wait-list
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Type
            </label>
            <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600">
              <option>Individual Account</option>
              <option>Professional Account</option>
              <option>Enterprise Account</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
         </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Password
             </label>
             <input
               type="password"
               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
               placeholder="Enter your password"
             />
           </div>
           <button
             type="button"
             onClick={() => setShowWaitlist(true)}
             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
           >
             Log in
           </button>
         </form>
       </div>
       {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
     </section>
   );
}

/* ---------------- LANDING PAGE ---------------- */
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TogetherWeCreate />
      <Partners />
      <TechnologyProvider />
      <Insights />
      <StrategiesBuilt />
      <PlataVulue />
      <TakeNextLeap />
      <TrailXSuite />
      <Footer />
    </>
  );
}

/* ---------------- APP ---------------- */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
