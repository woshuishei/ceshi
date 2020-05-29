var getArr = JSON.parse(sessionStorage.getItem("record"));
var index = JSON.parse(sessionStorage.getItem("index"));
var life = JSON.parse(sessionStorage.getItem("life"));
var killerArr = JSON.parse(sessionStorage.getItem("killerArr"));
var civiliansArr = JSON.parse(sessionStorage.getItem("civiliansArr"));
var killerDeath = JSON.parse(sessionStorage.getItem("killerDeath")) || [];
var civiliansDeath = JSON.parse(sessionStorage.getItem("civiliansDeath")) || [];
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || [];
var day = JSON.parse(sessionStorage.getItem("day"))|| 1;
var step = sessionStorage.getItem("step") || 1;
console.log(index);
console.log(life);
console.log(getArr);
console.log(killerArr);
console.log(civiliansArr);
console.log(killerDeath);
console.log(civiliansDeath);
console.log(allDeath);
console.log(day);

var a

$(".header_left").click(function () {
    window.location.href = "./f-3.html"
    
});
$(".header_right").click(function () {
    sessionStorage.clear();
    window.location.href = "./f.html"
});
for (i = 0; i < getArr.length; i++) {//遍历数据加入小格子
    $(".container").append(`
<div class="box" data-index = "${i}">
    <div class="message">
        <div class="name">${getArr[i]}</div>
        <div class="number">${i+1}号</div>
    </div>
    <div class="opition">
        <img src="./im2/4.png" class="icon">
    </div>
</div>
`)//模板字符串
}
//通过奇偶数来判断时杀人还是投票页面，仅改变文字，不改变任何功能
if (index % 2 == 0) {
    $(".z1").text("投死")
    $(".db1").text("点击投票")
} else {
    $(".z1").text("开始杀人！")
    $(".db1").text("点击杀人！")
    $(".z2").text("杀人时间到")
}
$(".box").on("click", function () {
    
    a = $(this).data("index");  //获取点击盒子的索引值,省略写法，完整是a = $(this).attr("data-index"); 和上面33行代码相对应
    sessionStorage.setItem("a", a);  
    console.log(a)
    console.log(life[a].death)
    $(".opition").eq(a).css("visibility","visible")//显刀
    ////排他思想每次点击清空所有的活着的人的颜色后续再点击赋予颜色
    for (i = 0; i < life.length; i++) {
        if (life[i].death == false) {
            $(".name").eq(i).css("background", "#f5c97b");//清空颜色
            $(".opition").eq(i).hide();//藏刀
        } else {
            $(".name").eq(i).css("background", "red");//已经死了的人保持红色
        }
    }
    //判断是杀人还是投票
    if (index % 2 == 0) {
        // 投票页面
        if (life[a].death == false) {
            $(".name").eq(a).css("background", "red");//赋予颜色和刀
            $(".opition").eq(a).show();
        } else {
            alert("他已经死了！")
            $(".opition").eq(a).css("visibility","hidden")//修复显刀问题
        }
    } else {
        // 杀人页面
        if (life[a].name == "平民" && life[a].death == false) {
            $(".name").eq(a).css("background", "red");
            $(".opition").eq(a).show();
        } else if (life[a].name == "杀手") {
            alert("杀手不能自杀！")
        } else {
            alert("他已经死了！")
            $(".opition").eq(a).css("visibility","hidden")//修复显刀问题
        }
    }
})
//for循环遍历，改变所有死亡玩家的背景色
for (i = 0; i < life.length; i++) {
    if (life[i].death == true) {
        $(".name").eq(i).css("background", "red");
    }
}
function lifeChange() {
    life[a].death = true;
    life[a].day = day;//插入day，在杀人流程第一步和第四步页面跳转后传参需要用到
    life[a].step = step;//插入step，在杀人流程第一步和第四步页面跳转后传参需要用到
    allDeath.push(life[a]);//玩家死亡数组push死亡玩家
    console.log(allDeath)
    // if判断将死人装进杀手死亡组还是平民死亡组
    if (life[a].name == "杀手") {
        killerDeath.push(life[a])
    } else {
        civiliansDeath.push(life[a])
    }
}
//储存数据
function dataSave() {
    sessionStorage.setItem("life", JSON.stringify(life));
    sessionStorage.setItem("killerDeath", JSON.stringify(killerDeath));
    sessionStorage.setItem("civiliansDeath", JSON.stringify(civiliansDeath));
    sessionStorage.setItem("allDeath", JSON.stringify(allDeath));
    sessionStorage.setItem("day", JSON.stringify(day));
}
//判断胜利条件
function win() {
    if (killerDeath.length == killerArr.length) {
        window.location.href = "./f3.html"
    } else if (civiliansDeath.length == civiliansArr.length) {
        window.location.href = "./f3.html"
    } else {
        window.location.href = "./f-3.html" 
    }
}
$(".db1").click(function () {
    lifeChange();
    
    win();
    if (index % 2 == 0){
        day++
    }
    dataSave();
});