// Business Logic
const mrRoboger = (number) => {
  let outputString = "";
  const oneString = "1";
  const twoString = "2";
  const threeString = "3";

  for (i = 0; i <= number; i++) {
    if (i.toString().includes(threeString)) {
      outputString += "Won't you be my neighbor?, ";
    } else if (i.toString().includes(twoString)) {
      outputString += "Boop!, ";
    } else if (i.toString().includes(oneString)) {
      outputString += "Beep!, ";
    } else {
      outputString += `${i}, `;
    }
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