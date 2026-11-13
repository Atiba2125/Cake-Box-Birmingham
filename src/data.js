const a = (f) => `/assets/${f}.jpg`;
const SHOP = 'https://www.cakebox.com/products/';

export const BRAND = {
  name: 'Cake Box Birmingham (Acocks Green)',
  short: 'Cake Box Acocks Green',
  tagline: 'Handmade Happiness',
  phone: '0121 798 3159',
  tel: 'tel:+441217983159',
  email: 'acocksgreen@eggfreecake.co.uk',
  address: ['Unit 1A, 1146 Warwick Road', 'Acocks Green, Birmingham B27 6BL'],
  map: 'https://www.google.com/maps/search/?api=1&query=Cake+Box+Birmingham+%28Acocks+Green%29%2C+1146+Warwick+Road%2C+B27+6BL',
  mapEmbed: 'https://www.google.com/maps?q=Cake+Box+1146+Warwick+Road+Acocks+Green+Birmingham+B27+6BL&output=embed',
  store: 'https://www.cakebox.com/storelocator/birmingham-acocks-green',
  shop: 'https://www.cakebox.com',
  corporate: 'corporatesales@cakebox.com',
  instagram: 'https://instagram.com/cakeboxuk',
  facebook: 'https://facebook.com/eggfreecakebox',
  tiktok: 'https://tiktok.com/@cakeboxuk',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/cakes', label: 'Our Cakes' },
  { to: '/egg-free', label: 'Why Egg-Free' },
  { to: '/order', label: 'Order & Delivery' },
  { to: '/visit', label: 'Visit Us' },
];

/** Opening hours: Mon–Thu 10–7, Sat 10–8, Sun 10–6 (store page); Friday 10–8 (today's hours on the store page / Google). */
export const HOURS = [
  ['Monday', '10:00 – 19:00', 1], ['Tuesday', '10:00 – 19:00', 2], ['Wednesday', '10:00 – 19:00', 3],
  ['Thursday', '10:00 – 19:00', 4], ['Friday', '10:00 – 20:00', 5], ['Saturday', '10:00 – 20:00', 6], ['Sunday', '10:00 – 18:00', 0],
];
const CLOSE = { 0: 18, 1: 19, 2: 19, 3: 19, 4: 19, 5: 20, 6: 20 };

export function openStatus(now = new Date()) {
  const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(now);
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(f.find((p) => p.type === 'weekday').value);
  const h = +f.find((p) => p.type === 'hour').value % 24;
  const m = +f.find((p) => p.type === 'minute').value;
  const mins = h * 60 + m;
  const close = CLOSE[day];
  if (mins >= 10 * 60 && mins < close * 60) return { open: true, text: `Open now · until ${close > 12 ? close - 12 : close}pm` };
  return { open: false, text: mins < 10 * 60 ? 'Closed · opens 10am' : 'Closed · opens tomorrow 10am' };
}

export const MARQUEE = ['100% Egg Free', 'Birthday Cakes', 'Cupcakes', 'Cheesecakes', 'Cake Slices', 'Click & Collect', 'Local Delivery', 'Handmade Happiness'];

export const STATS = [
  { end: 4.9, dec: 1, label: 'Google rating' },
  { end: 1143, label: 'Google reviews', comma: true },
  { end: 100, suffix: '%', label: 'Egg free' },
  { end: 2008, label: 'Cake Box founded', plain: true },
];

export const REVIEWS = [
  { text: 'Yummy taste, nice staff service as well as awesome designs.', who: 'Google review' },
  { text: 'The cakes are always fresh, beautifully decorated, and absolutely delicious.', who: 'Google review' },
  { text: 'Shop is clean and has loads of options to choose from. Lovely customer service!', who: 'Google review' },
  { text: 'A real excellent place with great customer services and great food.', who: 'Google review' },
];

export const CATS = [
  { id: 'birthday', label: 'Birthday & Party Cakes', short: 'Cakes', blurb: 'Handmade round, square and themed cakes for every celebration.' },
  { id: 'cupcakes', label: 'Cupcakes', short: 'Cupcakes', blurb: 'Boxes of six, from fruity to chocolatey to character themes.' },
  { id: 'cheesecake', label: 'Creamy Cheesecakes', short: 'Cheesecakes', blurb: 'Rich, creamy and loaded with toppings.' },
  { id: 'slices', label: 'Slices of Cake', short: 'Slices', blurb: 'A little treat for one — or one for each.' },
];

const P = (id, cat, name, price, reviews, slug) => ({ id, cat, name, price, reviews, img: a(id), url: SHOP + slug });
export const PRODUCTS = [
  P('b-white-rainbow', 'birthday', 'Classic White & Rainbow Sprinkles', 23.99, 831, 'classic-white-rainbow-sprinkles'),
  P('b-colour-theme', 'birthday', 'Colour Theme Round Cake', 27.99, 519, 'colour-theme'),
  P('b-double-choc', 'birthday', 'Double Chocolate Swirl Cake', 30.99, 427, 'double-chocolate-swirl-1'),
  P('b-black-forest', 'birthday', 'Black Forest Cake', 34.99, 305, 'black-forest'),
  P('b-fan-flake', 'birthday', 'Chocolate Fan & Flake Cake', 30.99, 289, 'chocolate-fan-flake'),
  P('b-hazelnut-speculoos', 'birthday', 'Hazelnut Speculoos Bliss', 29.99, 293, 'ferrero-biscoff-bliss'),
  P('b-naked-choc', 'birthday', 'Naked Chocolate Dream', 39.99, 291, 'naked-chocolate-dream'),
  P('b-speculoos', 'birthday', 'Teaser Speculoos Heaven', 36.99, 216, 'teaser-speculoos-heaven'),
  P('b-strawberry-naked', 'birthday', 'Classic Strawberries & Cream Naked', 34.99, 198, 'classic-strawberries-cream-naked'),
  P('b-fruit-crown', 'birthday', 'Fruit Crown', 29.99, 168, 'fruit-crown'),
  P('b-pink-pearl', 'birthday', 'Pink Pearl Sprinkles Cake', 31.99, 155, 'pink-pearl-sprinkles-cake'),
  P('b-rv-photo', 'birthday', 'Red Velvet Photo Cake', 48.49, 146, 'red-velvet-photo-cake'),
  P('b-football', 'birthday', 'Blue Football Players', 34.99, 181, 'blue-football-players'),
  P('b-white-choc', 'birthday', 'Classic White & Choc Piping', 27.99, 114, 'classic-white-choc-piping'),
  P('b-mcqueen', 'birthday', 'Lightning McQueen Themed Cake', 41.99, 110, 'lightening-mcqueen-themed-cake'),
  P('b-spiderman', 'birthday', 'Marvel Spiderman Themed Cake', 39.99, 79, 'marvel-spiderman-themed-cake'),

  P('c-choc-curl', 'cupcakes', 'Box of 6 Chocolate Curl Cupcakes', 15, 12, 'box-of-6-chocolate-curl-cupcakes'),
  P('c-mango', 'cupcakes', 'Box of 6 Mango Cupcakes', 18, 9, 'box-of-6-mango-cupcakes'),
  P('c-nutella', 'cupcakes', 'Box of 6 Cupcakes Filled with Nutella®', 18, 7, 'box-of-6-cupcakes-filled-with-nutellar'),
  P('c-coconut', 'cupcakes', 'Box of 6 Coconut Cupcakes', 18, 6, 'box-of-6-coconut-cupcakes'),
  P('c-lotus', 'cupcakes', 'Box of 6 Lotus Cupcakes', 18, 6, 'box-of-6-lotus-cupcakes'),
  P('c-black-forest', 'cupcakes', 'Box of 6 Black Forest Cupcakes', 18, 6, 'box-of-6-black-forest-cupcakes'),
  P('c-oreo', 'cupcakes', 'Box of 6 Chocolate-Filled Oreo Cupcakes', 18, 2, 'box-of-6-chocolate-filled-oreo-cupcakes'),
  P('c-fruity', 'cupcakes', 'Box of 6 Fruity Cupcakes', 21, 3, 'box-of-6-fruity-cupcakes'),
  P('c-tiramisu', 'cupcakes', 'Tiramisu Cupcakes', 20, 4, 'tiramisu-cupcakes'),
  P('c-spiderman', 'cupcakes', 'Box of 6 Spiderman Cupcakes', 20, 4, 'box-of-6-spider-man-cupcakes'),

  P('h-forest-fruit', 'cheesecake', 'Vanilla Forest Fruit Cheesecake', 16.99, 120, 'vanilla-forest-fruit-cheesecake'),
  P('h-vanilla-drizzle', 'cheesecake', 'Fully Loaded Vanilla Fruit Drizzle', 16.99, 97, 'fully-loaded-vanilla-fruit-drizzle'),
  P('h-hazelnut', 'cheesecake', 'Hazel Nutter Cheesecake', 16.99, 57, 'hazel-nutter-cheesecake'),
  P('h-choc-hazelnut', 'cheesecake', 'Fully Loaded Choc Hazelnut Cheesecake', 18.99, 58, 'fully-loaded-choc-hazelnut-cheesecake'),
  P('h-dubai', 'cheesecake', 'Strawberry Dubai Chocolate Cheesecake', 21.99, 24, 'strawberry-dubai-chocolate-cheesecake'),
  P('h-pistachio-tiramisu', 'cheesecake', 'Pistachio Berry Tiramisu Cheesecake', 16.99, 33, 'pistachio-berry-tiramisu-cheesecake'),
  P('h-cookies-cream', 'cheesecake', 'Cookies & Cream Cheesecake', 16.99, 49, 'cookies-cream-cheesecake'),
  P('h-choc-oreo', 'cheesecake', 'Fully Loaded Choc Oreo', 17.99, 30, 'fully-loaded-choc-oreo'),
  P('h-tropical-mango', 'cheesecake', 'Tropical Mango Delight Cheesecake', 17.99, 27, 'tropical-mango-delight'),

  P('s-black-forest', 'slices', 'Black Forest Slice', 4.49, 77, 'black-forest-slice'),
  P('s-mango', 'slices', 'Mango Dream', 4.49, 66, 'mango-dream'),
  P('s-cookie', 'slices', 'Cookie Crumble', 4.49, 58, 'cookie-crumble'),
  P('s-rv-berries', 'slices', 'Red Velvet Berries', 4.99, 45, 'red-velvet-berries'),
  P('s-coconut', 'slices', 'Coconut Dream', 4.5, 39, 'coconut-dream'),
  P('s-strawberry', 'slices', 'Strawberry Delight', 4.5, 36, 'strawberry-delight'),
  P('s-pistachio', 'slices', 'Pistachio Cream Slice', 4.99, 19, 'pistachio-cream-slice'),
  P('s-dubai', 'slices', 'Dubai Chocolate Slice with Nutella®', 5.5, 16, 'dubai-chocolate-slice-with-nutellar'),
];

