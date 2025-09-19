import React from "react";
import "../../page/TogetherWeGrowSection.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="empty">
        <span className="together-we-grow">Together We Grow!</span>
        <div className="software-technology-company">
          <span className="tokenised-finance">We are a</span>
          <span className="software-and-intelligence-technology">
            {" "}
            software and intelligence technology company
          </span>
          <span className="focused-on-powering-tokenised">
            {" "}
            focused on powering tokenised collaborative finance in West Africa
            and other emerging markets.
          </span>
        </div>
        <div className="flex-row-e">
          <div className="group-1">
            <div className="basil-bank-outline" />
            <span className="millions-under-management">
              Built for emerging and frontier markets
            </span>
          </div>
          <div className="group-2">
            <div className="grommet-icons-group" />
            <span className="growing-clientele">
              Stakeholder
              <br />
              Centric structured private products
            </span>
          </div>
        </div>
        <div className="flex-row-aeb">
          <div className="group-3">
            <div className="vector" />
            <span className="millions-under-management-4">
              Institutional-Grade Protection via industry ramps{" "}
            </span>
          </div>
          <div className="group-5">
            <div className="group-6">
              <div className="vector-7" />
              <div className="office" />
              <span className="built-for-modern">
                Built for the <br />
                modern era
              </span>
            </div>
          </div>
        </div>
        <div className="rectangle" />
      </div>
    </div>
  );
}