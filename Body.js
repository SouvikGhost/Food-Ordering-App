// this is Named import------------
import { useEffect, useState } from "react";
// this is Named Export------------
import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [topRestaurantList,setTopRestaurantList]=useState([]);
    const [copyRestaurantList,setCopyRestaurantList]=useState([]);
    const [inputSearchvalue,setInputsearchvalue]=useState("");

    const WithPromotedRestaurant=withPromotedLabel(RestaurantCard);


  useEffect(()=>{
    fetchData()
  }
  ,[])



  const fetchData= async ()=>{
    const DATA_FROM_API= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const DATA_IN_JSON= await DATA_FROM_API.json();
    // console.log(DATA_IN_JSON?.data?.cards[3]?.card?.card);

    setTopRestaurantList(DATA_IN_JSON?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCopyRestaurantList(DATA_IN_JSON?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  const status= useOnlineStatus();
  if(status === false) return <h1>Looks like You're Offline</h1>


    return topRestaurantList.length===0? <Shimmer/> : (
      <div className="body">


        <div className="flex my-6 justify-center">
          <div className="">
            <input type="text" placeholder="search Restaurant" className=" px-1 border border-slate-800 rounded-lg placeholder:px-2" value={inputSearchvalue} onChange={(e)=>{setInputsearchvalue(e.target.value)}}/>


            <button className=" mx-6 px-3 py-[3px] rounded-lg bg-[#1A120B] text-slate-50" onClick={()=>{
              const filteredListBySearch =topRestaurantList.filter((resList)=>resList.info.name.toLowerCase().includes(inputSearchvalue.toLowerCase()));

              // setTopRestaurantList(filteredListBySearch);
              setCopyRestaurantList(filteredListBySearch);

            

            }}>Search</button>
          </div>


            <button className=" mx-6 px-3 py-[3px] rounded-lg bg-[#1A120B] text-slate-50" onClick={()=>{
                const topFilterRestaurant=topRestaurantList.filter((newFilteredList)=>newFilteredList.info.avgRating>4);
                setTopRestaurantList(topFilterRestaurant);
               

            }}>Rating 4.0+</button>

            <button className=" mx-6 px-3 py-[3px] rounded-lg bg-[#1A120B] text-slate-50" onClick={()=>{
                

            }}>New on Swiggy</button>

            <button className=" mx-6 px-3 py-[3px] rounded-lg bg-[#1A120B] text-slate-50" onClick={()=>{
                

            }}>Less Than 500</button>


        </div>



        <div className="flex flex-wrap">
          {copyRestaurantList.map((list)=> 
          // {console.log(list.info.promoted)}
         

              <Link key={list.info.id} to={"/restaurants/"+ list.info.id}>

               {
                list.info.promoted ? <WithPromotedRestaurant newRestaurantList={list}/> :  <RestaurantCard  newRestaurantList={list}/>   
               }

                 

              </Link>
          
          )}
        </div>
      </div>
    );
  };

export default Body;