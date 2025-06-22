import { useState } from 'react';

export default function Task({ task }) {
    const [completed, setCompleted] = useState(task.completed || false);

    const handleCheckboxChange = () => {
        setCompleted(!completed);
    };

    return (
        <div>
            <label>
                <input style={{ margin: '10px' }}
                    type="checkbox"
                    checked={completed}
                    onChange={handleCheckboxChange}
                />
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
            </label>
        </div>
    );
}