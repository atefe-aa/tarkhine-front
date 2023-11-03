export const navigation = [
  { name: "صفحه اصلی", href: "/home", current: true },
  {
    name: "شعبه",
    href: "#",
    options: [
      { name: "شعبه تجریش", href: "#" },
      { name: "شعبه شمال", href: "#" },
      { name: "شعبه زعفرانیه", href: "#" },
    ],
    current: false,
  },
  {
    name: "منو",
    href: "#",
    options: [
      { name: "غذای اصلی", href: "#" },
      { name: "پیش غذا", href: "#" },
      { name: "دسر", href: "#" },
      { name: "نوشیدنی", href: "#" },
    ],
    current: false,
  },
  { name: "اعطای نمایندگی", href: "/branchApply", current: false },
  { name: "درباره ما", href: "/about", current: false },
  { name: "تماس با ما", href: "/contact", current: false },
];


export const featuresBoxItemStyle =
  "flex flex-col items-center gap-y-2 text-[11px] sm:text-xs md:text-base";