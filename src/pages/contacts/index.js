import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

export  default function Contacts() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme}`}>
            <h1>Contact Us</h1>
            <div>Tel: +380975678945</div>
        </div>
    )
}