import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/categories.css"

const CategoriesList = ({
    categories,
    setSelectedCategory,
    selectedCategory
}) => {
    return (
        <div className="categoriesContainer" >
            <div className="categoryActions">
                <Link 
                to={"/category-actions"}>Category Actions &rarr;</Link>
            </div>
            <div className="categoriesContainer_wrapper">
                <p
                    onClick={() =>
                        setSelectedCategory({ id: "0", name: "all" })}
                    className={`categoriesContainer_wrapper-item ${selectedCategory.id === "0" ? "categoriesContainer_wrapper-itemActive" : ""}`}>All</p>
                {
                    categories.map((category) => (
                        <p
                        key = {category.id}
                            onClick={() => setSelectedCategory(category)}
                            className={`categoriesContainer_wrapper-item ${selectedCategory.id === category.id ? "categoriesContainer_wrapper-itemActive" : ""}`}
                            key={category.id}>
                            {category.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesList;