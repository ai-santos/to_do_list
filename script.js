$(function() {

 
  var $taskName = $("#taskname").val();
  var description = $("#description").val();
  var toDoData = {name: taskname, description: description}

  var $newItemForm = $("#new_task");
  var tasklist = [];

  $newItemForm.on("submit", function(event) {
    event.preventDefault();
    console.log('form submitted!');
    console.log($("#taskname").val());
  });    



// append our new todo to the page
 
$taskName.append('<li class="tasklist">)' + toDoData.name + ' - ' + toDoData.description + '</li>');


});

//add a click event handler to mark task done
 var $taskUL = $("#tasklist");

$taskUL.on("click", ".task", function(event) {
  console.log(this); 
  console.log($("this"));
  $(this).children().addClass("done");
  $(this).addClass("done");

});



