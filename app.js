class Task {
  constructor(name, date = "No Date") {
    this.name = name;
    this.date = date;
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
}

class Project {
  tasks = [];
  constructor(name) {
    this.name = name;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(removeTask) {
    this.tasks.filter((task) => task !== removeTask);
  }
}

const todoList = {
  projects: [
    new Project("Inbox"),
    new Project("Today"),
    new Project("This week"),
  ],
  addProject(project) {
    this.projects.push(project);
  },
  removeProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.name !== projectName
    );
  },
  selectProject(projectName) {
    return this.projects.filter((project) => {
      return project.name === projectName;
    })[0];
  },
  displayProject(projectName) {
    let project = this.selectProject(projectName);
    // console.log(project);
    for (let key in project) {
      if (key === "name") console.log(`name: ${project[key]}`);
      else if (key === "tasks") {
        project[key].forEach((task, index) =>
          console.log(
            `Task${index + 1}: Name - ${task.name} Date - ${task.date} `
          )
        );
      }
    }
  },
};

const starterProjects = [
  new Project("Learn Javascript"),
  new Project("Learn more Javascript"),
];
const starterTasks = [
  new Task("Write code", "18-03-1980"),
  new Task("Refactor old code", "24-06-2023"),
];

starterProjects.forEach((project) => {
  todoList.addProject(project);
  starterTasks.forEach((task) => project.addTask(task));
});
