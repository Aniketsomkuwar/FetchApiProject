import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [text, setText] = useState("Login");

    const btnChange = () => {
        text === "Login" ? setText("Logout") : setText("Login");

    }



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
                            Cart
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => btnChange()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {text}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;