function beepBoop(userInput) {
  const rodgers = ["Beep", "Boop", "Won't You Be My Neighbor"];

  for (let i = 0; i<= userInput; i++)
  console.log(i)

};

$(document).ready(function() {
  $("form#rodgers-form").submit(function(event) {
    event.preventDefault();

    let userInput = $("#input").val()
    let result = beepBoop(userInput)

    $("#output").text(result);
  });
});