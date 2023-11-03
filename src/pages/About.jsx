import { useEffect } from "react";
import bannerImg from "../images/about-us-banner.jpg";
import aboutUsImg from "../images/about-us.jpg";

// icons
import {
  userIcon,
  lineChartIcon,
  homeWifiIcon,
  menuBoardIcon,
  userDesktopIcon,
  lineChartDesktopIcon,
  homeWifiDesktopIcon,
  menuBoardDesktopIcon,
} from "../icons/introductionIcons";

// Styles
import { featuresBoxItemStyle } from "../utils/constants";

export const bannerImgStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center relative w-full h-[176px] md:h-[336px]";
export const bannerTitleStyle =
  "text-[#E5F2E9] absolute text-center left-0 right-0 top-[45%] font-bold text-lg md:text-3xl lg:text-4xl";

function About() {
  useEffect(() => {
    document.title = "درباره ما";
  }, []);

  return (
    <div>
      <div
        style={{ "--image-url": `url(${bannerImg})` }}
        className={bannerImgStyle}
      >
        <span className={bannerTitleStyle}>درباره ترخینه بیشتر بدانید!</span>
      </div>

      <div className="container mx-auto max-w-[1224px]">
        <h2 className="px-5 pb-1 pt-4 font-bold text-[#353535]  md:text-xl lg:pb-6 lg:pt-12 xl:text-2xl">
          درباره ما
        </h2>

        <div className="content mb-4 min-h-[calc(100vh_-_520px)] px-5 text-justify text-[11px] leading-[17.5px] text-[#717171] md:text-base md:leading-[26px] lg:min-h-[calc(100vh_-_380px)] xl:text-lg xl:leading-8">
          <div
            style={{ "--image-url": `url(${aboutUsImg})` }}
            className="float-left mr-4 h-[120px] w-[152px] rounded bg-[image:var(--image-url)] bg-cover bg-center md:h-[300px] md:w-[400px] lg:mr-6 lg:h-[492px] lg:w-[600px]"
          ></div>
          <p className="item-body">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت
            جلب رضایت مشتریان بوده است.
            <br />
            دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت
            غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های
            مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات
            خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
            جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا
            را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
            آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما
            عزیزان می‌باشند.
            <br />
            چشم انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
            آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
            روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
      </div>

      <div className=" bg-[#EDEDED] ">
        <div className="container mx-auto flex h-[76px] max-w-[1224px] items-center justify-between gap-x-4 px-5 text-center text-[#717171] md:h-[166px] ">
          <div
            className={`${featuresBoxItemStyle} !gap-y-0.5 !text-[9.5px] md:!text-base`}
          >
            <span className="text-[#353535] md:hidden">{userIcon}</span>
            <span className="hidden text-[#353535] md:block">
              {userDesktopIcon}
            </span>
            <span>پرسنلی مجرب و حرفه‌ای</span>
          </div>

          <div
            className={`${featuresBoxItemStyle} !gap-y-0.5 !text-[9.5px] md:!text-base`}
          >
            <span className="text-[#353535] md:hidden">{lineChartIcon}</span>
            <span className="hidden text-[#353535] md:block">
              {lineChartDesktopIcon}
            </span>
            <span>کیفیت بالای غذاها</span>
          </div>

          <div
            className={`${featuresBoxItemStyle} !gap-y-0.5 !text-[9.5px] md:!text-base`}
          >
            <span className="text-[#353535] md:hidden">{homeWifiIcon}</span>
            <span className="hidden text-[#353535] md:block">
              {homeWifiDesktopIcon}
            </span>
            <span>محیطی دلنشین و آرام</span>
          </div>

          <div
            className={`${featuresBoxItemStyle} !gap-y-0.5 !text-[9.5px] md:!text-base`}
          >
            <span className="text-[#353535] md:hidden">{menuBoardIcon}</span>
            <span className="hidden text-[#353535] md:block">
              {menuBoardDesktopIcon}
            </span>
            <span>منوی متنوع</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
