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
  toggleAll: function () {
    todoList.toggleAll();
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
};
