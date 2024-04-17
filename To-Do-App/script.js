function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const task = {
        text: taskText,
        completed: false,
        timestamp: new Date()
      };
      tasks.push(task);
      renderTasks();
      taskInput.value = "";
    }
  }
  
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }
  
  let tasks = [];
  
  function renderTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTask(index));
      const span = document.createElement("span");
      span.textContent = task.text;
      if (task.completed) {
        span.classList.add("completed");
      }
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(index));
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteButton);
  
      if (task.completed) {
        completedTasksList.appendChild(li);
      } else {
        pendingTasksList.appendChild(li);
      }
    });
  }
  
  renderTasks();
  