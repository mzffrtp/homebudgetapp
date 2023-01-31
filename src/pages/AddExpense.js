import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import "../assets/styles/addexpense.css"

const AddExpense = () => {
    const navigate = useNavigate();

    var year = new Date().getFullYear;

    var month = new Date().getMonth() + 1
    if (month < 10) month = `0${month}`;

    var date = new Date().getDate();
    if (date < 10) date = `0${date}`;

    const [form, setForm] = useState({
        price: "",
        place: "",
        title: "",
        description: "",
        date: `${year}-${month}-${date}`,
        categoryId: ""
    });

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:3004/categories")
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (
            form.price === "" ||
            form.title === "" ||
            form.categoryId === "" ||
            form.place === "" ||
            form.description === "" ||
            form.date === ""
        ) {
            alert("Bütün alanlar zorunludur");
            return;
        }
        axios
            .post("http://localhost:3004/expenses", { ...form, id: String(new Date().getTime()) })

            .then((res) => {
                navigate("/")
            })

            .catch((err) => {
                console.log(err);
            })

    }

    if (categories === null) return null
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
                        <select defaultValue={categories[0].id}
                            onChange={(event) => setForm({ ...form, categoryId: event.target.value })}
                        >
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
        </div>
    )
}

export default AddExpense