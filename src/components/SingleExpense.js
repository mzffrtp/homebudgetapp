import React from "react";

import "../assets/styles/singleexpense.css"
import remove from "../assets/imgs/remove.gif";
import editIcon from "../assets/imgs/pencil.gif";



const SingleExpense = ({ expense, categories = [] }) => {

    const expenseCategory = categories.find(category => category.id === expense.categoryId)
    
    return (
        <div className="expenseWrapper">
            <h2 className="expenseTitle">
                {expense.title}
            </h2>
            <p className="expenseDescription">{expense.description}</p>
            <h4 className="expensePrize">{expense.price} €</h4>
            <div className="btnWrapper">
                <div >
                    <img src={editIcon} className="expenseIcon" />
                </div>
                <div>
                    <img src={remove} className="expenseIcon" />
                </div>
            </div>
            <div className="expenseCategory" >
                <p >{expenseCategory.name}</p>
            </div>
        </div>
    )
}
export default SingleExpense