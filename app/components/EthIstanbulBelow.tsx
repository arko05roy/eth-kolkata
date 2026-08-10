"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const origin = "https://ethistanbul.io";
const image = (path: string) => `${origin}${path}`;
const optimized = (path: string, width = 3840) =>
  image(`/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${path}&w=${width}&q=75`);

const scheduleRows = [
  { time: "09:00 am", left: "Hackathon Registration Starts", right: "" },
  { time: "10:00 am", left: "OPENING", right: "OPENING" },
  { time: "10:20 am", left: "PRACTICAL PRIVACY", right: "PRACTICAL PRIVACY" },
  { time: "11:00 am", left: "MYSTERIOUS COOL NEW PAPER", right: "AI X STABLECOINS" },
  { time: "11:40 am", left: "TRANSACTION ORDERING POLICIES: TIMEBOOST VS. PGA", right: "UNLOCKING MULTICHAIN LIQUIDITY WITH AVAIL NEXUS" },
  { time: "12:20 pm", left: "EVERYTHING IS A PSYOP", right: "GAS TO ZERO" },
  { time: "01:00 pm", left: "BREAK", right: "BREAK" },
  { time: "02:00 pm", left: "MEGAETH: UNAPOLOGETICALLY PERFORMANT", right: "PERMISSIONED SHARDS MEET PUBLIC DEFI: ATOMIC SETTLEMENT IN < 1S" },
  { time: "03:00 pm", left: "CROSS-CHAIN ARBITRAGE: THE NEXT FRONTIER OF MEV IN DECENTRALIZED FINANCE", right: "WALLETS 2.0: THE NEXT GENERATION OF ETHEREUM USER EXPERIENCE" },
  { time: "04:00 pm", left: "DESIGNING A SECURITY FOCUSED SEQUENCER", right: "THE DAWN OF TYPE III STABLECOINS" },
  { time: "05:00 pm", left: "SCALING PERPETUAL TRADING WITH ZK PROOFS", right: "" },
  { time: "06:00 pm", left: "Babylon: Bringing Native BTC to the world", right: "CADEFI IN TÜRKIYE: OPPORTUNITIES, CHALLENGES & ROADMAP (Panel)" },
  { time: "07:00 pm", left: "Why BTC Liquidity Never Reached Applications - Until Now", right: "Clear Signing" },
  { time: "08:00 pm", left: "Future of Bitcoin DeFi & Metaprotocols (Panel)", right: "Lido V3: Shared Liquidity with Customizable Ethereum Staking" },
  { time: "09:00 pm", left: "CLOSING", right: "Hackathon Registration End for Friday" },
];

const contributors = [
  ["akaki_mamageishvili.0fcdc213.png", "Akaki Mamageishvili"],
  ["alp_ergin.188040f4.jpg", "Alp Ergin"],
  ["arnaud_schenk.1043fd9f.png", "Arnaud Schenk"],
  ["burak_budak.9cffe4fd.jpg", "Burak Budak"],
  ["burak_oz.8a4bc75f.jpg", "Burak Öz"],
  ["dan_mills.91ca01ae.png", "Dan Mills"],
  ["defi_dave.7549b4a9.jpg", "Defi Dave"],
  ["filip_pajic.e61139b9.png", "Filip Pajić"],
  ["fisher_yu.e32291bb.jpeg", "Fisher Yu"],
  ["furkan_dogan.66009c91.jpg", "Furkan Doğan"],
  ["istvan_andreas_seres.af1cae44.png", "Istvan Andreas Seres"],
  ["kassandra.afaaf7a3.jpg", "Kassandra"],
  ["martinet_lee.9b16cbda.png", "Martinet Lee"],
  ["figma_pic.ad18d452.png", "Maxim Merkulov"],
  ["melike_kecelioglu.14a4712a.png", "Melike Keçelioğlu"],
  ["miszke.04c56b12.png", "Miszke"],
  ["nicky_chalabi.a93912cb.jpg", "Nicky Chalabi"],
  ["sami.b319f437.jpg", "Sami"],
  ["toghrul_maharramov.c396fae0.jpg", "Toghrul Maharramov"],
  ["yunus_sahin.0a2de497.jpg", "Yunus Şahin"],
];

