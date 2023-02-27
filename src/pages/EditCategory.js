import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import GeneralModal from "../components/GeneralModal";
import Header from "../components/header";

const EditCategory = () => {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [form, setForm] = useState(null);
    const [allCategories, setAllCategories] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios
            .get(`http://localhost:3004/categories`)
            .then((res) => {
                setAllCategories(res.data)

                const editedCat = res.data.find(category => category.id === categoryId)
                setForm(editedCat)

                setFirstName(editedCat.name)
            })
            .catch((err) => {
                console.log("An error occured!");
            })
    }, [])

    if (form === null || allCategories === null) { return null }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* validation */
        if (form.name === "") { alert("name can´t be left empty") }

        const hasCategory = allCategories.find(category=> category.name.toLowerCase() === form.name.toLowerCase())
        if(hasCategory !== undefined) {return (alert("This category is already exits."))}

        axios
            .put(`http://localhost:3004/categories/${categoryId}`, form)
            .then((res)=>{
                setOpenModal(true)
            })
            .catch((err)=>{console.log("err");})
    }
    return (
        <div>
            <Header whichPage={"edit-category"} navigateTo={"/category-actions"} />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formElement w-75 m-auto mb-3">
                        <label htmlFor="catName">Category Name</label>
                        <input id="catName" type={"text"}
                            value={form.name}
                            onChange={(event) => setForm({ ...form, name: event.target.value })}
                        />
                    </div>
                    <div className="submitBtnWrapper">
                        <button 
                        disabled ={
                            firstName.toLocaleLowerCase === form.name.toLocaleLowerCase() || 
                            form.name === "" ? true: false}
                        className="submitBtn" type="submit">Save</button>
                    </div>
                </form>
            </div>
            {
                openModal && (
                    <GeneralModal
                            title="Success"
                            content="Your category is succesfully edited!"
                            closeBtnTxt="Return to category actions"
                            closeBtnClck={() => navigate("/category-actions")}
                        />
                )
            }
        </div>
    )
}

export default EditCategory