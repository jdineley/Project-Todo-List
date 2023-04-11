export default class Task {
    constructor(name, date) {
      this.name = name;
      this.date = date || 'No date';
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