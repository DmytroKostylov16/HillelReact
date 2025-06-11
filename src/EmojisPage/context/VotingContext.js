import { createContext, useState, useEffect, useMemo } from "react";

export const SmilesContext = createContext();

export default function SmilesProvider({ children }) {
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
    const ContextValues = {
        smiles,
        setSmiles,
        calculateResult,
        handleVote,
        resetResults,
        showResults,
        winner,
        isTie,
        topSmiles,
    };

    return (
        <SmilesContext.Provider value={ContextValues}>
            {children}
        </SmilesContext.Provider>
    )
}



