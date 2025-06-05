import React from "react";

function ResultButton({ onClick }) {
    return (
        <button className="res_btn" onClick={onClick}>
            Show results!!!
        </button>
    );
}

export default ResultButton;