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
    const deleteTask = (index) => {
        tasks.splice(index, 1);
    }
    return { title, tasks, addTask, deleteTask };
}

export {Task, Project, projects};