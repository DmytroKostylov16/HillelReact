import { createSlice } from '@reduxjs/toolkit'

import {
    getAllTasks,
    getTaskById
} from '../thunk/tasksThunk'

const initialState = {
    tasks: [],
    task: null,
    completed: false,
    loadingTasks: false,
    loadingTask: false,
    error: '',
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasks.pending, (state) => {
                state.loadingTasks = true;
                state.error = '';
            })
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.loadingTasks = false
                state.tasks = action.payload;
            })
            .addCase(getAllTasks.rejected, (state, action) => {
                state.loadingTasks = false;
                state.error = action.payload;
            })
            .addCase(getTaskById.pending, (state) => {
                state.loadingTask = true;
                state.error = '';
            })
            .addCase(getTaskById.fulfilled, (state, action) => {
                state.loadingTask = false
                state.task = action.payload;
            })
            .addCase(getTaskById.rejected, (state, action) => {
                state.loadingTask = false;
                state.error = action.payload;
            })
    }
})


export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;