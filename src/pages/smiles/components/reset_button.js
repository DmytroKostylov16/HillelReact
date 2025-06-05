import React from "react";

function ResetButton({ onClick }) {
    return (
        <button className="res_btn" onClick={onClick}>
            Reset
        </button>
    );
}

export default ResetButton;