import { format, compareAs, isToday, isThisWeek } from "date-fns";
import Project from "./project.js";
import Task from "./task.js";
const stringify = require("json-stringify-safe");

export const todoList = {
  inbox: new Project("Inbox"),
  today: new Project("Today", true),
  thisWeek: new Project("This week", true),
  projects: [],
  addProject(project) {
    project.todo = this;
    this.projects.push(project);
    localStorage.setItem("todoList", stringify(this, null, 2));
  },
  removeProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.name !== projectName
    );
  },
  assembleComposites() {
    let composites = this.projects.filter((p) => p.composite);
    composites.forEach((c) => {
      c.tasks.length = 0;
      c.completedTasks.length = 0;
      if (c.name === "Today") {
        this.projects.forEach((p) => {
          if (p.composite) return;
          let allTasks = p.allTasks();
          allTasks.forEach((t) => {
            if (isToday(new Date(t.date))) {
              if (t.complete) {
                this.today.completedTasks.push(t);
              } else {
                this.today.tasks.push(t);
              }
            }
          });
        });
      } else if (c.name === "This week") {
        this.projects.forEach((p) => {
          if (p.composite) return;
          let allTasks = p.allTasks();
          allTasks.forEach((t) => {
            if (isThisWeek(new Date(t.date), { weekStartsOn: 1 })) {
              if (t.complete) {
                this.thisWeek.completedTasks.push(t);
              } else {
                this.thisWeek.tasks.push(t);
              }
            }
          });
        });
      }
    });
    localStorage.setItem("todoList", stringify(this, null, 2));
  },
  selectProject(projectName) {
    this.assembleComposites();
    return this.projects.filter((project) => {
      return project.name === projectName;
    })[0];
  },
  // console method
  displayProject(projectName) {
    let project = this.selectProject(projectName);
    for (let key in project) {
      if (key === "name") console.log(`name: ${project[key]}`);
      else if (key === "tasks") {
        project[key].forEach((task, index) =>
          console.log(
            `Task${index + 1}: Name - ${task.name} Date - ${task.date} ${
              project.name !== "Today" && project.name !== "This week"
                ? ""
                : `(${project.name})`
            }`
          )
        );
      } else {
        project[key].forEach((completeTask, index) =>
          console.log(
            `Completed Task${index + 1}: Name - ${completeTask.name} Date - ${
              completeTask.date
            } ${
              project.name !== "Today" && project.name !== "This week"
                ? ""
                : `(${project.name})`
            }`
          )
        );
      }
    }
  },
};

if (localStorage.getItem("todoList")) {
  // Grab data from localStorage
  let todoListStore = JSON.parse(localStorage.getItem("todoList"));
  console.log(todoListStore);
  let allStoredTasks = [];
  todoListStore.projects.forEach((p) => {
    if (!p.composite) {
      // && p.name !== 'Inbox'
      if (p.tasks.length !== 0 || p.completedTasks.length !== 0) {
        p.tasks.forEach((t) => allStoredTasks.push(t));
        p.completedTasks.forEach((t) => allStoredTasks.push(t));
      } else allStoredTasks.push(p);
    }
  });
  console.log(allStoredTasks);
  let projects = {};
  allStoredTasks.forEach((t) => {
    if (t.type === "Task") {
      projects[t.projectName] = projects[t.projectName] || [];
      projects[t.projectName].push(new Task(t.name, t.date, t.complete));
    } else if (t.type === "Project") {
      projects[t.name] = projects[t.name] || [];
    }
  });
  console.log(projects);
  for (let project in projects) {
    let projObj = project === "Inbox" ? todoList.inbox : new Project(project);
    console.log(project, projObj);
    projects[project].forEach((t) => {
      if (t.complete) projObj.addCompletedTask(t);
      else projObj.addTask(t);
    });
    todoList.addProject(projObj);
  }
  console.log(todoList);
} else {
  // Create starter projects and tasks:
  console.log("Here!");
  const starterProject1 = new Project("Learn Javascript");
  const starterProject2 = new Project("Learn more Javascript");
  const starterTasks1 = [
    new Task("Write code1", "2023-04-10"),
    new Task("Refactor old code1", "2023-04-12"),
    new Task("foo1", "2023-04-14"),
    new Task("bar1", "2023-04-20"),
    new Task("baz1", "2023-04-25"),
  ];
  const starterTasks2 = [
    new Task("Write code2", "2023-04-11"),
    new Task("Refactor old code2", "2023-04-13"),
    new Task("foo2", "2023-04-16"),
    new Task("bar2", "2023-04-20"),
    new Task("baz2", "2023-04-25"),
  ];

  todoList.addProject(starterProject1);
  starterTasks1.forEach((task) => starterProject1.addTask(task));

  todoList.addProject(starterProject2);
  starterTasks2.forEach((task) => starterProject2.addTask(task));
}
if (!todoList.projects.includes(todoList.inbox))
  todoList.addProject(todoList.inbox);
todoList.addProject(todoList.today);
todoList.addProject(todoList.thisWeek);
todoList.assembleComposites("Today");
todoList.assembleComposites("This week");
