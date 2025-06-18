import {
    ADD_TO_DO,
} from '../actions/actionTypes';

const initialState = {
    toDos: [],
    length: 0,
    filter: 'all'
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                toDos: [...state.toDos, action.payload],
                length: state.length + 1
            };
        default:
            return state;
    }
}
export default toDoReducer;