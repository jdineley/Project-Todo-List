import { todoList } from "./todoList";
import Project from "./project";
import Task from "./task";

export default function storage() {
  if (localStorage.getItem("todoList")) {
    // Grab data from localStorage
    let todoListStore = JSON.parse(localStorage.getItem("todoList"));
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
    let projects = {};
    allStoredTasks.forEach((t) => {
      if (t.type === "Task") {
        projects[t.projectName] = projects[t.projectName] || [];
        projects[t.projectName].push(new Task(t.name, t.date, t.complete));
      } else if (t.type === "Project") {
        projects[t.name] = projects[t.name] || [];
      }
    });
    for (let project in projects) {
      let projObj = project === "Inbox" ? todoList.inbox : new Project(project);
      projects[project].forEach((t) => {
        if (t.complete) projObj.addCompletedTask(t);
        else projObj.addTask(t);
      });
      todoList.addProject(projObj);
    }
  } else {
    // Create starter projects and tasks:
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
}
