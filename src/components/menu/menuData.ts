export type MenuItem = {
  name: string;
  /** Short line shown on product cards */
  description: string;
  prices: { label: string; price: string }[];
  /** Optional product photo under `public/` */
  imageSrc?: string;
};
export type Category = {
  id: string;
  title: string;
  titleAr: string;
  subtitle?: string;
  /** Public URL path e.g. `/Menu_Items/juices-cocktails.webp` */
  imageSrc?: string;
  items: MenuItem[];
};

export const drinkCategories: Category[] = [
  {
    id: "juices-cocktails",
    title: "Juices & Cocktails",
    titleAr: "عصائر وكوكتيل",
    imageSrc: "/Menu_Items/Twittie.webp",
    items: [
      { name: "توتي (Tutti)", description: "Mixed fruit blend, bright and refreshing.", imageSrc: "/Menu_Items/Twittie.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "سوبر سلاور (Super Sour)", description: "Tangy sour smoothie for a bold kick.", imageSrc: "/Menu_Items/Sour Smoothie.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "فيتامين واو (Vitamin Wow)", description: "Fruit-packed boost to start your day.", imageSrc: "/Menu_Items/Vitamin W.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "جرين مكس (Green Mix)", description: "Green veggies and fruit in one glass.", imageSrc: "/Menu_Items/Green Mix.webp", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "كابانا (Cabana)", description: "Tropical cabana-style juice.", imageSrc: "/Menu_Items/Kapana.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      // { name: "كوكتيل درنكات (Cocktail Drinks)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "mocktail-mojito",
    title: "Mocktail Mojito",
    titleAr: "موكتيل موهيتو",
    imageSrc: "/Menu_Items/Sweetie Mojito Mocktail.webp",
    items: [
      { name: "سويتي (Sweetie)", description: "Sweet mojito mocktail with mint and lime.", imageSrc: "/Menu_Items/Sweetie Mojito Mocktail.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "سيامي (Siamy)", description: "Thai-inspired mocktail, crisp and aromatic.", imageSrc: "/Menu_Items/Siami.webp", prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    titleAr: "ماتشا",
    imageSrc: "/Menu_Items/Iced Matcha.webp",
    items: [
      { name: "ماتشا (Matcha)", description: "Smooth matcha whisked to a frothy finish.", imageSrc: "/Menu_Items/Iced Matcha.webp", prices: [{ label: "M", price: "2.50" }] },
      // { name: "ماتشا فراولة (Strawberry Matcha)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "M", price: "3.00" }] },
      // { name: "ماتشا مانجا (Mango Matcha)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "M", price: "3.00" }] },
    ],
  },
  {
    id: "milkshake",
    title: "Milkshake",
    titleAr: "ميلك شيك",
    imageSrc: "/Menu_Items/Cherazi Milkshake.webp",
    items: [
      { name: "جوجل (Google)", description: "Rich, creamy signature milkshake.", imageSrc: "/Menu_Items/Google Milkshake.webp", prices: [{ label: "S", price: "2.50" }, { label: "M", price: "3.00" }] },
      { name: "شيرازي (Shirazi)", description: "Indulgent Shirazi-style milkshake.", imageSrc: "/Menu_Items/Cherazi Milkshake.webp", prices: [{ label: "S", price: "2.75" }, { label: "M", price: "3.25" }] },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    titleAr: "مشروبات ساخنة",
    imageSrc: "/Menu_Items/Americano Coffee.webp",
    items: [
      { name: "ماتشا لاتيه (Matcha Latte)", description: "Steamed milk with ceremonial matcha.", imageSrc: "/Menu_Items/Matcha Latte.webp", prices: [{ label: "M", price: "2.50" }] },
      { name: "سينمون لاتيه (Cinnamon Latte)", description: "Espresso with warm cinnamon and milk.", imageSrc: "/Menu_Items/Cinnabon Latte.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "كابتشينو (Cappuccino)", description: "Espresso capped with velvety milk foam.", imageSrc: "/Menu_Items/Cinnabon Latte.webp", prices: [{ label: "M", price: "1.50" }] },
      { name: "كافيه لاتيه (Café Latte)", description: "Classic espresso with silky steamed milk.", imageSrc: "/Menu_Items/Cafe Latte.webp", prices: [{ label: "M", price: "1.50" }] },
      { name: "فلات وايت (Flat White)", description: "Bold espresso with microfoam milk.", imageSrc: "/Menu_Items/Flat White.webp", prices: [{ label: "M", price: "1.50" }] },
      { name: "اسبرسو شوت (Espresso Shot)", description: "Single concentrated shot of espresso.", imageSrc: "/Menu_Items/Espresso Shot.webp", prices: [{ label: "M", price: "1.00" }] },
      { name: "أمريكانو كوڤي (Americano)", description: "Espresso mellowed with hot water.", imageSrc: "/Menu_Items/Americano Coffee.webp", prices: [{ label: "M", price: "1.00" }] },
      { name: "زنجبيل فريش (Fresh Ginger)", description: "Warming fresh ginger drink.", imageSrc: "/Menu_Items/Fresh Ginger.webp", prices: [{ label: "M", price: "0.65" }] },
      { name: "لوتس لاتيه (Lotus Latte)", description: "Coffee with Lotus Biscoff sweetness.", imageSrc: "/Menu_Items/Lotus Latte.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "موكا لاتيه (Mocha Latte)", description: "Chocolate and espresso in one cup.", imageSrc: "/Menu_Items/Mocha Latte.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "بستاشيو لاتيه (Pistachio Latte)", description: "Nutty pistachio with steamed milk.", imageSrc: "/Menu_Items/Pistachio Latte.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "سولتد كراميل لاتيه (Salted Caramel Latte)", description: "Sweet salted caramel with espresso.", imageSrc: "/Menu_Items/Salted Caramel Latte.webp", prices: [{ label: "M", price: "2.00" }] },
      { name: "سبنش لاتيه (Spanish Latte)", description: "Condensed milk Spanish-style latte.", imageSrc: "/Menu_Items/Spanish Latte.webp", prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "fresh",
    title: "Fresh",
    titleAr: "فريش",
    imageSrc: "/Menu_Items/Fresh Orange Juice.webp",
    items: [
      { name: "مانجو (Mango)", description: "Fresh-pressed sweet mango juice.", imageSrc: "/Menu_Items/Fresh Mango Juice.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      // { name: "رمان (Pomegranate)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ليمون (Lemon)", description: "Bright fresh lemon juice.", imageSrc: "/Menu_Items/Fresh Lemon Juice.webp", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "برتقال (Orange)", description: "Classic fresh orange juice.", imageSrc: "/Menu_Items/Fresh Orange Juice.webp", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      // { name: "جريب فروت (Grapefruit)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
      { name: "فراولة (Strawberry)", description: "Sweet fresh strawberry juice.", imageSrc: "/Menu_Items/Fresh Strawberry Juice.webp", prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee & Lattes",
    titleAr: "قهوة باردة",
    imageSrc: "/Menu_Items/Iced Americano.webp",
    items: [
      { name: "ايس أمريكانو (Iced Americano)", description: "Cold espresso with water over ice.", imageSrc: "/Menu_Items/Iced Americano.webp", prices: [{ label: "S", price: "1.00" }, { label: "M", price: "1.50" }] },
      { name: "ايس لاتيه (Iced Latte)", description: "Chilled latte, smooth and refreshing.", imageSrc: "/Menu_Items/Iced Latte.webp", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "ايس سبنش لاتيه (Iced Spanish Latte)", description: "Iced Spanish latte with condensed milk.", imageSrc: "/Menu_Items/Iced Spanish Latte.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سولتد كراميل (Iced Salted Caramel)", description: "Salted caramel cold coffee treat.", imageSrc: "/Menu_Items/Iced Salted Caramel.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بستاشيو (Iced Pistachio)", description: "Nutty pistachio over ice.", imageSrc: "/Menu_Items/Iced Pistachio.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سينمون لاتيه (Iced Cinnamon Latte)", description: "Iced latte with cinnamon spice.", imageSrc: "/Menu_Items/Iced Cinnabon Latte.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "لوتس لاتيه (Lotus Latte)", description: "Chilled Lotus Biscoff latte.", imageSrc: "/Menu_Items/Lotus Latte.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس موكا (Iced Mocha)", description: "Iced chocolate and coffee blend.", imageSrc: "/Menu_Items/Iced Mocha.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بينك لاتيه (Iced Pink Latte)", description: "Pretty pink iced latte.", imageSrc: "/Menu_Items/Iced Pink Latte.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
    ],
  },
];

export const foodCategories: Category[] = [
  {
    id: "burgers",
    title: "Burgers",
    titleAr: "برغر",
    imageSrc: "/Menu_Items/Double Burger.webp",
    items: [
      { name: "Double Burger", description: "Two juicy patties with fresh toppings.", imageSrc: "/Menu_Items/Double Burger.webp", prices: [{ label: "سناك", price: "3.00" }, { label: "وجبة", price: "4.50" }] },
      { name: "Single Burger", description: "Classic single patty, fully loaded.", imageSrc: "/Menu_Items/Single Burger.webp", prices: [{ label: "سناك", price: "2.00" }, { label: "وجبة", price: "3.40" }] },
    ],
  },
  // {
  //   id: "sandwiches",
  //   title: "Sandwiches",
  //   titleAr: "سندويشات",
  //   imageSrc: "/Menu_Items/Sandwiches.webp",
  //   items: [
  //     // { name: "Halloumi Pesto", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "1.00" }] },
  //     // { name: "Turkey Cheese", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "1.00" }] },
  //   ],
  // },
  {
    id: "fries",
    title: "Fries",
    titleAr: "بطاطا",
    imageSrc: "/Menu_Items/Fries.webp",
    items: [
      // { name: "Dynamite Fries", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "2.50" }] },
      { name: "French Fries", description: "Crispy golden fries, salted to perfection.", imageSrc: "/Menu_Items/Fries.webp", prices: [{ label: "", price: "1.00" }] },
    ],
  },
];

export const extrasCategory: Category = {
  id: "extras",
  title: "Extras",
  titleAr: "أشياء زيادة",
  imageSrc: "/Menu_Items/Extras.webp",
  items: [
    // { name: "Jalapeño", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "0.25" }] },
    // { name: "Spicy", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "0.35" }] },
    // { name: "Sauce", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "0.35" }] },
    // { name: "Extra Patty", imageSrc: "/Menu_Items/tutti.webp",   prices: [{ label: "", price: "1.00" }] },
    // { name: "Extra Cheese", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "0.25" }] },
  ],
};

export const sidesCategory: Category = {
  id: "sides",
  title: "Sides",
  titleAr: "أشياء سوفت",
  imageSrc: "/Menu_Items/Soft Drink.webp",
    items: [
    { name: "Iced Tea", description: "Chilled iced tea.", imageSrc: "/Menu_Items/Iced Tea.webp", prices: [{ label: "", price: "1.50" }] },
    { name: "Soft Drink", description: "Cold soft drink.", imageSrc: "/Menu_Items/Soft Drink.webp", prices: [{ label: "", price: "0.35" }] },
    // { name: "Cookies", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "1.00" }] },
  ],
};

export const extras = extrasCategory.items;

export const sides = sidesCategory.items;

/** All routable menu categories: drinks, food, extras, sides (order matches grid). */
export const allCategories: Category[] = [
  ...drinkCategories,
  ...foodCategories,
  // extrasCategory,
  // sidesCategory,
];

const categoryById = new Map<string, Category>(allCategories.map((c) => [c.id, c]));

export function getCategoryById(id: string): Category | undefined {
  return categoryById.get(id);
}

export function getAllCategoryIds(): string[] {
  return allCategories.map((c) => c.id);
}

export const tabs = [
  { id: "drinks", label: "Drinks" },
  { id: "food", label: "Food" },
  { id: "extras", label: "Extras" },
  { id: "sides", label: "Sides" },
] as const;

export type TabId = (typeof tabs)[number]["id"];

/** Featured items for the auto-rotating conveyor (name, prices, optional label, image slug for matching photo) */
export type FeaturedItem = MenuItem & { label?: string; imageSlug?: string };
export const featuredItems: FeaturedItem[] = [
  { name: "ماتشا لاتيه (Matcha Latte)", description: "Steamed milk with ceremonial matcha.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Hot Drinks", imageSlug: "matcha-latte" },
  { name: "كابتشينو (Cappuccino)", description: "Espresso capped with velvety milk foam.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "1.50" }], label: "Hot Drinks", imageSlug: "cappuccino" },
  { name: "ماتشا فراولة (Strawberry Matcha)", description: "Strawberry and matcha fusion.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "3.00" }], label: "Matcha", imageSlug: "strawberry-matcha" },
  { name: "Double Burger", description: "Two juicy patties with fresh toppings.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "وجبة", price: "4.50" }], label: "Burgers", imageSlug: "burger" },
  { name: "ايس سبنش لاتيه (Iced Spanish Latte)", description: "Iced Spanish latte with condensed milk.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Iced Coffee", imageSlug: "iced-coffee" },
  { name: "مانجو (Mango)", description: "Fresh-pressed sweet mango juice.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Fresh", imageSlug: "mango" },
  { name: "موكتيل موهيتو · سويتي", description: "Sweet mojito mocktail with mint and lime.", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.00" }], label: "Mocktail", imageSlug: "mocktail" },
];
