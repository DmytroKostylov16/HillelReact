import React from "react";

function VoteOptions({ smiles, onVote }) {
    return (
        <div>
            {smiles.map((smile) => (
                <div
                    key={smile.id}
                    onClick={() => onVote(smile.id)}
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

export default VoteOptions;