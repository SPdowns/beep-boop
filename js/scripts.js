function beepBoop(userInput) {
  console.log(userInput)
  const rogers = [" Beep", " Boop", " Won't You Be My Neighbor"];
  let rework = []

  for (let i = 0; i <= userInput; i++) {
    let x = i.toString()
    console.log(i)
    if (i === NaN) {
      rework.push("not a num")
      return rework
    } else if (x.includes ("3")) {
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
    console.log(userInput)
    let result = beepBoop(userInput)
    
    $("#output").fadeIn("slow").text(result);
  });

  $("#page-reveal").click(function(event) {
    event.preventDefault();
    $(".jumbotron").hide("slow")
    $("#page").fadeIn("slow");
  })

  $("#output")
});