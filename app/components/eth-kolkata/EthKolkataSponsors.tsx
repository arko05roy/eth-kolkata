/* eslint-disable @next/next/no-img-element */
import styles from "./EthKolkataSponsors.module.css";

type Sponsor = {
  name: string;
  image: string;
  href?: string;
};

type Tier = {
  name: string;
  size: "xxl" | "xl" | "lg" | "md" | "sm";
  sponsors: Sponsor[];
};

const ASSET_BASE = "https://ethprague.com";

const tiers: Tier[] = [
  {
    name: "Headline",
    size: "xxl",
    sponsors: [
      {
        name: "Bitmine logo",
        image: "/people-and-sponsors/2026-bitmine-c2bb92ee7a.png",
        href: "https://www.bitminetech.io",
      },
    ],
  },
  {
    name: "Sun",
    size: "xl",
    sponsors: [
      {
        name: "Ackee logo",
        image: "/people-and-sponsors/2026-ackee-5d264b1634.svg",
        href: "https://www.ackee.xyz",
      },
      {
        name: "Umia logo",
        image: "/people-and-sponsors/2026-umia-f2aab20fa1.png",
        href: "https://www.umia.finance/",
      },
      {
        name: "Davinci space logo",
        image: "/people-and-sponsors/2026-davinci-space-3d3b70b338.png",
        href: "https://davinci.space/en/list",
      },
    ],
  },
  {
    name: "Beam",
    size: "lg",
    sponsors: [
      {
        name: "Wake logo",
        image: "/people-and-sponsors/2026-wake-63d2918e2d.png",
        href: "https://getwake.io/",
      },
      {
        name: "Gnosis Chain logo",
        image: "/people-and-sponsors/2026-gnosis-chain-320e95bfb5.png",
        href: "https://www.gnosis.io/",
      },
      {
        name: "Trezor logo",
        image: "/people-and-sponsors/2026-trezor-dcf5556b79.png",
        href: "https://trezor.io/",
      },
      {
        name: "SWARM logo",
        image: "/people-and-sponsors/2026-swarm-b1e35e793d.png",
        href: "https://www.ethswarm.org/",
      },
      {
        name: "Grego AI logo",
        image: "/people-and-sponsors/2026-grego-ai-a06c449a62.png",
        href: "https://grego.ai/",
      },
      {
        name: "Giga Unicef logo",
        image: "/people-and-sponsors/2026-giga-unicef-0cd3bc3243.svg",
        href: "https://giga.global/",
      },
      {
        name: "Apify logo",
        image: "/people-and-sponsors/2026-apify-4e58cfe7d4.svg",
        href: "https://apify.com/",
      },
    ],
  },
  {
    name: "Photon",
    size: "md",
    sponsors: [
      {
        name: "ENS logo",
        image: "/people-and-sponsors/2026-ens-2ca5d2cdb5.svg",
        href: "https://ens.domains/",
      },
      {
        name: "CleevioX logo",
        image: "/people-and-sponsors/2026-cleeviox-19ec0aa369.png",
        href: "https://www.cleeviox.com/",
      },
      {
        name: "Fhenix logo",
        image: "/people-and-sponsors/2026-fhenix-89fac9dfa8.png",
        href: "https://www.fhenix.io/",
      },
      {
        name: "Cake Wallet logo",
        image: "/people-and-sponsors/2026-cake-wallet-7ed36dfc16.svg",
        href: "https://cakewallet.com/",
      },
      {
        name: "WIA logo",
        image: "/people-and-sponsors/2026-wia-6be98597d0.svg",
        href: "https://wia.cz/en/",
      },
      {
        name: "World foundation logo",
        image: "/people-and-sponsors/2026-world-foundation-3f737c9876.png",
        href: "https://foundation.world.org/",
      },
      {
        name: "summerfi logo",
        image: "/people-and-sponsors/2026-summerfi-63abfbaab1.svg",
        href: "https://summer-fi.org",
      },
    ],
  },
  {
    name: "Community partner",
    size: "sm",
    sponsors: [
      {
        name: "Space Computer logo",
        image: "/people-and-sponsors/2026-space-computer-7f5eb9b4c3.svg",
        href: "https://spacecomputer.io/",
      },
      {
        name: "Argot logo",
        image: "/people-and-sponsors/2026-argot-8457ecb634.png",
        href: "https://www.argot.org/",
      },
      {
        name: "ODTÜ logo",
        image: "/people-and-sponsors/2026-odtu-4f20b6197a.png",
        href: "https://odtublockchain.vercel.app/",
      },
      {
        name: "Geode Labs logo",
        image: "/people-and-sponsors/2026-geode-labs-cd5b9f5c43.svg",
        href: "https://geode.build/",
      },
      {
        name: "MigaLabs logo",
        image: "/people-and-sponsors/2026-migalabs-37166d0fb0.png",
        href: "https://www.migalabs.io/",
      },
      {
        name: "Zircuit logo",
        image: "/people-and-sponsors/2026-zircuit-085195afeb.svg",
        href: "https://www.zircuit.com/",
      },
      {
        name: "Spacemanic logo",
        image: "/people-and-sponsors/2026-spacemanic-3ec88bb610.png",
        href: "https://spacemanic.com/",
      },
      {
        name: "Lido logo",
        image: "/people-and-sponsors/2026-lido-f19af3aa65.svg",
      },
      {
        name: "ZisK VM logo",
        image: "/people-and-sponsors/2026-zisk-vm-34b240bef6.svg",
        href: "https://zisk.technology/",
      },
    ],
  },
  {
    name: "Partner",
    size: "sm",
    sponsors: [
      {
        name: "FEL logo",
        image: "/people-and-sponsors/2026-fel-70187f35b4.svg",
        href: "https://fel.cvut.cz/en",
      },
      {
        name: "Devfolio logo",
        image: "/people-and-sponsors/2026-devfolio-69e8c24705.svg",
        href: "https://devfolio.co/",
      },
      {
        name: "TUM logo",
        image: "/people-and-sponsors/2026-tum-9a9d54cdf9.png",
        href: "https://www.tum-blockchain.com/",
      },
      {
        name: "VSE logo logo",
        image: "/people-and-sponsors/2026-vse-logo-eba25f403a.png",
        href: "https://www.vse.cz/english/",
      },
      {
        name: "CZM logo",
        image: "/people-and-sponsors/2026-czm-9116d7479d.png",
        href: "https://czm.fel.cvut.cz/",
      },
      {
        name: "Rekola - Partner logo",
        image: "/people-and-sponsors/2026-rekola-partner-f17277f4f0.png",
        href: "https://www.rekola.cz/en/",
      },
      {
        name: "ITU Blockchain logo",
        image: "/people-and-sponsors/2026-itu-blockchain-9aa8d89d69.png",
        href: "https://www.itublockchain.com/",
      },
      {
        name: "SheFi logo",
        image: "/people-and-sponsors/2026-shefi-69aa5efd17.png",
        href: "https://www.shefi.org/",
      },
      {
        name: "Sens logo",
        image: "/people-and-sponsors/2026-sens-c551e21b31.png",
        href: "https://eatsens.com/",
      },
      {
        name: "Fintechers logo",
        image: "/people-and-sponsors/2026-fintechers-6a12ba3776.png",
        href: "https://www.thefintechers.com",
      },
      {
        name: "ETHns logo",
        image: "/people-and-sponsors/2026-ethns-ecf154106b.svg",
        href: "https://www.ethns.io",
      },
    ],
  },
];

