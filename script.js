var todoList = {
  todos: [],
  addTodo: function (todoText) {
    //I add the functions for: add a todo, change the values, delete a todo, and Toggles all the todos complete or incomplete//
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    this.todos.forEach(function (todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  },
};
//handlers
var handlers = {
  addTodo: function () {
    debugger;
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    if (addTodoTextInput.value !== "") {
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
      view.displayTodos();
    }
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
};
var view = {
  //this renders the data to the user screen
  displayTodos: function () {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    todoList.todos.forEach(function (todo, position) {
      var todoLi = document.createElement("li");
      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(x)" + todo.todoText;
      } else {
        todoTextWithCompletion = "( )" + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement("button"); //delete button for every todo
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    return deleteButton;
  },
  setUpEventListeners: function () {
    var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function () {
      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};
view.setUpEventListeners();
