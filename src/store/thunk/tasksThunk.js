import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTasks = createAsyncThunk(
    "tasks/getAllTasks",
    async (_, thunkAPI) => {
        try {

            const res = await fetch(`${BASE_URL}/?_limit=10`);

            if (!res.ok) {
                throw new Error(`Failed to fetch tasks.`);
            }
            return res.json();
        } catch (err) {
            return isRejectedWithValue(err.message);
        }
    }
);

export const getTaskById = createAsyncThunk(
    "tasks/getTaskById",
    async (id, thunkAPI) => {
        try {

            const res = await fetch(`${BASE_URL}/${id}`);

            if (!res.ok) {
                throw new Error(`Post not found.`);
            }
            return res.json();
        } catch (err) {
            return isRejectedWithValue(err.message);
        }
    }
);
