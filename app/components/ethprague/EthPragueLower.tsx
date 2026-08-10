/* eslint-disable @next/next/no-img-element */

import styles from "./EthPragueLower.module.css";

const ETH_PRAGUE = "https://ethprague.com";

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

function DuctTapeLogo() {
  return (
    <svg viewBox="0 0 138 123" aria-label="Duct Tape logo" role="img">
      <path d="M45.8805 39.3782c5.4141-.1794 8.6586-3.9079 8.4794-9.2315-.1791-5.4232-3.762-8.9324-9.0965-8.7529l-4.6975.1595.6171 17.9844 4.6975-.1595Z" fill="currentColor" />
      <path d="m138 58.1005-1.99-58.1005L17.9342 4.0475l1.2938 37.9228-7.1657-1.5153L0 97.3193l120.563 25.6607 12.063-56.8643-31.669-6.7391L138 58.1005ZM53.942 91.7964l.5175-2.4724c-1.6919 1.5552-4.4984 2.2132-7.4643 1.5951-5.4141-1.1564-8.3401-6.0014-7.0463-12.1225 1.3536-6.3404 6.1705-9.6702 11.9031-8.4539 2.9061.6181 4.9961 2.1135 5.9914 4.2668l.8957-2.1334 4.4786.957-4.1402 19.4799-5.1355-1.1166Zm33.2609-3.1503c-1.3137 6.1809-6.1904 9.4907-11.7836 8.2944-2.6872-.5782-4.7174-1.9539-5.7326-3.7684l-2.3289 10.9459-5.3742-1.136 6.051-28.5519 4.4786.957-.1791 2.592c1.7118-1.6748 4.5383-2.3527 7.5249-1.7147 5.5335 1.1963 8.6586 6.161 7.3449 12.3817Zm15.1281-7.5766c5.812 1.2362 8.837 5.9816 7.683 11.4048-.239 1.1365-.538 1.9339-.757 2.4724l-14.2116-3.0307c-.4379 2.6718 1.0948 4.865 3.9611 5.4831 2.0895.4386 3.9215-.1196 4.8365-1.4156l5.255 1.1165c-1.731 3.848-6.15 5.722-11.027 4.686-6.1705-1.316-9.3553-6.4007-8.0416-12.5617 1.3535-6.3204 6.4094-9.4109 12.3016-8.1548ZM44.2285 65.9562l-8.3799-1.7745-4.817 22.7298-5.6331-1.1963 4.817-22.7298-8.4197-1.7944 1.0947-5.1242 22.4327 4.7852-1.0947 5.1042Zm68.7115-48.7494 5.494-.1794.179 5.2039 3.762-.1196.159 4.526-3.762.1196.517 15.3725-5.493.1795-.518-15.3725-3.722.1196-.159-4.526 3.722-.1196-.179-5.204Zm-15.8046 5.0644c5.5936-.1994 9.6936 2.8711 10.3506 7.8158l-5.633.1994c-.597-2.1533-2.4086-3.2101-4.6379-3.1303-2.9261.0997-4.8369 2.3527-4.7175 5.9018.1195 3.3696 2.0502 5.6226 5.1156 5.5229 2.3888-.0797 4.0808-1.5152 4.4188-3.4493l5.633-.1994c-.358 4.9048-4.279 8.2744-9.7931 8.4738-6.3496.2193-10.7884-3.8481-11.0073-10.2085-.219-6.3802 3.9411-10.7069 10.2708-10.9262Zm-27.4288 1.615.3981 11.7238c.0995 2.9708 1.5924 3.9079 3.8217 3.8282 2.3886-.0798 3.762-1.8144 3.6625-4.3466l-.3981-11.4646 5.4937-.1794.6768 19.8985-4.5582.1595-.4379-2.3328c-1.3535 2.0537-3.5429 3.0506-6.1107 3.1503-4.797.1595-7.5041-2.8911-7.6633-7.5965l-.4379-12.621 5.5533-.2194Zm-24.0848-7.756c8.3799-.2792 14.5305 5.4631 14.8092 13.8173.2786 8.2944-5.3743 14.3756-13.8339 14.6547l-10.9874.3788-.9753-28.472 10.9874-.3788Z" fill="currentColor" />
      <path d="M51.8122 75.3473c-3.125-.6579-5.5932 1.1764-6.2899 4.3865-.6967 3.2499.8758 5.9017 3.9213 6.5597 3.0852.658 5.633-1.0767 6.3297-4.3864.6967-3.3098-.9355-5.9217-3.9611-6.5598ZM95.8616 88.3074l8.8974 1.8942c.418-2.4126-1.055-4.227-3.523-4.7454-2.5679-.5383-4.7574.5384-5.3744 2.8512ZM77.7681 80.9103c-3.0852-.658-5.633 1.0766-6.3297 4.4263-.6967 3.3098.9355 5.8818 3.961 6.5198 3.0853.658 5.5933-1.1364 6.29-4.3864.6966-3.25-.8758-5.9018-3.9213-6.5597Z" fill="currentColor" />
    </svg>
  );
}

