'use client';
import { useState, useEffect } from 'react';

export default function ConsentBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem('bp_consent_v1')) setVisible(true); }, []);
  if (!visible) return null;
  return (
    <div className="bp-consent">
      <p>We use essential cookies only. <a href="/cookie-policy" style={{ color: '#0066cc' }}>Learn more</a></p>
      <button onClick={() => { localStorage.setItem('bp_consent_v1', '1'); setVisible(false); }}>Got it</button>
    </div>
  );
}
