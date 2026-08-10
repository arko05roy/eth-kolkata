/* eslint-disable @next/next/no-img-element */

import kolkata from "../brand/kolkata.png";
import BuildYourOwn from "./components/BuildYourOwn";
import EthIstanbulBelow from "./components/EthIstanbulBelow";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ticker" aria-label="Announcements">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-content" key={copy} aria-hidden={copy === 1}>
              {Array.from({ length: 6 }).map((_, index) => (
                <a
                  key={`${copy}-${index}`}
                  href="https://luma.com/ethwarsaw"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={copy === 1 ? -1 : undefined}
                >
                  See what&apos;s coming up on Luma <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main id="top">
        <section className="hero-section">
          <Navbar />
          <div className="hero-sky" />
          <img className="hero-kolkata" src={kolkata.src} alt="Illustrated Kolkata skyline" />
          <div className="hero-content">
            <div className="hero-promo">
              <h1>September 2026</h1>
            </div>
          </div>
        </section>

        <BuildYourOwn />
        <EthIstanbulBelow />
      </main>
    </div>
  );
}
