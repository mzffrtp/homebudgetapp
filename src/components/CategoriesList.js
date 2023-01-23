import React from "react";  

import "../assets/styles/categories.css"

const CategoriesList = ({categories}) => {
    return (
        <div className="categoriesContainer" >
            <div  className="categoriesContainer_wrapper">
                <p className="categoriesContainer_wrapper-item">All</p>
            {
                categories.map((category) =>(
                    <p 
                    className="categoriesContainer_wrapper-item"
                    key={category.id}>
                        {category.name}</p>
                ))
            }
            </div>
            
        </div>
    )
}

export default CategoriesList;