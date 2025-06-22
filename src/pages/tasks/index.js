import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllTasks} from "../../store/thunk/tasksThunk";

import Task from "./components/Task";

export default function TasksRedux() {
    const dispatch = useDispatch();

    const { tasks, loadingTasks, error } = useSelector(state => state.tasks);
    useEffect(() => {
        dispatch(getAllTasks());
    },[dispatch]);

    if(loadingTasks) return <h2>Loading tasks...</h2>
    if(error) return <span>Error: {error}</span>
    return (
        <div>
            <h1>Tasks</h1>
            {tasks.map(task =>(
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}