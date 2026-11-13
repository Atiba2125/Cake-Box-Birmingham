import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { SpinBadge, Wave } from '../components/Effects.jsx';
import { SectionHead, ParallaxImg, Stat, Marquee, ProductCard, OpenNow } from '../components/Ui.jsx';
import { prefersReducedMotion } from '../hooks/useMotion.js';
import { BRAND, STATS, FEATURED, HERO_CARDS, PERKS, REVIEWS, FLAVOURS, STEPS, money } from '../data.js';

function Hero() {
  return (
    <section className="hero">
      <div className="blob blob--1" /><div className="blob blob--2" /><div className="blob blob--3" />
      <div className="hero__inner">
        <div className="hero__text">
          <OpenNow className="hero__open" />
          <p className="eyebrow hero__eyebrow">Acocks Green · Birmingham</p>
          <h1 className="hero__title">
            <span className="line"><span>100% egg-free,</span></span>
            <span className="line"><span className="pop">handmade happiness.</span></span>
          </h1>
          <p className="hero__lead">
            Birthday cakes, cupcakes, creamy cheesecakes and slices — freshly made and ready to collect from 1146 Warwick Road, or delivered to your door.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--purple" to="/cakes">Browse our cakes</Link>
            <a className="btn btn--outline" href={BRAND.store} target="_blank" rel="noopener">Order online</a>
          </div>
        </div>

        <div className="hero__stack" aria-hidden="true">
          {HERO_CARDS.map((p, i) => (
            <figure key={p.id} className={`stack stack--${i}`}>
              <img src={p.img} alt="" loading="eager" />
              <figcaption>{p.name}</figcaption>
            </figure>
          ))}
          <div className="hero__badge"><SpinBadge><img src="/assets/logo-purple.svg" alt="" /></SpinBadge></div>
        </div>
      </div>
      <Wave color="#59275e" />
    </section>
  );
}

function Perks() {
  return (
    <section className="perks">
      <div className="wrap perks__grid">
        {PERKS.map((p, i) => (
          <Reveal key={p.title} className="perk" delay={i * 100}>
            <span className="perk__icon" aria-hidden="true">{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="Customer favourites">Cakes worth <em>celebrating</em></SectionHead>
        <div className="pgrid">
          {FEATURED.map((p, i) => <ProductCard key={p.id} item={p} delay={(i % 3) * 120} />)}
        </div>
        <Reveal className="center more"><Link className="btn btn--purple" to="/cakes">See all cakes</Link></Reveal>
      </div>
    </section>
  );
}

function Christmas() {
  return (
    <section className="xmas">
      <div className="xmas__bg" />
      <div className="wrap xmas__inner">
        <Reveal as="p" className="eyebrow eyebrow--light">Christmas at Cake Box</Reveal>
        <Reveal as="h2">Save room for the <em>showstopper</em></Reveal>
        <Reveal as="p">Festive cakes, cupcakes and treats for family get-togethers and parties — all egg free. Browse the Christmas range on cakebox.com and collect from Acocks Green.</Reveal>
        <Reveal><a className="btn btn--white" href="https://www.cakebox.com/collections/christmas" target="_blank" rel="noopener">Shop Christmas</a></Reveal>
      </div>
    </section>
  );
}

function Flavours() {
  return (
    <section className="section flavours">
      <div className="wrap">
        <SectionHead eyebrow="So many flavours">Find your <em>favourite</em></SectionHead>
        <Reveal className="fl">
          {FLAVOURS.map((f, i) => <span key={f} className="fl__chip" style={{ '--i': i }}>{f}</span>)}
        </Reveal>
        <Reveal as="p" className="center fine">From classic chocolate to Dubai chocolate, mango and pistachio — all without egg.</Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div className="wrap about__grid">
        <div className="about__media">
          <ParallaxImg className="about__img" factor={0.06} src="/assets/h-forest-fruit.jpg" alt="Vanilla forest fruit cheesecake" />
          <Reveal className="about__badge" delay={200}><img src="/assets/logo-white.svg" alt="Cake Box" /></Reveal>
        </div>
        <div>
          <Reveal as="p" className="eyebrow">Your local Cake Box</Reveal>
          <Reveal as="h2">Egg free, <em>never boring.</em></Reveal>
          <Reveal as="p">Cake Box started in 2008 with one small store, inspired by founders who follow a lacto-vegetarian diet. Today our Acocks Green store brings that same family spirit to Warwick Road — fresh, beautifully decorated cakes that taste no different from ones made with egg.</Reveal>
          <Reveal><Link className="link" to="/egg-free">Why egg-free? <span>→</span></Link></Reveal>
          <div className="stats">
            {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section reviews">
      <div className="wrap">
        <Reveal className="reviews__head">
          <p className="eyebrow eyebrow--light">Loved in Acocks Green</p>
          <p className="reviews__stars" aria-label="4.9 out of 5">★★★★★ <b>4.9</b> on Google · 1,143 reviews</p>
        </Reveal>
        <div className="reviews__stage">
          {REVIEWS.map((r, n) => (
            <blockquote key={n} className={n === i ? 'on' : ''}>
              <p>“{r.text}”</p>
              <cite>— {r.who}</cite>
            </blockquote>
          ))}
        </div>
        <div className="reviews__dots">
          {REVIEWS.map((_, n) => <button key={n} aria-label={`Review ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}
        </div>
      </div>
    </section>
  );
}

function HowTo() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="Simple ordering">From basket to <em>birthday</em></SectionHead>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="step" delay={i * 110}>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center more"><Link className="btn btn--outline" to="/order">Order &amp; delivery info</Link></Reveal>
      </div>
    </section>
  );
}

function VisitBand() {
  return (
    <section className="visitband">
      <div className="wrap visitband__grid">
        <div>
          <Reveal as="p" className="eyebrow eyebrow--light">Pop in for a treat</Reveal>
          <Reveal as="h2">1146 Warwick Road, <em>Acocks Green</em></Reveal>
          <Reveal as="address">{BRAND.address[0]}<br />{BRAND.address[1]}</Reveal>
          <Reveal><OpenNow /></Reveal>
          <Reveal className="vb__btns">
            <a className="btn btn--white" href={BRAND.map} target="_blank" rel="noopener">Get directions</a>
            <a className="btn btn--ghost" href={BRAND.tel}>Call {BRAND.phone}</a>
          </Reveal>
        </div>
        <Reveal className="visitband__card">
          <b>{money(4.49)}</b>
          <p>Slices from just</p>
          <small>Grab a slice of Black Forest, Mango Dream or Cookie Crumble today.</small>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Perks />
      <Featured />
      <Christmas />
      <Flavours />
      <About />
      <Reviews />
      <HowTo />
      <VisitBand />
    </>
  );
}
