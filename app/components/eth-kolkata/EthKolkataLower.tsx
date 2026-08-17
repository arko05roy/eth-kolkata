/* eslint-disable @next/next/no-img-element */

import metro from "../../../brand/metro.png";
import styles from "./EthKolkataLower.module.css";

const LEGACY_ASSET_BASE = "https://ethprague.com";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 38 38" aria-hidden="true">
      <circle cx="19" cy="19" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M27.943 12.4562 24.9248 26.0342c-.2279.9581-.8215 1.1966-1.6652.7455l-4.599-3.2328-2.2188 2.0362c-.2458.2344-.4508.43-.9244.43l.3307-4.4676 8.5231-7.3467c.3707-.3148-.0807-.4901-.5758-.1744l-10.5368 6.3293-4.5362-1.3547c-.9865-.2937-1.0044-.9411.2057-1.3929l17.7426-6.5209c.8215-.2937 1.5402.1745 1.2723 1.3713Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 38 38" aria-hidden="true">
      <circle cx="19" cy="19" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24.1757 11h2.76l-6.0299 6.7782L28 27h-5.5545l-4.35-5.5937L13.117 27h-2.7615l6.45-7.2503L10 11.0007h5.6955l3.9323 5.1128L24.1757 11Zm-.9682 14.3759h1.5292L14.8645 12.5393h-1.641l9.984 12.8366Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function EthKolkataLower() {
  return (
    <div className={styles.lower}>
      <section className={styles.hackathon}>
        <div className={styles.hackathonContent}>
          <div className={styles.hackathonInfo}>
            <p className={styles.hackathonLabel}>Meetup</p>
            <div className={styles.divider} />
            <h2 className={styles.hackathonHeading}>
              Building<br />Ethereum&apos;s<br />Solarpunk<br />Future
            </h2>
            <p className={styles.hackathonText}>
              Our meetup is focused on real-world impact; it brings together diverse talents to push Ethereum&apos;s boundaries in areas like sustainability, DeFi, and community-driven solutions.
            </p>
            <div className={styles.buttons}>
              <span className={`${styles.button} ${styles.primaryButton}`} aria-disabled="true">SCHEDULE</span>
              <span className={`${styles.button} ${styles.outlinedButton}`} aria-disabled="true">MORE</span>
            </div>
          </div>
        </div>
        <div className={styles.hackathonImage}>
          <img
            src={metro.src}
            alt="View of Kolkata from inside a metro train"
          />
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterInfo}>
            <h2 className={styles.newsletterHeading}>Follow<br />our socials</h2>
            <p className={styles.newsletterSubtext}>Stay up to date with the latest news!</p>
            <a
              className={`${styles.button} ${styles.primaryButton}`}
              href="https://x.com/eth_kolkata"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
        <div className={styles.newsletterSpacer} aria-hidden="true" />
      </section>

      <section className={styles.manifesto}>
        <div className={styles.manifestoContent}>
          <div className={styles.manifestoTextBlock}>
            <h2 className={styles.manifestoHeading}>Manifesto</h2>
            <div className={styles.manifestoDivider} />
            <p className={styles.manifestoParagraph}>
              ETHKolkata is a community focused on the future of Ethereum and potential applications that don&apos;t yet exist. We&apos;re not looking for the next get rich quick scheme, but to instead leave an impact on our society and technology.
            </p>
            <p className={styles.manifestoParagraph}>
              We aim to tackle challenges that will arise in the next decade and beyond because we believe Ethereum can play a major role in solving important problems. The future is in your hands, anon! Whether we end up living in a dark authoritarian dystopia or a bright solarpunk utopia depends on what we build together.
            </p>
          </div>
        </div>
        <div className={styles.manifestoSpacer} aria-hidden="true" />
      </section>

      <footer id="Contact" className={styles.footer}>
        <img
          className={styles.footerArt}
          src={`${LEGACY_ASSET_BASE}/_nuxt/eth-diamond-for-right-side.-E8szI3H.webp`}
          alt=""
          aria-hidden="true"
        />

        <div className={styles.footerMain}>
          <div className={styles.footerColumn}>
            <div className={styles.footerTitle}>Community</div>
            <div className={styles.footerLinks}>
              <a href="/speakers">Speakers</a>
              <a href="/hackathon">Hackathon</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <div className={styles.footerTitle}>Connect</div>
            <div className={styles.socialLinks}>
              <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <XIcon />
              </a>
              <a className={styles.lumaLink} href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer" aria-label="Lu.ma">
                <img src={`${LEGACY_ASSET_BASE}/_nuxt/luma.-jnSiOZZ.svg`} alt="Lu.ma" />
              </a>
            </div>
          </div>

          <div className={`${styles.footerColumn} ${styles.ethKolkataColumn}`}>
            <div className={styles.footerTitle}>ETHKolkata</div>
            <div className={styles.ethKolkataLinks}>
              <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
              <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">Social Kit</a>
              <details className={styles.pastEditions}>
                <summary className={styles.pastEditionsSummary}>
                  <span>Past Editions</span>
                  <svg className={styles.chevron} viewBox="0 0 10 6" aria-hidden="true">
                    <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className={styles.pastEditionsLinks}>
                  <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">2022</a>
                  <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">2023</a>
                  <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">2024</a>
                  <a href="https://x.com/eth_kolkata" target="_blank" rel="noopener noreferrer">2025</a>
                </div>
              </details>
            </div>
          </div>

        </div>

        <p className={styles.designCredit}>
          designed by <a href="https://x.com/notarkoroy" target="_blank" rel="noopener noreferrer">notarkoroy</a>
        </p>
      </footer>
    </div>
  );
}
