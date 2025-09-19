import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../components/sections/HeroSection";
import TogetherWeGrowSection from "../components/sections/TogetherWeGrowSection";
import ValueAtOurCoreSection from "../components/sections/ValueAtOurCoreSection";
import PlataSection from "../components/sections/PlataSection";
import CTASection from "../components/sections/CTASection";
import LegalSection from "../components/sections/LegalSection";

function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <HeroSection onLoginClick={handleLoginClick} />
      <TogetherWeGrowSection />
      <ValueAtOurCoreSection />
      <PlataSection />
      <CTASection onLoginClick={handleLoginClick} />
      <LegalSection />
    </div>
  );
}

export default LandingPage;