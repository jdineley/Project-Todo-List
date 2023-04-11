import { format, compareAsc, isToday, isThisWeek } from 'date-fns'
import Project from './project.js'
import Task from './task.js';
const stringify = require('json-stringify-safe');



 export const todoList = {
    inbox: new Project('Inbox'),
    today: new Project('Today', true),
    thisWeek: new Project('This week', true),
    projects: [],
    addProject(project) {
      project.todo = this
      this.projects.push(project);
      localStorage.setItem('todoList', stringify(this, null, 2))
    },
    removeProject(projectName) {
      this.projects = this.projects.filter(project => project.name !== projectName);
      localStorage.setItem('todoList', stringify(this, null, 2))
    },
    assembleComposites() {
        let composites = this.projects.filter(p => p.composite)
        console.log(composites)
        composites.forEach(c => {
            c.tasks.length = 0;
            c.completedTasks.length = 0;
            if(c.name === 'Today') {
                this.projects.forEach(p => {
                    if(p.composite) return
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
            } else if(c.name === 'This week') {
                this.projects.forEach(p => {
                    if(p.composite) return
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
            }
        })
        localStorage.setItem('today', stringify(this.today, null, 2))
        localStorage.setItem('thisWeek', stringify(this.thisWeek, null, 2))

    },
    selectProject(projectName) {
        this.assembleComposites()
        // if(projectName === 'Today' || projectName === 'This week'){
        //     this.today.tasks.length = 0;
        //     this.today.completedTasks.length = 0;
        //     this.thisWeek.tasks.length = 0;
        //     this.thisWeek.completedTasks.length = 0;
            
        //     if(projectName ==='Today') {
        //         this.projects.forEach(p => {
        //             if(p.name === 'Today' || p.name === 'This week') return
        //             let allTasks = p.allTasks()
        //             allTasks.forEach(t => {
        //                 if(isToday(new Date(t.date))){
        //                     if(t.complete) {
        //                         this.today.completedTasks.push(t) 
        //                     }
        //                     else {
        //                         this.today.tasks.push(t)
        //                     }
        //                 }
        //             })
        //         })
        //         localStorage.setItem('today', stringify(this.today, null, 2))
        //         return this.today
        //     } else {
        //         this.projects.forEach(p => {
        //             if(p.name === 'Today' || p.name === 'This week') return
        //             let allTasks = p.allTasks()
        //             allTasks.forEach(t => {
        //                 if(isThisWeek(new Date(t.date), { weekStartsOn: 1 })){
        //                     if(t.complete) {
        //                         this.thisWeek.completedTasks.push(t)
        //                     }
        //                     else {
        //                         this.thisWeek.tasks.push(t)
        //                     }
        //                 }
        //             })
        //         })
        //         localStorage.setItem('thisWeek', stringify(this.thisWeek, null, 2))
        //         return this.thisWeek
        //     }
            
        // } 
        // else {
            return this.projects.filter(project => {
                return project.name === projectName;
            })[0]   
        // }
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


// Create starter projects and tasks:
  
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

  todoList.selectProject('Today')
  todoList.selectProject('This week')
  
  localStorage.setItem('todoList', stringify(todoList, null, 2))