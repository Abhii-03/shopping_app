import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({post, postIndex}) => {
  const dispatch = useDispatch();

  function removeFromCart (){
    dispatch(remove(post.id));
    toast.success("Item Removed")
  }
  return (
     <div className="flex gap-10 ml-52 mt-14 mb-16  ">
       <div className=" mr-11 w-[200px] ">
        <img src={post.image} className="h-[220px] " />
       </div>
       <div className="w-[400px] flex flex-col gap-3">
         <p className=" font-semibold  text-xl mb-2 ">
          {post.title}
         </p>
         <p className=" text-gray-800 font-normal ">
          {post.description.split(" ").slice(0,15).join(" ") + "..."}
         </p>
         <div className="flex w-full items-center   justify-between   mt-4">
           <span className=" text-green-600 font-bold text-xl">
             ${post.price}
            </span>
           <div className=" rounded-full text-red-900 bg-red-300 h-10 w-10 mr-2 flex justify-center items-center
                            hover:bg-red-600 hover:text-white  transition duration-300 ease-in"
             onClick={removeFromCart}
             >
             <AiOutlineDelete/>
           </div>

        </div>
       </div>
     </div>
  )
};

export default CartItem;
