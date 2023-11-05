import { Link } from "react-router-dom";

const buttonBoxStyle = "flex justify-center mb-3 sm:mb-5";
const buttonStyle =
  "flex items-center text-xs md:text-sm lg:text-base justify-center gap-x-2 text-[#417F56] border mt-2 border-[#417F56] rounded h-7 sm:h-8 w-[8.5em] sm:w-[9.5em] md:h-[2.5em] lg:w-[11.5em]";

function Button({ link, children, className }) {
  return (
    <div className={`${buttonBoxStyle} ${className}`}>
      <Link to={link} className={buttonStyle}>
        {children}
      </Link>
    </div>
  );
}

export default Button;
