var toDoItems = [
  {todo: "Clean Up", description: "vacuum"},
  {todo: "Read", description: "Underscore Docs"},
  {todo: "Study", description: "Homework"}
];

function ToDo = (title, description) {
  this.title = title;
  this.description = description;
  this.all = [];

  var all = this.all(ToDo)
}
var clean = new ToDo('clean', 'vacuum')
ToDo.prototype.save = function(listToDos) {
  this.all.push(listToDos);

} 

ToDo.prototype.render = function () {
    return toDoTemplate;
  }
  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(ToDo.all, function (todo, index) {
    var $todo = $(toDoTemplate(todo));
    $todo.attr('data-index', index);
    $toDoList.append($todo);
  });