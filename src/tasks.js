console.log("tasks.js loaded");

// task factory
const Task = (title, description, dueDate, project) => {
    let isComplete = false;
    return { title, description, dueDate, project, isComplete };
}

// Project factory
const Project = (title) => {
    const tasks = [];
    return { title, tasks };
}


export {Task, Project};