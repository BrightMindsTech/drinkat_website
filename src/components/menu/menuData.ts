export type MenuItem = { name: string; prices: { label: string; price: string }[] };
export type Category = {
  id: string;
  title: string;
  titleAr: string;
  subtitle?: string;
  items: MenuItem[];
};

export const drinkCategories: Category[] = [
  {
    id: "juices-cocktails",
    title: "Juices & Cocktails",
    titleAr: "عصائر وكوكتيل",
    items: [
      { name: "توتي (Tutti)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "سوبر سلاور (Super Sour)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "فيتامين واو (Vitamin Wow)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "جرين مكس (Green Mix)", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "كابانا (Cabana)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "كوكتيل درنكات (Cocktail Drinks)", prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "mocktail-mojito",
    title: "Mocktail Mojito",
    titleAr: "موكتيل موهيتو",
    items: [
      { name: "سويتي (Sweetie)", prices: [{ label: "M", price: "2.00" }] },
      { name: "سيامي (Siamy)", prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    titleAr: "ماتشا",
    items: [
      { name: "ماتشا (Matcha)", prices: [{ label: "M", price: "2.50" }] },
      { name: "ماتشا فراولة (Strawberry Matcha)", prices: [{ label: "M", price: "3.00" }] },
      { name: "ماتشا مانجا (Mango Matcha)", prices: [{ label: "M", price: "3.00" }] },
    ],
  },
  {
    id: "milkshake",
    title: "Milkshake",
    titleAr: "ميلك شيك",
    items: [
      { name: "جوجل (Google)", prices: [{ label: "S", price: "2.50" }, { label: "M", price: "3.00" }] },
      { name: "شيرازي (Shirazi)", prices: [{ label: "S", price: "2.75" }, { label: "M", price: "3.25" }] },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    titleAr: "مشروبات ساخنة",
    items: [
      { name: "ماتشا لاتيه (Matcha Latte)", prices: [{ label: "M", price: "2.50" }] },
      { name: "سينمون لاتيه (Cinnamon Latte)", prices: [{ label: "M", price: "2.00" }] },
      { name: "كابتشينو (Cappuccino)", prices: [{ label: "M", price: "1.50" }] },
      { name: "كافيه لاتيه (Café Latte)", prices: [{ label: "M", price: "1.50" }] },
      { name: "فلات وايت (Flat White)", prices: [{ label: "M", price: "1.50" }] },
      { name: "اسبرسو شوت (Espresso Shot)", prices: [{ label: "M", price: "1.00" }] },
      { name: "أمريكانو كوڤي (Americano)", prices: [{ label: "M", price: "1.00" }] },
      { name: "زنجبيل فريش (Fresh Ginger)", prices: [{ label: "M", price: "0.65" }] },
      { name: "لوتس لاتيه (Lotus Latte)", prices: [{ label: "M", price: "2.00" }] },
      { name: "موكا لاتيه (Mocha Latte)", prices: [{ label: "M", price: "2.00" }] },
      { name: "بستاشيو لاتيه (Pistachio Latte)", prices: [{ label: "M", price: "2.00" }] },
      { name: "سولتد كراميل لاتيه (Salted Caramel Latte)", prices: [{ label: "M", price: "2.00" }] },
      { name: "سبنش لاتيه (Spanish Latte)", prices: [{ label: "M", price: "2.00" }] },
    ],
  },
  {
    id: "fresh",
    title: "Fresh",
    titleAr: "فريش",
    items: [
      { name: "مانجو (Mango)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "رمان (Pomegranate)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ليمون (Lemon)", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "برتقال (Orange)", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "جريب فروت (Grapefruit)", prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
      { name: "فراولة (Strawberry)", prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee & Lattes",
    titleAr: "قهوة باردة",
    items: [
      { name: "ايس أمريكانو (Iced Americano)", prices: [{ label: "S", price: "1.00" }, { label: "M", price: "1.50" }] },
      { name: "ايس لاتيه (Iced Latte)", prices: [{ label: "S", price: "1.50" }, { label: "M", price: "2.00" }] },
      { name: "ايس سبنش لاتيه (Iced Spanish Latte)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سولتد كراميل (Iced Salted Caramel)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بستاشيو (Iced Pistachio)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس سينمون لاتيه (Iced Cinnamon Latte)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "لوتس لاتيه (Lotus Latte)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس موكا (Iced Mocha)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      { name: "ايس بينك لاتيه (Iced Pink Latte)", prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
    ],
  },
];

export const foodCategories: Category[] = [
  {
    id: "burgers",
    title: "Burgers",
    titleAr: "برغر",
    items: [
      { name: "Double Burger", prices: [{ label: "سناك", price: "3.00" }, { label: "وجبة", price: "4.50" }] },
      { name: "Single Burger", prices: [{ label: "سناك", price: "2.00" }, { label: "وجبة", price: "3.40" }] },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    titleAr: "سندويشات",
    items: [
      { name: "Halloumi Pesto", prices: [{ label: "", price: "1.00" }] },
      { name: "Turkey Cheese", prices: [{ label: "", price: "1.00" }] },
    ],
  },
  {
    id: "fries",
    title: "Fries",
    titleAr: "بطاطا",
    items: [
      { name: "Dynamite Fries", prices: [{ label: "", price: "2.50" }] },
      { name: "French Fries", prices: [{ label: "", price: "1.00" }] },
    ],
  },
];

export const extras: MenuItem[] = [
  { name: "Jalapeño", prices: [{ label: "", price: "0.25" }] },
  { name: "Spicy", prices: [{ label: "", price: "0.35" }] },
  { name: "Sauce", prices: [{ label: "", price: "0.35" }] },
  { name: "Extra Patty", prices: [{ label: "", price: "1.00" }] },
  { name: "Extra Cheese", prices: [{ label: "", price: "0.25" }] },
];

export const sides: MenuItem[] = [
  { name: "Iced Tea", prices: [{ label: "", price: "1.50" }] },
  { name: "Soft Drink", prices: [{ label: "", price: "0.35" }] },
  { name: "Cookies", prices: [{ label: "", price: "1.00" }] },
];

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
  { name: "ماتشا لاتيه (Matcha Latte)", prices: [{ label: "M", price: "2.50" }], label: "Hot Drinks", imageSlug: "matcha-latte" },
  { name: "كابتشينو (Cappuccino)", prices: [{ label: "M", price: "1.50" }], label: "Hot Drinks", imageSlug: "cappuccino" },
  { name: "ماتشا فراولة (Strawberry Matcha)", prices: [{ label: "M", price: "3.00" }], label: "Matcha", imageSlug: "strawberry-matcha" },
  { name: "Double Burger", prices: [{ label: "وجبة", price: "4.50" }], label: "Burgers", imageSlug: "burger" },
  { name: "ايس سبنش لاتيه (Iced Spanish Latte)", prices: [{ label: "M", price: "2.50" }], label: "Iced Coffee", imageSlug: "iced-coffee" },
  { name: "مانجو (Mango)", prices: [{ label: "M", price: "2.50" }], label: "Fresh", imageSlug: "mango" },
  { name: "موكتيل موهيتو · سويتي", prices: [{ label: "M", price: "2.00" }], label: "Mocktail", imageSlug: "mocktail" },
];
