export default class Task {
  constructor(name, date, complete = false) {
    this.name = name;
    this.date = date || "No date";
    this.complete = complete;
    this.type = this.constructor.name;
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
    this.date = date;
  }
  toggleTaskComplete() {
    this.complete = !this.complete;
  }
}
