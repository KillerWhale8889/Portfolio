function connectDevice() {
  dropClose
    .parent(".menu-content-header")
    .parent(".menu-content")
    .parent(".dropdown-menu")
    .removeClass("show");
  dropClose
    .parent(".menu-content-header")
    .parent(".menu-content")
    .parent(".dropdown-menu")
    .parent("li")
    .find("a")
    .removeClass("show");

  $(".page-content-blank").addClass("none");
  $(".page-content").addClass("view");
  var maskHeight = $(".device-container > img").height();
  var maskWidth = $(".device-container > img").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:74%; margin-left:34%; width:50px; height: auto;'/>";
  loadingImg += "</div>";

  $(".device-container").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);
}

function addObject() {
  $(".scriptBox ul").addClass("view");
}

function runScript() {
  var maskHeight = $(".device-container > img").height();
  var maskWidth = $(".device-container > img").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:74%; margin-left:34%; width:50px; height: auto;'/>";
  loadingImg += "</div>";

  $(".device-container").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);
  $(".device-container > img").attr(
    "src",
    "assets/images/testLab/ruleimg/script.gif"
  );
}

function objInfo01() {
  $(".objInfo > img").attr("src", "assets/images/testLab/ruleimg/02.jpg");
  $(".objInfo").removeClass("none");
}

function objInfo02() {
  $(".objInfo > img").attr("src", "assets/images/testLab/ruleimg/04.jpg");
  $(".objInfo").removeClass("none");
}

function objInfo03() {
  $(".objInfo > img").attr("src", "assets/images/testLab/ruleimg/06.jpg");
  $(".objInfo").removeClass("none");
}

$(".objInfo > .tab-close").on("click", function () {
  $(".objInfo").addClass("none");
});

function closeLoading() {
  $("#mask, #loadingImg").hide();
  $("#mask, #loadingImg").remove();
  $("#mask2, #loadingImg2").hide();
  $("#mask2, #loadingImg2").remove();
}

function addObj01() {
  $(".obj_01").removeClass("none");
  var maskHeight = $(".device-container > img").height();
  var maskWidth = $(".device-container > img").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:74%; margin-left:34%; width:50px; height: auto;'/>";
  loadingImg += "</div>";

  $(".device-container").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);

  $(".device-container > img").attr(
    "src",
    "assets/images/testLab/ruleimg/03.jpg"
  );
}

function addObj02() {
  $(".obj_02").removeClass("none");
  var maskHeight = $(".device-container > img").height();
  var maskWidth = $(".device-container > img").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:74%; margin-left:34%; width:50px; height: auto;'/>";
  loadingImg += "</div>";

  $(".device-container").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);
  $(".device-container > img").attr(
    "src",
    "assets/images/testLab/ruleimg/05.jpg"
  );
}

function addObj03() {
  $(".obj_03").removeClass("none");
  var maskHeight = $(".device-container > img").height();
  var maskWidth = $(".device-container > img").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:74%; margin-left:34%; width:50px; height: auto;'/>";
  loadingImg += "</div>";

  $(".device-container").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);
  $(".device-container > img").attr(
    "src",
    "assets/images/testLab/ruleimg/07.jpg"
  );
}

function excelDown() {
  var fileName = "script.csv";
  let excelTable = "";
  excelTable = "{'index_number': 0 'class_name': '혜택'},";
  excelTable = excelTable + "{'index_number': 0 'class_name': '브랜드혜택'},";
  excelTable = excelTable + "{'index_number': 0 'class_name': '세일'},";

  var data_type = "data:application/vnd.ms-excel";
  var ua = window.navigator.userAgent;
  let blob = new Blob(["\ufeff" + excelTable], {
    type: "application/csv;charset=utf-8;",
  });

  let anchor = window.document.createElement("a");

  anchor.href = window.URL.createObjectURL(blob);
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();

  //다운로드 후 제거
  document.body.removeChild(anchor);
}

/* script scenario */
function openScriptScr() {
  $(".page-content-blank").addClass("none");
  $(".page-content-blank").removeClass("view");
  $(".script-content-blank").addClass("view");
  $(".script-content-blank").removeClass("none");
}

function loadScript() {
  var maskHeight = $(".iframe").height();
  var maskWidth = $(".iframe").width();

  var mask =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg = "";

  loadingImg += " <div id='loadingImg'>";
  loadingImg +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:48%; margin-left:46%; width:80px; height: auto;'/>";
  loadingImg += "</div>";

  $(".iframe").append(mask);

  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.8",
  });

  $("#mask").show();

  $(".loadingImg").append(loadingImg);
  $("#loadingImg").show();

  setTimeout("closeLoading()", 300);

  var maskHeight2 = $(".iframe").height();
  var maskWidth2 = $(".iframe").width();

  var mask2 =
    "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:37px; top:0;'></div>";
  var loadingImg2 = "";

  loadingImg2 += " <div id='loadingImg'>";
  loadingImg2 +=
    " <img src='assets/images/loader2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:22%; margin-left:14%; width:50px; height: auto;'/>";
  loadingImg2 += "</div>";

  $(".scriptBox").append(mask2);

  $("#mask2").css({
    width: maskWidth2,
    height: maskHeight2,
    opacity: "0.8",
  });

  $("#mask2").show();

  $(".loadingImg2").append(loadingImg2);
  $("#loadingImg2").show();

  setTimeout("closeLoading()", 300);

  $(".script-content-blank").addClass("none");
  $(".script-content-blank").removeClass("view");
  $(".script-content").removeClass("none");
  $(".script-content").addClass("view");
}