const conferenceSponsors = [
  ["esp-web.3b32318e.webp", "Deluxe", "ESP Ethereum Foundation"],
  ["rise-web.dedc99ee.webp", "Premium", "risechain.com"],
  ["babylon-web.1ffa1a45.webp", "Premium", "babylonlabs.io"],
  ["ledger-web.6452096b.webp", "Premium", "ledger.com"],
  ["bybit-web.05c9697b.webp", "Premium", "www.bybit.tr/"],
];

const hackathonSponsors = [
  ["esp-web.3b32318e.webp", "Platinum", "ESP Ethereum Foundation"],
  ["rise-web.dedc99ee.webp", "Platinum", "risechain.com"],
  ["citrea-web.935bbd84.webp", "Gold", "citrea.xyz"],
  ["taikai-web.aa7a9b32.webp", "Gold", "taikai.network"],
  ["yellow-web.919dea23.webp", "Gold", "yellow.org"],
  ["sui-web.5ad70e6b.webp", "Gold", "sui.io"],
  ["babylon-web.1ffa1a45.webp", "Silver", "babylonlabs.io"],
  ["aptos-web.a20c5808.webp", "Silver", "aptosfoundation.org"],
  ["ledger-web.6452096b.webp", "Silver", "ledger.com"],
];

const partners = [
  ["itu-blockchain.9e305f68.png", "ITU Blockchain"],
  ["odtu-blockchain.bf401a1f.png", "ODTÜ Blockchain"],
  ["yildiz-blockchain.62cfd97d.png", "Yıldız Blockchain"],
  ["iyte-blockchain.403b062c.png", "İYTE Blockchain"],
  ["mef-blockchain.daa3d004.png", "MEF Blockchain"],
];

const faqs = [
  {
    question: "What is ETHistanbul?",
    answer: (
      <>
        ETHistanbul is a hackathon and conference focused on Ethereum and the broader blockchain ecosystem. It&apos;s a space where developers, innovators, and entrepreneurs come together to push the boundaries of decentralized technology. Learn more about the event <a href="#schedule">here</a> and the hackathon <a href="#bounties">here</a>.
      </>
    ),
  },
  {
    question: "When and where is ETHistanbul taking place?",
    answer: "ETHistanbul takes place in Istanbul from September 5–7, 2025. See the schedule above for the full program and venues.",
  },
];

function ContactPrompt({ label }: { label: string }) {
  return (
    <div className="eth-contact-prompt">
      <span>{label}</span>
      <a href="mailto:hello@ethistanbul.io">Form</a>
    </div>
  );
}

function PlanWeek() {
  return (
    <section className="eth-plan-week" id="plan-your-week">
      <div className="eth-plan-heading">
        <h2>PLAN YOUR WEEK!</h2>
        <p>Builders Week Istanbul is happening from September 1 to 7. Discover all the events and explore the city where everything meets harmony.</p>
      </div>
      <div className="eth-plan-cards">
        <a className="eth-plan-card" href="#" aria-label="Open Istanbul Guide">
          <img src={optimized("istanbul_bridge.b916d4f7.webp")} alt="Istanbul bridge" />
          <span className="eth-plan-card-copy">Explore the city with a travel guide that highlights food, venues, historical sites, natural wonders, accommodations, transportation, and local insider tips.</span>
          <span className="eth-plan-card-label">Istanbul Guide</span>
        </a>
        <a className="eth-plan-card" href="#" aria-label="Open Builders Week Istanbul">
          <img src={optimized("bwi.17370136.webp")} alt="Builders Week Istanbul" />
          <span className="eth-plan-card-copy">BWI is a week-long series of permissionless events designed to scale the blockchain development ecosystem.</span>
          <span className="eth-plan-card-label">Builders Week Istanbul</span>
        </a>
      </div>
    </section>
  );
}

