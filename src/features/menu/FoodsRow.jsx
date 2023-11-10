import FoodCard from "./FoodCard";

function FoodsRow({ frame = false, title, foodList }) {
  return (
    <div
      className={`inline-flex h-[321px] md:h-[555px] w-[100%] flex-col justify-start gap-2  md:gap-6  pt-6 ${
        frame && "bg-green-800"
      }`}
    >
      <div
        className={`mr-10 text-right text-[1rem] md:text-[1.5rem] font-bold capitalize leading-[33.60px] ${
          frame ? "text-white" : "text-[#353535]"
        }`}
      >
        {title}
      </div>
      <div className="foods-row-container  inline-flex  items-center justify-between gap-6 self-stretch overflow-scroll pr-4 md:pr-10 ">
        {foodList?.map((food) => (
          <FoodCard foodData={food} key={food.id} />
        ))}
      </div>
    </div>
  );
}

export default FoodsRow;
