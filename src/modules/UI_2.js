import { todoList } from "./todoList";
import Project from "./project";
import Task from "./task";

export default function UI() {
    // console.log(todoList, Project, Task)
    //DOM cache
    const inboxButton = document.querySelector('.inbox');
    const todayButton = document.querySelector('.today');
    const thisWeekButton = document.querySelector('.this-week');
    const addNewProjectButton = document.querySelector('.add-project')
    const newProjectNameInput = document.querySelector('#project-name');
    const addNewProjectFormButton = document.querySelector('.add-project-form .add')
    const cancelNewProjectButton = document.querySelector('.add-project-form .cancel')
    const addNewTaskButton = document.querySelector('.add-task');
    const newTaskNameInput = document.querySelector('#task-name');
    const newTaskDateInput = document.querySelector('#task-date');
    const addNewTaskFormButton = document.querySelector('.add-task-form .add');
    const cancelNewTaskButton = document.querySelector('.add-task-form .cencel');
    const selectedProjectNameH1 = document.querySelector('.project-name');
    const addTaskForm = document.querySelector('.add-task-form');
    const tasksDiv = document.querySelector('.tasks')
    const completedTasksDiv = document.querySelector('.completed-tasks');
    const projectsDiv = document.querySelector('.projects');
    const addNewProjectForm = document.querySelector('.add-project-form');


    //Active project
    let projectSelected = todoList.selectProject("Inbox");

    //Event handlers
    function projectSelectHandler(e) {
        projectSelected = todoList.selectProject(e.target.textContent);
        if (
          projectSelected.name === "Today" ||
          projectSelected.name === "This week"
        )
          addTaskForm.style.display = "none";
        else addTaskForm.style.display = "block";
        console.log(projectSelected);
        selectedProjectNameH1.textContent = projectSelected.name;
        populateTasks();
    }
    function taskSelectHandler(e) {
        // console.log(e.target.id, projectSelected);
        projectSelected.completeTaskToggle(e.target.id);
        populateTasks(projectSelected);
      }
    
      function addProjectHandler(e) {
        e.preventDefault();
        console.log("here", newProjectNameInput.value, "there");
        todoList.addProject(new Project(newProjectNameInput.value));
        populateProjects();
      }
    
      function addTaskHandler(e) {
        e.preventDefault();
        projectSelected.addTask(
          new Task(newTaskNameInput.value, newTaskDateInput.value)
        );
        populateTasks(projectSelected);
      }

      function toggleAddProjectFormHandler(e) {
        addNewProjectForm.classList.toggle('active');
        addNewProjectButton.classList.toggle('active')
      }

      //Event binding
      addNewTaskFormButton.addEventListener("click", addTaskHandler);
      addNewProjectFormButton.addEventListener("click", addProjectHandler);
      addNewProjectButton.addEventListener('click', toggleAddProjectFormHandler);
      cancelNewProjectButton.addEventListener('click', toggleAddProjectFormHandler);
    //   Worker functions

  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -- ${t.date} -- ${t.project.name}`
          : `${t.name} -- ${t.date}`;
          taskButton.setAttribute("id", t.name);
          taskButton.addEventListener("click", taskSelectHandler);
          tasksDiv.appendChild(taskButton);
    });
    projectSelected.completedTasks.forEach((t) => {
        let taskButton = document.createElement("button");
        taskButton.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -- ${t.date} -- ${t.project.name}`
          : `${t.name} -- ${t.date}`;
          taskButton.setAttribute("id", t.name);
          taskButton.addEventListener("click", taskSelectHandler);
          completedTasksDiv.appendChild(taskButton);
    });
  }

  function populateProjects() {
    projectsDiv.textContent = "";
    todoList.projects.forEach((p) => {
      let projectButton = document.createElement("button");
      projectButton.classList.add('button-project');
      let projectButtonLeftDiv = document.createElement('div');
      projectButtonLeftDiv.classList.add('left-project-panel');
      let projectButtonRightDiv = document.createElement('div');
      projectButtonRightDiv.classList.add('right-project-panel');
      let projectIcon = document.createElement('i');
      projectIcon.classList.add('fa-solid')
      projectIcon.classList.add('fa-tasks')
      let trashIcon = document.createElement('li')
      trashIcon.classList.add('fa-solid');
      trashIcon.classList.add('fa-trash');
        let projectNameSpan = document.createElement('span');
        projectNameSpan.textContent = p.name;
    //   projectButton.textContent = p.name;
      projectButton.addEventListener("click", projectSelectHandler);
      projectButtonLeftDiv.append(projectIcon, projectNameSpan)
      projectButtonRightDiv.append(trashIcon)
        projectButton.append(projectButtonLeftDiv, projectButtonRightDiv)
      projectsDiv.appendChild(projectButton);
    });
  }

 

    //   initializers
    selectedProjectNameH1.textContent = projectSelected.name;
    populateProjects();
    populateTasks(projectSelected);
}



window.todo = {
    todoList,
    Project,
    Task,
  };