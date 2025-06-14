import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

export  default function NotFoundPage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme}`}>
            <h1>404 Page not found!</h1>
        </div>
    )
}