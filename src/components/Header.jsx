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
            <div className="navItems">

                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => btnChange()}>{text}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;