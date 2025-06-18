import { useSelector } from 'react-redux';

import ToDoForm from "./components/ToDoForm";

export default function ToDo() {
    const { toDos, filter } = useSelector(state => state.toDo);

    const filteredTasks = toDos.filter(task => {
        if (filter === 'all') return true;
        return task.status = filter;
    })

    return(
        <div>
            <ToDoForm />
            <h2>Tasks:</h2>
            {filteredTasks.length === 0 ? (
                <div>You donʼt have any tasks</div>
            ) : (
                filteredTasks.map(task => (
                    <div key={task.id}>{task.description}</div>
                ))
            )}
        </div>
    )
};