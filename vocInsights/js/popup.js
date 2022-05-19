/*pop up*/

/* aside */
// (function(){
//   const stageElem = document.querySelector('.side-nav');

//   let currentItem; 
  
//   function activate(elem) {
//       elem.classList.add('on');
//       currentItem = elem;
//   }

//   function inactivate(elem) {
//     const open = $('.side-nav li').attr('class');
//      if(open == 'uk-open') {
//       elem.classList.add('on');
//      } else {
//       elem.classList.remove('on');
//      }
//   }

//   function doorHandler(e) {
//       const targetElem = e.target;

//       if(currentItem) {
//           inactivate(currentItem);          
//       }

//       if(targetElem.classList.contains('link')) {
//           activate(targetElem.parentNode);
//       }
//   };

//   stageElem.addEventListener('click', doorHandler);

//   activate(document.querySelector('.side-nav li div'));
// })();

$('.accordion-item .heading').on('click', function(e) {
  e.preventDefault();

  // Add the correct active class
  if($(this).closest('.accordion-item').hasClass('active')) {
      // Remove active classes
      $('.accordion-item').removeClass('active');
  } else {
      // Remove active classes
      $('.accordion-item').removeClass('active');

      // Add the active class
      $(this).closest('.accordion-item').addClass('active');
  }

  // Show the content
  var $content = $(this).next();
  $content.slideToggle(100);
  $('.accordion-item .content').not($content).slideUp('fast');
});


/* performance analysis */

