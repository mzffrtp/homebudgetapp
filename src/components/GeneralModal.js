import React from "react";

import "../assets/styles/generelmodale.css"

const GeneralModal = ({
    title = "",
    content = "",
    closeBtnTxt = "",
    closeBtnClck = () => { },
    confirmBtnTxt = "",
    confirmBtnClck = () => { },
    isConfirm = false,

}) => {
    return (
        <div className="modalContainer">
            <div className="modalContentContainer">
                <h1 className="modalTitle">{title}</h1>
                <p className="modalText">{content}</p>
                <div className="modalsBtnWrapper">
                    <button
                    className="cancelBtn"
                        onClick={closeBtnClck}>
                        {closeBtnTxt}
                    </button>
                    {
                        isConfirm === true && (
                            <button
                            className="confirmBtn"
                                onClick={confirmBtnClck}>
                                {confirmBtnTxt}
                            </button>
                        )}
                </div>
            </div>
        </div>
    )
}

export default GeneralModal;