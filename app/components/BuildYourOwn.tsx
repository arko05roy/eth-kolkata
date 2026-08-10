"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const assetOrigin = "https://ethistanbul.io";

const topics = [
  "Edge Proofs",
  "DeFi",
  "Crypto Consumer UX",
  "L2s",
  "Interoperability",
  "Public Goods",
  "Privacy & Security",
  "TEEs",
  "Data Availability",
  "Self Sovereign Identity",
  "DevTooling",
  "AI Agents",
  "Zero Knowledge Proofs",
];

function TopicReel() {
  return (
    <div className="build-own-ticker" aria-label="ETHIstanbul topics">
      <div className="build-own-ticker-track">
        {[0, 1].map((copy) => (
          <div className="build-own-ticker-content" key={copy} aria-hidden={copy === 1}>
            {topics.map((topic) => (
              <span className="build-own-ticker-item" key={`${copy}-${topic}`}>
                {topic}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BuildYourOwn() {
  const [activeTab, setActiveTab] = useState<"conference" | "hackathon">("conference");
  const isConference = activeTab === "conference";

  return (
    <section className="build-own-section" id="build-your-own">
      <div className="build-own-inner">
        <div className="build-own-heading-wrap">
          <h2 className="build-own-heading">
            <span>YOUR <span className="build-own-purple">OWN ROME</span></span>
            <br />
            <span className="build-own-subheading">
              <span>IN TECH, NOW IN CALCUTTA</span>
            </span>
          </h2>
        </div>

        <div className="build-own-tabs" role="tablist" aria-label="ETHIstanbul programs">
          <button
            className={isConference ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={isConference}
            onClick={() => setActiveTab("conference")}
          >
            Conference
          </button>
          <button
            className={!isConference ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={!isConference}
            onClick={() => setActiveTab("hackathon")}
          >
            Hackathon
          </button>
        </div>

        <div className="build-own-program" role="tabpanel">
          <div className="build-own-image-card">
            <img
              src={`${assetOrigin}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconference_image.3928e874.webp&w=1200&q=75`}
              alt="ETHIstanbul conference"
            />
          </div>

          <div className="build-own-copy">
            <h3>
              {isConference
                ? "ETHIstanbul is a conference connecting you with global talents, industry professionals, and web3 companies advancing technology."
                : "ETHIstanbul Hackathon brings builders together to shape the next chapter of technology."}
            </h3>

            <p className="build-own-date">
              {isConference ? "Friday, September 5, " : "Saturday, September 6, "}
              <a href="https://ramikutuphanesi.gov.tr/en" target="_blank" rel="noreferrer">
                Rami Library
              </a>
            </p>

            <div className="build-own-metrics">
              <div>
                <p>Attendees</p>
                <p className="build-own-metric-value">
                  +<span>800</span>
                </p>
              </div>
              <div>
                <p>Workshops</p>
                <p className="build-own-metric-value">
                  +<span>10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopicReel />
    </section>
  );
}
