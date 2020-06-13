// Business Logic
const mrRoboger = (number, name, direction) => {
  let outputString = "";
  const oneString = "1";
  const twoString = "2";
  const threeString = "3";

  if (direction === "forward") {
    for (i = 0; i <= number; i++) {
      if (i.toString().includes(threeString)) {
        outputString += `${name}, won't you be my neighbor?, `;
      } else if (i.toString().includes(twoString)) {
        outputString += "Boop!, ";
      } else if (i.toString().includes(oneString)) {
        outputString += "Beep!, ";
      } else {
        outputString += `${i}, `;
      }
    }
  } else {
    for (i = number; i >= 0; i--) {
      if (i.toString().includes(threeString)) {
        outputString += `${name}, won't you be my neighbor?, `;
      } else if (i.toString().includes(twoString)) {
        outputString += "Boop!, ";
      } else if (i.toString().includes(oneString)) {
        outputString += "Beep!, ";
      } else {
        outputString += `${i}, `;
      }
    }
  }

  return outputString.slice(0, -2);
}


// UI Logic
$(document).ready(function() {
  $("form#input").submit(() => {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());
    const nameInput = $("#name").val()
    const directionInput = $("input:radio[name=direction]:checked").val()

    $("#output").text(mrRoboger(numberInput, nameInput, directionInput));

    $(".hidden").show();
  })
});