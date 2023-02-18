import React, { useState } from "react";

import "../assets/styles/singleexpense.css"
import remove from "../assets/imgs/remove.gif";
import editIcon from "../assets/imgs/pencil.gif";
import axios from "axios";
import GeneralModal from "./GeneralModal";
import { useNavigate } from "react-router-dom";




const SingleExpense = ({ expense, categories = [], rerenderExpenses, setRerenderExpense }) => {

    const navigate = useNavigate();
    const expenseCategory = categories.find(category => category.id === expense.categoryId)

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleDelete = () => {
        axios
            .delete(`http://localhost:3004/expenses/${expense.id}`)
            .then((res) => {
                //setRerenderExpense(!rerenderExpenses)
                window.location.reload()

            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="expenseWrapper">
            <h2 className="expenseTitle">
                {expense.title}
            </h2>
            <p className="expenseDescription">{expense.description}</p>
            <h4 className="expensePrize">{expense.price} €</h4>
            <div className="btnWrapper">
                <div
                    onClick={() => navigate(`/edit-expense/${expense.id}`)}>
                    <img src={editIcon} className="expenseIcon" alt=""/>
                </div>
                <div
                    onClick={() => setShowDeleteModal(true)}>
                    <img src={remove} className="expenseIcon" alt=""/>
                </div>
            </div>
            <div className="expenseCategory" >
                <p >{expenseCategory.name}</p>
            </div>
            {
                showDeleteModal === true && (
                    <GeneralModal
                        title="Delete"
                        content="are you sure?"
                        closeBtnTxt="Cancel"
                        closeBtnClck={() => setShowDeleteModal(false)}
                        confirmBtnTxt="Confirm"
                        isConfirm={true}
                        confirmBtnClck={handleDelete}
                    />
                )
            }
        </div>
    )
}
export default SingleExpense