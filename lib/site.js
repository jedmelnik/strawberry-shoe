export const business = {
  name: "Strawberry Shoe & Watch Repair",
  shortName: "Strawberry Shoe",
  tagline: "Repairing leather for over 30 years",
};

export const contact = {
  phone: "415-381-3398",
  phoneHref: "tel:+14153813398",
  email: "info@strawberryshoe.com",
  street: "800 Redwood Highway, Suite 617",
  city: "Mill Valley, CA 94941",
  landmark:
    "On the backside of Strawberry Village, near Thep Lela and Spotless Cleaners.",
  mapsHref:
    "https://www.google.com/maps/dir/?api=1&destination=800+Redwood+Highway+Suite+617+Mill+Valley+CA+94941",
  mapEmbed:
    "https://maps.google.com/maps?q=800%20Redwood%20Highway%2C%20Mill%20Valley%2C%20CA%2094941&z=16&output=embed",
};

export const hours = [
  { days: "Monday – Friday", time: "10:30 – 6:30" },
  { days: "Saturday", time: "10:30 – 5:30" },
  { days: "Sunday", time: "Closed" },
];

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/birkenstock-insoles", label: "Birkenstock Insoles" },
  { href: "/spenco-insoles", label: "Spenco Insoles" },
  { href: "/policy", label: "Policy" },
  { href: "/contact", label: "Contact Us" },
];

export const footerNav = [{ href: "/", label: "Home" }, ...navItems];

/* source: original | edited | generated */
const img = (file, alt, source, extra = {}) => ({ src: `/images/${file}`, alt, source, ...extra });

export const images = {
  homeHero: img(
    "home-hero.jpg",
    "Oxblood brogues on a cobbler's last beside an open pocket watch on a walnut workbench",
    "generated",
    { focal: "100% 55%", mobileFocal: "62% 50%" },
  ),
  homeLeather: img(
    "home-leather.jpg",
    "A leather handbag being restitched at the workbench",
    "generated",
  ),
  panelServices: img(
    "panel-services.jpg",
    "A leather dress shoe on a cobbler's last with a new heel",
    "generated",
  ),
  panelWatch: img(
    "panel-watch.jpg",
    "An open wristwatch with tweezers and a loupe",
    "generated",
  ),
  panelInsoles: img(
    "panel-insoles.jpg",
    "A cork arch-support insole beside a cushioned insole",
    "generated",
  ),
  servicesHero: img(
    "services-hero.jpg",
    "Hands stitching a new sole onto a leather boot",
    "generated",
    { focal: "70% 50%" },
  ),
  productsHero: img(
    "products-hero.jpg",
    "A shelf of shoe polish tins, laces, shoe trees, and brushes",
    "generated",
    { focal: "70% 50%" },
  ),
  birkenstockHero: img(
    "birkenstock-hero.jpg",
    "Cork footbed insoles beside a leather sandal",
    "generated",
    { focal: "70% 50%" },
  ),
  spencoHero: img(
    "spenco-hero.jpg",
    "A row of cushioned insoles, gel heel cups, and arch supports",
    "generated",
    { focal: "70% 50%" },
  ),
  policyHero: img(
    "policy-hero.jpg",
    "Brown shoe boxes stacked beside blank claim tickets",
    "generated",
    { focal: "70% 50%" },
  ),
  contactHero: img(
    "contact-hero.jpg",
    "The shop counter with a brass bell, a wall clock, and shoes waiting for pickup",
    "generated",
    { focal: "70% 50%" },
  ),
};

export const whoWeAre = {
  lede: "For over 30 years, we've been repairing just about everything made of leather. We offer a wide range of products and services, including:",
  list: [
    "Watch repair",
    "Key cutting (but no locksmithing)",
    "Orthopedic adjustment",
    "Leather goods alteration",
    "Purse & luggage repair",
    "Zipper repair & replacement",
    "Custom shoe stretching",
    "Shoe & leather goods dyeing",
    "A full line of leather goods products",
  ],
};

export const brands = {
  lede: "We specialize in orthopedic, comfort, and functional shoes.",
  names: ["Birkenstock", "Clarks", "Sperry", "UGG", "Anatech", "Bastad Clogs", "Rockport", "Sven Clogs"],
};

export const servicesIntro =
  "Apart from the full range of services you'd expect from a shoe repair shop, we also offer the following repairs.";

