// utilities, event handlers, functionality

import UpdateAllProjectElements from "./render";
import { projects, Project, Task } from "./tasks";

const clearAllActiveClasses = () => {
  const elements = document.querySelectorAll(".active");
  elements.forEach((el) => {
    el.classList.remove("active");
  });
};

const createNewProject = (title) => {
  let t; // eslint fix: avoid reassignment of function parameter
  if (title === undefined) {
    t = "New Project";
  } else {
    t = title;
  }
  const p = Project(t);
  projects.push(p);
};

const handleClickNewProject = () => {
  createNewProject();
  UpdateAllProjectElements(projects);
};

const deleteProject = (index) => {
  projects.splice(index, 1);
};

export const handleClickDeleteProject = (evt) => {
  // use destructuring on dataset object to grab data-index
  const { index } = evt.currentTarget.parentElement.parentElement.dataset;
  deleteProject(index);
  UpdateAllProjectElements(projects);
};

const editProjectTitle = (project, title) => {
  // eslint-disable-next-line no-param-reassign
  project.title = title;
};

export const handleClickOnProjectTitle = (evt) => {
  const h2ProjectTitle = evt.currentTarget;
  const inputProjectTitle = evt.currentTarget.nextSibling;

  clearAllActiveClasses();

  h2ProjectTitle.classList.add("active");
  inputProjectTitle.classList.add("active");
  inputProjectTitle.focus();
  inputProjectTitle.select();
};

export const handleTextInputOnProjectTitle = (evt) => {
  // TODO: fix; this only works when escape key is inputted into the field
  // esc key should be checked for at document level not on the input element
  if (evt.key === "Escape") {
    UpdateAllProjectElements(projects);
    return;
  }
  if (evt.key !== "Enter") return;

  const inputText = evt.currentTarget.value;
  const { index } = evt.currentTarget.parentElement.parentElement.dataset;
  const project = projects[index];

  if (inputText === "") {
    // eslint-disable-next-line no-alert
    alert("Name cannot be blank.");
    return;
  }

  editProjectTitle(project, inputText);

  UpdateAllProjectElements(projects); // display updated title; clear all active classes
};

const createNewTask = (projectIndex, title) => {
  let newTitle;
  if (title === undefined) {
    newTitle = "New task";
  } else {
    newTitle = title;
  }
  const task = Task(newTitle);
  projects[projectIndex].addTask(task);
};

export const handleClickNewTask = (evt) => {
  const { index } = evt.currentTarget.parentElement.parentElement.dataset;
  createNewTask(index);
  UpdateAllProjectElements(projects);
};

const deleteTask = (projectIndex, taskIndex) => {
  projects[projectIndex].deleteTask(taskIndex);
};

export const handleClickDeleteTask = (evt) => {
  // eslint-disable-next-line max-len
  const projectIndex =
    evt.currentTarget.parentElement.parentElement.parentElement.parentElement
      .dataset.index;
  const taskIndex = evt.currentTarget.parentElement.dataset.index;
  deleteTask(projectIndex, taskIndex);
  UpdateAllProjectElements(projects);
};

const editTaskTitle = (project, taskIndex, title) => {
  project.renameTask(taskIndex, title);
};

export const handleClickOnTaskTitle = (evt) => {
  const spanTaskTitle = evt.currentTarget;
  const inputTaskTitle = evt.currentTarget.nextSibling;

  clearAllActiveClasses();

  spanTaskTitle.classList.add("active");
  inputTaskTitle.classList.add("active");
  inputTaskTitle.focus();
  inputTaskTitle.select();
};

export const handleTextInputOnTaskTitle = (evt) => {
  if (evt.key === "Escape") {
    UpdateAllProjectElements(projects);
    return;
  }
  if (evt.key !== "Enter") return;

  const inputText = evt.currentTarget.value;
  const taskIndex = evt.currentTarget.parentElement.dataset.index;
  // eslint-disable-next-line max-len
  const projectIndex =
    evt.currentTarget.parentElement.parentElement.parentElement.parentElement
      .dataset.index;
  const project = projects[projectIndex];

  editTaskTitle(project, taskIndex, inputText);

  UpdateAllProjectElements(projects);
};

// setup
const setupPage = () => {
  const newProjectButton = document.querySelector("#newProjectButton");
  newProjectButton.addEventListener("click", handleClickNewProject);
};

export default setupPage;
