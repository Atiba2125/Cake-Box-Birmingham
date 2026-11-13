import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead } from '../components/Ui.jsx';
import { BRAND, STEPS, FAQS } from '../data.js';

function Faq({ item, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className={`faq${open ? ' open' : ''}`} delay={delay}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span><i aria-hidden="true">+</i>
      </button>
      <div className="faq__panel"><div className="faq__a"><p>{item.a}</p></div></div>
    </Reveal>
  );
}

const WAYS = [
  { icon: '⏱️', title: 'Click & collect', text: 'Order selected cakes about an hour ahead and collect from 1146 Warwick Road, Acocks Green.' },
  { icon: '🚗', title: 'Local delivery', text: 'Your local store prepares and delivers your order. The fee depends on the distance — check your postcode on any product page.' },
  { icon: '📦', title: 'Courier (selected cakes)', text: 'Selected cakes can also be sent by courier across mainland Great Britain.' },
  { icon: '🏢', title: 'Corporate & events', text: 'Bulk and logo cake orders for businesses and events — email corporatesales@cakebox.com.' },
];

export default function Order() {
  return (
    <>
      <PageHero
        title="Order & delivery" eyebrow="Collect or have it delivered"
        lead="Order on cakebox.com for collection from Acocks Green or local delivery. Questions? Call the store."
      >
        <div className="phero__actions">
          <a className="btn btn--purple" href={BRAND.store} target="_blank" rel="noopener">Order online</a>
          <a className="btn btn--outline" href={BRAND.tel}>Call {BRAND.phone}</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Four easy steps">How ordering <em>works</em></SectionHead>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 110}>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ways">
        <div className="wrap">
          <SectionHead eyebrow="Your options">Collection, delivery <em>&amp; more</em></SectionHead>
          <div className="wgrid">
            {WAYS.map((w, i) => (
              <Reveal key={w.title} className="way" delay={i * 100}>
                <span className="perk__icon" aria-hidden="true">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionHead eyebrow="Good to know">Frequently asked <em>questions</em></SectionHead>
          <div className="faqs">
            {FAQS.map((q, i) => <Faq key={q.q} item={q} delay={i * 60} />)}
          </div>
          <Reveal as="p" className="fine center">Answers summarised from the Cake Box FAQs. Missed or damaged delivery? Contact the store straight away, ideally within 24 hours.</Reveal>
        </div>
      </section>
    </>
  );
}
