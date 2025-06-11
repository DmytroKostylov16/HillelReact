import { useContext } from "react";

import {ThemeContext} from "../contexts/ThemeContext";
import '../theme.css'

export default function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme}`}>
            <h1>Header</h1>
        </div>
    )
}