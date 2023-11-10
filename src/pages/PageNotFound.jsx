import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex h-[100vh] items-center justify-center  ">
      <div className="flex-[0 1 96rem] rounded-md border-[1px] bg-gray-100 p-[4.8rem] text-center ">
        <div>صفحه مورد نظر یافت نشد!</div>
        <button
          onClick={moveBack}
          className=" shadow-inner-lg mt-4 rounded-full bg-[var(--Green-Green-Tint-6)] px-5 py-2 "
          size="large"
        >
          &larr; بازگشت
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