var swiper = new Swiper(".screenSlide", {
  slidesPerView: 10,
  spaceBetween: 11,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

function ViewDashboard2(){  
  

 //  var popupCheck = null;
 // if(popupCheck == null){
 //   popupCheck = window.open("viewList.html", "View List", "_blank", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
 // } else {
 //   if (popupCheck.closed) {
 //     popupCheck = window.open("viewList.html", "View List",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
 //   }
 // }
 // popupCheck.focus();


 window.open("dashboard2.html", "Dashboard2", "height=" + screen.height + ", width=" + screen.width, "scrollbars=yes, resizable=yes, fullscreen=yes");
  


  //  if(document.getElementById("viewList").style.display=="none"){
  //     document.getElementById("viewList").style.display='inline'
  //    var popup = $('#viewList');
  //    var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
  //    var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
  //    popup.css({'left':left,'top':top});

  //  }else{
  //     document.getElementById("viewList").style.display='none'
  //  }
}


function ViewList(){  
  
   var popHeight = 486;                                      // 띄울 팝업창 높이   
   var popWidth = 963;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

  //  var popupCheck = null;
  // if(popupCheck == null){
  //   popupCheck = window.open("viewList.html", "View List", "_blank", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  // } else {
  //   if (popupCheck.closed) {
  //     popupCheck = window.open("viewList.html", "View List",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  //   }
  // }
  // popupCheck.focus();


  window.open("viewList.html", "View List", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
   


   //  if(document.getElementById("viewList").style.display=="none"){
   //     document.getElementById("viewList").style.display='inline'
   //    var popup = $('#viewList');
   //    var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //    var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //    popup.css({'left':left,'top':top});

   //  }else{
   //     document.getElementById("viewList").style.display='none'
   //  }
 }

 function ViewAlert(){
 
   var popHeight = 410;                                      // 띄울 팝업창 높이   
   var popWidth = 1010;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

  //  if(popupCheck == null){
  //   popupCheck =  window.open("viewAlert.html", "View Alert",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  // } else {
  //   if (popupCheck.closed) {
  //     popupCheck =  window.open("viewAlert.html", "View Alert",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  //   }
  // }
  // popupCheck.focus();
 console.log(winX);
 console.log(winWidth);
 console.log(popWidth);
  window.open("viewAlert.html", "View Alert", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  

//     if(document.getElementById("viewAlert").style.display=="none"){
//        document.getElementById("viewAlert").style.display='inline'
//        var popup = $('#viewAlert');
//        var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
//        var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
//        popup.css({'left':left,'top':top});

//     }else{
//        document.getElementById("viewAlert").style.display='none'
//     }
 }


 function ViewUser(){

   var popHeight = 410;                                      // 띄울 팝업창 높이   
   var popWidth = 592;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

  //  if(popupCheck == null){
  //   popupCheck =  window.open("viewUser.html", "View User",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  // } else {
  //   if (popupCheck.closed) {
  //     popupCheck =  window.open("viewUser.html", "View User",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  //   }
  // }
  // popupCheck.focus();

  window.open("viewUser.html", "View User", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");

   

   //  if(document.getElementById("viewUser").style.display=="none"){
   //     document.getElementById("viewUser").style.display='inline'
   //     var popup = $('#viewUser');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});

   //  }else{
   //     document.getElementById("viewUser").style.display='none'
   //  }
 }

 function ViewManualHistory(){
  
   var popHeight = 470;                                      // 띄울 팝업창 높이   
   var popWidth = 860;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

  //  if(popupCheck == null){
  //   popupCheck =  window.open("viewManualHistory.html", "view Manual History",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  // } else {
  //   if (popupCheck.closed) {
  //     popupCheck =  window.open("viewManualHistory.html", "view Manual History",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  //   }
  // }
  // popupCheck.focus();

  window.open("viewManualHistory.html", "view Manual History", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");

   //  if(document.getElementById("viewManualHistory").style.display=="none"){
   //     document.getElementById("viewManualHistory").style.display='inline'
   //     var popup = $('#viewManualHistory');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("viewManualHistory").style.display='none'
   //  }
 }

 function ViewAutomationHistory(){

  var popHeight = 470;                                      // 띄울 팝업창 높이   
  var popWidth = 860;                                        // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

  //  if(popupCheck == null){
  //   popupCheck =  window.open("viewAutomationHistory.html", "",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  // } else {
  //   if (popupCheck.closed) {
  //     popupCheck =  window.open("viewAutomationHistory.html", "",  "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");
  //   }
  // }
  // popupCheck.focus();

  window.open("viewAutomationHistory.html", "ViewAutomationHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   // if(document.getElementById("viewAutomationHistory").style.display=="none"){
   //    document.getElementById("viewAutomationHistory").style.display='inline'
   //    var popup = $('#viewAutomationHistory');
   //    var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //    var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //    popup.css({'left':left,'top':top});
   // }else{
   //    document.getElementById("viewAutomationHistory").style.display='none'
   // }
} 

 function ViewManualResource(){
   var popHeight = 770;                                      // 띄울 팝업창 높이   
   var popWidth = 1044;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("viewManualResource.html", "ViewManualResource", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   //  if(document.getElementById("viewManualResource").style.display=="none"){
   //     document.getElementById("viewManualResource").style.display='inline'
   //     var popup = $('#viewManualResource');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("viewManualResource").style.display='none'
   //  }
 }

 function ViewAutomationResource(){
   var popHeight = 770;                                      // 띄울 팝업창 높이   
   var popWidth = 1044;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("viewAutomationResource.html", "ViewAutomationResource", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+",location=no, status=no, toolbar=no, scrollbars=yes, resizable=yes");

   // if(document.getElementById("viewAutomationResource").style.display=="none"){
   //    document.getElementById("viewAutomationResource").style.display='inline'
   //    var popup = $('#viewAutomationResource');
   //    var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //    var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //    popup.css({'left':left,'top':top});
   // }else{
   //    document.getElementById("viewAutomationResource").style.display='none'
   // }
}

 function AddManualHistory(){
  var popHeight = 470;                                      // 띄울 팝업창 높이   
  var popWidth = 860;                                         // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("addManualHistory.html", "AddManualHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");

   //  if(document.getElementById("addManualHistory").style.display=="none"){
   //     document.getElementById("addManualHistory").style.display='inline'
   //     var popup = $('#addManualHistory');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
       
   //  }else{
   //     document.getElementById("addManualHistory").style.display='none'
   //  }
 }

 function AddManualHistoryFileUpload(){
   var popHeight = 110;                                      // 띄울 팝업창 높이   
   var popWidth = 280;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("addManualHistoryFileUpload.html", "AddManualHistoryFileUpload", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=no, resizable=no");


//    if(document.getElementById("addManualHistoryFileUpload").style.display=="none"){
//       document.getElementById("addManualHistoryFileUpload").style.display='inline'
//       var popup = $('#addManualHistoryFileUpload');
//       var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
//       var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
//       popup.css({'left':left,'top':top});
      
//    }else{
//       document.getElementById("addManualHistoryFileUpload").style.display='none'
//    }
}

function WebManualTest(){
  var popHeight = 900;                                      // 띄울 팝업창 높이   
  var popWidth = 1000;                                       // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight;	  // 현재창의 높이
  var winWidth = document.body.clientWidth;	  // 현재창의 너비

  var winX = window.screenLeft;	                          // 현재창의 x좌표
  var winY = window.screenTop;	                          // 현재창의 y좌표      

  var popX = winX + (winWidth - popWidth)/2;
  var popY = winY + (winHeight - popHeight)/2;

  window.open("webManualTest.html", "WebManualTest", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=no, resizable=no");


//    if(document.getElementById("addManualHistoryFileUpload").style.display=="none"){
//       document.getElementById("addManualHistoryFileUpload").style.display='inline'
//       var popup = $('#addManualHistoryFileUpload');
//       var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
//       var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
//       popup.css({'left':left,'top':top});
     
//    }else{
//       document.getElementById("addManualHistoryFileUpload").style.display='none'
//    }
}

 function ModifyManualHistory(){
  var popHeight = 470;                                      // 띄울 팝업창 높이   
  var popWidth = 860;                                      // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("ModifyManualHistory.html", "ModifyManualHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   //  if(document.getElementById("modifyManualHistory").style.display=="none"){
   //     document.getElementById("modifyManualHistory").style.display='inline'
   //     var popup = $('#modifyManualHistory');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("modifyManualHistory").style.display='none'
   //  }
 }

 function AddAutomationHistory(){
  var popHeight = 470;                                      // 띄울 팝업창 높이   
  var popWidth = 860;                                        // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("addAutomationHistory.html", "AddAutomationHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   // if(document.getElementById("addAutomationHistory").style.display=="none"){
   //    document.getElementById("addAutomationHistory").style.display='inline'
   //    var popup = $('#addAutomationHistory');
   //    var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //    var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //    popup.css({'left':left,'top':top});
      
   // }else{
   //    document.getElementById("addAutomationHistory").style.display='none'
   // }
}

 function DailyCrashTable(){
   var popHeight = 590;                                      // 띄울 팝업창 높이   
   var popWidth = 1120;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("dailyCrashTable.html", "DailyCrashTable", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   //  if(document.getElementById("dailyCrashTable").style.display=="none"){
   //     document.getElementById("dailyCrashTable").style.display='inline'
   //     var popup = $('#dailyCrashTable');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("dailyCrashTable").style.display='none'
   //  }
 }

 function ViewPerformanceReport(){
  var popHeight = 620;                                      // 띄울 팝업창 높이   
  var popWidth = 1160;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("viewPerformanceReport.html", "ViewPerformanceReport", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");

   //  if(document.getElementById("viewPerformanceReport").style.display=="none"){
   //     document.getElementById("viewPerformanceReport").style.display='inline'
   //     var popup = $('#viewPerformanceReport');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("viewPerformanceReport").style.display='none'
   //  }
 }

 function ViewResourceTop5(){
   var popHeight = 620;                                      // 띄울 팝업창 높이   
   var popWidth = 1560;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("viewResourceTop5.html", "ViewResourceTop5", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   //  if(document.getElementById("viewResourceTop5").style.display=="none"){
   //     document.getElementById("viewResourceTop5").style.display='inline'
   //     var popup = $('#viewResourceTop5');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("viewResourceTop5").style.display='none'
   //  }
 }

 function UserReviewGrade(){
   var popHeight = 590;                                      // 띄울 팝업창 높이   
   var popWidth = 1090;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("userReviewGrade.html", "userReviewGrade", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   //  if(document.getElementById("userReviewGrade").style.display=="none"){
   //     document.getElementById("userReviewGrade").style.display='inline'
   //     var popup = $('#userReviewGrade');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   //  }else{
   //     document.getElementById("userReviewGrade").style.display='none'
   //  }
 }

 function ViewTop5Review(){
   var popHeight = 494;                                      // 띄울 팝업창 높이   
   var popWidth = 864;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("viewTop5Review.html", "ViewTop5Review", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   // if(document.getElementById("viewTop5Review").style.display=="none"){
   //    document.getElementById("viewTop5Review").style.display='inline'
   //    var popup = $('#viewTop5Review');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   // }else{
   //    document.getElementById("viewTop5Review").style.display='none'
   // }
}

function AddVocHistory(){
   var popHeight = 410;                                      // 띄울 팝업창 높이   
   var popWidth = 942;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("addVocHistory.html", "AddVocHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   // if(document.getElementById("addVocHistory").style.display=="none"){
   //    document.getElementById("addVocHistory").style.display='inline'
   //    var popup = $('#addVocHistory');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   // }else{
   //    document.getElementById("addVocHistory").style.display='none'
   // }
}

function ModifyVocHistory(){
   var popHeight = 410;                                      // 띄울 팝업창 높이   
   var popWidth = 942;                                       // 띄울 팝업창 너비

   var winHeight = document.body.clientHeight;	  // 현재창의 높이
   var winWidth = document.body.clientWidth;	  // 현재창의 너비

   var winX = window.screenLeft;	                          // 현재창의 x좌표
   var winY = window.screenTop;	                          // 현재창의 y좌표      

   var popX = winX + (winWidth - popWidth)/2;
   var popY = winY + (winHeight - popHeight)/2;

   window.open("modifyVocHistory.html", "ModifyVocHistory", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


   // if(document.getElementById("modifyVocHistory").style.display=="none"){
   //    document.getElementById("modifyVocHistory").style.display='inline'
   //    var popup = $('#modifyVocHistory');
   //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
   //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
   //     popup.css({'left':left,'top':top});
   // }else{
   //    document.getElementById("modifyVocHistory").style.display='none'
   // }
}

function ReservePerformance(){
  var popHeight = 854;                                      // 띄울 팝업창 높이   
  var popWidth = 1500;                                       // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight;	  // 현재창의 높이
  var winWidth = document.body.clientWidth;	  // 현재창의 너비

  var winX = window.screenLeft;	                          // 현재창의 x좌표
  var winY = window.screenTop;	                          // 현재창의 y좌표      

  var popX = winX + (winWidth - popWidth)/2;
  var popY = winY + (winHeight - popHeight)/2;

  window.open("reservePerformance.html", "ReservePerformance", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


  // if(document.getElementById("modifyVocHistory").style.display=="none"){
  //    document.getElementById("modifyVocHistory").style.display='inline'
  //    var popup = $('#modifyVocHistory');
  //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
  //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
  //     popup.css({'left':left,'top':top});
  // }else{
  //    document.getElementById("modifyVocHistory").style.display='none'
  // }
}

function ResultPerformance(){
  var popHeight = 890;                                      // 띄울 팝업창 높이   
  var popWidth = 1500;                                       // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight;	  // 현재창의 높이
  var winWidth = document.body.clientWidth;	  // 현재창의 너비

  var winX = window.screenLeft;	                          // 현재창의 x좌표
  var winY = window.screenTop;	                          // 현재창의 y좌표      

  var popX = winX + (winWidth - popWidth)/2;
  var popY = winY + (winHeight - popHeight)/2;

  window.open("resultPerformance.html", "ResultPerformance", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


  // if(document.getElementById("modifyVocHistory").style.display=="none"){
  //    document.getElementById("modifyVocHistory").style.display='inline'
  //    var popup = $('#modifyVocHistory');
  //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
  //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
  //     popup.css({'left':left,'top':top});
  // }else{
  //    document.getElementById("modifyVocHistory").style.display='none'
  // }
}

function ViewResponseTime(){
  var popHeight = 890;                                      // 띄울 팝업창 높이   
  var popWidth = 1500;                                       // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight;	  // 현재창의 높이
  var winWidth = document.body.clientWidth;	  // 현재창의 너비

  var winX = window.screenLeft;	                          // 현재창의 x좌표
  var winY = window.screenTop;	                          // 현재창의 y좌표      

  var popX = winX + (winWidth - popWidth)/2;
  var popY = winY + (winHeight - popHeight)/2;

  window.open("viewResponseTime.html", "ViewResponseTime", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


  // if(document.getElementById("modifyVocHistory").style.display=="none"){
  //    document.getElementById("modifyVocHistory").style.display='inline'
  //    var popup = $('#modifyVocHistory');
  //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
  //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
  //     popup.css({'left':left,'top':top});
  // }else{
  //    document.getElementById("modifyVocHistory").style.display='none'
  // }
}

function ViewErrorTrace(){
  var popHeight = 405;                                      // 띄울 팝업창 높이   
  var popWidth = 1150;                                       // 띄울 팝업창 너비

  var winHeight = document.body.clientHeight;	  // 현재창의 높이
  var winWidth = document.body.clientWidth;	  // 현재창의 너비

  var winX = window.screenLeft;	                          // 현재창의 x좌표
  var winY = window.screenTop;	                          // 현재창의 y좌표      

  var popX = winX + (winWidth - popWidth)/2;
  var popY = winY + (winHeight - popHeight)/2;

  window.open("viewErrorTrace.html", "ViewErrorTrace", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


  // if(document.getElementById("modifyVocHistory").style.display=="none"){
  //    document.getElementById("modifyVocHistory").style.display='inline'
  //    var popup = $('#modifyVocHistory');
  //     var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
  //     var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
  //     popup.css({'left':left,'top':top});
  // }else{
  //    document.getElementById("modifyVocHistory").style.display='none'
  // }
}

function ViewReviewContent(){
  // var popHeight = 500;                                      // 띄울 팝업창 높이   
  // var popWidth = 1150;                                       // 띄울 팝업창 너비

  // var winHeight = document.body.clientHeight;	  // 현재창의 높이
  // var winWidth = document.body.clientWidth;	  // 현재창의 너비

  // var winX = window.screenLeft;	                          // 현재창의 x좌표
  // var winY = window.screenTop;	                          // 현재창의 y좌표      

  // var popX = winX + (winWidth - popWidth)/2;
  // var popY = winY + (winHeight - popHeight)/2;

  // window.open("viewErrorTrace.html", "ViewErrorTrace", "top="+popY+", left="+popX+",width="+popWidth+",height="+popHeight+", scrollbars=yes, resizable=yes");


  if(document.getElementById("viewReviewContent").style.display=="none"){
     document.getElementById("viewReviewContent").style.display='inline'
     var popup = $('#viewReviewContent');
      var left = ( $(window).scrollLeft() + ($(window).width() - popup.width()) / 2 );
      var top = ( $(window).scrollTop() + ($(window).height() - popup.height()) / 2 );
      popup.css({'left':left,'top':top});
  }else{
     document.getElementById("viewReviewContent").style.display='none'
  }
}


