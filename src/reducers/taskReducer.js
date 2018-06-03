import { ADD_TASK, LOAD_TASKS, DELETE_TASK } from '../actionTypes';
var initialState = [];

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];
        case LOAD_TASKS:
            return action.tasks;
        case DELETE_TASK:
            return [...state, action.taskId];
        default:
            return state;
}
}