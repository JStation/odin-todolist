import UpdateAllProjectElements from "./render";
import setupPage from "./site";
import "./styles.css";
import { Task, Project, projects }from "./tasks";

console.log("main.js loaded");

// TESTING
var a = Task('Test Project');
console.log(a);

let p1 = Project("Testing Project");
p1.addTask(a);
projects.push(p1);
UpdateAllProjectElements(projects);

setupPage();