import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, BRAND } from '../data.js';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`nav${solid ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
      <Link to="/" className="nav__brand" aria-label="Cake Box Acocks Green home">
        <img src="/assets/logo-purple.svg" alt="Cake Box" />
        <span>Acocks Green</span>
      </Link>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label="Main">
        {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
        <a className="nav__cta" href={BRAND.store} target="_blank" rel="noopener">Order online</a>
      </nav>
      <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
