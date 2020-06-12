function beepBoop(userInput) {
  const rodgers = [" Beep", " Boop", " Won't You Be My Neighbor"];
  let rework = []

  for (let i = 0; i <= userInput; i++) {
    let x = i.toString()
    if (x.includes ("3")) {
      rework.push(rodgers[2])
    } else if (x.includes("2")) {
      rework.push(rodgers[1])
    } else if (x.includes("1")) {
      rework.push(rodgers[0]) 
    } else {
      rework.push(" " + x)
    }  
  };
  return rework
};

$(document).ready(function() {
  $("form#rodgers-form").submit(function(event) {
    event.preventDefault();

    let userInput = parseInt($("#input").val())
    let result = beepBoop(userInput)

    $("#output").text(result);
  });

  $("#page-reveal").click(function(event) {
    event.preventDefault();
    $(".jumbotron").hide()
    $("#page").fadeIn("slow");
  })
});