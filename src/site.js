// utilities, event handlers, functionality

import UpdateAllProjectElements from "./render";
import { projects, Project } from "./tasks";

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


// setup
const setupPage = () => {
    const newProjectButton = document.querySelector("#newProjectButton");
    newProjectButton.addEventListener("click", handleClickNewProject);
}

export default setupPage;