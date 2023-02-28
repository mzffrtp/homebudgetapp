import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../assets/styles/addexpense.css";
import GeneralModal from "../components/GeneralModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { specialCharsnadNumbers } from "../utils/functions";

const AddCategory = () => {

    const [form, setForm] = useState({
        id:String(new Date().getTime()),
        name:""
    })
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const [categories, setCategories] = useState(null)

    useEffect(()=> {
        axios
        .get("http://localhost:3004/categories")
        .then((res)=>{
            setCategories(res.data)
        })
        .catch((err)=>{})
    }, [])

    if(categories === null) return null

    const handleSubmit = (event) => {
        event.preventDefault();

        if(form.name ===""){
            setShowError(true)
        }
        const hasCategory = categories.find(item=> item.name.toLowerCase() === form.name.toLowerCase())

        if(hasCategory !== undefined){
            alert("This category is already recorded.")
        }

        
        if(specialCharsnadNumbers(form.name)) 
        {alert("Name cannot include special characters or numbers!"); return}
        
        axios
            .post("http://localhost:3004/categories", form)
            .then((res)=>{
                navigate("/category-actions")
            })
            .catch((err)=>{
                console.log(err);
            })

    }
    return (
        <div>
            <Header
                whichPage={"addcategory"}
                navigateTo="/category-actions" />
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="formElement">
                        <label htmlFor="catName">Category Name</label>
                        <input id="catName" type={"text"}
                            value={form.name}
                            onChange={(event) => setForm({...form, name:event.target.value})}
                        />
                    </div>
                    <div className="submitBtnWrapper">
                        <button className="submitBtn" type="submit">Save</button>
                    </div>
                </form>
            </div>
            <>
                {
                    showError === true && (
                        <GeneralModal
                            title="Error"
                            content="An error occured!"
                            closeBtnTxt="Return to categories"
                            closeBtnClck={() => navigate("/category-actions")}
                        />
                    )
                }
            </>
        </div>

    )

}

export default AddCategory