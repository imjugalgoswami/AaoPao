import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useFetchRestaurantMenu = (resId)=>{
    // console.log("menu url");
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{

        fetchData();
        // console.log("menu");
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
        // console.log(json.data);
    }
    return resInfo;

}

export default useFetchRestaurantMenu;