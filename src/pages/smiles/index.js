import React from "react";

import VoteOptions from "./components/vote_options";
import ResultButton from "./components/result_button";
import ResetButton from "./components/reset_button";

class SmilesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {id: 1, smile: '🙃', vote: 0},
                {id: 2, smile: '🤓', vote: 0},
                {id: 3, smile: '🤖', vote: 0},
                {id: 4, smile: '🥸', vote: 0}
            ],
            showResults: false,
            winner: null
        }
    }

    componentDidMount() {
        const savedVotes = localStorage.getItem("votes");
        if (savedVotes) {
            this.setState({ smiles: JSON.parse(savedVotes) });
        }
    }
    handleVote = (id) => {
        const updatedSmiles = [...this.state.smiles];
        const index = updatedSmiles.findIndex(smile => smile.id === id);
        if (index !== -1) {
            updatedSmiles[index].vote += 1;
            this.setState({ smiles: updatedSmiles }, () => {
                localStorage.setItem("votes", JSON.stringify(updatedSmiles));
            });
        }
    }

    showResults = () => {
        const maxVotes = Math.max(...this.state.smiles.map(smile => smile.vote));
        const topSmiles = this.state.smiles.filter(smile => smile.vote === maxVotes);

        if (topSmiles.length > 1) {
            this.setState({
                winner: null,
                topSmiles: topSmiles,
                showResults: true,
                isTie: true
            });
        } else {
            this.setState({
                winner: topSmiles[0],
                showResults: true,
                isTie: false
            });
        }
    }

    resetResults = () => {
        const resetVotes = this.state.smiles.map(smile => ({
            ...smile,
            vote: 0
        }));
        this.setState({ smiles: resetVotes, showResults: false, winner: null }, () => {
            localStorage.removeItem("votes", JSON.stringify(resetVotes));
            }
        );
    }

    render() {
        return (
            <div>
                <VoteOptions
                    smiles={this.state.smiles}
                    onVote={this.handleVote}
                />
                <ResultButton
                    onClick={this.showResults}
                />
                <ResetButton
                    onClick={this.resetResults}/>
                {this.state.showResults && (
                    <div>
                        {this.state.isTie ? (
                            <div>
                                <p>Нічия між смайлами:</p>
                                <p style={{ fontSize: '2rem' }}>
                                    {this.state.topSmiles.map(smile => smile.smile).join(' ')}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p>Переможець:</p>
                                <p style={{ fontSize: '2rem' }}>
                                    {this.state.winner.smile}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
export default SmilesPage;