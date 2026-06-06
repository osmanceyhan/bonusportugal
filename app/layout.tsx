import type { Metadata } from 'next';
import { Figtree, DM_Sans } from 'next/font/google';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-figtree' });
const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm' });

export const metadata: Metadata = {
  metadataBase: new URL('https://bonusportugal.world'),
  title: 'Bonus Portugal — Compare Licensed Casino Offers in Portugal',
  description: 'Compare the best SRIJ-licensed casino welcome offers in Portugal. Independent editorial picks for adults 18+.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${dm.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization',
          name: 'Bonus Portugal Media Ltd', url: 'https://bonusportugal.world',
          email: 'hello@bonusportugal.world',
          address: { '@type': 'PostalAddress', streetAddress: '48 Avenida da Liberdade', addressLocality: 'Lisboa', postalCode: '1250-145', addressCountry: 'PT' },
        })}} />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
