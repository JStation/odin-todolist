// render objects into DOM elements

import { handleClickDeleteProject, handleClickOnProjectTitle, handleTextInputOnProjectTitle, handleClickNewTask, handleClickDeleteTask } from "./site";

/* Project list HTML template:
<div class="project">
    <div class="project-head">
        <h2 class="project-title">General</h2>
    </div>
    <div class="project-body">
        <ul>
            <li class="task">First Task</li>
            <li class="task">Second Task</li>
            <li class="task">Third Task</li>
        </ul>
    </div>
</div>

Button for adding task:
<button class="button newTaskButton">+</button>
*/
const getProjectElement = (project) => {
    const divProject = document.createElement('div');
    divProject.classList.add('project');

    const divHead = document.createElement('div');
    divHead.classList.add('project-head');
    const h2 = document.createElement('h2');
    h2.classList.add('project-title');
    h2.innerText = project.title;
    h2.addEventListener("click", handleClickOnProjectTitle);
    divHead.appendChild(h2);
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("value", project.title);
    inputTitle.addEventListener("keyup", handleTextInputOnProjectTitle);
    divHead.appendChild(inputTitle);
    const span = document.createElement('span');
    span.classList.add("project-close");
    span.innerHTML = "&times;";
    span.addEventListener("click", handleClickDeleteProject);
    divHead.appendChild(span);
    divProject.appendChild(divHead);

    const divBody = document.createElement('div');
    divBody.classList.add('project-body');
    const ul = document.createElement('ul');
    
    for (let i = 0; i < project.tasks.length; i++) {
        const li = getTaskListElement(project.tasks[i]);
        li.dataset.index = i;
        ul.appendChild(li);
    }

    divBody.appendChild(ul);

    const addTaskButton = getAddTaskButton();
    addTaskButton.addEventListener("click", handleClickNewTask);
    divBody.appendChild(addTaskButton);

    divProject.appendChild(divBody);

    return divProject;

}

const getAddTaskButton = () => {
    const btn = document.createElement('button');
    btn.classList.add('button', 'newTaskButton');
    btn.innerText = "+";
    return btn;
}

const getTaskListElement = (task) => {
    const li = document.createElement('li');
    li.classList.add("task-row");

    const btn = document.createElement('button');
    btn.innerText = "☐";
    btn.addEventListener("click", handleClickDeleteTask);
    li.appendChild(btn);

    const span = document.createElement('span');
    span.innerText = task.title;
    li.appendChild(span);

    return li;
}

const UpdateAllProjectElements = (projects) => {
    const parentDiv = document.querySelector(".project-container");
    const projectElements = [];
    for (let i = 0; i<projects.length; i++) {
        const pElement = getProjectElement(projects[i]);
        pElement.dataset.index = i;
        projectElements.push(pElement);
    }
    parentDiv.replaceChildren(...projectElements);
}

export default UpdateAllProjectElements;