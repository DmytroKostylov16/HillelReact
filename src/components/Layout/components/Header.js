import { useContext } from "react";
import { NavLink} from "react-router";
import {ThemeContext} from "../../../contexts/ThemeContext";
import { useSelector } from 'react-redux';
import '../../../theme.css'

export default function Header() {
    const { counter } = useSelector(state => state);
    const { length } = useSelector(state => state.toDo);
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`mode-${theme} nav-menu`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/counter-redux'>Counter ({counter})</NavLink>
            <NavLink to='/to-do'>Tasks ({length})</NavLink>
        </div>
    )
}