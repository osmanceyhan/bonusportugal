'use client';
import { useState } from 'react';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="bp-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? 'bp-burger-x' : ''} />
      </button>
      {open && (
        <>
          <div className="bp-mobile-overlay" onClick={() => setOpen(false)} />
          <nav className="bp-mobile-menu">
            <a href="#offers" onClick={() => setOpen(false)}>Offers</a>
            <a href="#how" onClick={() => setOpen(false)}>How We Select</a>
            <a href="#safety" onClick={() => setOpen(false)}>Safety</a>
          </nav>
        </>
      )}
    </>
  );
}
