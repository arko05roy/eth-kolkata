"use client";

/* eslint-disable @next/next/no-img-element */

import kolkataBus from "../../brand/maximalisedbus.png";

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
              src={kolkataBus.src}
              alt="Decorated blue and yellow Kolkata bus"
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

    </section>
  );
}
