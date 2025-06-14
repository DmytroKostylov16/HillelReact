import { useContext } from "react";

import {ThemeContext} from "../../../contexts/ThemeContext";
import '../../../theme.css'

export default function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme}`}>
            <h1>Footer</h1>
            <button onClick={toggleTheme}>Змінити тему</button>
        </div>
    )
}