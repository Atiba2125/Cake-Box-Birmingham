import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function NotFound() {
  return (
    <PageHero title="Page not found" eyebrow="404" lead="Oops — this page has been eaten! Let’s get you back to something sweet.">
      <div className="phero__actions">
        <Link className="btn btn--purple" to="/">Back home</Link>
        <Link className="btn btn--outline" to="/cakes">See our cakes</Link>
      </div>
    </PageHero>
  );
}
