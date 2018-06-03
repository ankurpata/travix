/*
 * @ServiceHelper
 * Services related to Task. All the api calls.
 */
import fetch from 'isomorphic-fetch';


/**
 * Get list of tasks
 */
export const getAllTasksService = () =>
    fetch('/tasks')
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error));


/**
 * Add new Task
 * @param {Object} task
 */
export const createTaskService = task =>
    fetch('/task/create/' + task.title + '/' + task.description, {
        method: "POST"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error));

/**
 * Delete a task
 * @param {number} id - the id of task
 */
export const deleteTaskService = id =>
    fetch('/task/delete/' + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))

/**
 * Update task by id
 * @param {Object} task - {id, title, description}
 */
export const updateTaskService = task =>
    fetch('/task/update/' + task.id + '/' + task.title + '/' + task.description, {
        method: "PUT"
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log('parsing failed', error))