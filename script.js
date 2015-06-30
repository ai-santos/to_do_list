$(function() {

  var $taskUL = $("#task_list");
    var $askUL = $("#ask_list");

  var $newItemForm = $("#new_task");
  var task_list = [];

  $newItemForm.on("submit", function(event) {
      event.preventDefault();
      console.log('form submitted!');
      console.log($("#task_name").val());
      
      //add new item to view   
      var $newTI = $('<li>' + $('#task_name').val() + '</li>');  
      $('#task_list').append($newTI);

      //add new item to model
      task_list.push({
        task_name: $('#task_name').val(),
        description: ""
      });   
     
  });    

 
//add a click event handler to mark task done
 $taskUL.on("click", ".task", function(event) {
  console.log(this); 
  console.log($("this"));
  $(this).children().addClass("done");
  $(this).addClass("done");

  });



});




