app.directive('chat', function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {

            element.bind("keydown keypress", function (event) {
              if(event.which === 13) {
                console.log("enter message");
                socket.emit('message', {message: scope.message, user_name: scope.user_name});
                scope.message = "";
                console.log("message sent: " + (new Date()).getMilliseconds());
                event.preventDefault();
              }
            });
          }
  }

});