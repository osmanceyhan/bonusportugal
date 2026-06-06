import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions — Bonus Portugal',
  description: 'Terms and conditions governing the use of bonusportugal.world, operated by Bonus Portugal Media Ltd.',
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
        <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Terms and Conditions</h1>
        <p style={{ color: '#6b7d8e', fontSize: 13, marginBottom: 32 }}>Last updated: June 2026</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>1. Acceptance of Terms</h2>
        <p>By accessing or using bonusportugal.world (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions. The Site is operated by Bonus Portugal Media Ltd. If you do not agree with any part of these terms, you must not use the Site. Continued browsing constitutes acceptance of all provisions set out below.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>2. Nature of the Service</h2>
        <p>Bonus Portugal is an editorial comparison platform. We review, rank, and present casino welcome offers from operators that hold valid licences issued by the Servi&ccedil;o de Regula&ccedil;&atilde;o e Inspe&ccedil;&atilde;o de Jogos (SRIJ) in Portugal. We do not operate any gambling service, process wagers, or hold player funds. All gambling activity takes place on the third-party operator sites we link to, and is governed by those operators&rsquo; own terms and conditions.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>3. Affiliate Disclosure</h2>
        <p>Some of the links on this Site are affiliate links. This means that if you click through and register or deposit at a listed operator, we may receive a commission from that operator at no additional cost to you. Affiliate relationships do not influence our editorial rankings, which are determined by objective criteria including licence status, bonus terms, payout speed, and customer support quality.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>4. Eligibility</h2>
        <p>This Site is intended exclusively for individuals who are at least 18 years of age. By using the Site, you confirm that you meet this minimum age requirement and that online gambling is legal in your jurisdiction. It is your sole responsibility to ensure that accessing gambling-related content and engaging in gambling activities complies with the laws applicable to your location.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>5. Accuracy of Information</h2>
        <p>We make every reasonable effort to ensure that the bonus details, terms, and operator information displayed on the Site are accurate and current. However, operator promotions change frequently and without prior notice. We cannot guarantee that every detail will be correct at the moment you view it. You should always verify bonus terms directly on the operator&rsquo;s website before making any deposit or wagering decision.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>6. Intellectual Property</h2>
        <p>All original content on this Site, including text, graphics, logos, page layouts, and software, is the property of Bonus Portugal Media Ltd and is protected by applicable intellectual property laws. Operator logos and brand names displayed on the Site belong to their respective owners and are used for identification purposes only. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our express written permission.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>7. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Bonus Portugal Media Ltd shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or your reliance on any information provided herein. This includes, without limitation, any losses incurred through gambling activity on third-party operator sites. We do not accept liability for the content, practices, or policies of external websites linked from this Site.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>8. No Guarantee of Outcomes</h2>
        <p>Nothing on this Site should be construed as a guarantee of winnings, returns, or any specific outcome from gambling. Casino games involve risk, and outcomes are determined by random number generators certified by independent testing agencies. Past promotions or bonus values are not indicative of future availability. We strongly advise you to gamble responsibly and within your means.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>9. User Conduct</h2>
        <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by any third party. You must not attempt to gain unauthorised access to any part of the Site, its servers, or any systems connected to the Site. Any form of automated data collection, scraping, or crawling is strictly prohibited without our prior written consent.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>10. Modifications to the Terms</h2>
        <p>We reserve the right to amend these Terms and Conditions at any time. When changes are made, the &ldquo;Last updated&rdquo; date at the top of this page will be revised accordingly. Your continued use of the Site after any such modifications constitutes your acceptance of the revised terms. We recommend checking this page periodically to stay informed of any updates.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>11. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of Portugal. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Lisbon, Portugal. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>12. Contact</h2>
        <p>For any questions or concerns regarding these Terms and Conditions, please contact Bonus Portugal Media Ltd at hello@bonusportugal.world. We will endeavour to address your query within five working days of receipt.</p>
      </main>

      <footer style={{ maxWidth: 720, margin: '0 auto', padding: '24px 24px 48px', borderTop: '1px solid #e2e8f0', fontSize: 13, color: '#6b7d8e' }}>
        <p>&copy; 2026 Bonus Portugal Media Ltd. All rights reserved.</p>
      </footer>
    </>
  );
}