export const services = [
  {
    id: "watch-repair",
    name: "Watch Repair",
    body: "Battery replacement, band replacement, and general repair. We offer competitive prices for watch repair, especially for high-end lines like Rolex, Tag Heuer, Cartier, Baum & Mercier, Patek Philippe, and Longines.",
  },
  { id: "keys", name: "Key Duplication", body: "Please note: we only duplicate keys. No locksmithing." },
  { id: "shine", name: "Shoe & Boot Shine", body: "In some cases, while you wait." },
  {
    id: "stretching",
    name: "Custom Stretching",
    body: "Shoes you loved in the store but found a little snug can be eased through the width, length, toe vault, or instep for a better overall fit.",
  },
  {
    id: "orthopedic",
    name: "Orthopedic Adjustment",
    body: "If your shoes or leg brace need adjusting for a handicap, an injury, or a podiatrist's prescription, we can cover a large range of requests. Please call and ask about our services.",
  },
  {
    id: "belts",
    name: "Belt Shortening",
    body: "Shortening a belt takes more than punching another hole or two. Let us shorten a belt that's too large the proper way.",
  },
  {
    id: "conditioning",
    name: "Leather Conditioning & Refurbishing",
    body: "A bag, purse, pair of boots, jacket, or briefcase that felt like butter when you bought it but has since lost its sheen, we can restore.",
  },
  { id: "purse-luggage", name: "Purse & Luggage Repair" },
  {
    id: "alteration",
    name: "Leather Goods Alteration",
    body: "Sometimes what we buy needs a little alteration to fit properly. We change how a shoe, purse, or bag works so it works better for you.",
  },
  {
    id: "zippers",
    name: "Zipper Repair & Replacement",
    body: "From bags to backpacks to luggage and jackets, we replace zippers on a large range of goods.",
  },
  { id: "dyeing", name: "Shoe & Leather Goods Dyeing", body: "Most leathers, plus satin and cloth dyeables." },
  {
    id: "heels",
    name: "Heel Base & Shank Repair",
    body: "High heels often break at the heel base or the shank, and we can fix both. We also repair heel faces torn up by grates.",
  },
  {
    id: "heel-height",
    name: "Heel Lowering & Build-up",
    body: "Shoes too high to walk in can be lowered to a more comfortable height. Shoes that feel like you're falling backward can take a slight lift.",
  },
];

export const productsIntro =
  "We carry a full line of leather care products you'd expect from a shoe repair store, plus insoles, laces, and other shoe-related paraphernalia.";

export const products = [
  { name: "Shoe & Boot Laces" },
  { name: "Shoe Stretchers" },
  { name: "Shoe & Boot Trees" },
  { name: "Meltonian Cream & Wax Polish" },
  { name: "Meltonian Color Sprays for Leather" },
  { name: "Meltonian Color Sprays for Suede" },
  { name: "Lincoln Wax Polish" },
  { name: "Lincoln Leather Dye" },
  {
    name: "Ball of the Foot Cushions",
    body: "Also called metatarsal pads, they cushion the ball of the foot between the toes and the arch. We carry them by Spenco and other lines.",
  },
  {
    name: "Heel Cushions",
    body: "Relief from painful heel spurs, shock absorption when walking, and added height. We carry them by Spenco and other lines.",
  },
];

export const birkenstockIntro =
  "Aside from the famous sandals, Birkenstock makes a full line of insoles and inserts. Here is the stock we carry.";

const casualFootbed = "Natural cork and EVA, for a flexible, shock-absorbing construction.";
const birkoTex = "BirkoTex™, a breathable synthetic that absorbs moisture. Durable and hand-washable.";
const airCushion = "An air-cushion insole that is comfortable and hand-washable.";

export const birkenstock = [
  {
    name: "Blue Footbed Casual Arch Support",
    image: img("birk-casual.jpg", "Blue suede and cork arch-support insole", "generated"),
    details: [
      ["Footbed", "Based on the original Birkenstock footbed, with pronounced arch support and a deep heel cup, for flat or low-heeled footwear."],
      ["Sole", casualFootbed],
    ],
  },
  {
    name: "Blue Footbed Heeled Arch Support",
    image: img("birk-heeled.jpg", "Short blue suede and cork arch support for heeled shoes", "generated"),
    details: [
      ["Footbed", "Based on the original Birkenstock footbed, with pronounced arch support and a deep heel cup, for footwear with heels up to 1½ inches."],
      ["Sole", casualFootbed],
    ],
  },
  {
    name: "Three-Quarter Length Air Cushion Insole",
    image: img("birk-air-34.jpg", "Three-quarter length air-cushion insole", "generated"),
    details: [
      ["Liner", birkoTex],
      ["Sole", airCushion],
    ],
  },
  {
    name: "Full Length Air Cushion Insoles",
    image: img("birk-air-full.jpg", "Pair of full-length air-cushion insoles", "generated"),
    details: [
      ["Liner", birkoTex],
      ["Sole", airCushion],
    ],
  },
  {
    name: "Air Cushion Insole Ladies",
    image: img("birk-air-ladies.jpg", "Pair of slim leather-lined insoles", "generated"),
    details: [
      ["Liner", "A leather liner that is smooth, durable, and breathable."],
      ["Sole", airCushion],
    ],
  },
];

