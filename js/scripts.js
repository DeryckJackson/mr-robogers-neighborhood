const mrRoboger = (number) => {
  let outputString = "";

  for (i = 0; i <= number; i++) {
    outputString += `${i}, `;
  }

  return outputString.slice(0, -2);
}


// UI Logic
$(document).ready(function() {
  $("form#input").submit(() => {
    event.preventDefault();
    const input = parseInt($("#number").val());

    $("#output").text(mrRoboger(input));
    $(".hidden").show();
  })
});