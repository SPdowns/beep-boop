function nanText(userInput) {
  if (isNaN(userInput)) {
    console.log(userInput)
    alert("Not A Number");
  } else return userInput
};



function beepBoop(nanTestOutput) {
  const rogers = [" Beep", " Boop", " Won't You Be My Neighbor"];
  let rework = [];

  console.log(nanTestOutput)

  for (let i = 0; i <= nanTestOutput; i++) {
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
    console.log(nanTestOutput)
  };
  console.log(rework)
  return rework
};



$(document).ready(function() {
  $("form#rogers-form").submit(function(event) {
    event.preventDefault();

    let userInput = parseInt($("#input").val())
    let nanTestOutput = nanText(userInput)
    console.log(nanTestOutput)
    let secondPass = beepBoop(nanTestOutput)
    console.log(secondPass)

    $("#output").fadeIn("slow").text(secondPass);
  });

  $("#page-reveal").click(function(event) {
    event.preventDefault();
    $(".jumbotron").hide("slow")
    $("#page").fadeIn("slow");
  })

  $("#output")
});