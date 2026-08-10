/* eslint-disable @next/next/no-img-element */

import ccu from "../../../brand/ccu.jpg";
import styles from "./EthPragueUpper.module.css";

const ETH_PRAGUE = "https://ethprague.com";

type Speaker = {
  name: string;
  company: string;
  image: string;
  profile: string;
  profileLabel: string;
  profileType: "twitter" | "linkedin" | "info";
};

const speakers: Speaker[] = [
  {
    name: "Vitalik Buterin",
    company: "Ethereum Foundation",
    image: "/people-and-sponsors/2026-vitalik-buterin-1936c49972.jpg",
    profile: "https://twitter.com/VitalikButerin",
    profileLabel: "Vitalik Buterin's Twitter",
    profileType: "twitter",
  },
  {
    name: "Marian Goodell",
    company: "Burning Man Project",
    image: "/people-and-sponsors/2026-marian-goodell-2bdada18d6.jpg",
    profile: "https://www.linkedin.com/in/mariangoodell",
    profileLabel: "Marian Goodell's LinkedIn",
    profileType: "linkedin",
  },
  {
    name: "Micah Springut",
    company: "Monumental Labs",
    image: "/people-and-sponsors/2026-micah-springut-bc188aae08.jpg",
    profile: "https://www.monumentallabs.co/",
    profileLabel: "Micah Springut's website",
    profileType: "info",
  },
  {
    name: "Peter Szilagyi",
    company: "Dark Bio",
    image: "/people-and-sponsors/2026-peter-szilagyi-549278feeb.jpg",
    profile: "https://x.com/peter_szilagyi",
    profileLabel: "Peter Szilagyi's Twitter",
    profileType: "twitter",
  },
  {
    name: "Christopher Fabian",
    company: "Giga, UNICEF",
    image: "/people-and-sponsors/2026-christopher-fabian-f6136626f7.jpg",
    profile: "https://www.linkedin.com/in/hichrisfabian/?originalSubdomain=ch",
    profileLabel: "Christopher Fabian's LinkedIn",
    profileType: "linkedin",
  },
  {
    name: "Balaji",
    company: "Network School",
    image: "/people-and-sponsors/2026-balaji-506e0aefb2.jpg",
    profile: "https://x.com/balajis",
    profileLabel: "Balaji's Twitter",
    profileType: "twitter",
  },
  {
    name: "Ondrej Kovarik",
    company: "Former member of European Parliament",
    image: "/people-and-sponsors/2026-ondrej-kovarik-acc52def3a.jpg",
    profile:
      "https://www.europarl.europa.eu/meps/cs/118949/ONDREJ_KOVARIK/declarations",
    profileLabel: "Ondrej Kovarik's website",
    profileType: "info",
  },
  {
    name: "Josef Jelacic",
    company: "OWN",
    image: "/people-and-sponsors/2026-josef-jelacic-af674c47dc.jpg",
    profile: "https://x.com/josefj_",
    profileLabel: "Josef Jelacic's Twitter",
    profileType: "twitter",
  },
];

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
            Built
            <br />
            for Impact
          </h2>
          <p className={styles.threeDaysDescription}>
            ETHKolkata 2026 brings builders, researchers, and designers together
            for talks, workshops, and hands-on hacking focused on moving Ethereum
            forward.
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
              KOLKATA
              <br />
              CALLING
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
            KOLKATA
            <br />
            EXPERIENCE
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

function SpeakersAndTalks() {
  return (
    <section className={styles.speakersSection}>
      <div className={styles.speakersSpacer} aria-hidden="true" />
      <div className={styles.speakersInner}>
        <div className={styles.speakersLayout}>
          <div className={styles.speakersMeta}>
            <h2 className={styles.speakersTitle}>
              Speakers
              <br />
              &amp; Talks
            </h2>
            <p className={styles.speakersText}>
              Our conference spans three main tracks — Ethereum Core, Network
              Economies, and Future Society — covering everything from protocol
              development, privacy, and onchain finance to governance, culture,
              and long- term societal impact.
            </p>
          </div>

          <div className={styles.speakersSide}>
            <div className={styles.speakersPreview} inert aria-hidden="true">
              <div className={styles.speakersGrid}>
                {speakers.map((speaker) => (
                  <article className={styles.speaker} key={speaker.name}>
                    <a
                      className={`${styles.speakerSocial} ${styles[speaker.profileType]}`}
                      href={speaker.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={speaker.profileLabel}
                    />
                    <div className={styles.speakerImageWrapper}>
                      <img
                        className={styles.speakerImage}
                        src={`${ETH_PRAGUE}${speaker.image}`}
                        alt={`${speaker.name}, speaker at ETHPrague 2026`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className={styles.speakerName}>{speaker.name}</div>
                    <div className={styles.speakerCompany}>{speaker.company}</div>
                  </article>
                ))}
              </div>

              <div className={styles.speakersActions}>
                <Button href={`${ETH_PRAGUE}/speakers`}>VIEW ALL (148)</Button>
              </div>
            </div>

            <p className={styles.speakersComingSoon} role="status">
              <span>Coming soon</span>
            </p>
          </div>
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
        src={`${ETH_PRAGUE}/_nuxt/eth-diamond-for-left-side.Bl6oi9px.webp`}
        alt="Ethereum diamond illustration"
        aria-hidden="true"
      />
      <ThreeDays />
      <ArtInfo />
      <SpeakersAndTalks />
    </div>
  );
}
