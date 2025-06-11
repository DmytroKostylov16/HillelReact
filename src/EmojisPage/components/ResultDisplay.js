import { useContext } from 'react';
import { SmilesContext } from '../context/VotingContext';
import { ThemeContext} from "../../contexts/ThemeContext";

export default function ResultDisplay() {
    const { winner, isTie, topSmiles, resetResults } = useContext(SmilesContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`mode-${theme}`}>
            <h2>Результати</h2>
            {isTie ? (
                <div>
                    <p>Нічия між емоджі:</p>
                    {topSmiles.map((smile) => (
                        <span key={smile.id} style={{ fontSize: '2rem' }}>{smile.smile}</span>
                    ))}
                </div>
            ) : (
                <div>
                    <p>Переможець:</p>
                    <span style={{ fontSize: '3rem' }}>{winner.smile}</span>
                </div>
            )}
            <button onClick={resetResults}>Голосувати знову</button>
        </div>
    );
}