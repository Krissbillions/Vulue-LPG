import React from "react";
import "../../page/PlataSection.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="empty">
        <div className="real-world-assets">
          <span className="vulue-partners">Vulue partners with </span>
          <span className="plata">Plata</span>
          <span className="vulue-partners-1">
            {" "}
            to unlock the full potential of Real-World Assets and Strategies.
            Our purpose is to democratize access to high-value assets by
            providing a streamlined, end-to-end solution for tokenization.
            Functionally, we offer some of the tools for Plata to carry out
            asset wrapping, and the minting of{" "}
          </span>
          <span className="strategy-vaults">Strategy Vaults </span>
          <span className="vulue-partners-2">
            as a class of our broader Real World{" "}
          </span>
          <span className="strategy-vaults-3">Asset-Linked Vault Tokens</span>
          <span className="global-capital-markets">
            . The project's core utility is twofold: for asset owners, it
            unlocks immediate liquidity and access to global capital markets;
            for investors, it offers fractional, transparent, and Iiquid access
            to investment classes like private credit notes and infrastructure
            bonds, with the value of the tokens engineered to mirror the
            underlying RWASs performances.
          </span>
        </div>
        <span className="flagship-vehicles">
          See Flagship Structured Private Vehicles
        </span>
        <div className="line" />
      </div>
    </div>
  );
}