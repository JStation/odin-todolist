// utilities, event handlers, functionality

import UpdateAllProjectElements from "./render";
import { projects, Project, Task } from "./tasks";

const createNewProject = (title) => {
    if (title === undefined) {
        title = "New Project";
    }
    let p = Project(title);
    projects.push(p);
}

const handleClickNewProject = (evt) => {
    createNewProject();
    UpdateAllProjectElements(projects);
}

const deleteProject = (index) => {
    projects.splice(index, 1);
}

export const handleClickDeleteProject = (evt) => {
    const index = evt.currentTarget.parentElement.parentElement.dataset.index;
    deleteProject(index);
    UpdateAllProjectElements(projects);
}

const editProjectTitle = (project, title) => {
    project.title = title;
}

export const handleClickOnProjectTitle = (evt) => {
    const h2ProjectTitle = evt.currentTarget;
    const inputProjectTitle = evt.currentTarget.nextSibling;
    
    clearAllActiveClasses();

    h2ProjectTitle.classList.add("active");
    inputProjectTitle.classList.add("active");
    inputProjectTitle.focus();
    inputProjectTitle.select();

}

export const handleTextInputOnProjectTitle = (evt) => {
    // TODO: fix; this only works when escape key is inputted into the field
    // esc key should be checked for at document level not on the input element
    if (evt.key == 'Escape') {
        UpdateAllProjectElements(projects);
        return;
    }
    if (evt.key !== 'Enter') return;

    let inputText = evt.currentTarget.value;
    const index = evt.currentTarget.parentElement.parentElement.dataset.index;
    const project = projects[index];
    
    if (inputText === "") {
        alert("Name cannot be blank.");
        return;
    }

    editProjectTitle(project, inputText);

    UpdateAllProjectElements(projects); // display updated title; clear all active classes
}

const clearAllActiveClasses = () => {
    const elements = document.querySelectorAll('.active');
    elements.forEach((el) => {
        el.classList.remove('active');
    });
}

const createNewTask = (projectIndex, title) => {
    if (title === undefined) {
        title = "New task";
    }
    let t = Task(title);
    projects[projectIndex].addTask(t);
}

export const handleClickNewTask = (evt) => {
    const index = evt.currentTarget.parentElement.parentElement.dataset.index;
    createNewTask(index);
    UpdateAllProjectElements(projects);
}

const deleteTask = (projectIndex, taskIndex) => {
    projects[projectIndex].deleteTask(taskIndex);
}

export const handleClickDeleteTask = (evt) => {
    const projectIndex = evt.currentTarget.parentElement.parentElement.parentElement.parentElement.dataset.index;
    const taskIndex = evt.currentTarget.parentElement.dataset.index;
    console.log({projectIndex, taskIndex});
    deleteTask(projectIndex, taskIndex);
    UpdateAllProjectElements(projects);
}


// setup
const setupPage = () => {
    const newProjectButton = document.querySelector("#newProjectButton");
    newProjectButton.addEventListener("click", handleClickNewProject);
}

export default setupPage;