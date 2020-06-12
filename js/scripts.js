function beepBoop(userInput) {
  const rodgers = ["Beep", "Boop", "Won't You Be My Neighbor"];
  let rework = []
  for (let i = 0; i<= userInput; i++) {
    console.log(i)
    let x = i.toString()
  if (x.includes("3")) {
    rework.push(rodgers[2]);
  }
  return rework
};
};

$(document).ready(function() {
  $("form#rodgers-form").submit(function(event) {
    event.preventDefault();

    let userInput = parseInt($("#input").val())
    let result = beepBoop(userInput)

    $("#output").text(result);
  });
});