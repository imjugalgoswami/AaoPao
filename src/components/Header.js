import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{

    const status = useOnlineStatus()?"🟢":"🔴";
    // console.log("status:",status);
    const {loggedInUser} = useContext(UserContext);

    const cartItem = useSelector((store)=> store.cart.items);

    

    return (
        <div className="flex justify-between p-1 sticky top-0 z-50 items-center shadow-lg mb-2 bg-white text-gray">
            {/* {console.log("header rendered")} */}
            <div className="logo w-28">
                <img className="w-18 rounded-full ml-10" src={LOGO_URL}/>
            </div>
            <div className="nav-items mr-10">
            <ul className="flex">
        <li className="pr-12 text-lg text-gray-800">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
        </li>
        <li className="pr-12 text-lg text-gray-800">
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            About Us
          </Link>
        </li>
        <li className="pr-12 text-lg text-gray-800">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </Link>
        </li>
        <li className="pr-12 text-lg text-gray-800">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            cart ({cartItem.length} items)
          </Link>
        </li>
        <li className="pr-12 text-lg font-bold">{loggedInUser}</li>
        <li className="pr-12 text-lg">{status}</li>
      </ul>
            </div>
        </div>
    );

}

export default Header;