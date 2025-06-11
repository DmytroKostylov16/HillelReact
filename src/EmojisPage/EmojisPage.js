import { useContext } from 'react';
import { SmilesContext } from './context/VotingContext';
import { ThemeContext } from '../contexts/ThemeContext';
import EmojiVoting from './components/EmojiVoting';
import ResultDisplay from './components/ResultDisplay';

export default function EmojisPage() {
    const { smiles, handleVote, calculateResult, showResults } = useContext(SmilesContext);
    const { theme } = useContext(ThemeContext);

    if (showResults) {
        return <ResultDisplay />;
    }

    return (
        <div className={`mode-${theme}`}>
            <h2>Голосування за емоджі</h2>
            {smiles.map(({ id, smile, vote }) => (
                <EmojiVoting key={id} id={id} smile={smile} vote={vote} onVote={handleVote} />
            ))}
            <button onClick={calculateResult}>Показати результат</button>
        </div>
    );
}