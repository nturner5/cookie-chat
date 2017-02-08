angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

$scope.getMessages = function(){
   messageService.getMessages().then(function(messObj){
     $scope.messages = messObj.data;
     
   })
 
}


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function(message){
    messageService.postMessage(message).then(function(){
      $scope.message = ''; //this clears the message input after you submit it
      $scope.getMessages() // instead of waiting 1500 ms for my message to post, everytime this is invoked, it invokes the get messages function and posts right away. 
    })
  }



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

})
