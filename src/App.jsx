import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Cakes from './pages/Cakes.jsx';
import EggFree from './pages/EggFree.jsx';
import Order from './pages/Order.jsx';
import Visit from './pages/Visit.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cakes" element={<Cakes />} />
          <Route path="egg-free" element={<EggFree />} />
          <Route path="order" element={<Order />} />
          <Route path="visit" element={<Visit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
