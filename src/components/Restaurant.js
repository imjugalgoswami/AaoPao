import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import FlatCouponCard from "./FlatCouponCard";
import MenuCard from "./MenuCard";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const Restaurant = ()=>{
    // console.log("rendered")
    const [showIndex,setShowIndex] = useState(0);
    const {resId} = useParams(); 

    const resInfo = useFetchRestaurantMenu(resId);
    console.log(resInfo)
    if(resInfo === null){
        return <Shimmer/>;
    }

    // console.log("hello");
    const {name,cuisines,costForTwoMessage,locality,veg,avgRatingString,totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
    const {deliveryTime,lastMileTravelString,slaString} = resInfo?.cards[0]?.card?.card?.info?.sla;
    const {message} = resInfo?.cards[0]?.card?.card?.info?.feeDetails;
    const offerInfo = resInfo?.cards[0]?.card?.card?.info?.aggregatedDiscountInfo;
    const {descriptionList} = resInfo?.cards[0]?.card?.card?.info?.aggregatedDiscountInfoV2;
    // console.log(descriptionList)2

    const {itemCards,title} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    // console.log(categories);
    // console.log(itemCards);

    return (
        <div className="restaurant-menu w-1/2 m-auto">
            <div className="restaurant-nav ">
                <div className="res-name">
                    <h1 className="text-xs text-slate-500">{"| "+name.toLowerCase()+" |"}</h1>
                </div>
                <div className="res-details m-2 relative">
                    <h1 className="res-name text-xl font-semibold mb-1">{name}</h1>
                    <h5 className="text-sm text-gray-700">{cuisines[0]+", "+cuisines[1]}</h5>
                    <h5 className="text-sm text-gray-700 mb-4">{locality+", "+lastMileTravelString}</h5>
                    <h5 className="text-sm text-gray-700">{message}</h5>
                    <div className="rating-card absolute top-0 right-0  border p-1 shadow-lg rounded-md bg-slate-100 w-[5rem]">
                        <h6 className="text-center text-green-500 font-semibold">{avgRatingString}</h6>
                        <hr className="border-gray-300 my-2"  />
                        <h6 className="text-xs text-gray-500 font-semibold mb-3">{totalRatingsString}</h6>
                    </div>
                </div>
                <hr className=" ml-2 mt-10 border-dashed border-gray-300"/>
                <div className="offers m-2">
                    <div className="flex font-extrabold text-slate-600">
                        <h2 className="mr-4">{slaString}</h2>
                        <h2>{costForTwoMessage}</h2>
                    </div>
                    <div className="coupon flex">
                        {
                            descriptionList.map((flatData,index)=>{
                                return <FlatCouponCard key={index} flatData={flatData} />
                            })
                        }
                    </div>
                </div>
                <hr className=" ml-2 mt-10 border-gray-300"/>
                <div className="menu mt-10">
                        {
                            categories.map((c,index)=>{
                                console.log("map run");
                                return <RestaurantCategory data = {c.card.card} key = {index} showItems={index === showIndex ?true:false} setShowIndex={(arg=index)=>{
                                    setShowIndex(index=arg);
                                    console.log(index);
                                }} />
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default Restaurant;