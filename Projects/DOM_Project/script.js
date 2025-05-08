const addTaskForm = document.querySelector(".addTask form");
const addTaskFormInput = addTaskForm.querySelector("input");
const addTaskFormTextArea = addTaskForm.querySelector("textarea");
const addTaskMarkAsImportant = addTaskForm.querySelector("#imp");
const allTasksContainer = document.querySelector(".allTasks");

function openSelectedFeature() {
  const allElems = document.querySelectorAll(".elem");
  const fullElemPages = document.querySelectorAll(".fullElem");
  const allFullElemsBackButton = document.querySelectorAll(".fullElem .back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      setTimeout(() => {
        fullElemPages[elem.id].style.display = "block";
      }, 200);
    });
  });

  allFullElemsBackButton.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElemPages[elem.id].style.display = "none";
    });
  });
}

function todoList() {
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks.length === 0) {
      allTasksContainer.innerHTML = `
        <div class="no-tasks">
          <p>No tasks available.</p>
        </div>
      `;
      return;
    }
    let html = "";
    tasks.forEach((task, index) => {
      html += `
      <div class="task" id="${index}">
        <div class="content">
          <h4>${task.title} <span class=${task.isImportant}>IMP</span></h4>
          <p>
            ${task.description}
          </p>
        </div>
        <div class="actions">
            <button class="delete" id="${index}">Mark as Completed</button>
        </div>
      </div>
    `;
    });
    allTasksContainer.innerHTML = html;
    const deleteTaskButtons = document.querySelectorAll(
      ".allTasks .task .actions .delete"
    );
    deleteTaskButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        deleteTask(btn.id);
      });
    });
  }

  function addTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  function createTask() {
    const taskTitle = addTaskFormInput.value;
    const taskDescription = addTaskFormTextArea.value;
    const isImportant = addTaskMarkAsImportant.checked;
    if (!taskTitle || !taskDescription) {
      alert("Please fill all the fields");
      return;
    }
    const task = {
      title: taskTitle,
      description: taskDescription,
      isImportant,
    };
    addTask(task);
    addTaskFormInput.value = "";
    addTaskFormTextArea.value = "";
    addTaskMarkAsImportant.checked = false;
  }
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createTask();
  });
  renderTasks();
}

function dailyPlanner() {}

openSelectedFeature();
todoList();
dailyPlanner();
