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
    const cancelNewTaskButton = document.querySelector('.add-task-form .cancel');
    const selectedProjectNameH1 = document.querySelector('.project-name');
    const addTaskForm = document.querySelector('.add-task-form');
    const tasksDiv = document.querySelector('.tasks')
    const completedTasksDiv = document.querySelector('.completed-tasks');
    const projectsDiv = document.querySelector('.projects');
    const addNewProjectForm = document.querySelector('.add-project-form');
    const projectFormButtonsDiv = document.querySelector('.project-form-buttons');
    const trashIcon = document.querySelector('fa-trash');
    
    

    //Active project
    let projectSelected = todoList.selectProject("Inbox");

    //Event handlers
    function projectSelectHandler(e) {
        selectAllProjectButtons().forEach(projBut => {
            projBut.classList.remove('active')
        })
        let selectedButton = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button')
        console.log(selectedButton);
        selectedButton.classList.add('active')
        projectSelected = todoList.selectProject(selectedButton.textContent.trim());
        // remove project
        if(Array.from(e.target.classList).includes('fa-trash')) {
            todoList.removeProject(projectSelected.name)
            projectSelected = todoList.selectProject('Inbox');
            inboxButton.classList.add('active')
        }
        console.log(projectSelected.name);
        if (
          projectSelected.name === "Today" ||
          projectSelected.name === "This week"
        ) {
            // addTaskForm.style.display = "none";
            // addNewTaskButton.style.display = "none";
            addNewTaskButton.classList.add('composite')
            addTaskForm.classList.add('composite')
            addNewTaskButton.classList.remove('active')
            addTaskForm.classList.remove('active')
        }
        else {
            addNewTaskButton.classList.remove('composite')
            addTaskForm.classList.remove('composite')
        }
        console.log(projectSelected);
        selectedProjectNameH1.textContent = projectSelected.name;
        populateTasks();
        populateProjects(projectSelected.name);
    }
    function taskCompleteToggleHandler(e) {
        // console.log(e.target.id, projectSelected);
        projectSelected.completeTaskToggle(e.target.id);
        populateTasks(projectSelected);
      }

      function taskDetailsUpdateHandler(e) {
        console.log('handling')
        let localParent = e.target.closest('button')
        let previousTaskName = localParent.querySelector('.fa-circle').id
        let previousTaskDate = projectSelected.selectTask(previousTaskName).date
        let paragraphs = localParent.querySelectorAll('p')
        paragraphs.forEach(para => para.classList.toggle('active'))
        // para.classList.toggle('active')
        let inputs = localParent.querySelectorAll('input')
        inputs.forEach(input => {
            input.classList.toggle('active')
            if(input.type === 'text') input.value = previousTaskName
            else input.value = previousTaskDate
        })
        // input.classList.toggle('active')
        let editIcon = localParent.querySelector('.fa-square-pen')
        editIcon.classList.add('active')

        editIcon.addEventListener('click', saveTaskEditsHandler)
      }


      function saveTaskEditsHandler(e) {
        let localParent = e.target.closest('button');
        let taskTextInput = localParent.querySelector('.input-task-name')
        let taskDateInput = localParent.querySelector('.input-due-date')
        let previousTaskName = localParent.querySelector('.fa-circle').id

        let taskToModify = projectSelected.selectTask(previousTaskName)
        taskToModify.setName(taskTextInput.value)
        taskToModify.setDate(taskDateInput.value) 
        populateTasks()
      }

      function deleteTaskHandler(e) {
        console.log('yelp')
        let localParent = e.target.closest('button');
        
        let previousTaskName = localParent.querySelector('.fa-circle').id
        let taskToDelete = projectSelected.selectTask(previousTaskName)
        console.log(taskToDelete)
        projectSelected.removeTask(taskToDelete)
        populateTasks()
      }


    //   function taskDueDateUpdateHandler(e) {
    //     console.log('handling again')
    //     let para = e.target.closest('div').querySelector('p')
    //     para.classList.toggle('active')
    //     let input = e.target.closest('button').querySelector('input')
    //     input.classList.toggle('active')
    //   }
    
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

      function toggleAddTaskFormHandler(e) {
        addTaskForm.classList.toggle('active');
        addNewTaskButton.classList.toggle('active');

      }

 
      //Event binding
      addNewTaskFormButton.addEventListener("click", addTaskHandler);
      addNewProjectFormButton.addEventListener("click", addProjectHandler);
      addNewProjectButton.addEventListener('click', toggleAddProjectFormHandler);
      projectFormButtonsDiv.addEventListener('click', toggleAddProjectFormHandler);
      inboxButton.addEventListener('click', projectSelectHandler);
      todayButton.addEventListener('click', projectSelectHandler);
      thisWeekButton.addEventListener('click', projectSelectHandler);
      addNewTaskButton.addEventListener('click', toggleAddTaskFormHandler);
    
      //   Worker functions
  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add('button-task');
      
      
      let taskButtonLeftDiv = document.createElement('div');
      taskButtonLeftDiv.classList.add('left-task-panel');

        let completeTaskIcon = document.createElement('i');
        completeTaskIcon.setAttribute("id", t.name)
        completeTaskIcon.classList.add('fa-regular')
        completeTaskIcon.classList.add('fa-circle')
        let taskContentPara = document.createElement('p')
        taskContentPara.classList.add('task-content');
        taskContentPara.textContent = t.name
        let taskContentModificationInput = document.createElement('input')
        taskContentModificationInput.type = 'text'
        taskContentModificationInput.classList.add('input-task-name')
        taskButtonLeftDiv.append(completeTaskIcon, taskContentPara, taskContentModificationInput)

        let taskButtonRightDiv = document.createElement('div');
        taskButtonRightDiv.classList.add('right-task-panel');
        let dueDatePara = document.createElement('p');
        dueDatePara.classList.add('due-date');
        dueDatePara.textContent = t.date;
        let dateInput = document.createElement('input');
        dateInput.classList.add('input-due-date');
        dateInput.type = 'date'
        let trashTaskIcon = document.createElement('i');
        trashTaskIcon.classList.add('fa-solid');
        trashTaskIcon.classList.add('fa-trash');
        
        // <i class="fa-regular fa-calendar-lines-pen"></i>
        let updateTaskIcon = document.createElement('i');
        updateTaskIcon.classList.add('fa-solid')
        updateTaskIcon.classList.add('fa-square-pen')
        taskButtonRightDiv.append(dueDatePara, dateInput, updateTaskIcon, trashTaskIcon)

        taskButton.append(taskButtonLeftDiv, taskButtonRightDiv)
        tasksDiv.appendChild(taskButton)

        completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
        taskContentPara.addEventListener('click', taskDetailsUpdateHandler)
        dueDatePara.addEventListener('click', taskDetailsUpdateHandler)
        trashTaskIcon.addEventListener('click', deleteTaskHandler)
    //   taskButton.textContent =
    //     projectSelected.name === "Today" || projectSelected.name === "This week"
    //       ? `${t.name} -- ${t.date} -- ${t.project.name}`
    //       : `${t.name} -- ${t.date}`;
    //       taskButton.setAttribute("id", t.name);
    //       taskButton.addEventListener("click", taskSelectHandler);
    //       tasksDiv.appendChild(taskButton);
    });
    projectSelected.completedTasks.forEach((t) => {
        let taskButton = document.createElement("button");
        taskButton.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -- ${t.date} -- ${t.project.name}`
          : `${t.name} -- ${t.date}`;
          taskButton.setAttribute("id", t.name);
          taskButton.addEventListener("click", taskCompleteToggleHandler);
          completedTasksDiv.appendChild(taskButton);
    });
  }

  function populateProjects(activeProjectName) {
    projectsDiv.textContent = "";
    todoList.projects.forEach((p) => {
        
        if(p.name !== 'Inbox' && !p.composite) {
            console.log(p.name, p.composite)
      let projectButton = document.createElement("button");
      projectButton.classList.add('button-project');
      let projectButtonLeftDiv = document.createElement('div');
      projectButtonLeftDiv.classList.add('left-project-panel');
      let projectButtonRightDiv = document.createElement('div');
      projectButtonRightDiv.classList.add('right-project-panel');
      let projectIcon = document.createElement('i');
      projectIcon.classList.add('fa-solid')
      projectIcon.classList.add('fa-tasks')
      let trashIcon = document.createElement('i')
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
      if(p.name === activeProjectName) projectButton.classList.add('active')
    }
    });
  }

  function selectAllProjectButtons() {
    return document.querySelectorAll('.button-project');
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