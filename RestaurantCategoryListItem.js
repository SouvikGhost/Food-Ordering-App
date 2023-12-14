import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";








const RestaurantCategoryListItem = ({ items }) => {
  // console.log(items);

  const dispatchItem = useDispatch()
  const handleaddItem=(item)=>{
    dispatchItem(addItem(item))
    
  }





  return (
    <div className=" bg-gray-300 ">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          {/* <img src={CARD_IMAGE_CDN_URL+ item.card.info.imageId} className="w-14"/> */}
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span> <br />
              <span> ₹{item.card.info.price / 100 ||item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>


          {
            item?.card?.info?.imageId && (<div className="w-3/12 ">
            <div className="absolute ">
                <button className="p-2 mx-14 bg-black text-white shadow-lg rounded-lg" onClick={()=>handleaddItem(item)}>Add+</button>
            </div>



            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_190,h_130/" +
                item?.card?.info?.imageId
              }
              className="w-full rounded-md"
              alt="img"
            />
          </div>)
          }

          
        </div>
      ))}
    </div>
  );
};
export default RestaurantCategoryListItem;
