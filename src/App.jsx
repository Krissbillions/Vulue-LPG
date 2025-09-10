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

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Vulue Logo" className="h-10" />
        <div className="hidden md:flex gap-8 items-center text-gray-900 font-medium">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#partners" className="hover:text-blue-600">
            Partners
          </a>
          <a href="#insights" className="hover:text-blue-600">
            Insights
          </a>
          <a href="#suite" className="hover:text-blue-600">
            TrailX Suite
          </a>
          <Link
            to="/login"
            className="ml-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}

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
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Say hello to Vulue!
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          The data-intelligent platform powering tomorrow’s decisions today.
        </p>
        <div className="flex justify-center gap-4">
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

function TogetherWeCreate() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">Together we create</h2>
          <p className="text-lg leading-relaxed">
            Collaboration fuels innovation. At Vulue, we believe in working
            together with our clients to craft smarter, data-driven outcomes
            that unlock growth and resilience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 bg-white/10 rounded-xl">
            <img src={icon1} alt="" className="h-10 mb-4" />
            <h3 className="font-semibold mb-2">Data Strategy</h3>
            <p className="text-sm text-gray-300">
              Laying the right foundation for intelligent action.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl">
            <img src={icon2} alt="" className="h-10 mb-4" />
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-300">
              Proprietary insights crafted to your needs.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl">
            <img src={icon3} alt="" className="h-10 mb-4" />
            <h3 className="font-semibold mb-2">Execution</h3>
            <p className="text-sm text-gray-300">
              Transforming strategies into measurable outcomes.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl">
            <img src={icon4} alt="" className="h-10 mb-4" />
            <h3 className="font-semibold mb-2">Enablement</h3>
            <p className="text-sm text-gray-300">
              Empowering teams with the tools to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section
      id="partners"
      className="relative py-24 bg-white text-gray-900 overflow-hidden"
    >
      <img
        src={gradient1}
        alt=""
        className="absolute top-0 right-0 w-1/2 opacity-20 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">
          A look at our partners paving the future!
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Partners Proprietary LLP
          </h3>
          <p className="text-lg leading-relaxed">
            Driving impact with the right collaborations. Together, we leverage
            cutting-edge technologies and methodologies to push industries
            forward.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src={partner1} alt="Partner 1" className="h-16 mx-auto" />
          <img src={partner2} alt="Partner 2" className="h-16 mx-auto" />
          <img src={partner3} alt="Partner 3" className="h-16 mx-auto" />
          <img src={partner4} alt="Partner 4" className="h-16 mx-auto" />
        </div>
      </div>
    </section>
  );
}

function TechnologyProvider() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We are a technology provider
        </h2>
        <p className="text-lg leading-relaxed">
          Vulue provides advanced analytics and integrated solutions that
          empower businesses to adapt and lead. Our platform ensures that
          insights are transformed into sustainable value.
        </p>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section
      id="insights"
      className="relative py-32 bg-[#0A0A1A] text-white overflow-hidden"
    >
      <img
        src={chainImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">From insights to impact!</h2>
        <p className="text-lg leading-relaxed mb-6">
          We go beyond data points—crafting actionable strategies that transform
          industries. Vulue bridges the gap between knowledge and execution.
        </p>
        <a
          href="#approach"
          className="inline-block mt-4 text-blue-400 font-semibold hover:underline"
        >
          Read the approach →
        </a>
      </div>
    </section>
  );
}

function StrategiesBuilt() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We took their strategies and built…
        </h2>
        <p className="text-lg leading-relaxed">
          By translating insights into tangible outcomes, we create measurable
          progress for our partners and clients. Our frameworks are built for
          execution, scale, and adaptability.
        </p>
      </div>
    </section>
  );
}

function PlataVulue() {
  return (
    <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-9xl font-extrabold text-white/10">
        Plata × Vulue
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Plata × Vulue Collaboration
        </h2>
        <p className="text-lg leading-relaxed">
          Together we combine methodologies, tools, and execution capabilities
          to offer unmatched solutions for modern enterprises. This partnership
          symbolizes resilience, agility, and progress.
        </p>
      </div>
    </section>
  );
}

function TakeNextLeap() {
  return (
    <section
      className="relative py-32 text-white text-center"
      style={{ backgroundImage: `url(${wavePattern})`, backgroundSize: "cover" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Take your next leap with us</h2>
        <p className="text-lg leading-relaxed mb-8">
          Join Vulue’s early access program today. Log in to join our exclusive
          wait-list or connect directly with our team.
        </p>
        <div className="flex justify-center gap-4">
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

function TrailXSuite() {
  return (
    <section
      id="suite"
      className="py-24 bg-white text-gray-900 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our TrailX Suite</h2>
        <p className="text-lg leading-relaxed mb-12">
          Explore the powerful tools and partner ecosystem that form our TrailX
          Suite, designed to unlock new dimensions of value for enterprises.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src={partner1} alt="Partner 1" className="h-16 mx-auto" />
          <img src={partner2} alt="Partner 2" className="h-16 mx-auto" />
          <img src={partner3} alt="Partner 3" className="h-16 mx-auto" />
          <img src={partner4} alt="Partner 4" className="h-16 mx-auto" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A0A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <img src={logo} alt="Vulue Logo" className="h-12" />
        <div className="flex justify-center md:justify-start gap-6">
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

function WaitlistModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Join the Wait-list
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="First and Surname"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
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
          className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function Login() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Login to join wait-list
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Type
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
              <option>Individual Account</option>
              <option>Professional Account</option>
              <option>Enterprise Account</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              OTP
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="Enter OTP"
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

function Landing() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
