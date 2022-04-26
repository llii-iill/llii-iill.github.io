// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="https://gitee.com/li-il/pic_bed/raw/master/img/%E5%B1%B1_1.png"]').attr('href', "https://gitee.com/li-il/pic_bed/raw/master/img/%E5%B1%B1_1.png");
        document.title = '山回路转不见君Q^Q';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="https://gitee.com/li-il/pic_bed/raw/master/img/%E5%B1%B1_1.png"]').attr('href', "https://gitee.com/li-il/pic_bed/raw/master/img/%E5%B1%B1_1.png");
        document.title = '今来花似雪0w0';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
