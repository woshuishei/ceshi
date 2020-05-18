var box = document.getElementsByTagName('div')
//获取随机颜色
function color_select() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb" + '(' + r + ',' + g + ',' + b + ')';
    return rgb;
}
//随机上色并查重
function num_select() {
    var num1 = Math.floor(Math.random() * box.length);//范围内取数字
    var num2 = Math.floor(Math.random() * box.length);
    var num3 = Math.floor(Math.random() * box.length);
    if (num1 != num2 && num2 != num3 && num1 != num3) {
        box[num1].style.background = color_select();
        box[num2].style.background = color_select();
        box[num3].style.background = color_select();
    } else {//有重复
        num_select()
    }
}

//清除颜色
function color_reset() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "#ffa600";
    }
}

//绑定开始计时变色
var x = null;
function color_start() {
    clearInterval(x);
    color_reset();
    x = setInterval(function () {
        color_reset();
        num_select();
    }, 1000);
}

//绑定停止计时器并清除颜色
function color_stop() {
    clearInterval(x);
    color_reset();
}
