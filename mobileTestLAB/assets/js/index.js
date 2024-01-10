$(function () {
  $signOpen = $(".auth-open");
  $resetPassword = $(".resetPw-open");
  $close_btn = $(".auth-close");
  //open modal
  $signOpen.on("click", function (event) {
    if ($(event.target).is($signOpen)) {
      // on mobile open the submenu
      $(".auth-container").show();
      $(".resetPassword").hide();
    }
  });
  $resetPassword.on("click", function (event) {
    if ($(event.target).is($resetPassword)) {
      // on mobile open the submenu
      $(".resetPassword").show();
    }
  });

  //close modal
  $close_btn.on("click", function (event) {
    if (
      $(event.target).is(".auth-container") ||
      $(event.target).is(".auth-close")
    ) {
      $(".auth-container").hide();
    }
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".auth-container").hide();
    }
  });
});

function resetPw() {
  $(".resetPassword").show();
}

// sidebar-menu toggle
$(function () {
  // $(".nav-toggle-icon").on("click", function () {
  //   $(".wrapper").toggleClass("toggled");
  // });

  // $(".mobile-menu-button").on("click", function () {
  //   $(".wrapper").addClass("toggled");
  // });

  $(function () {
    for (
      var e = window.location,
        o = $(".metismenu li a")
          .filter(function () {
            return this.href == e;
          })
          .addClass("")
          .parent()
          .addClass("mm-active");
      o.is("li");

    )
      o = o.parent("").addClass("mm-show").parent("").addClass("mm-active");
  });

  $(".collapse-menu").click(function () {
    $(".wrapper").hasClass("toggled")
      ? $(".wrapper").removeClass("toggled")
      : $(".wrapper").addClass("toggled");
  });

  // $(document).ready(function () {
  //   $(window).on("scroll", function () {
  //     $(this).scrollTop() > 300
  //       ? $(".back-to-top").fadeIn()
  //       : $(".back-to-top").fadeOut();
  //   }),
  //     $(".back-to-top").on("click", function () {
  //       return (
  //         $("html, body").animate(
  //           {
  //             scrollTop: 0,
  //           },
  //           600
  //         ),
  //         !1
  //       );
  //     });
  // });

  $(".dark-mode-icon").on("click", function () {
    if ($(".mode-icon ion-icon").attr("name") == "sunny") {
      $(".mode-icon ion-icon").attr("name", "moon");
      $(".mode-icon").css("color", "#293445");
      $("html").attr("class", "light-theme");
    } else {
      $(".mode-icon ion-icon").attr("name", "sunny");
      $(".mode-icon").css("color", "#ddb171");
      $("html").attr("class", "dark-theme");
    }
  }),
    // Theme switcher

    $("#LightTheme").on("click", function () {
      $("html").attr("class", "light-theme");
    }),
    $("#DarkTheme").on("click", function () {
      $("html").attr("class", "dark-theme");
    }),
    $("#SemiDark").on("click", function () {
      $("html").attr("class", "semi-dark");
    });
});

// dataTable
$(function () {
  $(document).ready(function () {
    $(".dataTable").DataTable();
    var disableBtn = $(".remove");
    var checkBox = $(".remove")
      .parent("div")
      .parent("td")
      .parent("tr")
      .children("td")
      .children("input");
    // var disableTr = disableBtn.attr("disabled", true);
    // if (disableBtn.attr("disabled", true)) {
    disableBtn.parent("div").parent("td").parent("tr").addClass("disabled");
    checkBox.attr("disabled", true);
    // }
  });
});

// plus minus
function count(type) {
  const time = document.getElementById("testTime");

  let number = time.innerText;

  if (type === "plus") {
    number = parseInt(number) + 5;
  } else if (type === "minus") {
    number = parseInt(number) - 5;
    if (number <= 5) {
      number = 5;
    }
  }

  time.innerText = number;
}

function countA(type) {
  const time = document.getElementById("testTimeA");

  let number = time.innerText;

  if (type === "plus") {
    number = parseInt(number) + 5;
  } else if (type === "minus") {
    number = parseInt(number) - 5;
    if (number <= 5) {
      number = 5;
    }
  }

  time.innerText = number;
}

function countB(type) {
  const time = document.getElementById("testTimeB");

  let number = time.innerText;

  if (type === "plus") {
    number = parseInt(number) + 5;
  } else if (type === "minus") {
    number = parseInt(number) - 5;
    if (number <= 5) {
      number = 5;
    }
  }

  time.innerText = number;
}

// report
function report() {
  var popHeight = 880; // 띄울 팝업창 높이
  var popWidth = 800; // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight; // 현재창의 높이
  var winWidth = document.body.clientWidth; // 현재창의 너비

  var winX = window.screenLeft; // 현재창의 x좌표
  var winY = window.screenTop; // 현재창의 y좌표

  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;

  window.open(
    "reportPopup.html",
    "Report",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=no, resizable=yes"
  );
}

function resultRule() {
  var popHeight = 880; // 띄울 팝업창 높이
  var popWidth = 1200; // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight; // 현재창의 높이
  var winWidth = document.body.clientWidth; // 현재창의 너비

  var winX = window.screenLeft; // 현재창의 x좌표
  var winY = window.screenTop; // 현재창의 y좌표

  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;

  window.open(
    "resultRule.html",
    "Rule Based Tool Result",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=no, resizable=yes"
  );
}

function reportRule() {
  var popHeight = 880; // 띄울 팝업창 높이
  var popWidth = 1050; // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight; // 현재창의 높이
  var winWidth = document.body.clientWidth; // 현재창의 너비

  var winX = window.screenLeft; // 현재창의 x좌표
  var winY = window.screenTop; // 현재창의 y좌표

  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;

  window.open(
    "reportRule.html",
    "Rule Based Tool Report",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=no, resizable=yes"
  );
}

function resultScript() {
  var popHeight = 880; // 띄울 팝업창 높이
  var popWidth = 1200; // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight; // 현재창의 높이
  var winWidth = document.body.clientWidth; // 현재창의 너비

  var winX = window.screenLeft; // 현재창의 x좌표
  var winY = window.screenTop; // 현재창의 y좌표

  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;

  window.open(
    "resultScript.html",
    "Script Based Tool Result",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=no, resizable=yes"
  );
}

function reportScript() {
  var popHeight = 880; // 띄울 팝업창 높이
  var popWidth = 1050; // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight; // 현재창의 높이
  var winWidth = document.body.clientWidth; // 현재창의 너비

  var winX = window.screenLeft; // 현재창의 x좌표
  var winY = window.screenTop; // 현재창의 y좌표

  var popX = winX + (winWidth - popWidth) / 2;
  var popY = winY + (winHeight - popHeight) / 2;

  window.open(
    "reportScript.html",
    "Script Based Tool Report",
    "top=" +
      popY +
      ", left=" +
      popX +
      ",width=" +
      popWidth +
      ",height=" +
      popHeight +
      ", scrollbars=no, resizable=yes"
  );
}
