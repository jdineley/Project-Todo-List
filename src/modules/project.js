import { format, compareAsc, isToday, isThisWeek } from 'date-fns'


export default class Project {
    constructor(name, composite = false){
      this.name = name;
      this.composite = composite;
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
        let taskSelected = this.selectTask(taskToToggleName)
        taskSelected.toggleTaskComplete()
        let project = taskSelected.project
        let allTasks = project.allTasks()
        project.tasks = [];
        project.completedTasks = [];
        allTasks.forEach(task => {
            if(task.complete) task.project.completedTasks.push(task);
            else task.project.tasks.push(task)
        })
        project.todo.assembleComposites()
    }
  }