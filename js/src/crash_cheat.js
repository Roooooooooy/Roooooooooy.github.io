<!--±ÀÀ£ÆÛÆ­-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '¨╭(°A°`)╮ 快回来陪roy~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '(ฅ>ω<*ฅ) 嘿嘿~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});