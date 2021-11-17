<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         //$('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '¨╭(°A°`)╮ 快回来陪roy~';
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 嘿嘿~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });