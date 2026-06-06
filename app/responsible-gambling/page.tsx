import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Gambling — Bonus Portugal',
  description: 'Information and resources for responsible gambling. Set limits, recognise warning signs, and find help through SOS Jogo and SRIJ.',
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
        <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Responsible Gambling</h1>
        <p style={{ color: '#6b7d8e', fontSize: 13, marginBottom: 32 }}>Last updated: June 2026</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Our Commitment</h2>
        <p>At Bonus Portugal, we believe that gambling should always remain an enjoyable form of entertainment, never a source of financial hardship or emotional distress. While we are an affiliate comparison site and do not operate any gambling services ourselves, we take our responsibility seriously. Every operator we feature holds a valid SRIJ licence, and we actively encourage all visitors to approach gambling with caution and self-awareness. This page provides guidance and resources to help you stay in control.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Setting Personal Limits</h2>
        <p>Before you begin any gambling session, decide in advance how much money and time you are prepared to spend. Treat this budget as the cost of entertainment, much like buying a cinema ticket or dining out. Once you reach your limit, stop. All SRIJ-licensed operators in Portugal are required to offer deposit limits, loss limits, and session time reminders within their platforms. We strongly recommend activating these tools on every operator account you hold.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Never Chase Losses</h2>
        <p>One of the most common pitfalls in gambling is the urge to continue playing after a losing session in the hope of recovering what has been lost. This behaviour almost always leads to larger losses and increased distress. If you find yourself thinking &ldquo;just one more bet to get back to even&rdquo;, that is a clear signal to step away. Casino outcomes are random, and no amount of continued play guarantees a recovery.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Recognising Warning Signs</h2>
        <p>Problem gambling can develop gradually. Be honest with yourself if any of the following apply to you: spending more money or time gambling than you originally planned; borrowing money or selling possessions to fund gambling; neglecting work, studies, or relationships because of gambling; feeling anxious, irritable, or restless when not gambling; hiding the extent of your gambling from family or friends; or gambling to escape stress, boredom, or emotional pain. If you recognise any of these signs, please seek support immediately.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>SOS Jogo — Free Helpline</h2>
        <p>Portugal offers a free, confidential telephone helpline for anyone affected by problem gambling. You can call <strong>800 202 175</strong> (SOS Jogo) at any time. The service is available 24 hours a day, seven days a week, and is operated by trained counsellors who can provide immediate support, information, and referrals to specialised treatment services. Calls are free from any Portuguese landline or mobile.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>SRIJ Self-Exclusion</h2>
        <p>The Servi&ccedil;o de Regula&ccedil;&atilde;o e Inspe&ccedil;&atilde;o de Jogos (SRIJ) administers a national self-exclusion register for online gambling in Portugal. If you feel that you need to take a break from all licensed gambling platforms, you can request voluntary self-exclusion through the SRIJ. Once enrolled, all SRIJ-licensed operators are legally obligated to block your access. You can learn more and begin the process at <a href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener" style={{ color: '#0066cc' }}>www.srij.turismodeportugal.pt</a>.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>GambleAware Resources</h2>
        <p>GambleAware is an independent organisation that funds research, education, and treatment services related to gambling harm. Their website provides a wealth of information including self-assessment tools, advice for family members of problem gamblers, and directories of local support services. Visit <a href="https://www.gambleaware.org/" target="_blank" rel="noopener" style={{ color: '#0066cc' }}>www.gambleaware.org</a> for confidential guidance and to access their resources.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Practical Tips for Safer Play</h2>
        <p>Keep gambling fun by following a few straightforward principles. Only gamble with money you can afford to lose entirely. Avoid gambling when you are upset, stressed, or under the influence of alcohol or drugs. Take regular breaks during any session. Keep track of how much time and money you have spent. Do not view gambling as a way to make money or pay bills. If you no longer find it enjoyable, that is a sign to stop.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Protecting Minors</h2>
        <p>Gambling is strictly for adults aged 18 and over. It is a criminal offence under Portuguese law for minors to gamble on licensed platforms, and it is equally unlawful for any adult to facilitate a minor&rsquo;s access to gambling. If you share your device with anyone under 18, we strongly recommend installing parental control software and never leaving gambling sites logged in or accessible. All SRIJ-licensed operators have age verification procedures in place.</p>

        <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 32, marginBottom: 8 }}>Contact Us</h2>
        <p>If you have feedback about how we present responsible gambling information, or if you believe any content on our site may be harmful, please write to us at hello@bonusportugal.world. We review all such communications carefully and aim to respond within five working days.</p>
      </main>

      <footer style={{ maxWidth: 720, margin: '0 auto', padding: '24px 24px 48px', borderTop: '1px solid #e2e8f0', fontSize: 13, color: '#6b7d8e' }}>
        <p>&copy; 2026 Bonus Portugal Media Ltd. All rights reserved.</p>
      </footer>
    </>
  );
}
