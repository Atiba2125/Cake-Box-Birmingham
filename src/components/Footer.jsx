import React from 'react';
import { Link } from 'react-router-dom';
import { NAV, BRAND } from '../data.js';
import { Wave } from './Effects.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <Wave color="#3b1740" />
      <div className="footer__body">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <img src="/assets/logo-cream.svg" alt="Cake Box" />
            <p>Acocks Green · Birmingham</p>
            <small>100% egg free · Handmade Happiness</small>
          </div>
          <div>
            <h4>Explore</h4>
            {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </div>
          <div>
            <h4>Visit us</h4>
            <address>{BRAND.address[0]}<br />{BRAND.address[1]}</address>
            <a href={BRAND.tel}>{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
          <div>
            <h4>Follow Cake Box</h4>
            <a href={BRAND.instagram} target="_blank" rel="noopener">Instagram @cakeboxuk</a>
            <a href={BRAND.facebook} target="_blank" rel="noopener">Facebook</a>
            <a href={BRAND.tiktok} target="_blank" rel="noopener">TikTok @cakeboxuk</a>
            <a href={BRAND.shop} target="_blank" rel="noopener">cakebox.com</a>
          </div>
        </div>
        <p className="footer__small">© {new Date().getFullYear()} Cake Box. Concept website for the Acocks Green store — logo, photos and prices belong to Cake Box; ordering is completed on cakebox.com.</p>
      </div>
    </footer>
  );
}
