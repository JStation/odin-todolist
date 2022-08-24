// utilities, event handlers, functionality

import UpdateAllProjectElements from "./render";
import { projects, Project } from "./tasks";

const createNewProject = () => {
    console.log("create new project!")
    let p = Project("New Project");
    console.log(p);
    projects.push(p);
    console.log(projects);
}

const handleClickNewProject = (evt) => {
    console.log(evt);
    createNewProject();
    UpdateAllProjectElements(projects);
}

// setup

const setupPage = () => {
    const newProjectButton = document.querySelector("#newProjectButton");
    newProjectButton.addEventListener("click", handleClickNewProject);
}

export default setupPage;