import React from "react";

class VoteOptions extends React.Component {

    render() {
        return (
            <div>
                {this.props.smiles.map((smile) => (
                    <div
                        key={smile.id}
                        onClick={() => this.props.onVote(smile.id)}
                        style={{
                            fontSize: '2rem',
                            cursor: 'pointer',
                            margin: '10px',
                            userSelect: 'none'
                        }}
                    >
                        {smile.smile} — {smile.vote}
                    </div>
                ))}
            </div>
        );
    }
}

export default VoteOptions;
