import React, { useEffect, useState } from "react";

import Header from "../components/header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import GeneralModal from "../components/GeneralModal";
import "../assets/styles/addexpense.css"

const EditExpense = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [expense, setExpense] = useState(null);
    const [showErrormodal, setShowErrormodal] = useState(false);
    const [form, setForm] = useState({
        price: "",
        place: "",
        title: "",
        description: "",
        date: "",
        categoryId: ""
    });
    const [categories, setCategories] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)


    useEffect(() => {
        axios
            .get(`http://localhost:3004/expenses/${params.expenseId}`)
            .then((resExpense) => {
                axios
                    .get("http://localhost:3004/categories")
                    .then((resCat) => {
                        setCategories(resCat.data)
                        setExpense(resExpense.data)
                        setForm(resExpense.data)
                    })
                    .catch((err) => {
                        setShowErrormodal(true);
                    })
            })
            .catch((err) => {
                setShowErrormodal(true)
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()

        if (
            form.price === "" ||
            form.title === "" ||
            form.categoryId === "" ||
            form.place === "" ||
            form.description === "" ||
            form.date === "" ||
            form.categoryId === "empty"
        ) {
            alert("Any areas can´t be left blank.");
            return;
        }
        axios
            .put(`http://localhost:3004/expenses/${params.expenseId}`, form)
            .then((res) => {
                setShowSuccessModal(true)
            })
            .catch()
    }
    if (expense === null && categories === null && showErrormodal === false) return null;

    if (showErrormodal === true) {
        return (
            <GeneralModal
                title="Error"
                content="An error occured, please try again later!"
                closeBtnTxt="Return to homepage"
                closeBtnClck={() => navigate("/")}
            />
        )
    }
    return (
        <div>
            <Header whichPage={"addd-expense"} navigateTo="/" />
            <div className="formWrapper">
                <form onSubmit={handleSubmit} >
                    <div className="formElement">
                        <label htmlFor="price">Price</label>
                        <input id="price" type={"number"}
                            value={form.price}
                            onChange={(event) => setForm({ ...form, price: event.target.value })} />
                    </div>
                    <div className="formElement">
                        <label htmlFor="place">Place</label>
                        <input id="place" type={"text"}
                            value={form.place}
                            onChange={(event) => setForm({ ...form, place: event.target.value })}
                        />
                    </div>
                    <div className="formElement">
                        <label htmlFor="title">Title</label>
                        <input id="title" type={"text"}
                            value={form.title}
                            onChange={(event) => setForm({ ...form, title: event.target.value })}
                        />
                    </div>
                    <div className="formElement">
                        <label htmlFor="description">Description</label>
                        <input id="description" type={"text"}
                            value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })}
                        />
                    </div>
                    <div className="formElement">
                        <label htmlFor="date">Date</label>
                        <input id="date" type={"date"}
                            onChange={(event) => setForm({ ...form, date: event.target.value })}
                        />
                    </div>
                    <div className="formElement">
                        <label htmlFor="category" >Category</label>
                        <select defaultValue={form.categoryId}
                            onChange={(event) => setForm({ ...form, categoryId: event.target.value })}
                        >
                            <option value={"empty"}>Please choose a category</option>
                            {
                                categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="submitBtnWrapper">
                        <button className="submitBtn" type="submit">Save</button>
                    </div>
                </form>
            </div>
            <>
                {
                    showSuccessModal === true && (
                        <GeneralModal
                            title="Success"
                            content="Your expense is succesfully edited!"
                            closeBtnTxt="Return to homepage"
                            closeBtnClck={() => navigate("/")}
                        />
                    )
                }
            </>
        </div>
    )
}

export default EditExpense