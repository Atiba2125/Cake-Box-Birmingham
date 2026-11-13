import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { useCountUp, useInView, useParallax, prefersReducedMotion } from '../hooks/useMotion.js';
import { MARQUEE, money, openStatus } from '../data.js';

export const ext = { target: '_blank', rel: 'noopener' };

export function SectionHead({ eyebrow, children, light, center = true }) {
  return (
    <div className={`section__head${center ? '' : ' left'}`}>
      <Reveal as="p" className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2">{children}</Reveal>
    </div>
  );
}

export function ParallaxImg({ className = '', factor, delay, ...imgProps }) {
  const imgRef = useRef(null);
  useParallax(imgRef, factor);
  return (
    <Reveal className={className} delay={delay}>
      <img ref={imgRef} loading="lazy" {...imgProps} />
    </Reveal>
  );
}

export function Stat({ end, dec, suffix, comma, plain, label, delay }) {
  const [ref, seen] = useInView();
  const v = useCountUp(end || 0, seen, { dec });
  const text = comma ? Number(v).toLocaleString('en-GB') : v;
  return (
    <div ref={ref} className={`reveal stat${seen ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <b>{plain ? v : text}{suffix || ''}</b>
      <span>{label}</span>
    </div>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((m, i) => <React.Fragment key={i}><span>{m}</span><em>●</em></React.Fragment>)}
      </div>
    </div>
  );
}

/** Live "open now" pill (London time). */
export function OpenNow({ className = '' }) {
  const [s, setS] = useState(() => openStatus());
  useEffect(() => {
    const t = setInterval(() => setS(openStatus()), 60000);
    return () => clearInterval(t);
  }, []);
  return <span className={`opennow${s.open ? ' is-open' : ''} ${className}`}><i />{s.text}</span>;
}

/** Product card — tilts toward the pointer; links to the product on cakebox.com. */
export function ProductCard({ item, delay = 0 }) {
  const ref = useRef(null);
  const [vref, seen] = useInView();
  const canTilt = typeof window !== 'undefined' && !prefersReducedMotion() && window.matchMedia('(hover:hover)').matches;
  const move = (e) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <a
      ref={(n) => { ref.current = n; vref.current = n; }}
      href={item.url} {...ext}
      className={`pcard reveal${seen ? ' in' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onMouseMove={move} onMouseLeave={leave}
      aria-label={`${item.name}, from ${money(item.price)} — order on cakebox.com`}
    >
      <span className="pcard__img"><img src={item.img} alt={item.name} loading="lazy" /></span>
      <span className="pcard__body">
        <b>{item.name}</b>
        <span className="pcard__row">
          <span className="pcard__price"><small>from</small> {money(item.price)}</span>
          {item.reviews > 0 && <span className="pcard__rev">★ {item.reviews}</span>}
        </span>
        <span className="pcard__cta">Order on cakebox.com <i>→</i></span>
      </span>
    </a>
  );
}
