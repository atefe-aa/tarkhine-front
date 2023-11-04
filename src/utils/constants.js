// icons
import {
  homeIcon,
  menuBoardIcon,
  hashtagIcon,
  profile2userIcon,
  callingIcon,
} from "../icons/mobileMenuIcons";

export const navigation = [
  { name: "صفحه اصلی", href: "/home", icon: homeIcon },
  {
    name: "شعبه",
    href: "#",
    options: "branches",
    icon: hashtagIcon,
  },
  {
    name: "منو",
    href: "#",
    options: "categories",
    icon: menuBoardIcon,
  },
  { name: "اعطای نمایندگی", href: "/branchApply", icon: hashtagIcon },
  { name: "درباره ما", href: "/about", icon: profile2userIcon },
  { name: "تماس با ما", href: "/contact", icon: callingIcon },
];

export const featuresBoxItemStyle =
  "flex flex-col items-center gap-y-2 text-[11px] sm:text-xs md:text-base";

export const API_URL = "http://127.0.0.1:8000/api";
