const stringify = require("json-stringify-safe");
import { todoList } from "./todoList";
import { isAfter } from "date-fns";

export default class Task {
  inDate;
  constructor(name = "No name", date, complete = false) {
    this.name = name;
    this.date = date || "No date";
    this.complete = complete;
    this.type = this.constructor.name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name || "No name";
    localStorage.setItem("todoList", stringify(todoList, null, 2));
  }
  getDate() {
    return this.date;
  }
  setDate(date) {
    this.date = date || "No date";
    this.inDate = isAfter(new Date(this.date), new Date());
    this.project.taskOrdering();
    localStorage.setItem("todoList", stringify(todoList, null, 2));
  }
  toggleTaskComplete() {
    this.complete = !this.complete;
  }
}
