import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

// functions
// import { convertToFa } from "../utils/functions";

// URLs
import { headerButtonURLs } from "../utils/URLs";

// icons
import {
  cartIcon,
  cartIconDesktop,
  userIcon,
  userIconDesktop,
  searchIcon,
} from "../icons/headerIcons";
import { useState } from "react";
import { navigation } from "../utils/constants";
import NavItem from "./NavItem";
import MenuDropDown from "./MenuDropDown";
import Logo from "./Logo";

// styles
const headerStyle =
  "container max-w-[1224px] mx-auto flex justify-between items-center h-[4em] md:h-[7.188em] px-[1.25em]";
const ulStyle = "flex flex-row-reverse items-center md:gap-x-5 lg:gap-x-6";
const liStyle =
  "text-[#717171] text-sm lg:text-lg border-b border-[#ffffff00] py-1 duration-500";
const liActiveStyle =
  "text-[#417F56] text-sm lg:text-lg border-b py-1 border-[#417F56] font-bold duration-500";
const linkBoxStyle = "flex flex-row-reverse items-center gap-x-2.5 md:gap-x-[0.5em] justify-end";
const linkBoxItemStyle =
  "p-[0.25em] md:p-[0.5em] bg-[#E5F2E9] text-[#417F56] rounded md:rounded-md scale-[1.2] md:scale-100 relative duration-300";
const linkBoxItemActiveStyle =
  "p-[0.25em] md:p-[0.5em] bg-[#417F56] text-white rounded md:rounded-md scale-[1.2] md:scale-100 relative duration-300";
// const itemsCounterStyle =
//   "absolute -top-1 -right-1.5 text-[10px] text-white bg-[#61AE7B] rounded-full px-1  md:right-0.5 md:top-0.5 font-medium";

const Header = () => {
  // const state = useSelector((state) => state.cartState);
  // const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md " >
      <header className={headerStyle}>
        <div className={linkBoxStyle}>
          <Link to="/search" className={`${linkBoxItemStyle} hidden md:block `}>
            {searchIcon}
          </Link>

          <Link
            to="/cart"
            className={
              headerButtonURLs.slice(0, 3).includes(window.location.href)
                ? linkBoxItemActiveStyle
                : linkBoxItemStyle
            }
          >
            <span className="md:hidden">{cartIcon}</span>
            <span className="hidden md:block">{cartIconDesktop}</span>
            {/* {isLoggedIn && (
              <span className={itemsCounterStyle}>
                {convertToFa(state.itemsCounter)}
              </span>
            )} */}
          </Link>

          <button
            className={
              headerButtonURLs.slice(3).includes(window.location.href)
                ? linkBoxItemActiveStyle
                : linkBoxItemStyle
            }
            onClick={() => {
              localStorage.getItem("phoneNumber")
                ? navigate("/dashboard")
                : openModal();
            }}
          >
            <span className="md:hidden">{userIcon}</span>
            <span className="hidden md:block">{userIconDesktop}</span>
          </button>
          <SignUp isOpen={isOpen} closeModal={closeModal} />
        </div>

        <div className="hidden md:block">
          <ul className={ulStyle} >
            {navigation.map((item) =>
              item.href === "#" ? (
                <MenuDropDown
                  options={item.options}
                  key={item.name}
                  className={`${liStyle}`}
                  type="header"
                >
                  {item.name}
                </MenuDropDown>
              ) : (
                <NavItem
                  key={item.name}
                  link={item.href}
                  className={
                    window.location.href.includes(item.href)
                      ? liActiveStyle
                      : liStyle
                  }
                >
                  {item.name}
                </NavItem>
              ),
            )}
          </ul>
        </div>
        <Logo />
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
