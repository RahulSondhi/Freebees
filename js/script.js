var options = ["Home", "Main Hive", "Settings", "About the Hive"];
var menuAnimation = false;
var index = 0;

$(function() {

  $("#menuButton").on("click", function() {
    openMenu();
  });

  $("#menuContainer").mouseleave(function() {
    closeMenu();
  });

  $("#logo").on("click", function() {
    stageIncrement(1);
  });

  setSky();
  setMenu();
  setHomeText();
});


function openMenu() {
  if (!menuAnimation) {
    $("#menuButtonContainer").css("visibility", "hidden");
    $(".menuOption").css("visibility", "visible");
    $("#menuContainer").addClass("menuOpen");
    menuAnimation = true;
    window.setTimeout(function() {
      $("#menuContainer").removeClass("menuOpen");
      $("#menuContainer").css("right", "0");
      menuAnimation = false;
    }, 750);
  }
}

function closeMenu() {
  if (!menuAnimation) {
    $("#menuContainer").addClass("menuClose");
    menuAnimation = true;
    window.setTimeout(function() {
        $("#menuContainer").removeClass("menuClose");
        $("#menuContainer").css("right", "-17%");
        $(".menuOption").css("visibility", "hidden");
        $("#menuButtonContainer").css("visibility", "visible");
        menuAnimation = false;
    }, 750);
  }
}

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

function setMenu() {
  for (var i = 0; i < options.length; i++) {
    var divToPush = $("<div></div>");
    divToPush.attr("id", "option" + i);
    divToPush.attr("class", "menuOption button");
    divToPush.html("<div class='menuText'>" + options[i] + "</div>");
    divToPush.attr("onclick", "setPage(" + i + ")");
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility", "hidden");
}

function setPage(index){
  if(index == 0){
    $("#contentContainer").css("visibility","hidden");
    $("#skyContainer").css("visibility","visible");
  }else{
    $("#contentContainer").css("visibility","visible");
    $("#skyContainer").css("visibility","hidden");
    setHomeText();
  }
}

function setHomeText(){
  var phrases = ["UnBEElievable Events","Buzzing Finds", "Look a FreeBEE"];
  var chosenphrase = "";
  var index = Math.floor(Math.random() * (phrases.length));
  chosenphrase = phrases[index];
  $("#logoText").html(chosenphrase);
}

function stageIncrement(increment){

  var newIndex= index + increment;
  if(newIndex <= options.length && newIndex > -1){
    index = newIndex;
  }else{
    index = 0;
  }

  setPage(index);
}
