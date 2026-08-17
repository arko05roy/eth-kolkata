"use client";

import { useEffect, useRef } from "react";

const X_WIDGETS_SRC = "https://platform.x.com/widgets.js";

const posts = [
  "https://x.com/eth_kolkata/status/2088744903996260490",
  "https://x.com/eth_kolkata/status/2088565915621474323",
  "https://x.com/eth_kolkata/status/2087967800782659824",
  "https://x.com/eth_kolkata/status/2087556556053508132",
  "https://x.com/eth_kolkata/status/2087534624142663853",
  "https://x.com/eth_kolkata/status/2086797883064598892",
  "https://x.com/eth_kolkata/status/2086729145027813425",
  "https://x.com/eth_kolkata/status/2086653638320275663",
];

type XWidgets = {
  load: (element?: HTMLElement) => void;
};

declare global {
  interface Window {
    twttr?: {
      widgets?: XWidgets;
    };
  }
}

let widgetsPromise: Promise<XWidgets> | null = null;

function loadXWidgets(): Promise<XWidgets> {
  if (window.twttr?.widgets) {
    return Promise.resolve(window.twttr.widgets);
  }

  if (widgetsPromise) {
    return widgetsPromise;
  }

  widgetsPromise = new Promise((resolve, reject) => {
    const waitForWidgets = () => {
      if (window.twttr?.widgets) {
        resolve(window.twttr.widgets);
        return;
      }

      window.setTimeout(waitForWidgets, 50);
    };

    const existingScript = Array.from(document.scripts).find((script) =>
      /platform\.(x|twitter)\.com\/widgets\.js/.test(script.src),
    );

    if (existingScript) {
      existingScript.addEventListener("load", waitForWidgets, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("X widgets failed to load")), { once: true });
      waitForWidgets();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src = X_WIDGETS_SRC;
    script.onload = waitForWidgets;
    script.onerror = () => reject(new Error("X widgets failed to load"));
    document.body.appendChild(script);
  });

  return widgetsPromise;
}

export default function SocialFeed() {
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    loadXWidgets()
      .then((widgets) => {
        if (isMounted && wallRef.current) {
          widgets.load(wallRef.current);
        }
      })
      .catch(() => {
        // The original post links remain available when X is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="social-feed-section" id="social-feed" aria-labelledby="social-feed-heading">
      <div className="social-feed-inner">
        <div className="social-feed-heading">
          <div>
            <h2 id="social-feed-heading">কি বলছে Kolkata</h2>
            <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">
              Follow @eth_kolkata <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div ref={wallRef} className="social-feed-wall">
          {posts.map((postUrl) => (
            <article className="social-post-card" key={postUrl}>
              <blockquote className="twitter-tweet" data-theme="light" data-conversation="none">
                <a href={postUrl}>View this ETHKolkata post on X</a>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
