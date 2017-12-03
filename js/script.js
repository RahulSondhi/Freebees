var options = ["Home", "Main Hive", "About Us"];
var menuAnimation = false;
var animation = false;
var index = 0;

$(function() {

  $("#menuButton").on("click", function() {
    openMenu();
  });

  $("#menuButton").hover(
    function() {
      $(this).attr("src", "assets/menuactive.svg");
    },
    function() {
      $(this).attr("src", "assets/menu.svg");
    }
  );

  $("#menuContainer").mouseleave(function() {
    closeMenu();
  });

  $("#logo").on("click", function() {
    setPage(1);
  });

  setSky();
  setMenu();
  setHomeText();

  $.getJSON("https://partner-api.groupon.com/deals.json?callback=?", {
      tsToken: "56c7c45c53a9636a43f52f4b89cf97242200142a",
      division_id: "new-york", //Set your local city
      //offset: 0,
      limit: 150
    })
    .done(function(data) {
      buildCoupon(data);
    });
});

function buildCoupon(data) {
  $.each(data.deals, function(i, v) {
    $title = $("<a href='" + v.dealUrl + "'>" + v.announcementTitle + "</a>", {
      html: v.announcementTitle,
      class: "group inner list-group-item-heading"
    }).wrap(function() {
      return "<div class='" + $(this).text() + "'></div>";
    });
    $price = $("<div/>", {
      html: v.options[0].price.formattedAmount,
      class: "price"
    });
    $thumbnail = $("<div/>", {
      class: "thumbnail"
    }).append($title);
    $deal = $("<div class='labelOptions'>", {
      class: "item"
    });
    $img = $("<img class='labelImgOptions' src='assets/events.svg'>", {
      class: "item"
    });
    $("#mainContentCoupon").append($deal);
    $deal.prepend($thumbnail);
    $thumbnail.append($img);
  });
}


function openMenu() {
  if (!menuAnimation && !animation) {
    $(".menuOption").css("visibility", "visible");
    $("#menuContainer").addClass("menuOpen");
    $("#menuButton").attr("src", "assets/menuactive.svg");
    $("#menuButton").unbind('mouseenter mouseleave')
    menuAnimation = true;
    window.setTimeout(function() {
      $("#menuContainer").removeClass("menuOpen");
      $("#menuContainer").css("top", "9%");
      menuAnimation = false;
    }, 250);
  }
}

function closeMenu() {
  if (!menuAnimation && !animation) {
    $("#menuContainer").addClass("menuClose");
    $("#menuButton").attr("src", "assets/menu.svg");

    $("#menuButton").hover(
      function() {
        $(this).attr("src", "assets/menuactive.svg");
      },
      function() {
        $(this).attr("src", "assets/menu.svg");
      }
    );

    menuAnimation = true;
    window.setTimeout(function() {
      $("#menuContainer").removeClass("menuClose");
      $("#menuContainer").css("top", "-30%");
      $(".menuOption").css("visibility", "hidden");
      menuAnimation = false;
    }, 250);
  }
}

function setSky() {
  var time = new Date();
  $("#stage").addClass("sky-gradient-" + time.getHours());
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
    divToPush.attr("onclick", "setPage(" + i + ")");
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility", "hidden");
  $(".menuImg").hover(
    function() {
      $(this).attr("src", "assets/menuitemactive.svg");
    },
    function() {
      $(this).attr("src", "assets/menuitem.svg");
    }
  );
  $(".menuText").hover(
    function() {
      ($(this).parent()).children(".menuImg").attr("src", "assets/menuitemactive.svg");
    },
    function() {
      ($(this).parent()).children(".menuImg").attr("src", "assets/menuitem.svg");
    }
  );
}

