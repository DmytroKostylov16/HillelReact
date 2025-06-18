import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToDo} from "../../../store/actions/toDoActions";

export default function ToDoForm() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!description.trim()) return;

        dispatch(addToDo(description));
        setDescription('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add new task</h3>
            <input
            type='text'
            placeholder="Add new task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add task</button>
        </form>
    )
}

