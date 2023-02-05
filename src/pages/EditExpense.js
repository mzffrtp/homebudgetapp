import React, { useEffect, useState } from "react";

import Header from "../components/header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralModal from "../components/GeneralModal";

const EditExpense = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [expense, setExpense] = useState(null)
    const [showErrormodal, setShowErrormodal] = useState(false)

    useEffect(() => {
        axios
            .get(`http://localhost:3004/expense/${params.expenseId}`)
            .then((res) => {
                setExpense(res.data)
            })
            .catch((err) => {
                setShowErrormodal(true)
            })

    }, [])

    if (expense === null && showErrormodal === false) return null

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
            <Header whichPage={"editExpense"} navigateTo="/" />
            <h1> Edit expense</h1>

        </div>
    )
}

export default EditExpense