import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/imgs/dolarmoneygif.gif";
import logo1 from "../assets/imgs/money-bag.png";



const Header = () =>{
    return (
        <div className="header_Container">
            <div className="header_Container_Wrapper">
                <div className="header_Container_Wrapper-logo">
                    <img src={logo}></img>
                </div>
                <h1> Your Budget App</h1>
                <div className="header_Container_Wrapper-logo">
                    <img src={logo1}></img>
                </div>
            </div>
        </div>
    )
}


export default Header