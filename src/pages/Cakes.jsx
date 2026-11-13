import React, { useMemo, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { ProductCard } from '../components/Ui.jsx';
import { PRODUCTS, CATS, BRAND } from '../data.js';

const SORTS = [
  { id: 'popular', label: 'Most popular' },
  { id: 'low', label: 'Price: low to high' },
  { id: 'high', label: 'Price: high to low' },
];

export default function Cakes() {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('popular');

  const list = useMemo(() => {
    const items = cat === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.cat === cat);
    if (sort === 'low') items.sort((x, y) => x.price - y.price);
    if (sort === 'high') items.sort((x, y) => y.price - x.price);
    if (sort === 'popular') items.sort((x, y) => y.reviews - x.reviews);
    return items;
  }, [cat, sort]);

  const active = CATS.find((c) => c.id === cat);

  return (
    <>
      <PageHero
        title="Our cakes" eyebrow="Fresh · handmade · 100% egg free"
        lead="Birthday cakes, cupcakes, cheesecakes and slices. Pick one you love and finish your order on cakebox.com for collection from Acocks Green or local delivery."
      />

      <div className="chipbar">
        <div className="chipbar__inner">
          <button className={`chip${cat === 'all' ? ' on' : ''}`} onClick={() => setCat('all')}>All</button>
          {CATS.map((c) => (
            <button key={c.id} className={`chip${cat === c.id ? ' on' : ''}`} onClick={() => setCat(c.id)}>{c.short}</button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="toolbar">
            <p className="toolbar__info">{active ? active.blurb : 'Everything in our range, ready to order.'} <b>{list.length} items</b></p>
            <label className="sort">
              <span>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </label>
          </div>
          <div className="pgrid pgrid--4" key={`${cat}-${sort}`}>
            {list.map((p, i) => <ProductCard key={p.id} item={p} delay={(i % 4) * 80} />)}
          </div>
          <Reveal as="p" className="fine center">Prices are “from” prices from cakebox.com and vary by size. The star count shows customer reviews on each product. Order and pay on cakebox.com.</Reveal>
        </div>
      </section>

      <section className="ctaband">
        <Reveal className="wrap ctaband__inner">
          <div><h2>Want something different?</h2><p>Some stores can adjust colours, decorations or themes on selected designs — call Acocks Green to ask.</p></div>
          <div className="ctaband__btns">
            <a className="btn btn--white" href={BRAND.tel}>Call {BRAND.phone}</a>
            <a className="btn btn--ghost" href={BRAND.store} target="_blank" rel="noopener">Order online</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
