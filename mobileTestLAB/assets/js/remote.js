var drop = $(".metismenu > li");
var dropClose = $(".right-close");

dropClose.click(function () {
  $(this)
    .parent(".menu-content-header")
    .parent(".menu-content")
    .parent(".dropdown-menu")
    .removeClass("show");
  $(this)
    .parent(".menu-content-header")
    .parent(".menu-content")
    .parent(".dropdown-menu")
    .parent("li")
    .find("a")
    .removeClass("show");
});

drop.click(function () {
  drop.not(this).find(".dropdown-menu").removeClass("show");
  drop
    .not(this)
    .find(".dropdown-menu")
    .parent("li")
    .find("a")
    .removeClass("show");
});

var Nav = (function () {
  var nav = $(".nav"),
    link = nav.find(".nav__link"),
    navH = nav.innerHeight();

  var switchPage = function () {
    return false;
  };

  var bindActions = function () {
    link.on("click", switchPage);
    $(document).on("ready", function () {
      page.css({
        transform: "translateY(" + navH + "px)",
        "-webkit-transform": "translateY(" + navH + "px)",
      });
    });
  };

  link.on("click", function () {
    $(".nav__item").removeClass("active");
    $(this).parents(".nav__item").addClass("active");

    var liveTabId = $("li.active").find("a.nav__link").attr("data-letter");
    $(".section").removeClass("section--active");
    $("section.cont_" + liveTabId).addClass("section--active");
  });

  var init = function () {
    bindActions();
  };

  return {
    init: init,
  };
})();

Nav.init();

$(".tab-close").on("click", function () {
  var liveTab = $(this).parent().find("a.nav__link").attr("data-letter");

  $(this).parent("li.nav__item").remove();
  $("section.cont_" + liveTab).remove(".section--active");

  if (
    $(".nav__list .nav__item.active").length == 0 &&
    $(".nav__list .nav__item").length > 0
  ) {
    var firsttab = $(".nav__list .nav__item:first-child");
    firsttab.addClass("active");
    $(".section:first-child").addClass("section--active");

    var liveTabId = $(".nav__item.active")
      .find("a.nav__link")
      .attr("data-letter");
    $("section.cont_" + liveTabId).addClass("section--active");
  }
});

var mybutton = document.getElementById("back-to-top");
function scrollFunction() {
  100 < document.body.scrollTop || 100 < document.documentElement.scrollTop
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.onscroll = function () {
  scrollFunction();
};

function testRemote() {
  window.open(
    "remoteLab.html",
    "Test Remote",
    "height=" + screen.height + ",width=" + screen.width + "fullscreen=yes"
  );
}

function testRemoteAI() {
  window.open(
    "remoteLabAI.html",
    "Test Remote AI",
    "height=" + screen.height + ",width=" + screen.width + "fullscreen=yes"
  );
}
