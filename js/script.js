var options = ["Home", "Main Hive", "Logout", "About Us"];
var menuAnimation = false;
var index = 0;

$(function() {

  $("#menuButton").on("click", function() {
    openMenu();
  });

  $("#menuButton").hover(
  function() {
    $( this ).attr("src","assets/menuactive.svg");
  }, function() {
    $( this ).attr("src","assets/menu.svg");
  }
);

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
    $(".menuOption").css("visibility", "visible");
    $("#menuContainer").addClass("menuOpen");
    $("#menuButton").attr("src","assets/menuactive.svg");
    $("#menuButton").unbind('mouseenter mouseleave')
    menuAnimation = true;
    window.setTimeout(function() {
      $("#menuContainer").removeClass("menuOpen");
      $("#menuContainer").css("top", "9%");
      menuAnimation = false;
    }, 1250);
  }
}

function closeMenu() {
  if (!menuAnimation) {
    $("#menuContainer").addClass("menuClose");
    $("#menuButton").attr("src","assets/menu.svg");

  $("#menuButton").hover(
    function() {
      $( this ).attr("src","assets/menuactive.svg");
    }, function() {
      $( this ).attr("src","assets/menu.svg");
    }
  );

    menuAnimation = true;
    window.setTimeout(function() {
        $("#menuContainer").removeClass("menuClose");
        $("#menuContainer").css("top", "-30%");
        $(".menuOption").css("visibility", "hidden");
        menuAnimation = false;
    }, 1250);
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
    divToPush.html("<img src='assets/menuitem.svg' class='menuImg'><div class='menuText'>" + options[i] + "</div>");
    if(i == 2){divToPush.attr("onclick", "$('#FBButton').click()");}else{
    divToPush.attr("onclick", "setPage(" + i + ")");
    }
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility", "hidden");
  $(".menuImg").hover(
  function() {
    $( this ).attr("src","assets/menuitemactive.svg");
  }, function() {
    $( this ).attr("src","assets/menuitem.svg");
  }
);
$(".menuText").hover(
function() {
  ($( this ).parent()).children(".menuImg").attr("src","assets/menuitemactive.svg");
}, function() {
  ($( this ).parent()).children(".menuImg").attr("src","assets/menuitem.svg");
}
);
}

function setPage(newIndex){
  if(newIndex == 0){

    if(index == 1){
      //animation 1 to 0
    }else{
      //animation 2 to 1
    }


    $("#contentContainer").css("visibility","hidden");
    $("#skyContainer").css("visibility","visible");
    setHomeText();
  }else if (newIndex == 1){

    if(index == 0){
      //animation 0 to 1
    }else{
      //animation 2 to 1
    }

    $("#contentContainer").css("visibility","visible");
    $("#skyContainer").css("visibility","hidden");
  } else if (newIndex == 2){

    if(index == 0){
      //animation 0 to 2
    }else{
      //animation 1 to 2
    }

    $("#contentContainer").css("visibility","visible");
    $("#skyContainer").css("visibility","hidden");
  }
}

function constructMainHive(){

}

function hideMainHive(){

}

function constructAbout(){

}

function hideAbout(){

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

function logout(){
  console.log("needed");
};
