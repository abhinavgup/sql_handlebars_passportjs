$(document).ready(function(){


var a=$('#inp');;
let button =$('#btn');
let todolist=$('#li');
button.click(function(){

let c=a.val();

$.post(            /// here ajax request is made so in ajax request page doesnt refreshes each time a new request is made

 '/todo/',
 {task:c},
 function(data){
todolist.empty();
for(todo of data){
    todolist.append('<li>'+ todo.task + '</li>');
}


 }




)




})




})