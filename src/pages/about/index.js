import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

export  default function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme}`}>
            <h1>My project with router!</h1>
        </div>
    )
}