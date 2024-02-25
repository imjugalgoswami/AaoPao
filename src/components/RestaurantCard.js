import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} = props;
    const { name,cuisines,avgRating,costForTwo,cloudinaryImageId,
        areaName
          } = resData?.info;
    const {slaString} = resData?.info?.sla || {};
    return (
        <div className="res-card m-4 p-4 bg-white rounded-md shadow-md min-w-[19rem] transform transition-transform duration-300 hover:scale-105 ">
            <div className="h-40">
                <img alt="food image" src={CDN_URL+cloudinaryImageId} className="w-full h-full object-center rounded-md" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-2">{name.slice(0,26)}</h4>
                <h4 className="text-gray-600 ">{cuisines.join(", ").slice(0,30)+"..."}</h4>
                <h4 className="text-gray-600 mb-2">{areaName}</h4>
                <h4 className="text-green-500 font-semibold mb-2">{avgRating}</h4>
                <h4 className="text-gray-600 mb-2">{slaString}</h4>
                <h4 className="text-gray-600">{`Cost for Two: ${costForTwo}`}</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;