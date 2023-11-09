function SelectBranchCard({ className }) {
  return (
    <div
      className={`relative hidden h-[441px] w-[808px] rounded-lg bg-white ${className}`}
    >
      <div className="absolute left-[104px] top-[108px] w-[600px] text-center font-['Estedad-VF'] text-base font-normal capitalize leading-7 text-neutral-700">
        برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
      </div>
      <div className="absolute left-[24px] top-[157px] inline-flex h-[260px] flex-col items-center justify-center rounded border border-stone-300 bg-white pb-0.5 shadow">
        <img
          className="relative h-[179px] w-[175px] rounded-tl rounded-tr"
          src="https://via.placeholder.com/175x179"
        />
        <div className="flex h-[79px] flex-col items-center justify-center rounded-bl-lg rounded-br-lg px-2 pb-0.5 pt-1">
          <div className="text-center font-['Estedad-VF'] text-base font-medium capitalize leading-7 text-neutral-700">
            شعبه ونک
          </div>
          <div className="h-11 w-[159px] text-center font-['Estedad-VF'] text-xs font-normal capitalize leading-snug text-neutral-500">
            میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
          </div>
        </div>
      </div>
      <div className="absolute left-[219px] top-[157px] inline-flex h-[260px] flex-col items-center justify-center rounded border border-gray-600 bg-white pb-0.5">
        <img
          className="relative h-[179px] w-[175px] rounded-tl rounded-tr"
          src="https://via.placeholder.com/175x179"
        />
        <div className="flex h-[79px] flex-col items-center justify-center rounded-bl-lg rounded-br-lg px-2 pb-0.5 pt-1">
          <div className="text-center font-['Estedad-VF'] text-base font-medium capitalize leading-7 text-neutral-700">
            شعبه اقدسیه
          </div>
          <div className="h-11 w-[159px] text-center font-['Estedad-VF'] text-xs font-normal capitalize leading-snug text-neutral-500">
            خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
          </div>
        </div>
      </div>
      <div className="absolute left-[414px] top-[157px] inline-flex h-[260px] flex-col items-center justify-center rounded border border-stone-300 bg-white pb-0.5">
        <img
          className="relative h-[179px] w-[175px] rounded-tl rounded-tr"
          src="https://via.placeholder.com/175x179"
        />
        <div className="flex h-[79px] flex-col items-center justify-center rounded-bl-lg rounded-br-lg px-2 pb-0.5 pt-1">
          <div className="text-center font-['Estedad-VF'] text-base font-medium capitalize leading-7 text-neutral-700">
            شعبه چالوس
          </div>
          <div className="h-11 w-[159px] text-center font-['Estedad-VF'] text-xs font-normal capitalize leading-snug text-neutral-500">
            چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی،
            رستوران ترخینه
          </div>
        </div>
      </div>
      <div className="absolute left-[609px] top-[157px] inline-flex h-[260px] flex-col items-center justify-center rounded border border-stone-300 bg-white pb-0.5">
        <img
          className="relative h-[179px] w-[175px] rounded-tl rounded-tr"
          src="https://via.placeholder.com/175x179"
        />
        <div className="flex h-[79px] flex-col items-center justify-center rounded-bl-lg rounded-br-lg px-2 pb-0.5 pt-1">
          <div className="text-center font-['Estedad-VF'] text-base font-medium capitalize leading-7 text-neutral-700">
            شعبه اکباتان
          </div>
          <div className="h-11 w-[159px] text-center font-['Estedad-VF'] text-xs font-normal capitalize leading-snug text-neutral-500">
            شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[24px] w-[808px] text-center font-['Estedad-VF'] text-xl font-semibold capitalize leading-9 text-neutral-700">
        انتخاب شعبه
      </div>
      <div className="absolute left-[24px] top-[24px] h-10 w-10">
        <div className="absolute left-[8.45px] top-[11.67px] h-[29.81px] w-[3.73px] origin-top-left rotate-[-45.70deg] rounded-2xl bg-neutral-500" />
        <div className="absolute left-[28.70px] top-[9px] h-[29.81px] w-[3.73px] origin-top-left rotate-[45.70deg] rounded-2xl bg-neutral-500" />
      </div>
    </div>
  );
}

export default SelectBranchCard;
