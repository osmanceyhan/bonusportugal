type Offer = {
  slug: string; display_name: string; brand_color: string; rating: number;
  bonus_headline: string; feature_bullets: string[]; payment_methods: string[];
  min_deposit_gbp: number; min_wager_terms: string; tracker_url: string;
  logo_url?: string; logo_bg?: string;
};

const LOGO_MAP: Record<string, string> = {
  'bwin': '/logos/operators/bwin.jpg',
  'casino-portugal': '/logos/operators/casino-portugal.webp',
  'esc-online': '/logos/operators/esc-online.jpg',
  'lebull': '/logos/operators/lebull.webp',
  'nossa-aposta': '/logos/operators/nossa-aposta.webp',
};

export default function OfferRow({ offer }: { offer: Offer }) {
  const logoSrc = offer.logo_url || LOGO_MAP[offer.slug] || '';

  return (
    <article className="bp-offer">
      <div className="bp-offer-logo">
        {logoSrc ? <img src={logoSrc} alt={offer.display_name} loading="lazy" />
        : <span className="bp-offer-logo-text">{offer.display_name}</span>}
      </div>
      <div className="bp-offer-body">
        <div className="bp-offer-row">
          <h3 className="bp-offer-name">{offer.display_name}</h3>
          <span className="bp-offer-rating">{offer.rating.toFixed(1)}</span>
        </div>
        <p className="bp-offer-bonus">{offer.bonus_headline}</p>
        <ul className="bp-offer-pills">
          {offer.feature_bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="bp-offer-pays">
          {offer.payment_methods.map(p => <span key={p}>{p}</span>)}
        </div>
        <p className="bp-offer-meta">Min €{offer.min_deposit_gbp} · {offer.min_wager_terms}</p>
      </div>
      <div className="bp-offer-side">
        <a className="bp-offer-cta" href={offer.tracker_url} target="_blank" rel="nofollow sponsored noopener">Claim Bonus</a>
        <p className="bp-offer-tc">18+ · T&Cs apply</p>
      </div>
    </article>
  );
}
