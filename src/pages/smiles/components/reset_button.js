import React from "react";

class ResetButton extends React.Component {
    render() {
        return (
            <button className="res_btn" onClick={this.props.onClick}>
                Reset
            </button>
        );
    }
}

export default ResetButton;