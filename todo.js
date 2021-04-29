angular.module("TodoApp",[])
.controller("TodoController",['$scope',function($scope){

    //$scope is an object which has property as todolist which is
    //also an object
   // console.log($scope);
  //  console.log($scope.todoList);


    var todoList=$scope.todoList;

    todoList.todos=[
        {
            task:"Learn angularJs",
            done:false
        },
        {
            task:"Running",
            done:false
        }
    ]
    angular.forEach(todoList.todos,function(todo)
    {
        console.log(todo.task+" "+todo.done);
    })
    todoList.add=function()
    {
        todoList.todos.push({task:todoList.text,done:false})
        todoList.text="";
        console.log(todoList);
    }

    todoList.remaining=function()
    {
        var count=0;
        angular.forEach(todoList.todos,function(todo)
        {
            if(todo.done==false)
            count++;
        })
        return count;
    }

    todoList.delete=function()
    {
        var oldArray=todoList.todos;
        todoList.todos=[];
         angular.forEach(oldArray,function(todo)
        {
            if(todo.done!=true)
            {
                todoList.todos.push(todo);
            }
        })
    }
}])