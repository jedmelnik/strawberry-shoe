export const site = {
  name: "Strawberry Shoe & Watch Repair",
  shortName: "Strawberry Shoe",
  tagline: "Leather, shoes, and watches - repaired in Mill Valley for over 30 years.",
  phone: "(415) 381-3398",
  phoneHref: "tel:+14153813398",
  email: "info@strawberryshoe.com",
  emailHref: "mailto:info@strawberryshoe.com",
  address: {
    street: "800 Redwood Highway",
    suite: "Suite 617",
    city: "Mill Valley",
    state: "CA",
    zip: "94941",
    full: "800 Redwood Highway, Suite 617, Mill Valley, CA 94941",
    landmark:
      "On the backside of Strawberry Village Shopping Center near Thep Lela Thai and Spotless Cleaners.",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=800+Redwood+Highway+Suite+617,+Mill+Valley,+CA+94941",
  mapsEmbed:
    "https://www.google.com/maps?q=Strawberry+Shoe+%26+Watch+Repair,+800+Redwood+Highway+Suite+617,+Mill+Valley,+CA+94941&output=embed",
  mapsPlace:
    "https://www.google.com/maps/place/Strawberry+Shoe+%26+Watch+Repair/@37.8975,-122.5155,17z",
  sourceUrl: "http://www.strawberryshoe.com/",
  hoursSummary: "Mon-Fri 10:30am-6:30pm · Sat 10:30am-5:30pm · Sun closed",
  hours: [
    { day: "Monday", time: "10:30am-6:30pm" },
    { day: "Tuesday", time: "10:30am-6:30pm" },
    { day: "Wednesday", time: "10:30am-6:30pm" },
    { day: "Thursday", time: "10:30am-6:30pm" },
    { day: "Friday", time: "10:30am-6:30pm" },
    { day: "Saturday", time: "10:30am-5:30pm" },
    { day: "Sunday", time: "Closed" },
  ],
  yelpUrl: "https://www.yelp.com/biz/strawberry-shoe-and-watch-repair-mill-valley",
  yelpRating: "4.0",
  yelpReviews: "110",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Policy", href: "/policy" },
  { label: "Contact", href: "/contact" },
] as const;

export type SocialNetwork = "yelp" | "google";

export const socialLinks: {
  network: SocialNetwork;
  href: string;
  label: string;
}[] = [
  {
    network: "yelp",
    href: site.yelpUrl,
    label: "Yelp",
  },
  {
    network: "google",
    href: site.mapsPlace,
    label: "Google Maps",
  },
];

export const homeServices = [
  {
    title: "Watch Repair",
    blurb:
      "Battery and band replacement plus general repair for everyday and high-end watches.",
    href: "/services#watch-repair",
  },
  {
    title: "Shoe & Leather Repair",
    blurb:
      "Heels, soles, zippers, stretching, dyeing, and orthopedic adjustments done in-house.",
    href: "/services",
  },
  {
    title: "Key Duplication",
    blurb: "We duplicate keys only - no locksmithing.",
    href: "/services#key-duplication",
  },
  {
    title: "Comfort Insoles",
    blurb:
      "Birkenstock and Spenco inserts for arch support, cushioning, and everyday relief.",
    href: "/products",
  },
] as const;

export const services = [
  {
    id: "watch-repair",
    title: "Watch Repair",
    body: "Battery replacement, band replacement, and general repair. Competitive pricing for high-end lines like Rolex, Tag Heuer, Cartier, Baume & Mercier, Patek Philippe, Longines, and others.",
  },
  {
    id: "key-duplication",
    title: "Key Duplication",
    body: "We only duplicate keys - no locksmithing.",
  },
  {
    id: "shoe-boot-shine",
    title: "Shoe & Boot Shine",
    body: "In some cases, while you wait.",
  },
  {
    id: "custom-stretching",
    title: "Custom Stretching",
    body: "If a new pair feels snug, we can ease width, length, toe vault, or instep for a better overall fit.",
  },
  {
    id: "orthopedic",
    title: "Orthopedic Adjustment",
    body: "Adjustments for a handicap, injury, or podiatrist prescription. Call to ask about your specific request.",
  },
  {
    id: "belt-shortening",
    title: "Belt Shortening",
    body: "More than punching another hole - we shorten belts the proper way so they fit and last.",
  },
  {
    id: "conditioning",
    title: "Leather Goods Conditioning & Refurbishing",
    body: "Bags, purses, shoes, boots, jackets, briefcases, and attachés restored when the leather has lost its sheen.",
  },
  {
    id: "purse-luggage",
    title: "Purse & Luggage Repair",
    body: "Structural and cosmetic repairs for leather goods you rely on every day.",
  },
  {
    id: "alteration",
    title: "Leather Goods Alteration",
    body: "Changes that help a shoe, purse, or bag fit and function the way you need.",
  },
  {
    id: "zipper",
    title: "Zipper Repair & Replacement",
    body: "Bags, backpacks, luggage, and jackets - zippers replaced across a wide range of goods.",
  },
  {
    id: "dying",
    title: "Shoe & Leather Goods Dyeing",
    body: "Most leathers and satin or cloth dyeables.",
  },
  {
    id: "heel-base",
    title: "Heel Base & Shank Repair",
    body: "Broken heel bases and shanks on women's high heels, plus torn heel-face leather from grates.",
  },
  {
    id: "heel-height",
    title: "Heel Lowering & Build-up",
    body: "Lower a heel that is too high to walk in, or add a slight lift when you feel like you are falling backwards.",
  },
] as const;

export const productCategories = [
  {
    title: "Shoe & Boot Care",
    items: [
      "Shoe and boot laces",
      "Shoe stretchers and boot trees",
      "Meltonian cream and wax polish",
      "Meltonian color sprays for leather and suede",
      "Lincoln wax polish and leather dye",
    ],
  },
  {
    title: "Cushioning & Comfort",
    items: [
      "Ball of the foot cushions (metatarsal pads)",
      "Heel cushions for bone spurs and shock absorption",
      "Spenco and other comfort lines in stock",
    ],
  },
] as const;

export const birkenstockInsoles = [
  {
    name: "Blue Footbed Casual Arch Support",
    details:
      "Based on the original Birkenstock footbed with pronounced arch support and a deep heel cup for flat or low-heel footwear. Natural cork and EVA for flexible, shock-absorbing construction.",
  },
  {
    name: "Blue Footbed Heeled Arch Support",
    details:
      "Pronounced arch support and a deep heel cup for footwear with up to 1 1/2 inch heels. Natural cork and EVA sole material.",
  },
  {
    name: "Three-Quarter Length Air Cushion Insole",
    details:
      "BirkoTex breathable liner that absorbs moisture. Durable, hand-washable air-cushion construction.",
  },
  {
    name: "Full Length Air Cushion Insoles",
    details:
      "BirkoTex liner with a comfortable, hand-washable air-cushion sole.",
  },
  {
    name: "Air Cushion Insole Ladies",
    details:
      "Smooth, durable leather liner with a comfortable, hand-washable air-cushion sole.",
  },
] as const;

export const spencoInsoles = [
  "Liner",
  "Arch Cushion (full length)",
  "Arch Cushions (3/4 length)",
  "Polysorb Total Support (also Thin and Max)",
  "Polysorb Walker-Runner (also wide)",
  "Polysorb Cross-Trainer",
  "Polysorb Outdoor Series Hiker",
  "Orthotic Arch Supports (full and 3/4 length)",
  "Thinsole Orthotic (full and 3/4 length)",
  "Ball of the Foot Cushion",
  "Heel Cushion",
  "ProForm (Thin)",
] as const;

export const policyPoints = [
  "All repair work is guaranteed within reasonable wear and tear.",
  "Returns or exchanges must occur within 30 days for in-store purchases and 45 days for shipped orders (unless the order was delayed).",
  "Shoe returns and exchanges require the original sales receipt (no photocopies), the original shoe box plus the shipping box, and shoes that are unworn and fully saleable.",
  "Do not tape the shoe box itself or wrap the shoe box with paper in place of a shipping box.",
  "We only refund shipping for returns if the error was on our part or if the item was originally defective.",
] as const;

export const directions = {
  northbound: [
    "Take US 101 North to the Tiburon / E. Blithedale exit (0.2 miles).",
    "Turn right on Tiburon Blvd (CA-131 South).",
    "Make a sharp right onto Redwood Hwy (0.2 miles).",
    "Take the first left onto Reed Blvd.",
    "Arrive at 617 Strawberry Village on your right.",
  ],
  southbound: [
    "Take US 101 South to the Tiburon / E. Blithedale exit (0.2 miles).",
    "Turn left on E. Blithedale (CA-131).",
    "Continue on CA-131, then make a sharp right onto Redwood Hwy (0.2 miles).",
    "Turn left onto Reed Blvd.",
    "Arrive at 617 Strawberry Village on your right.",
  ],
} as const;

export const brandLinks = [
  { name: "Bastad Clogs", href: "https://www.ana-techshoes.com/" },
  { name: "Birkenstock", href: "https://www.birkenstockusa.com/" },
  { name: "Rockport", href: "https://www.rockport.com/" },
  { name: "UGG", href: "https://www.ugg.com/" },
  { name: "Sperry", href: "https://www.sperry.com/" },
  { name: "Clarks", href: "https://www.clarks.com/" },
] as const;

/**
 * Shared hero image metadata with measured landmarks for FocalBanner.
 * Plates outpainted with gpt-image-2 (1536x1024) for side + vertical padding.
 * focalX/focalY are points IN THE FILE (not screen targets).
 * Interiors use fillFrame + subject so short banners cover ~70-90% at 1280.
 */
export const heroes = {
  home: {
    src: "/images/hero-home.jpg",
    alt: "Polished brown leather monk-strap dress shoes on a wooden surface",
    width: 1536,
    height: 1024,
    // Landmark: nearer shoe buckle / strap clasp
    focalX: 0.62,
    focalY: 0.55,
    fillFrame: true,
    bleed: true,
    // ~0.74 subject height → ~78% cover at 1280 while keeping outpaint padding
    subject: { l: 0.15, t: 0.14, r: 0.95, b: 0.88 },
  },
  services: {
    src: "/images/hero-services.jpg",
    alt: "Black leather dress shoes with a high polish on a wood floor",
    width: 1536,
    height: 1024,
    // Landmark: center of the toe box of the nearer shoe
    focalX: 0.62,
    focalY: 0.52,
    fillFrame: true,
    bleed: true,
    subject: { l: 0.28, t: 0.26, r: 0.9, b: 0.75 },
  },
  products: {
    src: "/images/hero-products.jpg",
    alt: "Brown leather boots on a light wood floor",
    width: 1536,
    height: 1024,
    // Landmark: vamp / lace of the front boot
    focalX: 0.58,
    focalY: 0.5,
    fillFrame: true,
    bleed: true,
    subject: { l: 0.25, t: 0.26, r: 0.88, b: 0.75 },
  },
  policy: {
    src: "/images/hero-watch.jpg",
    alt: "Minimal wristwatch with a leather strap held in hand",
    width: 1536,
    height: 1024,
    // Landmark: center of the watch dial
    focalX: 0.68,
    focalY: 0.38,
    fillFrame: true,
    bleed: true,
    subject: { l: 0.4, t: 0.12, r: 0.92, b: 0.54 },
  },
  contact: {
    src: "/images/hero-contact.jpg",
    alt: "Navy high-heeled pumps held outdoors",
    width: 1536,
    height: 1024,
    // Landmark: mid vamp of the nearer pump
    focalX: 0.62,
    focalY: 0.48,
    fillFrame: true,
    bleed: true,
    subject: { l: 0.32, t: 0.14, r: 0.9, b: 0.6 },
  },
} as const;