export const spencoIntro =
  "Spenco insoles, cushions, and orthotic supports in stock. Please call to check sizes.";

const sp = (name, file, alt, source = "generated", note) => ({
  name,
  note,
  image: img(file, alt, source),
});

export const spenco = [
  sp("Liner", "spenco-liner.jpg", "Pair of thin green-topped insole liners", "edited"),
  sp("Arch Cushion, Full Length", "spenco-arch-full.jpg", "Full-length arch cushion insole", "edited"),
  sp("Arch Cushions, ¾ Length", "spenco-arch-34.jpg", "Three-quarter length arch cushion insole", "edited"),
  sp("Polysorb Total Support", "spenco-polysorb-total.jpg", "Pair of full-length athletic insoles", "generated", "Also available in Thin and Max."),
  sp("Polysorb Walker-Runner", "spenco-walker.jpg", "Pair of walking and running insoles", "generated", "Also available in wide."),
  sp("Polysorb Cross-Trainer", "spenco-cross.jpg", "Pair of cross-training insoles"),
  sp("Polysorb Outdoor Series Hiker", "spenco-hiker.jpg", "Pair of hiking insoles with deep heel cups"),
  sp("Orthotic Arch Supports, Full Length", "spenco-orthotic-full.jpg", "Pair of full-length orthotic arch supports"),
  sp("Orthotic Arch Supports, ¾ Length", "spenco-orthotic-34.jpg", "Pair of three-quarter length orthotic arch supports"),
  sp("Thinsole Orthotic, Full Length", "spenco-thinsole-full.jpg", "Pair of thin full-length orthotic insoles"),
  sp("Thinsole Orthotic, ¾ Length", "spenco-thinsole-34.jpg", "Pair of thin three-quarter length orthotic insoles"),
  sp("Ball of the Foot Cushion", "spenco-bof.jpg", "Pair of ball-of-the-foot cushions"),
  sp("Heel Cushion", "spenco-heel.jpg", "Pair of heel cushions"),
  sp("ProForm (Thin)", "spenco-proform.jpg", "Pair of thin foam insoles"),
  sp("Gel Total Support", "spenco-gel-total.jpg", "Pair of gel insoles"),
  sp("Gel Insole, ¾ Length", "spenco-gel-34.jpg", "Three-quarter length gel insole", "edited"),
  sp("Gel Heel Cushion", "spenco-gel-heel-cushion.jpg", "Pair of gel heel cushions"),
  sp("Gel Heel Cup", "spenco-gel-heel-cup.jpg", "Pair of gel heel cups"),
  sp("Gel Ball of the Foot", "spenco-gel-bof.jpg", "Pair of gel ball-of-the-foot pads"),
];

export const spencoComingSoon = "Spenco Diabetic Insoles are coming soon.";

export const policy = {
  repairs: "All of our repair work is guaranteed within reasonable wear and tear.",
  returnsLede:
    "Returns or exchanges must happen within 30 days for in-store purchases and 45 days for shipped orders, unless the order was delayed. All shoe returns and exchanges need:",
  returnsList: [
    "The original sales receipt (no photocopies, please).",
    "The original shoe box plus the shipping box. Please do not tape the shoe box or wrap it in paper in place of the shipping box.",
    "Shoes that are unworn and fully saleable.",
  ],
  shipping: "We refund shipping on returns only when the error was ours or the item was defective.",
};

export const directions = [
  {
    from: "Northbound",
    steps: [
      "Take US 101 North to the Tiburon / E. Blithedale exit.",
      "Turn right on Tiburon Blvd. (CA-131 South).",
      "Make a sharp right onto Redwood Hwy.",
      "Take the first left onto Reed Blvd.",
      "Arrive at 617 Strawberry Village on your right.",
    ],
  },
  {
    from: "Southbound",
    steps: [
      "Take US 101 South to the Tiburon / E. Blithedale exit.",
      "Turn left on E. Blithedale (CA-131) and continue on CA-131.",
      "Make a sharp right onto Redwood Hwy.",
      "Turn left onto Reed Blvd.",
      "Arrive at 617 Strawberry Village on your right.",
    ],
  },
];
