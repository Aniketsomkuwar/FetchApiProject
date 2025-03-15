import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext"

import { useSelector } from "react-redux";
const Header = () => {
    const [text, setText] = useState("Login");

    const btnChange = () => {
        text === "Login" ? setText("Logout") : setText("Login");

    }


    // React Redux
    const cart = useSelector((store) => store.cart.items);




    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <img className="w-20" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4 items-center font-bold">
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-800 hover:text-gray-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-600">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-gray-800 hover:text-gray-600">
                            Cart ({cart.length})
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => btnChange()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {"logout"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;