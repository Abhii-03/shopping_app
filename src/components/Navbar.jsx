import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
     <div className="bg-slate-900 ">
        <div className="flex  justify-between items-center h-20 max-w-6xl mx-auto ">
          <NavLink to="/">
            <div className="ml-5">
             <img src="../logo.png" alt="logo kha hai" className="h-14 text-white" />
            </div>
          </NavLink>
          <div className="flex gap-4 font-medium mr-5 space-x-6 justify-center items-center ">
            <NavLink to="/">
              <p className="text-slate-100">
                Home
              </p>
            </NavLink>
            <NavLink to="/cart">
              <div className="text-slate-100 relative">
              
                <FaShoppingCart className="text-2xl" />

                {
                  cart.length > 0 && 
                  <span className="bg-green-600 text-white absolute -top-1 -right-2
                    text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full ">
                    {cart.length}
                  </span>
                }
              </div>
            </NavLink>
          </div>
        </div>
     </div>
  )
}

export default Navbar;
