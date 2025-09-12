import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Logo from "./assets/logo.png";
import Chain from "./assets/chain.png";
import Gradient from "./assets/gradient-1.png";
import Icon1 from "./assets/icons-1.png";
import Icon2 from "./assets/icons-2.png";
import Icon3 from "./assets/icons-3.png";
import Icon4 from "./assets/icons-4.png";
import P1 from "./assets/partners-1.png";
import P2 from "./assets/partners-2.png";
import P3 from "./assets/partners-3.png";
import P4 from "./assets/partners-4.png";
import Wave from "./assets/wave-pattern.png";

export default function App(){ 
  const nav = useNavigate();
  return (
    <div className="main-container">
      <header className="header">
        <div className="logo"><img src={Logo} alt="Vulue" /></div>
        <div className="nav">
          <button className="btn" onClick={()=>nav("/login")}>Login</button>
          <button className="btn" onClick={()=>nav("/login")}>Get Started</button>
        </div>
      </header>

      <section className="hero">
        <div className="left">
          <h1>Say hello to Vulue</h1>
          <p>For forward-thinking teams building the future of finance. Insights, tools and partners that scale with you.</p>
          <div className="cta">
            <button className="btn" onClick={()=>nav("/login")}>Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={Wave} alt="hero visual" style={{width:420, borderRadius:16}} />
        </div>
      </section>

      <section className="section bg-chain">
        <h2>For insights to impact!</h2>
        <p>Data-driven decisions that move your business forward.</p>
      </section>

      <section className="section">
        <h2>Together we grow</h2>
        <div className="together-grid">
          <div className="icon-card"><img src={Icon1} alt="" style={{width:64,height:64}}/><div>Analytics</div></div>
          <div className="icon-card"><img src={Icon2} alt="" style={{width:64,height:64}}/><div>Compliance</div></div>
          <div className="icon-card"><img src={Icon3} alt="" style={{width:64,height:64}}/><div>Payments</div></div>
          <div className="icon-card"><img src={Icon4} alt="" style={{width:64,height:64}}/><div>Integrations</div></div>
        </div>
      </section>

      <section className="section bg-gradient">
        <h2>A look at our partners paving the future!</h2>
        <div className="partners-grid">
          <div className="quad">
            <img src={P1} alt="p1" />
            <img src={P2} alt="p2" />
            <img src={P3} alt="p3" />
            <img src={P4} alt="p4" />
          </div>
          <div>
            <h3>Our Suite - trailX+</h3>
            <p>TrailX+ integrates everything a modern fintech needs.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundImage:`url(${Gradient})`, backgroundSize:'cover'}}>
        <h2>Take Your Next Leap With us</h2>
        <div style={{display:'flex',justifyContent:'center',marginTop:24}}>
          <button className="btn" onClick={()=>nav("/login")}>Login</button>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} VULUE — All rights reserved</small>
      </footer>
    </div>
  );
}
