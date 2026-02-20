import { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cartItems} = useContext(CartContext);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            ShopZone
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                className =  {({isActive})=> isActive ? " hover:text-indigo-600 transition text-indigo-600":"hover:text-indigo-600 transition text-gray-700"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className =  {({isActive})=> isActive ? " hover:text-indigo-600 transition text-indigo-600":"hover:text-indigo-600 transition text-gray-700"}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className =  {({isActive})=> isActive ? " hover:text-indigo-600 transition text-indigo-600":"hover:text-indigo-600 transition text-gray-700"}
              >
                Contact
              </NavLink>
            </li>
             
            <li>
              <NavLink
                to="/cart"
                className =  {({isActive})=> isActive ? " hover:text-indigo-600 transition text-indigo-600":"hover:text-indigo-600 transition text-gray-700"}
              >
                
                <div className="flex ">
                    
                 <FiShoppingCart size={22} />
                  {cartItems.length > 0 ? cartItems.length : ''}

                </div>
               
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className =  {({isActive})=> isActive ? " hover:text-indigo-600 transition text-indigo-600":"hover:text-indigo-600 transition text-gray-700"}
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
