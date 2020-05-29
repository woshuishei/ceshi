var getArr = JSON.parse(sessionStorage.getItem("record")); //获取数据
$(".header_left").click(function () {
    window.location.href = "./f-1.html"
    
});
$(".header_right").click(function () {
    sessionStorage.clear();
    window.location.href = "./f.html"
});
for (i = 0; i < getArr.length; i++) {//遍历数据加入小格子
    $(".container").append(`
<div class="box">
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
$(".db1").click(function () {
    var life = [];
    for (let i = 0; i < getArr.length; i++) {
        if (getArr[i] == "平民") {
            life.push({
                name: "平民",
                death: false,
                number: i + 1
            })
        } else {
            life.push({
                name: "杀手",
                death: false,
                number: i + 1
            })
        }
    }
    console.log(life);
    sessionStorage.setItem("life", JSON.stringify(life));
    window.location.href = "./f-3.html"
});