import RestaurantCategoryListItem from "./RestaurantCategoryListItem";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(showItems);
  const handleClick = () => {
    setShowIndex(showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto bg-[#D5CEA3] shadow-md p-5 my-8  rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-black font-semibold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <RestaurantCategoryListItem items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