export const byId = (id) => PRODUCTS.find((p) => p.id === id);
export const FEATURED = ['b-white-rainbow', 'h-dubai', 'c-lotus', 'b-black-forest', 's-rv-berries', 'b-naked-choc'].map(byId);
export const HERO_CARDS = ['b-colour-theme', 'c-mango', 'h-choc-oreo'].map(byId);
export const money = (n) => `£${Number.isInteger(n) ? n : n.toFixed(2)}`;

export const PERKS = [
  { icon: '🥚', title: '100% egg free', text: 'Every Cake Box product is egg free and certified vegetarian by the Vegetarian Society.' },
  { icon: '⏱️', title: 'Ready in 1 hour', text: 'Selected cakes are available to click & collect in about an hour.' },
  { icon: '🚗', title: 'Collect or delivered', text: 'Pick up from Acocks Green or have your local store deliver to your door.' },
  { icon: '✅', title: 'Halal certified', text: 'Cake Box states all its products are Halal, certified by the Universal Halal Authority.' },
];

export const STEPS = [
  { n: '1', title: 'Choose your cake', text: 'Browse the range at cakebox.com and pick collection from Acocks Green or local delivery.' },
  { n: '2', title: 'Pick a time slot', text: 'Check your postcode and available slots. Selected cakes are ready in about an hour.' },
  { n: '3', title: 'Collect or receive', text: 'Pick it up at 1146 Warwick Road, or our store delivers it to you.' },
  { n: '4', title: 'Celebrate!', text: 'Enjoy a handmade, egg-free cake that tastes just like the real thing.' },
];

export const FAQS = [
  { q: 'Are your cakes egg free?', a: 'Yes. All Cake Box cakes are 100% egg free and certified vegetarian by the Vegetarian Society.' },
  { q: 'Are the cakes Halal?', a: 'Cake Box states that all its products are Halal, certified by the Universal Halal Authority.' },
  { q: 'Do you offer vegan, gluten-free or dairy-free cakes?', a: 'The vegan range is currently unavailable but is expected to return. There is no dedicated gluten-free or dairy-free range — always check each product page for ingredients.' },
  { q: 'Are your cakes suitable for nut allergies?', a: 'Some cakes are nut free, so check each product’s ingredients. Cake Box cannot guarantee any product is nut free because of possible cross-contamination.' },
  { q: 'How far ahead should I order?', a: 'Click & collect cakes can be ordered about an hour ahead. For other cakes, add one to your basket to see available slots. Wedding cakes need at least 72 hours’ notice.' },
  { q: 'Can I personalise a cake?', a: 'Online bespoke cakes are not offered, but some stores can adjust colours, decorations or themes on selected designs. Call the Acocks Green store on 0121 798 3159 to ask.' },
  { q: 'How does delivery work?', a: 'Your local store prepares and delivers the order. The fee depends on the distance from the store — enter your postcode on any product page to see the exact price.' },
  { q: 'Can I order for a business or event?', a: 'Yes — bulk and corporate orders, including logo cakes, are available via corporatesales@cakebox.com.' },
];

export const FLAVOURS = ['Chocolate', 'Red Velvet', 'Mango', 'Pistachio', 'Tiramisu', 'Oreo', 'Lotus', 'Nutella®', 'Strawberry', 'Coconut', 'Dubai Chocolate', 'Black Forest'];
