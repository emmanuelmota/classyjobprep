// Angular.JS
angular
  .module("classyPrep", [])
  .controller("classyPrepController", function () {
    var todoList = this;
    todoList.todos = [
      { text: "Demonstrate proficiency with JS, Angular.js, Jquery 👨🏽‍💻", done: false },
      { text: "Impress the team 👨🏽‍💻", done: false },
      { text: "Join the team and hit the ground running 🙌🏽", done: false },
    ];
    //Add a task to list
    todoList.addTodo = function () {
      if (!todoList.todoText) {
        alertAnimation("taskTitle");
      } else {
        console.log(todoList.todoText);
        todoList.todos.push({ text: todoList.todoText, done: false });
        todoList.todoText = "";
      }
    };
    // Return count of remaining tasks
    todoList.remaining = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    // Archive tasks that have been checked off
    todoList.archive = function () {
      alertAnimation("list");
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
// JQUERY
//  Alert Animation
let alertAnimation = (className) => {
  let i = 0;
  while (i < 3) {
    $(`.${className}`).fadeOut(100).fadeIn(100);
    i++;
  }
};
// ID animations
$(document).ready(function () {
  $("#logo").click(function () {
    $("#container").fadeOut("slow").fadeIn("slow");
  });
});
