import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantDetails from "../utils/useFetchRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const MenuCard=()=>{
    const [showIndex , setShowIndex]=useState(null)
    const {resId}=useParams()

    const resInfo=useFetchRestaurantDetails(resId)
    




    if(resInfo === null) return <Shimmer/>


    const {name,cuisines,sla,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info
    // const {itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const {itemCards }=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(resInfo?.cards[0]?.card?.card);


    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-6">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")}</p>
            <p className="mt-4 font-bold text-sm">{costForTwoMessage} ● 🕥 {sla.deliveryTime} minutes</p>
           

            {categories.map((category,index)=>
                <RestaurantCategory 

                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems={index===showIndex ? true : false}
                        setShowIndex={()=>setShowIndex(index)}


                />
            )}






        </div>
    )
}

export default MenuCard;