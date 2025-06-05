import { useState, useEffect, useMemo } from "react";
import React from "react";

import VoteOptions from "./components/vote_options";
import ResultButton from "./components/result_button";
import ResetButton from "./components/reset_button";

export default function SmilesPage() {
    const [smiles, setSmiles] = useState([
        { id: 1, smile: '🙃', vote: 0 },
        { id: 2, smile: '🤓', vote: 0 },
        { id: 3, smile: '🤖', vote: 0 },
        { id: 4, smile: '🥸', vote: 0 }
    ]);

    useEffect(() => {
        const savedVotes = localStorage.getItem("smiles");
        if (savedVotes) {
            setSmiles(JSON.parse(savedVotes));
        }
    }, []);

    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);
    const [isTie, setIsTie] = useState(false);
    const [topSmiles, setTopSmiles] = useState([]);

    const handleVote = (id) => {
        setSmiles((prevSmiles) => {
           const updatedSmiles = prevSmiles.map((smile) => {
               if (smile.id === id) {
                   return { ...smile, vote: smile.vote + 1 };
               }
               return smile;
           });
           localStorage.setItem("smiles", JSON.stringify(updatedSmiles));
           return updatedSmiles;
        });
    }

    const memoizedTopSmiles = useMemo(() => {
        const maxVotes = Math.max(...smiles.map(smile => smile.vote));
        return smiles.filter(smile => smile.vote === maxVotes);
    }, [smiles]);

    const calculateResult = () => {
        if (memoizedTopSmiles.length > 1) {
            setWinner(null);
            setIsTie(true);
            setTopSmiles(memoizedTopSmiles);
        } else {
            setWinner(memoizedTopSmiles[0]);
            setIsTie(false);
            setTopSmiles([]);
        }

        setShowResults(true);
    };

const resetResults = () => {
    const resetVotes = smiles.map(smile => ({
        ...smile,
        vote: 0
    }));
    setSmiles(resetVotes);
    setShowResults(false);
    setWinner(null);
    setIsTie(false);
    setTopSmiles([]);
    localStorage.removeItem("smiles");
};

    return (
        <>
            <VoteOptions
                smiles={smiles}
                onVote={handleVote}
            />
            <ResultButton
                onClick={calculateResult}
            />
            <ResetButton
                onClick={resetResults}/>
            {showResults && (
                <div>
                    {isTie ? (
                        <div>
                            <p>Нічия між смайлами:</p>
                            <p style={{ fontSize: '2rem' }}>
                                {topSmiles.map(smile => smile.smile).join(' ')}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p>Переможець:</p>
                            <p style={{ fontSize: '2rem' }}>
                                {winner.smile}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
