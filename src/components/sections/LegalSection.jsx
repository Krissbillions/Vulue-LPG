import React from "react";
import "../../page/LegalSection.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="empty">
        <span className="software-technology">
          Vulue Limited is a software technology company which offers PaaS
          software infrastructure for niche products such as asset-linked vault
          tokens and their aggregation on a private marketplace. We are not a
          broker dealer, or investment adviser and all financial activity is
          mediated through licensed third-party partners. . We do not make
          investment recommendations and no communication, through this website
          or in any other medium should be construed as a recommendation for any
          security offered on or off this investment platform. Use of prototype
          or sandbox modules (e.g., Kreta, Zypher) is strictly for
          demonstration, research, or internal testing unless explicitly
          approved under applicable licensing frameworks, pending appropriate
          license acquisitions. We are committed to regulatory compliance as our
          services evolve.
          <br />
          <br />
          <br />
        </span>
        <span className="enquiries">For Enquiries</span>
        <span className="contact">contact@vulue.org</span>
        <div className="flex-row-cdc">
          <div className="image" />
          <div className="image-1" />
        </div>
        <span className="all-rights-preserved">
          ©2025 Vulue Limited. All rights preserved.
        </span>
      </div>
    </div>
  );
}