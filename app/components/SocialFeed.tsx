import Script from "next/script";

// Add X post URLs here; each entry is rendered as an embedded post below.
const xPostUrls = [
  "https://x.com/eth_kolkata/status/2086469423200886967",
  "https://x.com/eth_kolkata/status/2088744903996260490",
  "https://x.com/eth_kolkata/status/2088565915621474323",
  "https://x.com/eth_kolkata/status/2087967800782659824",
  "https://x.com/eth_kolkata/status/2087556556053508132",
  "https://x.com/eth_kolkata/status/2087534624142663853",
  "https://x.com/eth_kolkata/status/2086797883064598892",
  "https://x.com/eth_kolkata/status/2086729145027813425",
  "https://x.com/eth_kolkata/status/2086653638320275663",
];

export default function SocialFeed() {
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

        <div className="social-feed-wall">
          {xPostUrls.map((postUrl) => (
            <article className="social-post-card" key={postUrl}>
              <blockquote className="twitter-tweet" data-theme="light" data-conversation="none">
                <a href={postUrl}>View this ETHKolkata post on X</a>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
      <Script src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />
    </section>
  );
}
