'use client';

const ITEMS = [
  { q: 'Is Bonus Portugal free to use?', a: 'Yes. We compare casino offers at no cost. We earn affiliate commissions when readers register with a listed operator.' },
  { q: 'Are all listed operators licensed?', a: 'Every operator featured holds a valid SRIJ licence issued by the Portuguese gaming regulator. We verify each licence before listing.' },
  { q: 'How often are offers updated?', a: 'We re-check bonus terms weekly. Expired or modified offers are removed the same day we detect the change.' },
  { q: 'Can I trust the bonus amounts shown?', a: 'We display the headline offer at the time of our last review. Always confirm the exact terms on the operator\'s own site before depositing.' },
  { q: 'Where can I get help with problem gambling?', a: 'Call SOS Jogo on 800 202 175 (free, 24h) or visit jogadoresseguros.pt for confidential support in Portugal.' },
];

export default function Questions() {
  return (
    <section className="bp-questions">
      <h2 className="bp-questions-title">Common Questions</h2>
      {ITEMS.map((item, i) => (
        <details key={i} className="bp-questions-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
