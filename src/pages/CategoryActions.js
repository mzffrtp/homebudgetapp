import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/header";
import "../assets/styles/categoryactions.css"

const CategoryActions = () => {

const [categories, setCategories] = useState();
const [showErrorModal, setShowErrorModal] = useState(false)
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
                <div className="catOpContentWrapper">
                    {
                        categories.length === 0 ? (
                            <p>No categories for now!</p>
                        ): (
                            <>
                            {
                                categories.map((category)=>(
                                    <div key={category.id}>
                                        <p>
                                            {category.name}
                                        </p>

                                    </div>
                                ))
                            }
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )

}

export default CategoryActions