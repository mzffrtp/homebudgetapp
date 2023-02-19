import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/header";
import "../assets/styles/categoryactions.css"
import add from "../assets/imgs/add.png"
import { useNavigate } from "react-router-dom";

const CategoryActions = () => {

const [categories, setCategories] = useState(null);
const [showErrorModal, setShowErrorModal] = useState(false);
const navigate = useNavigate();

useEffect(()=>{
    axios
    .get("http://localhost:3004/categories")
    .then((res)=>{
        setCategories(res.data)
    })
    .catch((err)=>{
        setShowErrorModal(true)

    })
}, [])

if (categories === null) return null;
    return (
        <div>
            <Header whichPage={"CategoryActions"} navigateTo= "/"/>
            <div className="catOpCon">
                <div 
                onClick={()=> navigate("/add-category")}
                className="addBtn">
                    <img src={add} alt=""/>
                </div>
                <div className="catOpContentWrapper">
                    {
                        categories.length === 0 ? (
                            <p>No categories saved for now!</p>
                        ) : (
                            <>
                            {categories.map((category) => (
                                <p
                                className="catActCatWrapper" 
                                key={category.id}
                                >{category.name}</p>
                            ))}
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default CategoryActions