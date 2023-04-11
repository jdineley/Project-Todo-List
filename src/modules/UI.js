import { todoList } from "./todoList"
import Project from "./project"
import Task from  "./task"




export default function UI () {

const projectsUl = document.querySelector('#projects')
const projectH2 = document.querySelector('#project')
const tasksUl = document.querySelector('#tasks')
const completedTasksUl = document.querySelector('#completed-tasks')
const addProjectButton = document.querySelector('#add-project button')
const addTaskForm = document.querySelector('#add-task')
const addTaskButton = document.querySelector('#add-task button')
const newProjectNameInput = document.querySelector('#add-project input')
const newTaskNameInput = document.querySelector('#add-task #name');
const newTaskDateInput = document.querySelector('#add-task #date')


let projectSelected = todoList.selectProject('Inbox');

function projectSelectHandler(e) {
    console.log(e.target.textContent);
    projectSelected = todoList.selectProject(e.target.textContent);
    if(projectSelected.name === 'Today'  || projectSelected.name === 'This week') addTaskForm.style.display = 'none'
    else  addTaskForm.style.display = 'block'
    console.log(projectSelected);
    projectH2.textContent = projectSelected.name;
    populateTasks();
    // populateCompletedTasks(projectSelected)
    
}       

function taskSelectHandler(e) {
    console.log(e.target.id, projectSelected);
    projectSelected.completeTaskToggle(e.target.id);
    //Because 'Today' & 'This week' are composites they need to be assembled independently hence we have to reselect here:
    // if(projectSelected.name === 'Today' || projectSelected.name === 'This week') {
    //     projectSelected = todoList.selectProject(projectSelected.name)
    // }
    populateTasks(projectSelected);
    // populateCompletedTasks(projectSelected)
}   

function addProjectHandler(e) {
    e.preventDefault();
    console.log('here', newProjectNameInput.value, 'there')
    todoList.addProject(new Project(newProjectNameInput.value))
    populateProjects();
}

function addTaskHandler(e) {
    e.preventDefault();
    projectSelected.addTask(new Task(newTaskNameInput.value, newTaskDateInput.value));
    populateTasks(projectSelected);
    // populateCompletedTasks(projectSelected);
}

function populateTasks() {
    //Because 'Today' & 'This week' are composites they need to be assembled independently hence we have to reselect here:
    // if(project.name === 'Today' || project.name === 'This week') {
    //     project = todoList.selectProject(project.name)
    // }
    tasksUl.textContent = ''
    completedTasksUl.textContent = '';
    projectSelected.tasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = projectSelected.name === 'Today' || projectSelected.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
        taskLi.setAttribute('id', t.name)
        taskLi.addEventListener('click', taskSelectHandler)
        tasksUl.appendChild(taskLi);
    })
    projectSelected.completedTasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = projectSelected.name === 'Today' || projectSelected.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
        taskLi.setAttribute('id', t.name)
        taskLi.addEventListener('click', taskSelectHandler)
        completedTasksUl.appendChild(taskLi);
    })
}

// function populateCompletedTasks(project) {
//     completedTasksUl.textContent = '';
//     project.completedTasks.forEach(t => {
//         let taskLi = document.createElement('li');
//         taskLi.textContent = project.name === 'Today' || project.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
//         taskLi.setAttribute('id', t.name)
//         taskLi.addEventListener('click', taskSelectHandler)
//         completedTasksUl.appendChild(taskLi);
//     })
// }

function populateProjects() {
    projectsUl.textContent = ''
    todoList.projects.forEach(p => {
        let projLi = document.createElement('li');
        projLi.textContent = p.name;
        projLi.addEventListener('click', projectSelectHandler)
        projectsUl.appendChild(projLi);
    })
}



addTaskButton.addEventListener('click', addTaskHandler)
addProjectButton.addEventListener('click', addProjectHandler)
projectH2.textContent = projectSelected.name;
populateProjects()
populateTasks(projectSelected);
// populateCompletedTasks(projectSelected);



}

window.todo = {
    todoList,
    Project,
    Task
  }
