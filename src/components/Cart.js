import { useDispatch, useSelector } from 'react-redux';
import MenuCard from './MenuCard';
import { clearCart } from '../utils/cartSlice';
const Cart = ()=>{
    const cartItem = useSelector((store)=> store.cart.items);
    console.log(cartItem);
    const dispatch = useDispatch();

    function handleClearCart(){
        dispatch(clearCart());
    }

    return (
        <div className=" m-4 p-4">
            <div className='text-center'>
                <h1 className="text-xl font-bold">Cart</h1>
                <button className='px-2 py-1 rounded-md font-bold text-white bg-red-600' onClick={handleClearCart}>ClearCart</button>
            </div>
            <div className="w-6/12 m-auto">    
                {cartItem.map((item)=><MenuCard info = {item}/>)}
            </div>
        </div>
    );
}

export default Cart;