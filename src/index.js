import { format, compareAsc, isToday, isThisWeek } from 'date-fns'

// Backend logic *******************

class Task {
    constructor(name, date = 'No Date') {
      this.name = name;
      this.date = date;
      this.complete = false;
      this.project = null;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
    getDate() {
      return this.date;
    }
    setDate(date) {
      this.date = date
    }
    toggleTaskComplete() {
        this.complete = !this.complete
    }
  }
  
  class Project {
    constructor(name){
      this.name = name;
      this.tasks = [];
      this.completedTasks = [];
    }
    addTask(task) {
      task.project = this
      this.tasks.push(task);
    }
    removeTask(removeTask) {
      this.tasks.filter(task => task !== removeTask)
    }
    addCompletedTask(task) {
        this.completedTasks.push(task);
    }
    removeCompletedTask(removeTask) {
        this.completedTasks.filter(task => task !== removeTask)
    }
    allTasks() {
        return this.tasks.concat(this.completedTasks)
    }
    selectTask(taskName) {
        return this.allTasks().filter(task => {
            return task.name === taskName;
        })[0];
    }
    completeTaskToggle(taskToToggleName) {
            let taskSelcted = this.selectTask(taskToToggleName)
            taskSelcted.toggleTaskComplete()
            let project = taskSelcted.project
            let allTasks = project.allTasks()
            console.log(project, allTasks)
            project.tasks = [];
            project.completedTasks = [];
            allTasks.forEach(task => {
                if(task.complete) task.project.completedTasks.push(task);
                else task.project.tasks.push(task)
            })
    }
  }

  
  const todoList = {
    inbox: new Project('Inbox'),
    today: new Project('Today'),
    thisWeek: new Project('This week'),
    projects: [],
    addProject(project) {
      this.projects.push(project);
    },
    removeProject(projectName) {
      this.projects = this.projects.filter(project => project.name !== projectName);
    },
    selectProject(projectName) {
        if(projectName === 'Today' || projectName === 'This week'){
            this.today.tasks.length = 0;
            this.today.completedTasks.length = 0;
            this.thisWeek.tasks.length = 0;
            this.thisWeek.completedTasks.length = 0;
            if(projectName ==='Today') {
                this.projects.forEach(p => {
                    if(p.name === 'Today' || p.name === 'This week') return
                    let allTasks = p.allTasks()
                    allTasks.forEach(t => {
                        if(isToday(new Date(t.date))){
                            if(t.complete) {
                                this.today.completedTasks.push(t) 
                            }
                            else {
                                this.today.tasks.push(t)
                            }
                        }
                    })
                })
                return this.today
            } else {
                this.projects.forEach(p => {
                    if(p.name === 'Today' || p.name === 'This week') return
                    let allTasks = p.allTasks()
                    allTasks.forEach(t => {
                        if(isThisWeek(new Date(t.date), { weekStartsOn: 1 })){
                            if(t.complete) {
                                this.thisWeek.completedTasks.push(t)
                            }
                            else {
                                this.thisWeek.tasks.push(t)
                            }
                        }
                    })
                })
                return this.thisWeek
            }
        } else {
            return this.projects.filter(project => {
                return project.name === projectName;
            })[0]   
        }
    },
    // console method
    displayProject(projectName) {
      let project = this.selectProject(projectName);
      for(let key in project) {
        if(key === 'name') console.log(`name: ${project[key]}`);
        else if(key === 'tasks') {
          project[key].forEach((task, index) => console.log(`Task${index+1}: Name - ${task.name} Date - ${task.date} ${project.name !== 'Today' && project.name !== 'This week' ? '' : `(${project.name})`}`))
        } else {
            project[key].forEach((completeTask, index) => console.log(`Completed Task${index+1}: Name - ${completeTask.name} Date - ${completeTask.date} ${project.name !== 'Today' && project.name !== 'This week' ? '' : `(${project.name})`}`))
        }
      }
    } 
  }

 function populateDefaultProjects() {
    todoList.addProject(todoList.inbox);
    todoList.addProject(todoList.today);
    todoList.addProject(todoList.thisWeek);
 }
 populateDefaultProjects()
  
  const starterProject1 = new Project('Learn Javascript')
  const starterProject2 = new Project('Learn more Javascript')
  const starterTasks1 = [new Task('Write code1', '2023-04-10'),
   new Task('Refactor old code1', '2023-04-12'), 
   new Task('foo1', '2023-04-14'),
   new Task('bar1', '2023-04-20'),
   new Task('baz1', '2023-04-25')]
  const starterTasks2 = [new Task('Write code2', '2023-04-11'),
   new Task('Refactor old code2', '2023-04-13'), 
   new Task('foo2', '2023-04-16'),
   new Task('bar2', '2023-04-20'),
   new Task('baz2', '2023-04-25')]   
  

    todoList.addProject(starterProject1);
    starterTasks1.forEach(task => starterProject1.addTask(task));

    todoList.addProject(starterProject2);
    starterTasks2.forEach(task => starterProject2.addTask(task));

// ***************************************



// Gui *************************************

const projectsUl = document.querySelector('#projects')
const nameInput = document.querySelector('#name')
const button = document.querySelector('button')
const projectH2 = document.querySelector('#project')
const tasksUl = document.querySelector('#tasks')
const completedTasksUl = document.querySelector('#completed-tasks')
const addProjectButton = document.querySelector('#add-project button')
const addTaskButton = document.querySelector('#add-task button')
const newProjectNameInput = document.querySelector('#add-project input')
const newTaskNameInput = document.querySelector('#add-task #name');
const newTaskDateInput = document.querySelector('#add-task #date')


let projectSelected = todoList.selectProject('Today');

function projectSelectHandler(e) {
    console.log(e.target.textContent);
    projectSelected = todoList.selectProject(e.target.textContent);
    console.log(projectSelected);
    projectH2.textContent = projectSelected.name;
    populateTasks(projectSelected);
    populateCompletedTasks(projectSelected)
    
}       

function taskSelectHandler(e) {
    console.log(e.target.textContent, projectSelected);
    projectSelected.completeTaskToggle(e.target.textContent);
    populateTasks(projectSelected);
    populateCompletedTasks(projectSelected)
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
    populateCompletedTasks(projectSelected);
}

function populateTasks(project) {
    if(project.name === 'Today' || project.name === 'This week') {
        project = todoList.selectProject(project.name)
    }
    tasksUl.textContent = ''
    project.tasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = `${t.name} (${t.project.name})`
        taskLi.addEventListener('click', taskSelectHandler)
        tasksUl.appendChild(taskLi);
    })
}

function populateCompletedTasks(project) {
    completedTasksUl.textContent = '';
    project.completedTasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = t.name
        taskLi.addEventListener('click', taskSelectHandler)
        completedTasksUl.appendChild(taskLi);
    })
}

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
populateCompletedTasks(projectSelected);




window.todo = {
    todoList,
    Project,
    Task,
    projectSelected: projectSelected
  }

// ****************************************