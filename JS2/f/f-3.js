$(".arrows").click(function () {
    window.location.href = "./f2.html"
});
$(".cross").click(function () {
    sessionStorage.clear();//清除数据
    window.location.href = "./f.html"
});
var day = sessionStorage.getItem("day") || 1; //获取天数，如果没有，则取默认值1
var step = sessionStorage.getItem("step") || 1; //获取点击步骤，如果没有，则取默认值1
var index = sessionStorage.getItem("index") || 0; //建立并获取参考值，如果没有，则取默认值0
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || []; //获取下个页面的玩家死亡数组，没有就取空数组
var a = sessionStorage.getItem("a"); //括号内的a在最下方声明了，作用是知道你点击的哪一天
console.log("day" + ":" + day);
console.log("step" + ":" + step);
console.log("index" + ":" + index);
console.log(allDeath);
// 通过天数day生成相应几个杀人流程区域
for (let i = 0; i < day; i++) {
    $(".main-wrap").append(
        ` <div class="main">
    <div class="main-top">
        <span class="date">第${i + 1}天</span>
        <div class="arrow"></div>
    </div>
    <div class="main-bottom">
        <div class="square">
            <img src="./im2/day.png" alt="">
            <div class="triangle"></div>
            <div class="text">杀手杀人</div>
        </div>
        <div class="square">
            <img src="./im2/night.png" alt="">
            <div class="triangle"></div>
            <div class="text">亡者遗言</div>
        </div>
        <div class="square">
            <div class="triangle"></div>
            <div class="text">依次发言</div>
        </div>
        <div class="square">
            <div class="triangle"></div>
            <div class="text">全民投票</div>
        </div>
    </div>
</div>`);
}
// 点击第一步
$(".text").eq(day * 4 - 4).click(function () {
    if (step == 1) {//判断你是不是按照四个步骤的流程顺寻点击的，
        step++;
        index++;
        sessionStorage.setItem("step", step);
        sessionStorage.setItem("index", index);
        $(".text").eq(day * 4 - 4).css("background", "red");
        $(".triangle").eq(day * 4 - 4).css(
            "border-right", "12px solid red");
        alert("开始杀人");
        window.location.href = "./f-4.html"
    } else {
        alert("请按游戏顺序点击！")
    }
})
$(".text").eq(day * 4 - 3).click(function () {
    if (step == 2) {//判断你是不是按照四个步骤的流程顺寻点击的，
        step++;
        index++;
        sessionStorage.setItem("step", step);
        sessionStorage.setItem("index", index);
        $(".text").eq(day * 4 - 3).css("background", "red");
        $(".triangle").eq(day * 4 - 3).css(
            "border-right", "12px solid red");
        alert("留遗言");

    } else {
        alert("请按游戏顺序点击！")
    }
})
$(".text").eq(day * 4 - 2).click(function () {
    if (step == 3) {//判断你是不是按照四个步骤的流程顺寻点击的，
        step++;
        index++;
        sessionStorage.setItem("step", step);
        sessionStorage.setItem("index", index);
        $(".text").eq(day * 4 - 2).css("background", "red");
        $(".triangle").eq(day * 4 - 2).css(
            "border-right", "12px solid red");
        alert("依次发言");

    } else {
        alert("请按游戏顺序点击！")
    }
})
$(".text").eq(day * 4 - 1).click(function () {
    if (step == 4) {//判断你是不是按照四个步骤的流程顺寻点击的，
        step = 1;//第一天结束恢复为1
        index++;
        // day++;//一天结束day加一天
        sessionStorage.setItem("step", step);
        sessionStorage.setItem("index", index);
        sessionStorage.setItem("day", day);
        $(".text").eq(day * 4 - 1).css("background", "red");
        $(".triangle").eq(day * 4 - 1).css(
            "border-right", "12px solid red");
        alert("投死");
        window.location.href = "./f-4.html"

    } else {
        alert("请按游戏顺序点击！")
    }
})
for (let i = 0; i < index; i++) {//遍历将点过的部分染色
    $(".text").eq(i).css("background", "red");
    $(".triangle").eq(i).css("border-right", "12px solid red");
}
//点击哪一天，下方的四步就显示或者隐藏
$(".main-top").on("click", function () {
    var a = $(this); //点击第几个，这里就是几
    a.siblings().toggle("slow");
})
if (day != 1) {
    $(".main-bottom").hide();
    $(".main-bottom").eq(day - 1).show();
}
$(".gameOver").on("click", function () {
    var x = confirm("确定结束游戏并返回首页？");
    if (x == true) {
        sessionStorage.clear();//清除数据
        window.location.href = "./f-1.html"
    }
})

$(".judgeRecord").on("click", function () {
    window.location.href = "./f-5.html"
})
//这里的for循环使用了下个页面的玩家死亡数组，做完下个页面在补充上的，不然没法理解
function select() {
    for (let i = 0; i < allDeath.length; i++) {
        if (allDeath[i].step == 1) {
            $(".square").eq((allDeath[i].day) * 4 - 1).after(`<div class=addText>投票投死了${allDeath[i].number}号，他的身份是：${allDeath[i].name}</div>`);
        } else {
            $(".square").eq(allDeath[i].day * 4 - 4).after(`<div class=addText>杀手杀死了${allDeath[i].number}号，他的身份是：${allDeath[i].name}</div>`);
        }
    }
}
select();