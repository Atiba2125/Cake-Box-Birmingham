import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ParallaxImg, Stat } from '../components/Ui.jsx';
import { STATS, REVIEWS } from '../data.js';

const REASONS = [
  { icon: '🛡️', title: 'Safe when you’re not sure', text: 'Cake Box says its cakes are a safe choice when you don’t know whether guests have egg allergies.' },
  { icon: '😋', title: 'Tastes just the same', text: 'Cake Box says the cakes taste no different from ones made with egg — soft, fresh and delicious.' },
  { icon: '🌱', title: 'Vegetarian-friendly', text: 'Certified vegetarian by the Vegetarian Society, so more of your guests can join the celebration.' },
  { icon: '👨‍👩‍👧', title: 'Family-made values', text: 'Each cake is baked and decorated as if it were for a member of the family.' },
];

export default function EggFree() {
  return (
    <>
      <PageHero
        title="Why egg-free?" eyebrow="The Cake Box story"
        lead="Every Cake Box cake is 100% egg free — so everyone at the table can enjoy a slice."
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="eyebrow">Our story</Reveal>
            <Reveal as="h2">One small store, <em>a big idea.</em></Reveal>
            <Reveal as="p" className="lead-p">Cake Box began in 2008 with a single small store. Its founders follow a lacto-vegetarian diet, and that inspired a simple promise: delicious cakes, with no egg.</Reveal>
            <Reveal as="p">Our Acocks Green store brings that promise to Warwick Road. We treat every customer’s occasion as a privilege, and every cake is made with high-quality ingredients and great care.</Reveal>
            <div className="stats">
              {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
            </div>
          </div>
          <ParallaxImg className="split__img" factor={0.05} src="/assets/b-strawberry-naked.jpg" alt="A naked strawberries and cream cake" />
        </div>
      </section>

      <section className="section reasons">
        <div className="wrap">
          <SectionHead eyebrow="Good to know">What 100% egg free <em>means for you</em></SectionHead>
          <div className="rgrid">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} className="reason" delay={i * 100}>
                <span className="perk__icon" aria-hidden="true">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <Reveal className="notice">
            <h3>Allergen information</h3>
            <p>Some cakes are nut free, but Cake Box cannot guarantee any product is nut free because of possible cross-contamination. There is currently no dedicated gluten-free or dairy-free range, and the vegan range is unavailable for now. Always check the ingredients on each product page, and tell the team about any allergies when you order.</p>
          </Reveal>
        </div>
      </section>

      <section className="section reviews reviews--static">
        <div className="wrap">
          <SectionHead eyebrow="Kind words" light>Customers <em>love it</em></SectionHead>
          <div className="rgrid rgrid--rev">
            {REVIEWS.map((r, i) => (
              <Reveal as="blockquote" key={i} className="rcard" delay={(i % 2) * 120}>
                <p>“{r.text}”</p>
                <cite>— {r.who}</cite>
              </Reveal>
            ))}
          </div>
          <Reveal className="center more"><Link className="btn btn--white" to="/cakes">Browse our cakes</Link></Reveal>
        </div>
      </section>
    </>
  );
}
