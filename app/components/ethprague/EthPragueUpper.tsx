/* eslint-disable @next/next/no-img-element */

import girl from "../../../brand/girl.png";
import ccu from "../../../brand/ccu.jpg";
import styles from "./EthPragueUpper.module.css";

const ETH_PRAGUE = "https://ethprague.com";

function Button({
  children,
  href,
  kind = "outlined",
  size = "medium",
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  kind?: "outlined" | "dark";
  size?: "small" | "medium" | "compact";
  external?: boolean;
}) {
  return (
    <a
      className={`${styles.button} ${styles[kind]} ${styles[size]}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function ThreeDays() {
  return (
    <section className={styles.threeDays}>
      <div className={styles.threeDaysContent}>
        <div className={styles.threeDaysInfo}>
          <p className={styles.threeDaysSubtitle}>
            September 2026
            <br />
            Kolkata, India
          </p>
          <div className={styles.threeDaysDivider} />
          <h2 className={styles.threeDaysHeading}>
            The
            <br />
            Kolkata State Of Mind
          </h2>
          <p className={styles.threeDaysDescription}>
            ETHKolkata 2026 brings builders, researchers, and designers together
            as a community focused on moving Ethereum forward to the future.
          </p>
          <div className={styles.threeDaysButtons}>
            <Button href={`${ETH_PRAGUE}/faq`} size="compact">
              FAQ
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.threeDaysImage}>
        <img
          className={styles.threeDaysImageElement}
          src={ccu.src}
          alt="Vintage Kolkata collage featuring yellow taxis, a blue tram, and city architecture"
        />
      </div>
    </section>
  );
}

function ArtInfo() {
  return (
    <section className={styles.artInfo}>
      <div className={styles.artInfoSpacer} aria-hidden="true" />
      <div className={styles.artInfoCards}>
        <article className={styles.artInfoCard}>
          <div className={styles.artInfoCardHeader}>
            <h3 className={styles.artInfoCardTitle}>
              ডাকছে
              <br />
              KOLKATA
            </h3>
            <Button
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20India"
              size="small"
              external
            >
              Map
            </Button>
          </div>
          <p className={styles.artInfoCardText}>
            ETHKolkata comes to the City of Joy, one of India&apos;s great cultural
            capitals — bringing Ethereum&apos;s builders into a city shaped by art,
            ideas, and restless invention.
          </p>
        </article>

        <article className={styles.artInfoCard}>
          <h3 className={styles.artInfoCardTitle}>
            THE 
            <br />
            CITY OF JOY
          </h3>
          <p className={styles.artInfoCardText}>
            Collaborate with builders, solve real problems, launch pilots, and
            find early adoption for ideas shaped in Kolkata and built for the world.
          </p>
        </article>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className={styles.manifestoSection}>
      <div className={styles.manifestoSpacer} aria-hidden="true" />
      <div className={styles.manifestoInner}>
        <h2 className={styles.manifestoTitle}>Manifesto</h2>
        <div className={styles.manifestoCopy}>
          <p>
            ETHKolkata is a community focused on the future of Ethereum and potential
            applications that don&apos;t yet exist. We&apos;re not looking
            for the next get rich quick scheme, but to instead leave an impact on
            our society and technology.
          </p>
          <p>
            We aim to tackle challenges that will arise in the next decade and
            beyond because we believe Ethereum can play a major role in solving
            important problems. The future is in your hands, anon! Whether we end
            up living in a dark authoritarian dystopia or a bright solarpunk utopia
            depends on what we build together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function EthPragueUpper() {
  return (
    <div className={styles.root}>
      <img
        className={styles.leftArt}
        src={girl.src}
        alt="Illustrated woman holding an Ethereum symbol in a Kolkata-inspired artwork"
        aria-hidden="true"
      />
      <ThreeDays />
      <ArtInfo />
      <Manifesto />
    </div>
  );
}
