import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const MenuCard = (props)=>{
    const {name,imageId,isVeg,defaultPrice,price,description} = props.info;
    // console.log(props);
    const dispatch = useDispatch();
    function addToCartHandler(){
        dispatch(addItem("pizza"));
    }
    return (
        <div>

            <div className="h-32 relative">
                <div className="my-7">
                    <h2 className="font-bold">{name}</h2>
                    <h2>{"₹" + (defaultPrice/100 || price/100)}</h2>
                    <h2 className="text-slate-500 w-[83%]">{description}</h2>
                </div>
                <div className="w-[120px] h-[90px] absolute top-1/2 transform translate-y-[-70%] right-0">
                    <img className="w-full h-full object-center shadow-md rounded-md" src={CDN_URL+imageId}/>
                    <button onClick={addToCartHandler} className="py-1 px-4 shadow-lg rounded-md text-green-700 bg-white relative top-[-20] left-[50%] transform translate-x-[-50%] ">Add +</button>
                </div>
            </div>
            <hr className=" border-gray-300"/>
        </div>
    );
} 
export default MenuCard;