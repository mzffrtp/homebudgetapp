import React from "react";

import "../assets/styles/listexpenses.css"
import SingleExpense from "./SingleExpense";

const ListExpenses = ({expenses = [], categories}) => {
    return (
        <div className="expensesContainer" >
            <div className="expensesWrapper">
                {
                    expenses.map(expense=>(
                        <SingleExpense 
                        key={expense.id}
                        expense ={expense}
                        categories ={categories}
                        />
                    ))
                }

            </div>

        </div>
    ) 
}

export default ListExpenses