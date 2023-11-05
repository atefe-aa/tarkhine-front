import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// images
import TopFrame from "../images/top-frame.png";
import LogoMobile from "../images/logo-mobile-menu.png";

// icons
import { menuIcon, closeIcon } from "../icons/mobileMenuIcons";
import { navigation } from "../utils/constants";
import NavItem from "./NavItem";
import MenuDropDown from "./MenuDropDown";

// styles
const bgMenu =
  "absolute top-0 left-0 right-0 h-screen z-10 bg-black bg-opacity-60 backdrop-blur-sm";
const mobileMenu =
  "absolute top-0 right-0 z-10 w-[12em] sm:w-[16em] duration-700";
const closeIconStyle =
  "absolute top-[18px] right-[9.5em] sm:right-[13.5em] text-white";
const logoMobileStyle = "absolute right-4 top-6 sm:top-8";
const ulStyle =
  "text-right flex  flex-col gap-y-2 min-h-[calc(100vh_-_70px)] sm:min-h-[calc(100vh_-_94px)] bg-white w-[12em] sm:w-[16em] px-4 py-2";
const liStyle =
  "text-right flex items-center gap-x-2 text-[#353535] text-xs sm:text-sm border-b border-[#CBCBCB] pb-2";
const liActiveStyle =
  "flex items-center gap-x-2 text-[#417F56] font-semibold text-xs sm:text-sm border-b border-[#CBCBCB] pb-2";

const MobileMenu = () => {
  const open = true;
  const [menu, setMenu] = useState(open);
  let [plan, setPlan] = useState("home");

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div onClick={openMenu}>{menuIcon}</div>

      <div onClick={openMenu} className={menu ? "hidden" : bgMenu}></div>
      <div
        className={
          menu
            ? `${mobileMenu} translate-x-full`
            : `${mobileMenu} translate-x-0`
        }
      >
        <img src={TopFrame} alt="frame" />
        <button onClick={openMenu} className={closeIconStyle}>
          {" "}
          {closeIcon}{" "}
        </button>
        <img src={LogoMobile} alt="logo" className={logoMobileStyle} />

        <RadioGroup value={plan} onChange={setPlan}>
          <ul className={ulStyle}>
            {navigation.map((item) =>
              item.href === "#" ? (
                <MenuDropDown
                  options={item.options}
                  key={item.name}
                  className={liStyle}
                  type="menu"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </MenuDropDown>
              ) : (
                <NavItem
                  onClick={openMenu}
                  link={item.href}
                  key={item.name}
                  className={
                    window.location.href.includes(item.href)
                      ? liActiveStyle
                      : liStyle
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavItem>
              ),
            )}
          </ul>
        </RadioGroup>
      </div>
    </>
  );
};

export default MobileMenu;
