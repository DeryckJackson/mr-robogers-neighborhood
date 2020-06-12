// Business Logic
const mrRoboger = (number, name) => {
  let outputString = "";
  const oneString = "1";
  const twoString = "2";
  const threeString = "3";

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

  return outputString.slice(0, -2);
}

const mrRobogerBackwards = (number, name) => {
  let outputString = "";
  const oneString = "1";
  const twoString = "2";
  const threeString = "3";

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

  return outputString.slice(0, -2);
}


// UI Logic
$(document).ready(function() {
  $("form#input").submit(() => {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());
    const nameInput = $("#name").val()

    if ($("input:radio[name=fwd-back]:checked").val() === "forward") {
      $("#output").text(mrRoboger(numberInput, nameInput));
    } else {
      $("#output").text(mrRobogerBackwards(numberInput, nameInput));
    }
    $(".hidden").show();
  })
});