import { createTaskService, getAllTasksService, deleteTaskService, updateTaskService } from '../service/TaskService';
import { ADD_TASK, LOAD_TASKS, DELETE_TASK } from '../actionTypes'
const loadTasks = tasks => ({
        type: LOAD_TASKS,
        tasks
    });

const dispatchTasks = dispatch =>
    getAllTasksService()
            .then(response => {
                console.log(response, 'response');
                dispatch(loadTasks(response.tasks));
            }).catch(error => {
        throw (error);
    });

export const addTask = task => {
    return function (dispatch) {
        return createTaskService(task).then(dispatchTasks(dispatch));
    };
}

export const retrieveTasks = () => {
    return (dispatch) => {
        return getAllTasksService()
                .then(response => {
                    dispatch(loadTasks(response.tasks));
                }).catch(error => {
            throw (error);
        });
    };
}

export const deleteTask = id => {
    return function (dispatch) {
        return deleteTaskService(id).then(dispatchTasks(dispatch));
    };
}

export const updateTask = task => {
    return function (dispatch) {
        return updateTaskService(task).then(dispatchTasks(dispatch));
    };
}