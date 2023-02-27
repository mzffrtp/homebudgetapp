import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import Header from "../components/header";
import "../assets/styles/categoryactions.css";
import add from "../assets/imgs/add.png";
import GeneralModal from "../components/GeneralModal"

const CategoryActions = () => {

    const [openModal, setOpenModal] = useState(false)
    const [categories, setCategories] = useState(null);
    const [willDelete, setWillDelete] = useState("");
    const [didupdate, setDidUpdate] = useState(false)
    
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3004/categories")
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log("An error occured during proccess!");
            })
    }, [didupdate])

    if (categories === null) return null;
    const handleDelete = (id) =>{
        axios
            .delete(`http://localhost:3004/categories/${id}`)
            .then((res)=>{
                setOpenModal(false)
                setDidUpdate(!didupdate)
            })
            .catch((err)=>{})
    }
    return (
        <div>
            <Header whichPage={"CategoryActions"} navigateTo="/" />
            <div className="catOpCon">
                <div
                    onClick={() => navigate("/add-category")}
                    className="addBtn">
                    <img src={add} alt="" />
                </div>
                <div className="catOpContentWrapper">
                    {
                        categories.length === 0 && (
                            <p>No categories saved for now!</p>
                        )}
                    {
                        categories.length > 0 && (
                            <>
                                {
                                    categories.map((category) => (
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ borderBottom: "1px solid yellowgreen", marginBottom: "1rem" }}
                                            key={category.id}>
                                            <p>{category.name}</p>
                                            <div className="d-flex gap-3">
                                                <button
                                                    className="btn btn-outline-danger mb-2"
                                                    onClick={()=>
                                                        {setOpenModal(true)
                                                        setWillDelete(category.id)}
                                                        }>Delete</button>
                                                <Link
                                                    to={`/edit-category/${category.id}`}
                                                    className="btn btn-outline-warning mb-2">Edit</Link>
                                            </div>
                                        </div>
                                    ))}
                            </>
                        )}
                </div>
                {
                    openModal && (
                        <GeneralModal 
                        title="Delete?"
                        content="Deleting a category results as deleting all the expenses under the related category. Do you want to proceed?" 
                        closeBtnTxt="No"
                        closeBtnClck={()=>setOpenModal(false)} 
                        isConfirm = {true}
                        confirmBtnTxt = "Yes"
                        confirmBtnClck={()=>handleDelete(willDelete)} />

                    )
                }
            </div>
        </div>
    )

}

export default CategoryActions