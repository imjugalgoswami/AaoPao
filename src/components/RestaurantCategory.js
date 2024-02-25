import { useState } from "react";
import MenuCard from "./MenuCard";
const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // console.log(data);
    const {itemCards,title} = data;
    handleClick = ()=>{
        if(showItems){
            setShowIndex(null);
        }else{
            setShowIndex();
        }
    }
    return (
        <div className=" bg-gray-50 my-3 p-4 shadow-md">
            {/* Header */}
            <div className="cursor-pointer flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg text-gray-500">{title} ({itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian Body */}

            {  showItems && itemCards.map((item)=>{
                    return <MenuCard info = {item.card.info} key={item.card.info.id} />
                }) }

        </div>
    );
}

export default RestaurantCategory;