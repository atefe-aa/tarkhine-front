import footerImg from "../images/footer.jpg";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

// icons
import {
  telegramIcon,
  instagramIcon,
  twitterIcon,
  telegramDesktopIcon,
  instagramDesktopIcon,
  twitterDesktopIcon,
} from "../icons/footerIcons";
import { useBranches } from "../features/branches/useBranches";
import ListItem from "./ListItem";

// styles
const footerStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center md:w-full text-white";
const containerStyle =
  "container max-w-[1224px] mx-auto flex items-center md:items-start justify-start lg:justify-between gap-x-[5.063em] py-[1.375em] md:pt-[2.031em] px-[1.25em] h-[9.5em] md:h-[19.938em]";
const ulStyle =
  "flex flex-col gap-y-[0.5em] md:gap-y-[1em] pr-[0.5em] md:pr-[1em]";
const liStyle = "text-[10px] md:text-base md:font-medium md:text-[#EDEDED]";
const h4Style =
  "mb-[0.5em] md:mb-[1em] text-xs sm:text-sm font-medium md:text-xl md:font-bold";
const iconBoxStyle = "items-center gap-x-[0.5em] md:gap-x-[1em]";
const inputBoxStyle = "flex flex-col gap-y-[0.75em]";
const inputStyle =
  "h-[2.5em] px-[1em] bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded";
const buttonStyle =
  "text-[#F9F9F9] font-medium w-[11.438em] h-[2.5em] border border-[#717171] rounded";

const Footer = () => {
  const { isLoading, branches } = useBranches();
  return (
    <footer
    style={{ "--image-url": `url(${footerImg})` }}
    className={footerStyle}
    >
      <div className={containerStyle}>
        <div>
          <h4 className={h4Style}>دسترسی آسان</h4>
          <ul className={ulStyle}>
            <li className={liStyle}>
              <Link to="/FAQ">پرسش های متداول</Link>
            </li>
            <li className={liStyle}>
              <Link to="/policies">قوانین ترخینه</Link>
            </li>
            <Link to="/privacy">
              <li className={liStyle}>حریم خصوصی</li>
            </Link>
    
            <div className={`${iconBoxStyle} flex md:hidden`}>
              <span>{twitterIcon}</span>
              <span>{instagramIcon}</span>
              <span>{telegramIcon}</span>
            </div>
            <div className={`${iconBoxStyle} hidden md:flex`}>
              <span>{twitterDesktopIcon}</span>
              <span>{instagramDesktopIcon}</span>
              <span>{telegramDesktopIcon}</span>
            </div>
          </ul>
        </div>

        <div>
          <h4 className={h4Style}>شعبه های ترخینه</h4>
          {isLoading?  <ReactLoading
              type="bubbles"
              color="#417F56"
              height={60}
              width={60}
            /> : <ul className={ulStyle}>
            {branches && branches.map((branch) => (
              <ListItem key={branch.id} className={liStyle} link={`/branch/${branch.id}`}>
                {branch.name}
              </ListItem>
            ))}
          
          </ul>
}
         
        </div>

        <div className="hidden lg:block">
          <h4 className={h4Style}>پیام به ترخینه</h4>
          <div className="flex items-start gap-x-[1.625em] pr-[1em]">
            <div className={inputBoxStyle}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className={inputStyle}
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className={inputStyle}
              />
              <input
                type="email"
                placeholder="آدرس ایمیل(اختیاری)"
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col items-end gap-y-[1.5em]">
              <textarea
                type="text"
                placeholder="پیام شما"
                multiple
                className={`${inputStyle} h-[9em] w-[17.875em] resize-none scroll-smooth !p-4`}
              />
              <button className={buttonStyle}>ارسال پیام</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
