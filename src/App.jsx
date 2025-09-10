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

/* ---------------- SOFTWARE & INTELLIGENCE COMPANY ---------------- */
function SoftwareIntelligence() {
  return (
    <section id="about" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We are a software and intelligence technology company
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            We are a software and intelligence technology company focused on
            powering collaborative finance in West Africa and other frontier
            markets.
            <br />
            <br />
            We aim to provide a platform-as-a-service infrastructure for
            friends, families, investment clubs, and strategy groups to explore,
            coordinate, and manage their investment interests — all through a
            secure, private environment backed by trusted capital market
            providers.
            <br />
            <br />
            Our platform, powered by TrailX+ enables the formation of digital
            strategy baskets hosted by LLPs, LPs, and registered capital
            managers. Each group or firm maintains control over visibility,
            access, and allocation logic for their unique plans.
            <br />
            <br />
            Vulue's mission is to streamline technology adoption across emerging
            capital ecosystems by building a regulated-aligned, modular platform
            where licensed entities and private groups can operate efficiently
            and transparently.
            <br />
            <br />
            We do not act as a broker-dealer, investment adviser, or asset
            manager, nor do we hold or move investor funds. All transactional
            access is provided via integration with duly licensed third-party
            API partners and intermediaries.
          </p>
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
      className="relative py-32 text-gray-900 overflow-hidden"
    >
      <img
        src={gradient1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            A look at our partners paving the future!
          </h2>
          <p className="text-lg leading-relaxed">
            We work hand-in-hand with our partners to pioneer the technologies
            of tomorrow. Our collaborations focus on driving impact where it
            matters most—helping industries adapt, evolve, and lead.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
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
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          We are a Technology Provider & Partner to Proprietary Partners LLP
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line text-left">
          ““As a Private Family Office Partnership, our members and partners
          enjoy structured access to hedge-fund-style strategies while retaining
          the stability of traditional assets. With the support of trusted
          broker/dealers and sub-brokerages, VULUE enables the electronic
          infrastructure through which our family office operates.
          <br />
          <br />
          Together with VULUE, we maintain proprietary systems for the curation,
          aggregation, and in-house distribution of non-discretionary strategies
          — including speculative long/short trades, active rebalancing, passive
          baskets, and dividend-focused portfolios. These strategies are
          available exclusively to our limited partners and family office
          members.
          <br />
          <br />
          Our managing and limited member-shareholders gain exposure to
          consistently outperforming strategies and tailored planning across
          global and domestic Fixed Income and Money Market instruments,
          Equities, Derivatives, and selected alternative classes such as REITs,
          Infrastructure Funds, and digital assets. Both our in-house and
          third-party strategy contributors rely on VULUE’s proprietary
          technology to scrutinize the capital markets and identify
          opportunities.
          <br />
          <br />
          Access remains restricted to pre-admitted limited liability partners
          and members. THE STRATEGIES PROVIDED THROUGH THIS PLATFORM DO NOT
          CONSTITUTE ASSET MANAGEMENT SERVICES NOR INVESTMENT ADVICE. THEY ARE
          DESIGNED SOLELY FOR THE INTERNAL USE OF OUR FAMILY OFFICE NETWORK OF
          FINANCIALLY SOPHISTICATED PARTNERS.”
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
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 gap-12">
        <div className="flex items-start justify-start">
          <h2 className="text-5xl font-bold">From Insights to Impact!</h2>
        </div>
        <div className="flex items-end justify-end">
          <h3 className="text-2xl font-semibold text-blue-400">TrailX</h3>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STRATEGIES BUILT ---------------- */
function StrategiesBuilt() {
  return (
    <section className="py-32 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          We took their strategies and built a Quantamental Analytics Framework
          for In-House Growth
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 text-left whitespace-pre-line">
          It is the proprietary software layer and third party integrations
          streamlined, augmenting the research, simulation, of curated
          strategies exclusively within the Proprietary Partners LLP network.
          Enhancing value capture, we help build an maintain a semi-custom
          graphical user interface for which they carry out performance
          reporting, user management, and the analytics behind long/short,
          actively rebalanced, dividend-yielding, and passively structured
          baskets — with deep (manual and electronic) integration into
          ‘wealth-techs’ and legacy financial houses for equities, fixed income
          and alternatives access across Nigeria, the United States, and select
          global jurisdictions.
          <br />
          <br />
          It is a restricted-use system serving the internal strategy and
          analytics needs of LLP member-shareholders and pre-approved strategy
          providers. Through direct integration with broker-dealer, sub-broker,
          advisory pipes and curated data flows, TRAILX enables our to navigate
          high-alpha signal, Multi-Asset compression trends, Dividend
          resilience, Macro-regional correlation shifts, rapid suggestive
          weightings, inflation-devaluation hedged returns modelling.
          <br />
          <br />
          VULUE continues to act as the technology provider, providing ongoing
          consulting, system upkeep, and new development. This relationship is
          structured around technology license royalties and bespoke PaaS fees,
          ensuring the family office’s infrastructure remains both exclusive and
          adaptable to future opportunities.
        </p>
      </div>
    </section>
  );
}

/* ---------------- VULUE × PLATA PARTNERSHIP ---------------- */
function VuluePlataText() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-lg leading-relaxed text-left whitespace-pre-line">
          Vulue partners with Plata to unlock the full potential of Real-World
          Assets and Strategies. Our purpose is to democratize access to
          high-value assets by providing a streamlined, end-to-end solution for
          tokenization. Functionally, we offer some of the tools for Plata to
          carry out asset wrapping, and the minting of Strategy Vaults as a
          class of our broader Real World Asset-Linked Vault Tokens. The
          project's core utility is twofold: for asset owners, it unlocks
          immediate liquidity and access to global capital markets; for
          investors, it offers fractional, transparent, and Iiquid access to
          investment classes like private credit notes and infrastructure bonds,
          with the value of the tokens engineered to mirror the underlying RWASs
          performances.
          <br />
          <br />
          Vulue acts as the technology provider. It builds the rails (TrailX+
          quant tools, order, reconciliation & settlement sytem, monitoring,
          token infrastructure). Vulue issues the Asset-Linked Vault Tokens as
          digital wrappers but doesn’t “own” the strategies themselves. While
          Plata acts as the service provider & structuring arm (like a global
          holding wrapper). It sets up the subsidiaries/LLCs/LLPs in each market
          and holds/executes the real-world assets or strategies that the tokens
          mirror.
          <br />
          <br />
          The vault strategies sit inside Plata (jurisdictional entities). The
          tokens sit inside Vulue (as wrappers/tracking instruments). The two
          are linked 1:1 as Vulue can transparently monitor what Plata is doing
          and reflect that in token performance. Vulue makes it portable,
          visible, tokenized. Plata makes it legally holdable, bankable,
          compliant.
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
      <div className="absolute inset-0 bg-black/50" />
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
        <
