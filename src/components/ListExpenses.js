import React, { useEffect, useState } from "react";

import "../assets/styles/listexpenses.css"
import SingleExpense from "./SingleExpense";

const ListExpenses = ({ expenses = [], categories, selectedCategory }) => {
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);

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