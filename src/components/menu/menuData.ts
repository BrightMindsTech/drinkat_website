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
    imageSrc: "/Menu_Items/VitaminWow.png",
    items: [
      {
        name: "توتي (Tutti)",
        description: "Lemon - Peach - Strawberry",
        imageSrc: "/Menu_Items/VitaminWow.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "سوبر سلاور (Super Sour)",
        description: "Kiwi - Lemon - Strawberry",
        imageSrc: "/Menu_Items/Kiwi.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "فيتامين واو (Vitamin Wow)",
        description: "Mango - Strawberry- Kiwi",
        imageSrc: "/Menu_Items/VitaminWow.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "جرين مكس (Green Mix)",
        description: "Lemon - Mint - Kiwi",
        imageSrc: "/Menu_Items/GreenMix.png",
        prices: [
          { label: "S", price: "1.50" },
          { label: "M", price: "2.00" },
        ],
      },
      {
        name: "كابانا (Cabana)",
        description: "Mango and Passion Fruit",
        imageSrc: "/Menu_Items/Orange.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      // { name: "كوكتيل درنكات (Cocktail Drinks)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
    ],
  },
  {
    id: "mocktail-mojito",
    title: "Mocktail Mojito",
    titleAr: "موكتيل موهيتو",
    imageSrc: "/Menu_Items/Sweetie.png",
    items: [
      {
        name: "سويتي (Sweetie)",
        description:
          "A refreshing blend of mint, lime, and soda with a sweet tropical twist",
        imageSrc: "/Menu_Items/Sweetie.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "سيامي (Siamy)",
        description:
          "A zesty mojito infused with tangy Siami flavor for a bold taste",
        imageSrc: "/Menu_Items/Siamy.png",
        prices: [{ label: "M", price: "2.00" }],
      },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    titleAr: "ماتشا",
    imageSrc: "/Menu_Items/Matcha.png",
    items: [
      {
        name: "ماتشا (Matcha)",
        description:
          "Smooth and refreshing green tea matcha blended with cold milk and ice",
        imageSrc: "/Menu_Items/Matcha.png",
        prices: [{ label: "M", price: "2.50" }],
      },
      // { name: "ماتشا فراولة (Strawberry Matcha)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "M", price: "3.00" }] },
      // { name: "ماتشا مانجا (Mango Matcha)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "M", price: "3.00" }] },
    ],
  },
  {
    id: "milkshake",
    title: "Milkshake",
    titleAr: "ميلك شيك",
    imageSrc: "/Menu_Items/Shiraz.png",
    items: [
      {
        name: "جوجل (Google)",
        description: "Mango and Coconut",
        imageSrc: "/Menu_Items/GoogleMilkshake.png",
        prices: [
          { label: "S", price: "2.50" },
          { label: "M", price: "3.00" },
        ],
      },
      {
        name: "شيرازي (Shirazi)",
        description:
          "A creamy, chilled milkshake infused with tropical flavor of cherazi fruit",
        imageSrc: "/Menu_Items/Shiraz.png",
        prices: [
          { label: "S", price: "2.75" },
          { label: "M", price: "3.25" },
        ],
      },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot Drinks & Lattes",
    titleAr: "مشروبات ساخنة ولاتيه",
    imageSrc: "/Menu_Items/Latte.png",
    items: [
      {
        name: "ماتشا لاتيه (Matcha Latte)",
        description: "Steamed milk with ceremonial matcha.",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.50" }],
      },
      {
        name: "سينمون لاتيه (Cinnamon Latte)",
        description:
          "A warm blend of cinnamon, espresso, and milk، like a cinnamon roll in a cup",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "كابتشينو (Cappuccino)",
        description: "Espresso capped with velvety milk foam.",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "1.50" }],
      },
      {
        name: "كافيه لاتيه (Café Latte)",
        description: "Creamy steamed milk blended with smooth espresso",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "1.50" }],
      },
      {
        name: "فلات وايت (Flat White)",
        description:
          "Velvety steamed milk poured over a double shot of espresso",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "1.50" }],
      },
      {
        name: "اسبرسو شوت (Espresso Shot)",
        description: "A bold, concentrated shot of pure coffee flavor",
        imageSrc: "/Menu_Items/Espresso.png",
        prices: [{ label: "M", price: "1.00" }],
      },
      {
        name: "أمريكانو كوڤي (Americano)",
        description: "Espresso diluted with hot water for a rich, smooth taste",
        imageSrc: "/Menu_Items/Americano.png",
        prices: [{ label: "M", price: "1.00" }],
      },
      {
        name: "زنجبيل فريش (Fresh Ginger)",
        description:
          "Hot infusion of fresh ginger slices for a warming, spicy drink",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "0.65" }],
      },
      {
        name: "لوتس لاتيه (Lotus Latte)",
        description:
          "Espresso and milk infused with the sweet, spiced flavor of Lotus Biscoff",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "موكا لاتيه (Mocha Latte)",
        description: "Espresso mixed with chocolate syrup and steamed milk",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "بستاشيو لاتيه (Pistachio Latte)",
        description: "Nutty pistachio flavor blended with espresso and milk",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "سولتد كراميل لاتيه (Salted Caramel Latte)",
        description:
          "Espresso with caramel syrup and a hint of sea salt, topped with steamed milk",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "سبنش لاتيه (Spanish Latte)",
        description:
          "Sweetened espresso with steamed milk for a creamy, rich taste",
        imageSrc: "/Menu_Items/Latte.png",
        prices: [{ label: "M", price: "2.00" }],
      },
      {
        name: "صحالاب بستاشيو ساخن كات بوكس (Sahalab Pistachio Hot Kat Box)",
        description: "",
        imageSrc: "/Menu_Items/SahalabPistachioHotKatBox.jpg",
        prices: [
          // { label: "M", price: "2.00" }
        ],
      },
      {
        name: "صحالاب ساخن كات بوكس (Sahalab Hot Kat Box)",
        description: "",
        imageSrc: "/Menu_Items/SahalabHotKatBox.jpg",
        prices: [
          // { label: "M", price: "2.00" }
        ],
      },
      {
        name: "صحالاب مارشميلو ساخن كات بوكس (Sahalab Marshmellow Hot Kat Box)",
        description: "",
        imageSrc: "/Menu_Items/SahalabMarshmellowHotKatBox.jpg",
        prices: [
          // { label: "M", price: "2.00" }
        ],
      },
    ],
  },
  {
    id: "fresh",
    title: "Fresh Juices",
    titleAr: "عصائر طازجة",
    imageSrc: "/Menu_Items/FreshMangoJuice.png",
    items: [
      {
        name: "مانجو (Mango)",
        description: "Fresh mango, sugar, water and blended",
        imageSrc: "/Menu_Items/FreshMangoJuice.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      // { name: "رمان (Pomegranate)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "2.00" }, { label: "M", price: "2.50" }] },
      {
        name: "ليمون (Lemon)",
        description: "Made with real lemons and a hint of sweetness",
        imageSrc: "/Menu_Items/FreshLemonJuice.png",
        prices: [
          { label: "S", price: "1.50" },
          { label: "M", price: "2.00" },
        ],
      },
      {
        name: "برتقال (Orange)",
        description:
          "Freshly squeezed orange juice, naturally sweet and full of vitamin C",
        imageSrc: "/Menu_Items/FreshOrangeJuice.png",
        prices: [
          { label: "S", price: "1.50" },
          { label: "M", price: "2.00" },
        ],
      },
      // { name: "جريب فروت (Grapefruit)", imageSrc: "/Menu_Items/tutti.webp",prices: [{ label: "S", price: "1.75" }, { label: "M", price: "2.25" }] },
      {
        name: "فراولة (Strawberry)",
        description: "Strawberry, water, sugar, and ice",
        imageSrc: "/Menu_Items/FreshStrawberryJuice.png",
        prices: [
          { label: "S", price: "1.75" },
          { label: "M", price: "2.25" },
        ],
      },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee & Lattes",
    titleAr: "قهوة باردة",
    imageSrc: "/Menu_Items/IcedAmericano.png",
    items: [
      {
        name: "ايس أمريكانو (Iced Americano)",
        description:
          "Bold espresso poured over cold water and ice for a crisp, smooth taste",
        imageSrc: "/Menu_Items/IcedAmericano.png",
        prices: [
          { label: "S", price: "1.00" },
          { label: "M", price: "1.50" },
        ],
      },
      {
        name: "ايس لاتيه (Iced Latte)",
        description:
          "Chilled espresso mixed with cold milk and ice for a refreshing coffee drink",
        imageSrc: "/Menu_Items/IcedLatte.png",
        prices: [
          { label: "S", price: "1.50" },
          { label: "M", price: "2.00" },
        ],
      },
      {
        name: "ايس سبنش لاتيه (Iced Spanish Latte)",
        description:
          "Sweetened espresso with cold milk and ice, rich and refreshing",
        imageSrc: "/Menu_Items/IcedLatte.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "ايس سولتد كراميل (Iced Salted Caramel)",
        description:
          "Espresso and milk blended with caramel and a touch of sea salt, served over ice",
        imageSrc: "/Menu_Items/IcedSaltedCaramel.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "ايس بستاشيو (Iced Pistachio)",
        description:
          "Creamy pistachio flavor with cold milk and espresso over ice",
        imageSrc: "/Menu_Items/IcedLattePistachio.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "ايس سينمون لاتيه (Iced Cinnamon Latte)",
        description:
          "Chilled cinnamon-spiced latte with a smooth, sweet finish",
        imageSrc: "/Menu_Items/IcedLatte.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "ايس موكا (Iced Mocha)",
        description: "Espresso, chocolate, and milk served cold over ice",
        imageSrc: "/Menu_Items/IcedMocha.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
      {
        name: "ايس بينك لاتيه (Iced Pink Latte)",
        description: "A colorful, creamy iced latte with a hint of berry",
        imageSrc: "/Menu_Items/IcedPinkLatte.png",
        prices: [
          { label: "S", price: "2.00" },
          { label: "M", price: "2.50" },
        ],
      },
    ],
  },
];

