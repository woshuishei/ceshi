$(".arrows").click(function () {
    window.location.href = "./f-1.html"
});
$(".cross").click(function () {
    window.location.href = "./f.html"
});
var getArr = JSON.parse(sessionStorage.getItem("record")); //获取到的转化为数组
console.log(getArr);
function change() {
    $(".imgone").hide();
    $(".identity").hide();
}

change();
var x = 0;
var y = 1;
$(".footer").click(
    function () {
        x++;
        y++;
        // 通过奇偶数改变下方按钮中文字说明
        if (x == getArr.length * 2) {
            window.location.href = "./f2.html"
            $(".footer").unbind("click");//移除点击事件
        } else {
            if (x % 2 == 0) {//偶数余零
                $(".circle").text(x / 2 + 1); // 传递序号
                $(".footer").text("点击查看" + (x / 2 + 1) + "号");
            } else {
                $(".footer").text("隐藏并传递给" + (x / 2 + 1.5) + "号");
            }
        }

        // 传递玩家身份 
        $(".identity").text("当前身份是:" + getArr[(y / 2 - 1)]);//每次y会点两下加二
        // 最后一个页面
        if (x == getArr.length * 2 - 1) {
            $(".footer").text("法官查看身份");
        }

        // 点击一次切换一次隐藏就出现，出现就隐藏
        $(".imgtwo").toggle();//之前是出现着的
        $(".imgone").toggle();//之前是隐藏着的
        $(".identity").toggle();//之前是隐藏着的
    }
)