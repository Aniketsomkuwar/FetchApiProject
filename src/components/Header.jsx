import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [text, setText] = useState("Login");

    const btnChange = () => {
        text === "Login" ? setText("Logout") : setText("Login");

    }



    return (
        <div className="header">
            <div className="logo-container">

                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="navigation">

                <ul className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                    <button onClick={() => btnChange()}>{text}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;