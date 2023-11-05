const branchesBoxStyle =
  "flex items-center gap-x-2 border border-[#CBCBCB] hover:border-[#417F56] duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-[18em]";

const coverStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center w-[9em] h-20 md:w-[18em] md:h-36 lg:h-[14.375em]";
const descriptionBoxStyle =
  "p-1 md:pb-2 lg:px-2.5 lg:pb-4 w-[10.375em] md:w-auto";
const h4Style =
  "text-[#353535] font-medium text-xs sm:text-sm mb-1 md:text-base md:font-bold md:mb-2 lg:text-lg xl:text-[22px]";
const pStyle =
  "text-[10px] text-[#717171] leading-4 sm:leading-5 md:text-xs md:font-medium lg:text-[13px] lg:leading-6 xl:text-sm";

function BranchItem({ branch }) {
  return (
    <div className={branchesBoxStyle}>
      <div
        style={{ "--image-url": `url(${branch.pictures[0]})` }}
        className={coverStyle}
      ></div>
      <div className={descriptionBoxStyle}>
        <h4 className={h4Style}>شعبه اکباتان</h4>
        <p className={pStyle}>
          شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
        </p>
      </div>
    </div>
  );
}

export default BranchItem;
