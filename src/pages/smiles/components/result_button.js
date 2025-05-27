import React from "react";


class ResultButton extends React.Component {
    render() {
        return (
                <button className="res_btn" onClick={this.props.onClick}>
                    Show results!!!
                </button>
        )
    }
}

export default ResultButton;