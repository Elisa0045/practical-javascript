// how to write a function
function sayHiTo(person) {
  console.log("hi", person);
}
//hoe to execute the function
sayHiTo("elisa");
//how to display a function
function displayTodos() {
  console.log("My todos:", todos);
}
//how to add an array in a function
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
//how to write a function for change the values (items)
function changeTodo(position, newValue) {
    todos[position] = "newValue";
  displayTodos();
  }
//how to delete a function
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
    }
//Exercise to explore the relationship between functions and variables 
//exercise one
var myName = 'elisa';
function sayName(){
console.log(myName);
} 
sayName();

