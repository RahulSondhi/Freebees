$(function() {
  setSky();
});

function setSky() {
  var time = new Date();
  $("#stage").addClass("sky-gradient-"+time.getHours());
  if (time.getHours() > 15 || time.getHours() < 8) {
    $("body").css("background-color", "#505050");
  } else {
    $("body").css("background-color", "#000");
  }
  window.setTimeout(function() {
      setSky();
  }, 60000);
}
