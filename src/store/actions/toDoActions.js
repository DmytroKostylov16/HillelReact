import {
    ADD_TO_DO,
} from './actionTypes';

export const addToDo = (description) => {
    return {
        type : ADD_TO_DO,
        payload: {
            id: `${description.length}-${Math.random()}`,
            description,
            length: +1
        }
    }
}
