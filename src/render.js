// render objects into DOM elements

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
*/
const getProjectElement = (project) => {
    const divProject = document.createElement('div');
    divProject.classList.add('project');

    const divHead = document.createElement('div');
    divHead.classList.add('project-head');
    const h2 = document.createElement('h2');
    h2.classList.add('project-title');
    h2.innerText = project.title;
    divHead.appendChild(h2);
    divProject.appendChild(divHead);

    const divBody = document.createElement('div');
    divBody.classList.add('project-body');
    const ul = document.createElement('ul');
    
    // TODO: create getTaskListElement(task)
    for (let i = 0; i < project.tasks.length; i++) {
        const li = document.createElement('li');
        li.innerText = `Task {i}`;
        ul.appendChild(li);
    }

    divBody.appendChild(ul);
    divProject.appendChild(divBody);

    return divProject;

}