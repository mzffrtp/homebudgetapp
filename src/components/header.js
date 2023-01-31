import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/header.css";
import logo from "../assets/imgs/dolarmoneygif.gif";
import logo1 from "../assets/imgs/money-bag.png";
import backArrow from "../assets/imgs/back-arrow.png"



const Header = ({ whichPage, navigateTo}) => {

    const navigate = useNavigate();

    var showBack = false;
    if (whichPage !== "home") {
        showBack = true
    }

    return (
        <div className="header_Container">
            {
                showBack === true && (
                    <div 
                    onClick={()=> navigate("/")}
                    className="toHome">
                        <img src={backArrow} />
                    </div>
                )
            }
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