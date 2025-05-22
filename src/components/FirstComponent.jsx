import React from "react";

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <>
                <div>
                    <span>First React Component</span>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <div>
                    <span>First React Component</span>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}
export default FirstComponent;