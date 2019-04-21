window.onload = function () {
var oMin = document.getElementsByClassName('min')[0],
    oCover = document.getElementsByClassName('cover')[0],
    oMax = document.getElementsByClassName('max')[0],
    oMaximg = oMax.getElementsByTagName("img")[0];
    // 鼠标进入和移除事件小方块cover显示Max显示
oMin.onmouseenter = function () {
    oCover.style.display = "block";
    oMax.style.display = "block";
}
// 鼠标进入和移除事件小方块cover隐藏Max隐藏
oMin.onmouseleave = function () {
    oCover.style.display = "none";
    oMax.style.display = "none";
}
// 随鼠标位置，小方块cover定位位置
oMin.onmousemove = function (e) {
    //  获取鼠标X、Y位置
    // console.log(e.clientX);可以打印出来当前鼠标X位置
    var x = e.clientX-this.offsetLeft-oCover.offsetWidth/2;
    console.log(e.clientX);
    // 将鼠标位置定位在小方块中间  x=鼠标x位置 - 小方块距左边距离 - 小方块宽度一半（鼠标在小方块中间）
    var y = e.clientY-this.offsetTop-oCover.offsetHeight/2;
    // 确定一个方向，Y跟X一样，改下方向
    var minX= 0 ;
    var maxX = oMin.offsetWidth-oCover.offsetWidth;
    var minY= 0 ;
    var maxY = oMin.offsetHeight-oCover.offsetHeight;
    // 给小方块划定界限 minX最左，maxX最右
    if (x<=0) {
        x= minX;
    }else if (x>=maxX) {
        x= maxX;
    }
    if (y<=0) {
        y= minY;
    }else if (y>=maxY) {
        y= maxY;
    }
    // x,y的值给小方块定位
    oCover.style.left = x+"px";
    oCover.style.top = y+"px";
    // 随小方块cover位置，同比例定位max图片位置
    var imgX = x/maxX*(oMax.offsetWidth - oMaximg.offsetWidth);
    var imgY = y/maxY*(oMax.offsetHeight - oMaximg.offsetHeight);
    oMaximg.style.left = imgX+"px";
    oMaximg.style.top = imgY+"px";
    /* 大图xy位置
    console.log(imgX);
    console.log(imgy); */
}
}