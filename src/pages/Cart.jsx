import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmpount] = useState(0);
  console.log("printing cart");
  console.log(cart)
 
  // 0 is initial value
  useEffect ( () => {
     setTotalAmpount( cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price,0))
  },[cart] )

  return (
    <div>
       {
        cart.length > 0 ?
        (
          
          <div className="flex gap-14">
            <div>
              {
                  cart.map((post,index) => {
                  return (<CartItem key={post.id} post={post} postIndex={index} />)
                  })
              }
            </div>

            <div className=" ml-14">
              <div className=" mt-14">
                <p className=" text-green-900 text-xl font-semibold">
                  YOUR CART
                </p>
                <h1 className=" text-green-700 font-bold text-4xl tracking-widest                              ">
                  SUMMARY
                </h1>
                <p className="text-lg font-semibold mt-5">
                  Total Items : {cart.length}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Total Amount : {totalAmount}
                </p>
                <button className=" text-white font-bold text-xl h-[50px] w-[300px] bg-green-600 mt-7 rounded-md border border-green-900
                                   hover:bg-white  hover:text-green-900 transition duration-300 ease-in">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
          

          
        ) :
        (
         <div className="text-center mt-52">

           <h1 className="text-xl text-gray-800 font-semibold">
             Your Cart is Empty !
           </h1>
            <Link to={"/"} >
              <button className="mt-10 w-[200px] h-[40px] bg-green-600 text-white text-xl font-semibold rounded-md border border-green-700
                                   hover:bg-white hover:text-green-700 transition duration-300 ease-in">
                Shop Now
              </button>
            </Link>
            
         </div> 
        )
       }
       
    </div>
  )
};

export default Cart;
