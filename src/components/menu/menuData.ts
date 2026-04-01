export type MenuItem = {
  name: string;
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
      { name: "توتي (Tutti)", imageSrc: "/Menu_Items/Twittie.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "سوبر سلاور (Super Sour)",imageSrc: "/Menu_Items/Sour Smoothie.webp", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "فيتامين واو (Vitamin Wow)", imageSrc: "/Menu_Items/Vitamin W.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "جرين مكس (Green Mix)", imageSrc: "/Menu_Items/Green Mix.webp",prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "كابانا (Cabana)", imageSrc: "/Menu_Items/Kapana.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      // { name: "كوكتيل درنكات (Cocktail Drinks)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "mocktail-mojito",
    title: "Mocktail Mojito",
    titleAr: "موكتيل موهيتو",
    imageSrc: "/Menu_Items/Sweetie Mojito Mocktail.webp",
    items: [
      { name: "سويتي (Sweetie)", imageSrc: "/Menu_Items/Sweetie Mojito Mocktail.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "سيامي (Siamy)", imageSrc: "/Menu_Items/Siami.webp",prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    titleAr: "ماتشا",
    imageSrc: "/Menu_Items/Iced Matcha.webp",
    items: [
      { name: "ماتشا (Matcha)", imageSrc: "/Menu_Items/Iced Matcha.webp",prices: [{ label: "M", price: "2.50" }] },
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
      { name: "جوجل (Google)", imageSrc: "/Menu_Items/Google Milkshake.webp",prices: [{ label: "S", price: "2.50" }, { label: "M", price: "3.00" }] },
      { name: "شيرازي (Shirazi)", imageSrc: "/Menu_Items/Cherazi Milkshake.webp",prices: [{ label: "S", price: "2.75" }, { label: "M", price: "3.25" }] },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    titleAr: "مشروبات ساخنة",
    imageSrc: "/Menu_Items/Americano Coffee.webp",
    items: [
      { name: "ماتشا لاتيه (Matcha Latte)", imageSrc: "/Menu_Items/Matcha Latte.webp",prices: [{ label: "M", price: "2.50" }] },
      { name: "سينمون لاتيه (Cinnamon Latte)", imageSrc: "/Menu_Items/Cinnabon Latte.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "كابتشينو (Cappuccino)", imageSrc: "/Menu_Items/Cinnabon Latte.webp",prices: [{ label: "M", price: "1.50" }] },
      { name: "كافيه لاتيه (Café Latte)", imageSrc: "/Menu_Items/Cafe Latte.webp",prices: [{ label: "M", price: "1.50" }] },
      { name: "فلات وايت (Flat White)", imageSrc: "/Menu_Items/Flat White.webp",prices: [{ label: "M", price: "1.50" }] },
      { name: "اسبرسو شوت (Espresso Shot)", imageSrc: "/Menu_Items/Espresso Shot.webp",prices: [{ label: "M", price: "1.00" }] },
      { name: "أمريكانو كوڤي (Americano)", imageSrc: "/Menu_Items/Americano Coffee.webp",prices: [{ label: "M", price: "1.00" }] },
      { name: "زنجبيل فريش (Fresh Ginger)", imageSrc: "/Menu_Items/Fresh Ginger.webp",prices: [{ label: "M", price: "0.65" }] },
      { name: "لوتس لاتيه (Lotus Latte)", imageSrc: "/Menu_Items/Lotus Latte.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "موكا لاتيه (Mocha Latte)", imageSrc: "/Menu_Items/Mocha Latte.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "بستاشيو لاتيه (Pistachio Latte)", imageSrc: "/Menu_Items/Pistachio Latte.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "سولتد كراميل لاتيه (Salted Caramel Latte)", imageSrc: "/Menu_Items/Salted Caramel Latte.webp",prices: [{ label: "M", price: "2.00" }] },
      { name: "سبنش لاتيه (Spanish Latte)", imageSrc: "/Menu_Items/Spanish Latte.webp",prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "fresh",
    title: "Fresh",
    titleAr: "فريش",
    imageSrc: "/Menu_Items/Fresh Orange Juice.webp",
    items: [
      { name: "مانجو (Mango)", imageSrc: "/Menu_Items/Fresh Mango Juice.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      // { name: "رمان (Pomegranate)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ليمون (Lemon)", imageSrc: "/Menu_Items/Fresh Lemon Juice.webp",prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "برتقال (Orange)", imageSrc: "/Menu_Items/Fresh Orange Juice.webp",prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      // { name: "جريب فروت (Grapefruit)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
      { name: "فراولة (Strawberry)", imageSrc: "/Menu_Items/Fresh Strawberry Juice.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee & Lattes",
    titleAr: "قهوة باردة",
    imageSrc: "/Menu_Items/Iced Americano.webp",
    items: [
      { name: "ايس أمريكانو (Iced Americano)", imageSrc: "/Menu_Items/Iced Americano.webp",prices: [{ label: "S", price: "1.00" }, { label: "M", price: "1.50" }] },
      { name: "ايس لاتيه (Iced Latte)", imageSrc: "/Menu_Items/Iced Latte.webp",prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "ايس سبنش لاتيه (Iced Spanish Latte)", imageSrc: "/Menu_Items/Iced Spanish Latte.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سولتد كراميل (Iced Salted Caramel)", imageSrc: "/Menu_Items/Iced Salted Caramel.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بستاشيو (Iced Pistachio)", imageSrc: "/Menu_Items/Iced Pistachio.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سينمون لاتيه (Iced Cinnamon Latte)", imageSrc: "/Menu_Items/Iced Cinnabon Latte.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "لوتس لاتيه (Lotus Latte)", imageSrc: "/Menu_Items/Lotus Latte.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس موكا (Iced Mocha)", imageSrc: "/Menu_Items/Iced Mocha.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بينك لاتيه (Iced Pink Latte)", imageSrc: "/Menu_Items/Iced Pink Latte.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
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
      { name: "Double Burger", imageSrc: "/Menu_Items/Double Burger.webp", prices: [{ label: "سناك", price: "3.00" }, { label: "وجبة", price: "4.50" }] },
      { name: "Single Burger", imageSrc: "/Menu_Items/Single Burger.webp", prices: [{ label: "سناك", price: "2.00" }, { label: "وجبة", price: "3.40" }] },
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
      { name: "French Fries", imageSrc: "/Menu_Items/Fries.webp", prices: [{ label: "", price: "1.00" }] },
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
    { name: "Iced Tea", imageSrc: "/Menu_Items/Iced Tea.webp", prices: [{ label: "", price: "1.50" }] },
    { name: "Soft Drink", imageSrc: "/Menu_Items/Soft Drink.webp", prices: [{ label: "", price: "0.35" }] },
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
  { name: "ماتشا لاتيه (Matcha Latte)", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Hot Drinks", imageSlug: "matcha-latte" },
  { name: "كابتشينو (Cappuccino)", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "1.50" }], label: "Hot Drinks", imageSlug: "cappuccino" },
  { name: "ماتشا فراولة (Strawberry Matcha)", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "3.00" }], label: "Matcha", imageSlug: "strawberry-matcha" },
  { name: "Double Burger", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "وجبة", price: "4.50" }], label: "Burgers", imageSlug: "burger" },
  { name: "ايس سبنش لاتيه (Iced Spanish Latte)", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Iced Coffee", imageSlug: "iced-coffee" },
  { name: "مانجو (Mango)", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "M", price: "2.50" }], label: "Fresh", imageSlug: "mango" },
  { name: "موكتيل موهيتو · سويتي", imageSrc: "/Menu_Items/tutti.webp",   prices: [{ label: "M", price: "2.00" }], label: "Mocktail", imageSlug: "mocktail" },
];
