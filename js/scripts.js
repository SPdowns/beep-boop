function beepBoop(userInput) {
  const rogers = [" Beep", " Boop", " Won't You Be My Neighbor"];
  let rework = []
  console.log(userInput)
  for (let i = 0; i <= userInput; i++) {
    let x = i.toString()
    if (x.includes ("3")) {
      rework.push(rogers[2])
    } else if (x.includes("2")) {
      rework.push(rogers[1])
    } else if (x.includes("1")) {
      rework.push(rogers[0]) 
    } else {
      rework.push(" " + x)
    }  
  };
  return rework
};

$(document).ready(function() {
  $("form#rogers-form").submit(function(event) {
    event.preventDefault();

    let userInput = parseInt($("#input").val())
    let secondPass = beepBoop(userInput)
    
    $("#output").fadeIn("slow").append(secondPass);
  });

  $("#page-reveal").click(function(event) {
    event.preventDefault();
    $(".jumbotron").hide("slow")
    $("#page").fadeIn("slow");
  })

  $("#output")
});