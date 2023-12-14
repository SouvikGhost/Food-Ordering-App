import { useEffect, useState } from "react";
import {MENU_CARD_DETAILS_API} from "../utils/allURL"


const useFetchRestaurantDetails=(resId)=>{

    const [resInfo , setResInfo]=useState(null)
    

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData= async ()=>{
        const getDataofMenuCard=await fetch(MENU_CARD_DETAILS_API + resId);
        const JsonData=await getDataofMenuCard.json();
        setResInfo(JsonData.data)
    }




    return resInfo;
}
export default useFetchRestaurantDetails;