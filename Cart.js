import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryListItem from "./RestaurantCategoryListItem";
import { clearCart } from "../utils/cartSlice";
import CartDetails from "./CartDetails";



const Cart =()=>{
    const cartItems=useSelector((store)=> store.cart.items)
    // console.log(cartItems);
    const dispatchItem=useDispatch()
    const handleClearCart=()=>{
        dispatchItem(clearCart())
    }
    if(cartItems.length===0) return <h1 className="text-center my-20 font-bold font-mono text-2xl">Looks like You're Hungry🤤 Let's add some Foods</h1>
    return(
        <div className="text-center m-4 p-4">
            
            <h1 className="text-2xl font-semibold">Cart Details</h1>
            <button className=" mt-4 mx-6 px-3 py-[3px] rounded-lg bg-[#1A120B] text-slate-50" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto bg-[#D5CEA3] shadow-md ">
            {/* <RestaurantCategoryListItem items={cartItems}/> */}
            <CartDetails items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;