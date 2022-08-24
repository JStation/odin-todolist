console.log("tasks.js loaded");
// project library
const projects = [];

// task factory
const Task = (title, description, dueDate, project) => {
    let isComplete = false;
    return { title, description, dueDate, project, isComplete };
}

// Project factory
const Project = (title) => {
    const tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    }
    return { title, tasks, addTask };
}

export {Task, Project, projects};