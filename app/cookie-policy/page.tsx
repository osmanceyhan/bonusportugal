import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — Bonus Portugal',
  description: 'Cookie policy for bonusportugal.world. Understand what cookies we use, why we use them, and how you can manage your preferences.',
};

export default function Page() {
  return (
    <>
      <header className="bp-legal-header">
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="/" style={{ color: '#0066cc', fontSize: 13, textDecoration: 'none' }}>&larr; Back</a>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Bonus<b>Portugal</b></span>
        </div>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px', color: '#1a2b3c', lineHeight: 1.75, fontSize: 15 }}>
        <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Cookie Policy</h1>
        <p style={{ color: '#6b7d8e', fontSize: 13, marginBottom: 32 }}>Last updated: June 2026</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. They serve a variety of purposes, from remembering your preferences to enabling core site functionality. Cookies are widely used across nearly all modern websites, and they do not contain executable code or viruses. Each cookie typically contains the name of the domain that placed it, an expiry date, and a short string of text or a unique identifier.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>2. How We Use Cookies</h2>
        <p>At bonusportugal.world, we use cookies for three primary purposes: ensuring the website operates correctly, understanding how visitors interact with our content, and supporting the affiliate referral relationships with the operators we list. We do not use cookies to identify you personally or to build a profile for targeted advertising outside of our own site. Our use of cookies is designed to be minimal and proportionate.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>3. Essential Cookies</h2>
        <p>Essential cookies are strictly necessary for the Site to function as intended. They enable core features such as page navigation, remembering your cookie consent choice, and maintaining session integrity. These cookies do not collect any information that could be used for marketing purposes. Because they are essential, these cookies cannot be disabled without impairing the Site&rsquo;s functionality. They are typically set in response to an action you have taken, such as submitting a form or setting a privacy preference.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>4. Analytics Cookies</h2>
        <p>We use analytics cookies to gather aggregated, anonymised information about how visitors use the Site. This includes data such as which pages are visited most frequently, how long visitors spend on each page, and which external sites referred visitors to us. The insights we gain help us improve the structure, content, and performance of the Site. Analytics data is processed in aggregate form, and we do not use it to identify individual visitors.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>5. Affiliate Tracking Cookies</h2>
        <p>When you click on an outbound link to one of the gambling operators listed on our Site, an affiliate tracking cookie may be set on your device. This cookie allows the operator to recognise that your visit originated from bonusportugal.world, enabling us to receive a referral commission if you subsequently register or make a deposit. These cookies are set by the operator or their affiliate platform, not by us directly. They typically expire after 30 to 90 days, depending on the operator&rsquo;s programme terms.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>6. Third-Party Cookies</h2>
        <p>In addition to cookies we set ourselves, certain third-party services embedded on our Site may place their own cookies. These may include analytics providers and content delivery networks. Each third-party provider has its own cookie and privacy policy, which we encourage you to review. We select our third-party partners carefully and limit their use to services that are necessary for the operation and improvement of the Site.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>7. Managing Your Cookie Preferences</h2>
        <p>You can control and manage cookies through your browser settings. All major browsers allow you to block or delete cookies, either for all websites or on a site-by-site basis. Please note that blocking essential cookies may prevent certain features of the Site from functioning correctly. You can also clear all cookies stored on your device at any time through your browser&rsquo;s privacy or history settings. For detailed instructions, consult the help documentation for your specific browser (Chrome, Firefox, Safari, Edge, etc.).</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>8. Updates and Contact</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any updates will be reflected in the &ldquo;Last updated&rdquo; date shown at the top of this page. If you have any questions about our use of cookies or wish to exercise your data rights, please contact us at hello@bonusportugal.world.</p>
      </main>

      <footer style={{ maxWidth: 720, margin: '0 auto', padding: '24px 24px 48px', borderTop: '1px solid #e2e8f0', fontSize: 13, color: '#6b7d8e' }}>
        <p>&copy; 2026 Bonus Portugal Media Ltd. All rights reserved.</p>
      </footer>
    </>
  );
}
