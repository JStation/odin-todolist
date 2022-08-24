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


// setup
const setupPage = () => {
    const newProjectButton = document.querySelector("#newProjectButton");
    newProjectButton.addEventListener("click", handleClickNewProject);
}

export default setupPage;