function setPage(newIndex) {
  if (!animation) {
    closeMenu();
    if (newIndex == 0) {

      if (index == 1) {
        $("#citySkyline").removeClass("Anim1to2");
        $("#citySkyline").removeClass("Anim1to3");
        $("#citySkyline").addClass("Anim2to1");
        $("#citySkyline").removeClass("Anim2to3");
        $("#citySkyline").removeClass("Anim3to2");
        $("#citySkyline").removeClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim2to1");
          $("#citySkyline").css("left", "0%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "hidden");
          $("#skyContainer").css("visibility", "visible");
        }, 500);
        hideMainHive();
        hideAbout();
      } else if (index == 2) {
        $("#citySkyline").removeClass("Anim1to2");
        $("#citySkyline").removeClass("Anim1to3");
        $("#citySkyline").removeClass("Anim2to1");
        $("#citySkyline").removeClass("Anim2to3");
        $("#citySkyline").removeClass("Anim3to2");
        $("#citySkyline").addClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim3to1");
          $("#citySkyline").css("left", "0%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "hidden");
          $("#skyContainer").css("visibility", "visible");
        }, 500);
        hideMainHive();
        hideAbout();
      }

    } else if (newIndex == 1) {

      if (index == 0) {
        $("#citySkyline").addClass("Anim1to2");
        $("#citySkyline").removeClass("Anim1to3");
        $("#citySkyline").removeClass("Anim2to1");
        $("#citySkyline").removeClass("Anim2to3");
        $("#citySkyline").removeClass("Anim3to2");
        $("#citySkyline").removeClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim1to2");
          $("#citySkyline").css("left", "-100%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "visible");
          constructMainHive();
        }, 500);
        hideAbout();
        $("#skyContainer").css("visibility", "hidden");
      } else if (index == 2) {
        $("#citySkyline").removeClass("Anim1to2");
        $("#citySkyline").removeClass("Anim1to3");
        $("#citySkyline").removeClass("Anim2to1");
        $("#citySkyline").removeClass("Anim2to3");
        $("#citySkyline").addClass("Anim3to2");
        $("#citySkyline").removeClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim3to2");
          $("#citySkyline").css("left", "-100%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "visible");
          constructMainHive();
        }, 500);
        hideAbout();
        $("#skyContainer").css("visibility", "hidden");
      }
    } else if (newIndex == 2) {

      if (index == 0) {
        $("#citySkyline").removeClass("Anim1to2");
        $("#citySkyline").addClass("Anim1to3");
        $("#citySkyline").removeClass("Anim2to1");
        $("#citySkyline").removeClass("Anim2to3");
        $("#citySkyline").removeClass("Anim3to2");
        $("#citySkyline").removeClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim1to3");
          $("#citySkyline").css("left", "-200%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "visible");
          constructAbout();
        }, 500);
        hideMainHive();
        $("#skyContainer").css("visibility", "hidden");
      } else if (index == 1) {
        $("#citySkyline").removeClass("Anim1to2");
        $("#citySkyline").removeClass("Anim1to3");
        $("#citySkyline").removeClass("Anim2to1");
        $("#citySkyline").addClass("Anim2to3");
        $("#citySkyline").removeClass("Anim3to2");
        $("#citySkyline").removeClass("Anim3to1");
        animation = true;
        window.setTimeout(function() {
          $("#citySkyline").removeClass("Anim2to3");
          $("#citySkyline").css("left", "-200%");
          animation = false;
          index = newIndex;
          $("#contentContainer").css("visibility", "visible");
          constructAbout();
        }, 500);
        hideMainHive();
        $("#skyContainer").css("visibility", "hidden");
      }
    }
  }
}

function constructMainHive() {
  $("#main").css("visibility", "visible");
  $("#mainContentCoupon").css("visibility", "visible");
  $("#label").html("Buzzing Deals");
}

function hideMainHive() {
  $("#main").css("visibility", "hidden");
  $("#mainContentCoupon").css("visibility", "hidden");
}

function constructAbout() {
  $("#main").css("visibility", "visible");
  $("#mainContentAbout").css("visibility", "visible");
  $("#label").html("About Us");
}

function hideAbout() {
  $("#main").css("visibility", "hidden");
    $("#mainContentAbout").css("visibility", "hidden");
}

function setHomeText() {
  var phrases = ["UnBEElievable", "Buzzing Finds", "A FreeBEE"];
  var chosenphrase = "";
  var index = Math.floor(Math.random() * (phrases.length));
  chosenphrase = phrases[index];
  $("#logoText").html(chosenphrase);
}

function stageIncrement(increment) {

  var newIndex = index + increment;
  if (newIndex <= options.length && newIndex > -1) {
    index = newIndex;
  } else {
    index = 0;
  }

  setPage(index);
}
