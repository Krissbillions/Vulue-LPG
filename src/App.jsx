// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  LogIn,
  UserPlus,
  Send,
  Mail,
  Building,
} from "lucide-react";

import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";
import icon1 from "./assets/icon-1.png";
import icon2 from "./assets/icon-2.png";
import icon3 from "./assets/icon-3.png";
import icon4 from "./assets/icon-4.png";
import chain from "./assets/chain.png";
import gradient1 from "./assets/gradient-1.png";
import wavePattern from "./assets/wave-pattern.png";
import partner1 from "./assets/partner-1.png"; // upload more partner logos here

// ---------- Navbar ----------
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vulue Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Vulue</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-blue-400">
            About
          </Link>
          <a href="#trailx" className="hover:text-blue-400">
            Partners
          </a>
          <a href="#insights" className="hover:text-blue-400">
            Insights
          </a>
          <Link
            to="/login"
            className="bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <LogIn size={16} /> Log in
          </Link>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <a href="#trailx" onClick={() => setOpen(false)}>
            Partners
          </a>
          <a href="#insights" onClick={() => setOpen(false)}>
            Insights
          </a>
          <Link
            to="/login"
            className="bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            <LogIn size={16} /> Log in
          </Link>
        </div>
      )}
    </nav>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center text-white relative"
      style={{
        backgroundColor: "#1511D1",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Say hello to Vulue!
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8">
        A new data-intelligent platform designed to empower organizations to
        harness proprietary analytics and execution strategies.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-200"
        >
          <LogIn size={18} /> Log in
        </Link>
        <a
          href="#trailx"
          className="bg-transparent border border-white px-6 py-3 rounded-xl font-medium hover:bg-white/10"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}

// ---------- Together We Create ----------
function Together() {
  const features = [
    { icon: icon1, title: "Collaboration", text: "Working hand in hand." },
    { icon: icon2, title: "Innovation", text: "Ideas into impact." },
    { icon: icon3, title: "Execution", text: "Turning plans into action." },
    { icon: icon4, title: "Growth", text: "Scaling with precision." },
  ];

  return (
    <section className="bg-black text-white py-24 px-6" id="together">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Together we create</h2>
          <p className="text-gray-400 mb-6">
            Our proprietary approach combines innovation and execution to
            achieve measurable results for every partner.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img src={f.icon} alt="" className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Our TrailX Suite ----------
function TrailX() {
  return (
    <section className="bg-white py-24 px-6" id="trailx">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our TrailX Suite</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          A look at our partners paving the future through TrailX. Our
          Proprietary LLP ensures collaborative, innovative frameworks with the
          very best in industry.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <img src={partner1} alt="Partner 1" className="h-12" />
          {/* Add more partner logos here */}
        </div>
      </div>
    </section>
  );
}

// ---------- Insights ----------
function Insights() {
  return (
    <section className="bg-gray-900 text-white py-24 px-6" id="insights">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">From insights to impact!</h2>
          <p className="text-gray-400 mb-6">
            Our framework translates insights into measurable outcomes. We equip
            organizations with the clarity and playbooks to thrive in changing
            markets.
          </p>
          <a href="#" className="text-blue-400 font-semibold flex items-center">
            Read the approach <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
        <div className="flex justify-center">
          <img src={chain} alt="Chain Graphic" className="max-h-64" />
        </div>
      </div>
    </section>
  );
}

// ---------- Plata × Vulue ----------
function Plata() {
  return (
    <section
      className="relative bg-blue-700 text-white py-32 px-6 overflow-hidden"
      id="plata"
    >
      <div className="absolute inset-0 flex items-center justify-center text-9xl font-extrabold text-white/10 pointer-events-none">
        Plata × Vulue
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Plata × Vulue</h2>
        <p className="text-lg">
          The Plata × Vulue collaboration brings together proprietary
          methodologies and next-gen frameworks to unlock exponential growth
          opportunities.
        </p>
      </div>
    </section>
  );
}

// ---------- Blue Content Blocks ----------
function BlueBlocks() {
  return (
    <section className="bg-blue-700 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Multi-stage Framework</h3>
          <p>
            Our multi-stage analytics framework equips organizations with the
            tools needed to identify, measure, and act with clarity.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Enablement Playbooks</h3>
          <p>
            Through execution-oriented playbooks, teams achieve accelerated
            adoption and scalable impact.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA (Take Your Next Leap) ----------
function CTA() {
  return (
    <section
      className="relative text-white py-32 px-6"
      style={{
        backgroundImage: `url(${wavePattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="cta"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Take Your Next Leap with us
          </h2>
          <p className="mb-6">
            Ready to transform your organization? Join our wait-list today and
            be part of the Vulue journey.
          </p>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-blue-600 px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700"
            >
              <LogIn size={18} /> Log in to join wait-list
            </Link>
            <a
              href="#contact"
              className="bg-transparent border border-white px-6 py-3 rounded-xl font-medium hover:bg-white/10"
            >
              Contact team
            </a>
          </div>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <p className="italic">
            "Working with Vulue has given us clarity and execution precision
            like never before."
          </p>
          <p className="mt-4 font-semibold">– Partner Testimonial</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-white font-bold">Vulue</span>
        </div>
        <div className="flex justify-center gap-6">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#trailx" className="hover:text-white">
            Partners
          </a>
          <a href="#insights" className="hover:text-white">
            Insights
          </a>
        </div>
        <div className="text-right">
          <p>© {new Date().getFullYear()} Vulue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ---------- Login + Waitlist ----------
function Login() {
  const [accountType, setAccountType] = useState("Individual");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert(`Thanks ${fullName}, you’ve joined the wait-list with ${email}`);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to join wait-list
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Account Type
                </label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                >
                  <option>Individual Account</option>
                  <option>Professional Account</option>
                  <option>Enterprise Account</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Work Email
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <Mail className="text-gray-400 mr-2" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="flex-1 py-2 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Enter OTP"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                Continue <ArrowRight size={18} />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="First and Surname"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700"
              >
                <UserPlus size={18} /> Join Wait-list
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ---------- App (Landing + Routing) ----------
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Together />
              <TrailX />
              <Insights />
              <Plata />
              <BlueBlocks />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
