import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/slices/tasksSlice'; // шлях до action creator

export default function AddTask() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        dispatch(addTask(newTask));

        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ margin: '10px', width: '400px', height: '30px' }}
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="New task..."
            />
            <button style={{ width: '85px', height: '35px' }} type="submit">Add</button>
        </form>
    );
}