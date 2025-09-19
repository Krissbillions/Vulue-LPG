import React from "react";
import "../../page/HeroSection.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="loading-screen">
        <div className="picsart" />
        <div className="flex-column-c">
          <span className="vulue">VULUE </span>
          <span className="say-hello">Say hello to Vulue!</span>
          <div className="rectangle" />
          <button onClick={onLoginClick}>
            <span className="login">Login</span>
          </button>
        </div>
        <div className="group-1" />
        <div className="rectangle-2" />
      </div>
      <div className="line" />
    </div>
  );
}