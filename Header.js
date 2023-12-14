import { useState } from "react";
import logo from "../../Images/ghostfoodlogo-PhotoRoom.png-PhotoRoom.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useSelector } from "react-redux";



const Header = () => {
  
  
    // subscribing to the store using selector 
   const cartItems=useSelector((store)=>store.cart.items)
  //  console.log(cartItems);

    const [loginbtn,setLoginbtn]=useState("Login")
    const status=useOnlineStatus();

    return (
      <div className="flex justify-between shadow-2xl bg-[#D5CEA3] rounded-[200px]"> 
        <div className="logo-container">
          <img  src={logo} alt="" className="w-[100px] absolute left-5"  />
        </div>
        <div>
          <ul className="flex p-4 m-4">
            <li className="mx-4 text-base">Status:{status ? "🟢": "🔴"}</li>
            <li className="mx-4 font-semibold text-base relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"> <Link to="/">Home</Link></li>
            <li className="mx-4 font-semibold text-base relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"><Link to="/about">About</Link></li>
            <li className="mx-4 font-semibold text-base relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"><Link to="/contact">Contact</Link></li>
            <li className="mx-4 font-semibold text-base relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"><Link to="/cart">🛒Cart({cartItems.length})</Link></li>
            <li className="mx-4 font-semibold text-base relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"><Link to=""><AiOutlineUserAdd className="font-semibold text-2xl "/></Link></li>
            <button className="login-btn mx-4 flex relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300" onClick={()=>{
              
              loginbtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")

            }}>{loginbtn}<FiLogIn className="font-semibold text-2xl ml-2"/></button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;