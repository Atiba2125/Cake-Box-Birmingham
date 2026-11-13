import React from 'react';

/** Hero used at the top of inner pages. */
export default function PageHero({ title, eyebrow, lead, children }) {
  return (
    <section className="phero" data-title={title}>
      <div className="blob blob--1" /><div className="blob blob--2" /><div className="blob blob--3" />
      <div className="phero__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