const logoGridClasses: Record<Tier["size"], string> = {
  xxl: styles.logosXxl,
  xl: styles.logosXl,
  lg: styles.logosLg,
  md: styles.logosMd,
  sm: styles.logosSm,
};

export default function EthKolkataSponsors() {
  return (
    <section className={styles.homeSponsors} aria-labelledby="sponsors-heading">
      <div className={styles.homeSponsorsInner}>
        <h2 className={styles.homeSponsorsTitle} id="sponsors-heading">
          Sponsors &amp; Partners
        </h2>

        <div className={styles.homeSponsorsCta}>
          <a className={`${styles.button} ${styles.buttonPrimary}`} href="mailto:sponsor@ethkolkata.com">
            Contact us
          </a>
        </div>

        <section className={styles.sponsorsAndPartners} id="SponsorsAndPartners">
          <div className={styles.sponsorsInner}>
            {tiers.map((tier) => (
              <div className={styles.tier} key={tier.name}>
                <h3 className={styles.tierTitle}>{tier.name}</h3>
                <div className={`${styles.logos} ${logoGridClasses[tier.size]}`}>
                  {tier.sponsors.map((sponsor) => {
                    const content = (
                      <img
                        className={styles.logo}
                        src={`${ASSET_BASE}${sponsor.image}`}
                        alt={sponsor.name}
                        loading="eager"
                        decoding="async"
                      />
                    );

                    return sponsor.href ? (
                      <a
                        className={styles.logoLink}
                        href={sponsor.href}
                        key={sponsor.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.logoWrapper}>{content}</span>
                      </a>
                    ) : (
                      <span className={styles.logoLink} key={sponsor.image}>
                        <span className={styles.logoWrapper}>{content}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.homeSponsorsActions}>
          <a className={`${styles.button} ${styles.buttonOutlined}`} href="/sponsor">
            About sponsorship
          </a>
        </div>
      </div>
    </section>
  );
}
