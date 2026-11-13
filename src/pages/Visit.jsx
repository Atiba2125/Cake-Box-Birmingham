import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { OpenNow, ext } from '../components/Ui.jsx';
import { BRAND, HOURS } from '../data.js';

export default function Visit() {
  const today = new Date(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/London' }).format(new Date())).getDay();
  return (
    <>
      <PageHero
        title="Visit us" eyebrow="1146 Warwick Road, Acocks Green"
        lead="Pop in to see our full range of freshly made egg-free cakes, cupcakes, cheesecakes and slices."
      >
        <OpenNow className="phero__open" />
      </PageHero>

      <section className="section">
        <div className="wrap visit">
          <div className="visit__cards">
            <Reveal className="vcard">
              <h3>Address</h3>
              <address>{BRAND.name}<br />{BRAND.address[0]}<br />{BRAND.address[1]}</address>
              <a className="btn btn--purple" href={BRAND.map} {...ext}>Get directions</a>
            </Reveal>
            <Reveal className="vcard" delay={100}>
              <h3>Opening hours</h3>
              <dl className="hours">
                {HOURS.map(([d, t, n]) => (
                  <div key={d} className={n === today ? 'today' : ''}><dt>{d}</dt><dd>{t}</dd></div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="vcard" delay={200}>
              <h3>Call or email</h3>
              <a className="vcard__big" href={BRAND.tel}>{BRAND.phone}</a>
              <a className="vcard__link" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </Reveal>
            <Reveal className="vcard" delay={300}>
              <h3>Follow Cake Box</h3>
              <div className="vcard__links">
                <a href={BRAND.instagram} {...ext}>Instagram @cakeboxuk</a>
                <a href={BRAND.facebook} {...ext}>Facebook</a>
                <a href={BRAND.tiktok} {...ext}>TikTok @cakeboxuk</a>
              </div>
            </Reveal>
          </div>
          <Reveal className="visit__map">
            <iframe title="Cake Box Acocks Green on Google Maps" src={BRAND.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
        <Reveal as="p" className="fine center more">Friday hours are taken from the store’s “today” hours and Google listing. Hours can change — call ahead on {BRAND.phone} to confirm.</Reveal>
      </section>
    </>
  );
}
