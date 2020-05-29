var getArr = JSON.parse(sessionStorage.getItem("record"));
var index = JSON.parse(sessionStorage.getItem("index"));
var life = JSON.parse(sessionStorage.getItem("life"));
var killerArr = JSON.parse(sessionStorage.getItem("killerArr"));
var civiliansArr = JSON.parse(sessionStorage.getItem("civiliansArr"));
var killerDeath = JSON.parse(sessionStorage.getItem("killerDeath")) || [];
var civiliansDeath = JSON.parse(sessionStorage.getItem("civiliansDeath")) || [];
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || [];
var day = sessionStorage.getItem("day") || 1;
var step = sessionStorage.getItem("step") || 1;
console.log(index);
console.log(life);
console.log(getArr);
console.log(killerArr);
console.log(civiliansArr);
console.log(killerDeath);
console.log(civiliansDeath);
console.log(allDeath);
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
        <div class="number">${i + 1}号</div>
    </div>
    <div class="opition">
        <img src="./im2/4.png" class="icon">
    </div>
</div>
`)//模板字符串
}
$(".z1").text("法官日志")
$(".db1").text("返回")
$(".z2").text("看看干瞪眼")
for (i = 0; i < life.length; i++) {
    if (life[i].death == true) {
        $(".name").eq(i).css("background", "red");
    }
}
$(".db1").click(function () {
    window.location.href = "./f-3.html"

});