export default function EthPragueLower() {
  return (
    <div className={styles.lower}>
      <section className={styles.hackathon}>
        <div className={styles.hackathonContent}>
          <div className={styles.hackathonInfo}>
            <p className={styles.hackathonLabel}>Hackathon</p>
            <div className={styles.divider} />
            <h2 className={styles.hackathonHeading}>
              Building<br />Ethereum&apos;s<br />Solarpunk<br />Future
            </h2>
            <p className={styles.hackathonText}>
              Our hackathon is focused on real-world impact; it brings together diverse talents to push Ethereum&apos;s boundaries in areas like sustainability, DeFi, and community-driven solutions.
            </p>
            <div className={styles.buttons}>
              <a className={`${styles.button} ${styles.primaryButton}`} href="/schedule">SCHEDULE</a>
              <a className={`${styles.button} ${styles.outlinedButton}`} href="/hackathon">MORE</a>
            </div>
          </div>
        </div>
        <div className={styles.hackathonImage}>
          <img
            src={`${ETH_PRAGUE}/_nuxt/obecni-dum-inside.CIbBBqtC.webp`}
            alt="Municipal House Prague interior"
          />
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterInfo}>
            <h2 className={styles.newsletterHeading}>Subscribe to<br />our newsletter</h2>
            <p className={styles.newsletterSubtext}>Stay up to date with the latest news!</p>
            <a
              className={`${styles.button} ${styles.primaryButton}`}
              href="https://paragraph.com/@ethprague"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUBSCRIBE
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
              ETHPrague is an event focused on the future of Ethereum and potential concepts or applications that don&apos;t yet exist. We&apos;re not looking for the next get rich quick scheme, but to instead leave an impact on our society and technology.
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
          src={`${ETH_PRAGUE}/_nuxt/eth-diamond-for-right-side.-E8szI3H.webp`}
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
              <a href="https://t.me/ethprague" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a href="https://twitter.com/EthPrague" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <XIcon />
              </a>
              <a className={styles.lumaLink} href="https://luma.com/ethprague" target="_blank" rel="noopener noreferrer" aria-label="Lu.ma">
                <img src={`${ETH_PRAGUE}/_nuxt/luma.-jnSiOZZ.svg`} alt="Lu.ma" />
              </a>
            </div>
            <div className={styles.emails}>
              <a href="mailto:contact@ethprague.com">contact@ethprague.com</a>
              <a href="mailto:sponsor@ethprague.com">sponsor@ethprague.com</a>
            </div>
          </div>

          <div className={`${styles.footerColumn} ${styles.ethPragueColumn}`}>
            <div className={styles.footerTitle}>ETHPrague</div>
            <div className={styles.ethPragueLinks}>
              <a href="https://ducttapeevents.notion.site/ethprague2026-code-of-conduct?pvs=74" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
              <a href="https://ducttapeevents.notion.site/ETHPrague-2026-Social-Kit-2c31a305cfe781dcade6d01db02d807d" target="_blank" rel="noopener noreferrer">Social Kit</a>
              <details className={styles.pastEditions}>
                <summary className={styles.pastEditionsSummary}>
                  <span>Past Editions</span>
                  <svg className={styles.chevron} viewBox="0 0 10 6" aria-hidden="true">
                    <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className={styles.pastEditionsLinks}>
                  <a href="https://2022.ethprague.com/" target="_blank" rel="noopener noreferrer">2022</a>
                  <a href="https://2023.ethprague.com/" target="_blank" rel="noopener noreferrer">2023</a>
                  <a href="https://2024.ethprague.com/" target="_blank" rel="noopener noreferrer">2024</a>
                  <a href="https://2025.ethprague.com/" target="_blank" rel="noopener noreferrer">2025</a>
                </div>
              </details>
            </div>
          </div>

          <div className={styles.organizedBy}>
            <div className={styles.footerTitle}>Organized by</div>
            <div className={styles.organizers}>
              <a className={styles.ductTape} href="https://ducttape.events/" target="_blank" rel="noopener noreferrer">
                <DuctTapeLogo />
              </a>
              <a className={styles.pwn} href="https://pwn.xyz" target="_blank" rel="noopener noreferrer">
                <img src={`${ETH_PRAGUE}/_nuxt/pwn-white.BwKlnVtg.svg`} alt="PWN logo" />
              </a>
            </div>
          </div>
        </div>

        <a className={styles.designCredit} href="https://www.m5x.cz/" target="_blank" rel="noopener noreferrer">
          design by M5X
        </a>
      </footer>
    </div>
  );
}
