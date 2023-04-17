import { todoList } from "./todoList";
const stringify = require("json-stringify-safe");
import { compareAsc, isAfter } from "date-fns";

export default class Project {
  constructor(name, composite = false) {
    this.name = name;
    this.composite = composite;
    this.tasks = [];
    this.completedTasks = [];
    this.type = this.constructor.name;
  }

  addTask(task) {
    task.project = this;
    task.projectName = this.name;
    task.inDate = isAfter(new Date(task.date), new Date());
    this.tasks.push(task);
    this.taskOrdering();
    localStorage.setItem("todoList", stringify(todoList, null, 2));
  }
  removeTask(removeTask) {
    this.tasks = this.tasks.filter((task) => task !== removeTask);
    this.completedTasks = this.completedTasks.filter(
      (task) => task !== removeTask
    );
    localStorage.setItem("todoList", stringify(todoList, null, 2));
  }
  addCompletedTask(task) {
    task.project = this;
    task.projectName = this.name;
    task.inDate = isAfter(new Date(task.date), new Date());
    this.completedTasks.push(task);
    this.completedTaskOrdering();
    localStorage.setItem("todoList", stringify(todoList, null, 2));
  }
  removeCompletedTask(removeTask) {
    this.completedTasks.filter((task) => task !== removeTask);
  }
  allTasks() {
    return this.tasks.concat(this.completedTasks);
  }
  selectTask(taskName) {
    return this.allTasks().filter((task) => {
      return task.name === taskName;
    })[0];
  }
  completeTaskToggle(taskToToggleName) {
    let taskSelected = this.selectTask(taskToToggleName);
    taskSelected.toggleTaskComplete();
    let project = taskSelected.project;
    let allTasks = project.allTasks();
    project.tasks = [];
    project.completedTasks = [];
    allTasks.forEach((task) => {
      if (task.complete) task.project.addCompletedTask(task);
      else task.project.addTask(task);
    });
    project.todo.assembleComposites();
  }
  taskOrdering() {
    let noDateTasks = this.tasks.filter((t) => t.date === "No date");
    let datedTasks = this.tasks.filter((t) => t.date !== "No date");
    datedTasks.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return compareAsc(aDate, bDate);
    });
    this.tasks = datedTasks.concat(noDateTasks);
  }
  completedTaskOrdering() {
    let noDateTasks = this.completedTasks.filter((t) => t.date === "No date");
    let datedTasks = this.completedTasks.filter((t) => t.date !== "No date");
    datedTasks.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return compareAsc(aDate, bDate);
    });
    this.completedTasks = datedTasks.concat(noDateTasks);
  }
}
