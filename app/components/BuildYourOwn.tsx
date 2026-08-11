"use client";

/* eslint-disable @next/next/no-img-element */

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
    <div className="build-own-ticker" aria-label="ETHKolkata topics">
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
  return (
    <section className="build-own-section" id="build-your-own">
      <div className="build-own-inner">
        <div className="build-own-heading-wrap">
          <h2 className="build-own-heading">
            <span> <span className="build-own-purple">ETHEREUM</span></span>
            <br />
            <span className="build-own-subheading">
              <span>HAS ARRIVED AT KOLKATA</span>
            </span>
          </h2>
        </div>

        <div className="build-own-program">
          <div className="build-own-image-card">
            <img
              src="https://ethistanbul.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconference_image.3928e874.webp&w=1200&q=75"
              alt="ETHIstanbul conference"
            />
          </div>

          <div className="build-own-copy">
            <h3>
              ETHKolkata is a conference connecting you with global talents, industry professionals, and web3 companies advancing technology.
            </h3>

            <p className="build-own-date">September 2026</p>

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
