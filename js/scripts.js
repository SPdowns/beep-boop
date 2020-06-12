$(document).ready(function() {
  $("form#rodgers-form").submit(function(event) {
    event.preventDefault();

    let userInput = $("#input").val()

    $("#output").text(userInput);
  });
});