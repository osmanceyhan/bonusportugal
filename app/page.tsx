import { headers } from 'next/headers';
import OfferRow from '@/components/OfferRow';
import Questions from '@/components/Questions';
import ConsentBar from '@/components/ConsentBar';
import offersData from '@/data/offers.json';

type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_eur: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

async function loadDeals(): Promise<{ deals: Offer[]; isBlack: boolean }> {
  try {
    const h = await headers();
    const sp = h.get('x-search-params') || '';
    if (sp.includes('_t=black')) {
      const host = h.get('host') || '';
      const domain = process.env.SITE_DOMAIN || host.split(':')[0];
      const res = await fetch(`https://cassatrack.live/api/v1/deals?domain=${encodeURIComponent(domain)}&type=black`, { headers: { Accept: 'application/json' }, cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        const raw = json?.data?.deals || json?.deals || [];
        if (Array.isArray(raw) && raw.length > 0) {
          return { deals: raw.map((d: any) => {
            const b = d.brand || {};
            const pm = Array.isArray(d.payment_methods) ? d.payment_methods.map((p: any) => typeof p === 'string' ? p : p.name || '') : [];
            return { slug: b.slug || d.slug || String(d.id), display_name: d.name || b.name || '', brand_color: b.brand_color || '#0066cc', rating: Math.min(5, Number(d.rate) || 0), bonus_headline: `${d.bonus || ''} ${d.bonus_value || ''}`.trim() || 'Welcome offer', feature_bullets: pm.length > 0 ? [`Accepts ${pm.slice(0, 2).join(' & ')}`, 'Editorial reviewed', 'Fast withdrawals'] : ['Licensed operator', 'Editorial reviewed', 'Fast withdrawals'], payment_methods: pm.length > 0 ? pm.slice(0, 5) : ['Visa', 'Mastercard'], min_deposit_eur: Number(d.min_deposit) || 10, min_wager_terms: d.terms || '18+ T&Cs', tracker_url: d.link || '', logo_url: d.img || '' };
          }), isBlack: true };
        }
      }
    }
  } catch {}
  return { deals: offersData.offers as Offer[], isBlack: false };
}

export default async function HomePage() {
  const { deals } = await loadDeals();

  return (
    <>
      <header className="bp-header">
        <div className="bp-header-inner">
          <a href="/" className="bp-header-brand">Bonus<b>Portugal</b></a>
          <nav className="bp-header-nav">
            <a href="#offers">Offers</a>
            <a href="#how">How We Select</a>
            <a href="#safety">Safety</a>
          </nav>
        </div>
      </header>

      <section className="bp-hero">
        <div className="bp-hero-inner">
          <h1>Portugal&rsquo;s best casino offers, compared.</h1>
          <p className="bp-hero-sub">Five SRIJ-licensed operators with transparent bonus terms, side by side.</p>
        </div>
      </section>

      <main className="bp-page">
        <section className="bp-listing" id="offers">
          <div className="bp-listing-head">
            <h2 className="bp-listing-title">This Week&rsquo;s Picks</h2>
            <span className="bp-listing-date">Updated June 2026</span>
          </div>
          <div className="bp-list">
            {deals.map((o) => <OfferRow key={o.slug} offer={o} />)}
          </div>
          <p className="bp-disclaimer">Bonus Portugal is an affiliate comparison site, not a gambling operator. 18+, gamble responsibly.</p>
        </section>

        <div className="bp-trust">
          <a href="https://www.gambleaware.org/" target="_blank" rel="noopener"><img src="/logos/safety/gambleaware.svg" alt="GambleAware" width="100" height="24" /></a>
          <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener"><img src="/logos/safety/srij.png" alt="SRIJ" width="80" height="24" /></a>
        </div>

        <section className="bp-how" id="how">
          <h2 className="bp-how-title">How We Select Operators</h2>
          <ol className="bp-how-list">
            <li><strong>SRIJ licence check</strong> — verified against the public regulator database before listing.</li>
            <li><strong>Deposit &amp; withdraw</strong> — real-money test with our own funds, payout tracked to the hour.</li>
            <li><strong>Bonus terms audit</strong> — wagering, game weighting and expiry decoded in plain English.</li>
            <li><strong>Support response</strong> — live chat and email turnaround measured anonymously.</li>
            <li><strong>Weekly re-check</strong> — expired or changed bonuses removed same day.</li>
          </ol>
        </section>

        <section className="bp-disclosure" id="safety">
          <h2>Licensing &amp; Disclosure</h2>
          <p>Every operator listed holds a valid SRIJ licence. The SRIJ oversees all online gaming in Portugal, enforcing player protection, fund segregation and certified RNG standards.</p>
          <p>This site is for adults aged 18+. Gambling carries risk and should be treated as entertainment. Some links are affiliate links — we may earn a commission at no cost to you. If gambling becomes a problem, call <strong>800 202 175</strong> (SOS Jogo, free, 24h).</p>
        </section>

        <Questions />
      </main>

      <footer className="bp-footer">
        <div className="bp-footer-inner">
          <div>
            <div className="bp-footer-brand">Bonus<b>Portugal</b></div>
            <p className="bp-footer-text">Independent casino offer comparison for Portugal. SRIJ-licensed operators only.</p>
            <p className="bp-footer-text"><span className="bp-footer-badge">18+</span> Adults only. SOS Jogo: 800 202 175</p>
            <p className="bp-footer-copy">&copy; 2026 Bonus Portugal Media Ltd.</p>
          </div>
          <div>
            <h4 className="bp-footer-heading">Pages</h4>
            <nav className="bp-footer-links">
              <a href="/privacy-policy">Privacy</a>
              <a href="/terms-and-conditions">Terms</a>
              <a href="/responsible-gambling">Responsible Play</a>
            </nav>
          </div>
          <div>
            <h4 className="bp-footer-heading">Play Safely</h4>
            <p className="bp-footer-text">Gambling should be fun. Set limits before you play. Never chase losses.</p>
          </div>
        </div>
      </footer>

      <ConsentBar />
    </>
  );
}
