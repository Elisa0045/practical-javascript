# TODO List (Practical-JavaScript). 

## Steps Plan
Building this site one step at a time.

## 0. Setup
> * `index.html`: basic layout and references to external files
> * `style.css`: css style attributes of the HTML elements

## 1. Data & Log
> * `todo-data.js` & `display-todos.js`
> * Create the main object to store the state and behavior of the webpage.

## 2. User Story: Add todo.
__A user can add a new task TODO in the list just typing the task and then click in 'Add'__
> * I start with write the code in `todo-data.js` 
> * I add the function in the handlers for render the list in the screen in `handlers` 
> * Then I wrote the  `display-todos.js` for display the TODOS.


## 3. User Story: Change todo.
__A user can change the text of a TODO list just select which number of string want to edit and enter the text in the input for display on the screen__
> * I start with write the code in `todo-data.js` 
> * I add the function in the handlers for render the list in the screen in `handlers` 
> * The handler function stores the new value task changed in the input, and render the list in the screen.

## 4. User Story: Delete todo.
__A user can delete any TODO just clicking  `Delete` next to the task__
> * I start with write the code in `todo-data.js` 
> * I add the function in the handlers for render the list in the screen in `handlers` 
> * Then I add an function in `display-todos.js` for display one `Delete-button` for any task.

## 5. User Story: Toggle all.
__A user can mark toggle all as a completed just clicking  on `Toggle all` or unmarked all the task as incomplete__
> * I start with write the code in `todo-data.js` 
> * I add the function in the handlers for render the list in the screen in `handlers` 
> * The handler function Toggles all the todos complete or incomplete by clicking the button `Toggle all` and update the list ask mark or unmarked just clicking again. 

## 6. User Story: Toggle completed.
__A user can mark toggle completed a task just selecting the number of the TODO__
> * I start with write the code in `todo-data.js` 
> * I add the function in the handlers for render the list in the screen in `handlers` 
> * The handler function Toggles the selected  todos by  complete just choosing the number of the task and clicking the button `Toggle completed` and update the list ask mark (completed).
