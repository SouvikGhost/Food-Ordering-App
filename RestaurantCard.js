import {CARD_IMAGE_CDN_URL} from "../utils/allURL"
import { AiFillStar } from 'react-icons/ai';


const RestaurantCard = (props) => {
   
  const { newRestaurantList } = props;
  const {name,cloudinaryImageId,cuisines,costForTwo,avgRating,sla,avgRatingString }=newRestaurantList?.info;
    return (
      <div className=" w-[220px] bg-[#E5E5CB] m-2 rounded-xl hover:bg-[#D5CEA3]">
         <img
          className="rounded-xl w-[220px] h-[180px]"
          src={ CARD_IMAGE_CDN_URL + cloudinaryImageId }
          alt=""
        />
        <h3 className="font-bold py-1 text-lg px-2">{name}</h3>
        <h5 className="px-2 flex font-semibold">{avgRating?(<div className="flex"><AiFillStar className="bg-green-600 rounded-lg text-xl text-white"/><span className="px-2">{avgRating}</span></div>):avgRatingString} ● {sla.deliveryTime} minutes</h5>
        <h5 className="py-2 px-2">{cuisines.join(", ").slice(0,24)}...</h5>
        {/* <h5>{sla.deliveryTime} minutes</h5>  */}
        {/* <h5>{costForTwo}</h5> */}
        {/* <h5 className="ratingdetails">{avgRating ?`${avgRating} Stars`:`${avgRatingString}`}</h5> */}
        
      </div>
    );
  };

  export const withPromotedLabel=(RestaurantCard)=>{

    return (props)=>{
     
      return(
        <div>
          <label className="absolute bg-[#1A120B] text-white rounded-md p-1 text-xs font-semibold">PROMOTED</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }



export default RestaurantCard;