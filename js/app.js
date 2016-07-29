

	var myApp = angular.module("toDoApp", []);

	myApp.controller("mainController", function($scope){

		$scope.todos = [{
			text: 'cośtam 1', 
			done: false,
			priority: 1
			},
			{
			text: 'cośtam 2', 
			done: false,
			priority: 3
			}
		];


		$scope.addTodo = function(event) {
			
			if ( $scope.formTodo.length < 3) {
				return false;
			}
			
			if ( $scope.formPriority > 3) {
			
				return false;
			}

			$scope.todos.push({text: $scope.formTodo, done: false, priority: $scope.formPriority});
			$scope.formTodo = " ";
			
		};

		$scope.clearDone = function() {
			$scope.todos = _.filter($scope.todos, function(todo) {
				return !todo.done;
			});
		};

	});

	
	var notify_counter=1000;

	
function notify(){
	var p1 = $(".color-1");
	var p2 = $(".color-2");
	var p3 = $(".color-3");
	
	

	if(p1.attr('class') && (notify_counter%100000)==0){
		alert ("Do it already!");
	}
	
	if(p2.attr('class') && (notify_counter%200000)==0){
		alert ("Take your time!");
	}
	
	if(p3.attr('class') && (notify_counter%250000)==0){
		alert ("No worries, You still got time");
	}

	
}


setInterval(function(){
	notify();
	notify_counter+=1000;
	if(notify_counter==100000){
		notify_counter=0;
	}
},1000);