function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const days = [
    ["Conference", "Friday, September 5"],
    ["Hackathon", "Saturday, September 6"],
    ["Hackathon", "Sunday, September 7"],
  ];

  return (
    <section className="eth-schedule" id="schedule">
      <div className="eth-wide-container">
        <header className="eth-section-heading eth-schedule-heading">
          <h2>Schedule</h2>
          <p>September 5-7, 2025 • Timezone: Istanbul (GMT+3)</p>
        </header>

        <div className="eth-schedule-board">
          <div className="eth-day-tabs">
            {days.map(([kind, date], index) => (
              <button className={activeDay === index ? "is-active" : ""} type="button" key={date} onClick={() => setActiveDay(index)}>
                <span>{kind}</span>
                <strong>{date}</strong>
              </button>
            ))}
          </div>
          <div className="eth-stage-labels"><span>STAGE A</span><span>STAGE B</span></div>
          <div className="eth-schedule-rows">
            {scheduleRows.map((row) => (
              <div className={`eth-schedule-row ${row.left === "BREAK" ? "is-break" : ""}`} key={`${row.time}-${row.left}`}>
                <time>{row.time}</time>
                <div>{row.left && <strong>{row.left}</strong>}</div>
                <div>{row.right && <strong>{row.right}</strong>}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bounties() {
  const [activeTrack, setActiveTrack] = useState<"main" | "company">("main");
  const tracks = [
    {
      title: "Real Blockchain Use Cases",
      icon: "flower.7d0b2ca3.svg",
      prize: "Use any blockchain technology to make a difference in the real world. Put blockchain into anything, show the world the future. 🏆 1st Place: $3,500 🥈 2nd Place: $2,000 🥉 3rd Place: $1,000",
      copy: "In order to qualify to this track, you should be solving an actual real world problem using decentralization. UI is not a must, but recommended.",
    },
    {
      title: "Blockchain + AI = ?",
      icon: "plus.541d41dd.svg",
      prize: "21th century is huge, not because of one reason, but two. Use blockchain and AI together to discover the new frontier. 🏆 1st Place: $3,500 🥈 2nd Place: $2,000 🥉 3rd Place: $1,000",
      copy: "In this track, the only condition is to use AI and blockchain together in the same product. There is no other limits, but your imagination.",
    },
    {
      title: "10 Years of Ethereum",
      icon: "star_colored.1573e89f.svg",
      prize: "Ethereum has turned 10 this year, and we are celebrating it in the best way we know: backing builders. 🏆 1st Place: $1,500",
      copy: "The 10 Years of Ethereum Track is open to all Ethereum projects in the hackathon. No limits, no minimums; just bring something meaningful to the ecosystem.",
    },
  ];

  return (
    <section className="eth-bounties" id="bounties">
      <div className="eth-wide-container">
        <div className="eth-bounty-top">
          <h2>ETHISTANBUL HACKATHON DISTRIBUTES A TOTAL OF</h2>
          <div className="eth-bounty-amount"><strong>41K</strong><span>USD</span></div>
          <a href="#bounties">details</a>
        </div>
        <div className="eth-track-tabs">
          <button className={activeTrack === "main" ? "is-active" : ""} type="button" onClick={() => setActiveTrack("main")}>Main Track Bounties</button>
          <button className={activeTrack === "company" ? "is-active" : ""} type="button" onClick={() => setActiveTrack("company")}>Company Bounties</button>
        </div>
        <p className="eth-bounty-note">You can apply every track and company bounty.</p>
        <div className="eth-track-cards">
          {tracks.map((track) => (
            <article className="eth-track-card" key={track.title}>
              <div className="eth-track-icon"><img src={image(`/_next/static/media/${track.icon}`)} alt="" /></div>
              <h3>{activeTrack === "main" ? track.title : `${track.title} — Company Bounty`}</h3>
              <p className="eth-track-prize">{track.prize}</p>
              <p className="eth-track-copy">{track.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contributors() {
  const [activeTab, setActiveTab] = useState("Speakers");
  return (
    <section className="eth-contributors" id="contributors">
      <div className="eth-wide-container">
        <h2>Contributors</h2>
        <div className="eth-contributor-bar">
          <div className="eth-pill-tabs">
            {["Speakers", "Judges", "Mentors"].map((tab) => (
              <button className={activeTab === tab ? "is-active" : ""} type="button" key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
          </div>
          <ContactPrompt label={`Do you want to be a ${activeTab.slice(0, -1)}?`} />
        </div>
        <div className="eth-contributor-grid">
          {contributors.map(([file, name]) => (
            <article className="eth-contributor-card" key={name}>
              <img src={optimized(file)} alt={name} />
              <span>{name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorCard({ sponsor }: { sponsor: string[] }) {
  const [file, tier, label] = sponsor;
  return (
    <article className="eth-sponsor-card">
      <img src={optimized(file)} alt={label} />
      <span>{tier}</span>
      <strong>{label}</strong>
    </article>
  );
}

function Sponsors() {
  const [activeTab, setActiveTab] = useState<"conference" | "hackathon">("conference");
  const list = activeTab === "conference" ? conferenceSponsors : hackathonSponsors;
  return (
    <section className="eth-sponsors" id="sponsors">
      <div className="eth-wide-container">
        <h2>Sponsors</h2>
        <ContactPrompt label="Do you want to be a Sponsor?" />
        <div className="eth-sponsor-tabs"><button className={activeTab === "conference" ? "is-active" : ""} type="button" onClick={() => setActiveTab("conference")}>Conference</button><button className={activeTab === "hackathon" ? "is-active" : ""} type="button" onClick={() => setActiveTab("hackathon")}>Hackathon</button></div>
        <div className="eth-sponsor-grid">{list.map((sponsor) => <SponsorCard sponsor={sponsor} key={sponsor[2]} />)}</div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="eth-partners" id="partners">
      <div className="eth-wide-container">
        <h2>Partners</h2>
        <ContactPrompt label="Do you want to be a Partner?" />
        <div className="eth-partner-group"><h3>Community Partners</h3><div className="eth-partner-grid">{partners.map(([file, name]) => <img src={optimized(file, 1080)} alt={name} key={name} />)}</div></div>
        <div className="eth-partner-group"><h3>Media Supporters</h3><div className="eth-partner-empty">Media support from builders across Istanbul.</div></div>
        <div className="eth-partner-group"><h3>Talent Partners</h3><div className="eth-partner-empty">Connecting the next generation of contributors.</div></div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="eth-faq" id="faq">
      <div className="eth-wide-container">
        <h2>FAQ</h2>
        <div className="eth-faq-grid">
          <nav aria-label="FAQ topics">
            {["Event Details", "Participation & Application", "Costs & Benefits", "Experience & Networking"].map((item, index) => <button className={index === 0 ? "is-active" : ""} key={item} type="button">{item}</button>)}
          </nav>
          <div className="eth-faq-list">
            {faqs.map((faq, index) => (
              <article key={faq.question}>
                <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}><strong>{faq.question}</strong><span>{openIndex === index ? "−" : "+"}</span></button>
                {openIndex === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="eth-footer">
      <div className="eth-footer-hero"><img src={optimized("footer_image.564a29d1.webp")} alt="Istanbul at night" /></div>
      <div className="eth-footer-copy"><h1>LIVE ISTANBUL</h1><p>MOVE TO ITS RHYTHM.</p></div>
      <div className="eth-footer-links"><a href="#">Brand Kit</a><a href="mailto:hello@ethistanbul.io">hello@ethistanbul.io</a><div><a href="https://x.com/ETHIstanbul_io" target="_blank" rel="noreferrer">X</a><a href="https://t.me/ethistanbul" target="_blank" rel="noreferrer">Telegram</a></div></div>
    </footer>
  );
}

export default function EthIstanbulBelow() {
  return (
    <>
      <PlanWeek />
      <Schedule />
      <Bounties />
      <Contributors />
      <Sponsors />
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
}