export const foodCategories: Category[] = [
  {
    id: "burgers",
    title: "Burgers",
    titleAr: "برغر",
    imageSrc: "/Menu_Items/TripleBurgerMeal.png",
    items: [
      {
        name: "Triple Burger",
        description:
          "Three juicy beef patties stacked high with melted cheese and fresh toppings on a toasted bun bread - the ultimate burger experience for hearty appetites",
        imageSrc: "/Menu_Items/TripleBurger.png",
        prices: [
          { label: "سناك", price: "3.00" },
          { label: "وجبة", price: "6.50" },
        ],
      },
      {
        name: "Double Burger",
        description:
          "Two Delicious juicy tender beef patties stacked with fresh lettuce tomato and our special sauce on a toasted burger bun bread Served",
        imageSrc: "/Menu_Items/DoubleBurger.png",
        prices: [
          { label: "سناك", price: "3.00" },
          { label: "وجبة", price: "4.50" },
        ],
      },
      {
        name: "Single Burger",
        description:
          "A classic burger featuring a delicious classic juicy beef patty grilled to perfection topped with fresh lettuce and tomato on a soft toasted bun bread- simple and delicious",
        imageSrc: "/Menu_Items/SingleBurger.png",
        prices: [
          { label: "سناك", price: "2.00" },
          { label: "وجبة", price: "4.75" },
        ],
      },
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
    imageSrc: "/Menu_Items/Fries.png",
    items: [
      // { name: "Dynamite Fries", imageSrc: "/Menu_Items/tutti.webp", prices: [{ label: "", price: "2.50" }] },
      {
        name: "French Fries",
        description: "Crispy golden potato fries, lightly salted",
        imageSrc: "/Menu_Items/Fries.png",
        prices: [{ label: "", price: "1.00" }],
      },
      {
        name: "Fried Potatoes With Minced Meat",
        description:
          "Crispy golden fries topped with savory seasoned minced beef and our special house sauce - a perfect companion to any burger",
        imageSrc: "/Menu_Items/FriesWithMeat.png",
        prices: [{ label: "", price: "1.00" }],
      },
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
    {
      name: "Iced Tea",
      description: "Chilled iced tea.",
      imageSrc: "/Menu_Items/Iced Tea.webp",
      prices: [{ label: "", price: "1.50" }],
    },
    {
      name: "Soft Drink",
      description: "Cold soft drink.",
      imageSrc: "/Menu_Items/Soft Drink.webp",
      prices: [{ label: "", price: "0.35" }],
    },
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

const categoryById = new Map<string, Category>(
  allCategories.map((c) => [c.id, c]),
);

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
