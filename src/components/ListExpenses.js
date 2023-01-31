import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/styles/listexpenses.css"
import SingleExpense from "./SingleExpense";

import addNew from "../assets/imgs/add.png"

const ListExpenses = ({ expenses = [], categories, selectedCategory }) => {

    const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    const navigate = useNavigate();

    var total = 0;
    for(let i = 0; i < expenses.length; i++){
        total += Number(expenses[i].price)
    }

    useEffect(() => {
        if (selectedCategory.id === "0") {
            setFilteredExpenses(expenses)
        } else {
            const tempSelectedExpenses = expenses.filter(item => item.categoryId === selectedCategory.id)
            setFilteredExpenses(tempSelectedExpenses)
        }
    }, [selectedCategory])

    return (
        <div className="expensesContainer" >
            <div className="priceWrapper" >
                <p><span>Total:</span><span>{total} €</span></p>
            </div>
            <div 
            onClick={()=>navigate ("/add-expense")}
            className="addNew">
                <img src={addNew} />
            </div>
            <div className="expensesWrapper">
                {
                    filteredExpenses.length === 0 ? (
                        <div className="emptyList">No expenses in this category!</div>
                    ) : (
                        <>
                            {
                                filteredExpenses.map(expense => (
                                    <SingleExpense
                                        key={expense.id}
                                        expense={expense}
                                        categories={categories}
                                    />
                                ))
                            }
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default ListExpenses