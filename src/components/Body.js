import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [ filteredRestaurants,setFilteredRestaurants] = useState([]);
    const {loggedInUser,setUserName} = useContext(UserContext);
    console.log(useContext(UserContext));

    useEffect(()=>{
        fetchData();
    },[]);

   async function fetchData(){

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        const apiRestaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(apiRestaurantList);
        setListOfRestaurants(apiRestaurantList);
        setFilteredRestaurants(apiRestaurantList);
        // console.log(listOfRestaurants);
    }
    return (listOfRestaurants?.length) === 0?<Shimmer/>:( 
        <div className="body">
            <div className="flex items-center">
            <div className="m-4 p-4">
                <input type="text" className=" border border-solid border-black h-8 text-center rounded" placeholder="search" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="bg-blue-500 text-white px-4 py-1 rounded ml-2" onClick={()=>{
                    const filteredList  = listOfRestaurants.filter((restaurant)=>{
                        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                    }); 
                    setFilteredRestaurants(filteredList);
                }}>Search</button>
            </div>
            <div className="filter-container"><button className="bg-green-500 text-white px-4 py-1 rounded" onClick={()=>{
               setFilteredRestaurants(listOfRestaurants.filter((res)=>{
                    return res.info.avgRating > 4;
                }));
            }}>Top Rated Restaurants</button></div>
            <div>
                <input className=" ml-10 border border-solid border-black h-8 text-center rounded" placeholder="Update Username" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>    
            </div>
            </div>

            <div className="flex  justify-center w-[90vw] m-auto">
                <div className="flex flex-wrap ml-2">
                        {filteredRestaurants?.map((restaurant)=>{
                            return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard resData={restaurant}/></Link>
                        })}
                </div>
            </div>
        </div>
    );
}

export default Body;