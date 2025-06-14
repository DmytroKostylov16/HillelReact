import { useContext } from "react";
import { NavLink} from "react-router";
import {ThemeContext} from "../../../contexts/ThemeContext";
import '../../../theme.css'

export default function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme} nav-menu`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
}