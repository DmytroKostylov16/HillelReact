import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from "./slices/tasksSlice";

import logger from './middlewares/logger';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;