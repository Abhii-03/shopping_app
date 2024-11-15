import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(cart);

  const  addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  }

  return (
     <div className="flex flex-col items-center justify-between  
      hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
       
       <div className=" ">
         <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
            {post.title.split(" ").slice(0,3).join(" ") + "..."}
         </p>
       </div>
       <div>
         <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
           {post.description.split(" ").slice(0,10).join(" ") + "..." }
         </p>
       </div>
       <div className="h-[180px] ">
          <img src={post.image} alt="Nhi Hai" className="h-full w-full" />
       </div>
       <div className="flex justify-between gap-11 items-center w-full mt-5 ">
         <p className="text-green-400  font-bold   ">
           ${post.price}
         </p>
       
         {
           cart.some((p) => p.id == post.id) ?
           (
            <button 
             className="border-black border text-xs rounded-lg 
              p-1 px-3 font-bold hover:bg-black hover:text-white transition duration-300 ease-in"
             onClick={removeFromCart}
            >
              Remove Item
            </button>
           ) :
           (
            <button
             className="border-black border text-xs rounded-lg  font-bold hover:bg-black
               hover:text-white p-1 px-3 transition duration-300 ease-in "
             onClick={addToCart}
            >
               Add To Cart
            </button>
           )
         }
        </div>

     </div>
  )
};

export default Product;
