import { todoList } from "./todoList";
import Project from "./project";
import Task from "./task";

export default function UI() {
  //DOM cache
  const inboxButton = document.querySelector(".inbox");
  const todayButton = document.querySelector(".today");
  const thisWeekButton = document.querySelector(".this-week");
  const addNewProjectButton = document.querySelector(".add-project");
  const newProjectNameInput = document.querySelector("#project-name");
  const addNewProjectFormButton = document.querySelector(
    ".add-project-form .add"
  );
  const addNewTaskButton = document.querySelector(".add-task");
  const newTaskNameInput = document.querySelector("#task-name");
  const newTaskDateInput = document.querySelector("#task-date");
  const addNewTaskFormButton = document.querySelector(".add-task-form .add");
  const cancelNewTaskButton = document.querySelector(".add-task-form .cancel");
  const selectedProjectNameH1 = document.querySelector(".project-name");
  const addTaskForm = document.querySelector(".add-task-form");
  const tasksDiv = document.querySelector(".tasks");
  const completedTasksDiv = document.querySelector(".completed-tasks");
  const projectsDiv = document.querySelector(".projects");
  const addNewProjectForm = document.querySelector(".add-project-form");
  const projectFormButtonsDiv = document.querySelector(".project-form-buttons");

  //Active project
  let projectSelected = todoList.selectProject("Inbox");

  //Event handlers
  function projectSelectHandler(e) {
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddProjectForm();
    closeAddTaskForm();
    selectAllProjectButtons().forEach((projBut) => {
      projBut.classList.remove("active");
    });
    let selectedButton =
      e.target.tagName === "BUTTON" ? e.target : e.target.closest("button");
    selectedButton.classList.add("active");
    projectSelected = todoList.selectProject(selectedButton.textContent.trim());
    // remove project *******
    if (Array.from(e.target.classList).includes("fa-trash")) {
      todoList.removeProject(projectSelected.name);
      projectSelected = todoList.selectProject("Inbox");
      inboxButton.classList.add("active");
    }
    // remove project *******
    if (
      projectSelected.name === "Today" ||
      projectSelected.name === "This week"
    ) {
      addNewTaskButton.classList.add("composite");
      addTaskForm.classList.add("composite");
    } else {
      addNewTaskButton.classList.remove("composite");
      addTaskForm.classList.remove("composite");
    }
    selectedProjectNameH1.textContent = projectSelected.name;
    populateTasks();
    populateProjects(projectSelected.name);
  }
  function taskCompleteToggleHandler(e) {
    closeAddTaskForm();
    projectSelected.completeTaskToggle(e.target.id);
    populateTasks(projectSelected);
  }

  function taskDetailsUpdateHandler(e) {
    allElementsFocusReset();
    closeAddTaskForm();
    let localParent = e.target.closest("button");
    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let previousTaskDate = projectSelected.selectTask(previousTaskName).date;
    let paragraphs = localParent.querySelectorAll("p");
    paragraphs.forEach((para) => para.classList.toggle("active"));
    let inputs = localParent.querySelectorAll("input");
    inputs.forEach((input) => {
      input.classList.toggle("active");
      if (input.type === "text") input.value = previousTaskName;
      else input.value = previousTaskDate;
    });
    let editIcon = localParent.querySelector(".fa-square-pen");
    editIcon.classList.add("active");
    editIcon.addEventListener("click", saveTaskEditsHandler);
  }

  function saveTaskEditsHandler(e) {
    let localParent = e.target.closest("button");
    let taskTextInput = localParent.querySelector(".input-task-name");
    let taskDateInput = localParent.querySelector(".input-due-date");
    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let taskToModify = projectSelected.selectTask(previousTaskName);
    taskToModify.setName(taskTextInput.value);
    taskToModify.setDate(taskDateInput.value);
    populateTasks();
  }

  function deleteTaskHandler(e) {
    closeAddTaskForm();
    let localParent = e.target.closest("button");

    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let taskToDelete = projectSelected.selectTask(previousTaskName);
    projectSelected.removeTask(taskToDelete);
    populateTasks();
  }

  function addProjectHandler(e) {
    todoList.addProject(new Project(newProjectNameInput.value));
    populateProjects();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  function addTaskHandler(e) {
    projectSelected.addTask(
      new Task(newTaskNameInput.value, newTaskDateInput.value)
    );
    populateTasks(projectSelected);
    closeAddTaskForm();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  function toggleAddProjectFormHandler(e) {
    addNewProjectForm.classList.toggle("active");
    addNewProjectButton.classList.toggle("active");
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddTaskForm();
  }

  function toggleAddTaskFormHandler(e) {
    addTaskForm.classList.toggle("active");
    addNewTaskButton.classList.toggle("active");
    populateTasks();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddProjectForm();
  }

  //Event binding
  addNewTaskFormButton.addEventListener("click", addTaskHandler);
  addNewProjectFormButton.addEventListener("click", addProjectHandler);
  addNewProjectButton.addEventListener("click", toggleAddProjectFormHandler);
  projectFormButtonsDiv.addEventListener("click", toggleAddProjectFormHandler);
  inboxButton.addEventListener("click", projectSelectHandler);
  todayButton.addEventListener("click", projectSelectHandler);
  thisWeekButton.addEventListener("click", projectSelectHandler);
  addNewTaskButton.addEventListener("click", toggleAddTaskFormHandler);
  cancelNewTaskButton.addEventListener("click", toggleAddTaskFormHandler);

  //   Worker functions
  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add("button-task");

      let taskButtonLeftDiv = document.createElement("div");
      taskButtonLeftDiv.classList.add("left-task-panel");

      let completeTaskIcon = document.createElement("i");
      completeTaskIcon.setAttribute("id", t.name);
      completeTaskIcon.classList.add("fa-regular");
      completeTaskIcon.classList.add("fa-circle");
      let taskContentPara = document.createElement("p");
      taskContentPara.classList.add("task-content");
      taskContentPara.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -------------------- (${t.projectName})`
          : t.name;
      let taskContentModificationInput = document.createElement("input");
      taskContentModificationInput.type = "text";
      taskContentModificationInput.classList.add("input-task-name");
      taskButtonLeftDiv.append(
        completeTaskIcon,
        taskContentPara,
        taskContentModificationInput
      );

      let taskButtonRightDiv = document.createElement("div");
      taskButtonRightDiv.classList.add("right-task-panel");
      let dueDatePara = document.createElement("p");
      dueDatePara.classList.add("due-date");
      dueDatePara.textContent = t.date;
      let dateInput = document.createElement("input");
      dateInput.classList.add("input-due-date");
      dateInput.type = "date";
      let trashTaskIcon = document.createElement("i");
      trashTaskIcon.classList.add("fa-solid");
      trashTaskIcon.classList.add("fa-trash");

      let updateTaskIcon = document.createElement("i");
      updateTaskIcon.classList.add("fa-solid");
      updateTaskIcon.classList.add("fa-square-pen");
      taskButtonRightDiv.append(
        dueDatePara,
        dateInput,
        updateTaskIcon,
        trashTaskIcon
      );

      taskButton.append(taskButtonLeftDiv, taskButtonRightDiv);
      tasksDiv.appendChild(taskButton);

      completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
      taskContentPara.addEventListener("click", taskDetailsUpdateHandler);
      dueDatePara.addEventListener("click", taskDetailsUpdateHandler);
      trashTaskIcon.addEventListener("click", deleteTaskHandler);
    });
    projectSelected.completedTasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add("button-task");

      let taskButtonLeftDiv = document.createElement("div");
      taskButtonLeftDiv.classList.add("left-task-panel");

      let completeTaskIcon = document.createElement("i");
      completeTaskIcon.setAttribute("id", t.name);
      completeTaskIcon.classList.add("fa-solid");
      completeTaskIcon.classList.add("fa-circle-check");
      let taskContentPara = document.createElement("p");
      taskContentPara.classList.add("task-content");
      taskContentPara.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -------------------- (${t.projectName})`
          : t.name;
      let taskContentModificationInput = document.createElement("input");
      taskContentModificationInput.type = "text";
      taskContentModificationInput.classList.add("input-task-name");
      taskButtonLeftDiv.append(
        completeTaskIcon,
        taskContentPara,
        taskContentModificationInput
      );

      let taskButtonRightDiv = document.createElement("div");
      taskButtonRightDiv.classList.add("right-task-panel");
      let dueDatePara = document.createElement("p");
      dueDatePara.classList.add("due-date");
      dueDatePara.textContent = t.date;
      let dateInput = document.createElement("input");
      dateInput.classList.add("input-due-date");
      dateInput.type = "date";
      let trashTaskIcon = document.createElement("i");
      trashTaskIcon.classList.add("fa-solid");
      trashTaskIcon.classList.add("fa-trash");
      let updateTaskIcon = document.createElement("i");
      updateTaskIcon.classList.add("fa-solid");
      updateTaskIcon.classList.add("fa-square-pen");
      taskButtonRightDiv.append(
        dueDatePara,
        dateInput,
        updateTaskIcon,
        trashTaskIcon
      );

      taskButton.append(taskButtonLeftDiv, taskButtonRightDiv);
      completedTasksDiv.appendChild(taskButton);

      completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
      taskContentPara.addEventListener("click", taskDetailsUpdateHandler);
      dueDatePara.addEventListener("click", taskDetailsUpdateHandler);
      trashTaskIcon.addEventListener("click", deleteTaskHandler);
    });
  }

  function populateProjects(activeProjectName) {
    projectsDiv.textContent = "";
    todoList.projects.forEach((p) => {
      if (p.name !== "Inbox" && !p.composite) {
        let projectButton = document.createElement("button");
        projectButton.classList.add("button-project");
        let projectButtonLeftDiv = document.createElement("div");
        projectButtonLeftDiv.classList.add("left-project-panel");
        let projectButtonRightDiv = document.createElement("div");
        projectButtonRightDiv.classList.add("right-project-panel");
        let projectIcon = document.createElement("i");
        projectIcon.classList.add("fa-solid");
        projectIcon.classList.add("fa-tasks");
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        let projectNameSpan = document.createElement("span");
        projectNameSpan.textContent = p.name;
        projectButton.addEventListener("click", projectSelectHandler);
        projectButtonLeftDiv.append(projectIcon, projectNameSpan);
        projectButtonRightDiv.append(trashIcon);
        projectButton.append(projectButtonLeftDiv, projectButtonRightDiv);
        projectsDiv.appendChild(projectButton);
        if (p.name === activeProjectName) projectButton.classList.add("active");
      }
    });
  }

  function closeAddProjectForm() {
    addNewProjectForm.classList.remove("active");
    addNewProjectButton.classList.remove("active");
  }
  function closeAddTaskForm() {
    addTaskForm.classList.remove("active");
    addNewTaskButton.classList.remove("active");
  }

  function selectAllProjectButtons() {
    return document.querySelectorAll(".button-project");
  }

  function allElementsFocusReset() {
    document.querySelectorAll("*").forEach((e) => e.classList.remove("active"));
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
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
