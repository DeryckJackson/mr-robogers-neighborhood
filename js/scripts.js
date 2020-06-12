


// UI Logic
$(document).ready(function() {
  $("form#input").submit(() => {
    event.preventDefault();
    const input = $("#number").val();

    $("#output").text(input);
    $(".hidden").show();
  })
});