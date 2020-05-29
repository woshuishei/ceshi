var kill = document.getElementById('kill')
var civilian = document.getElementById('civilian')
var range = document.getElementsByClassName('range')
var add = document.getElementsByClassName('add')
var input_s = document.getElementById('input_s')
var ink = document.getElementById('ink')
$(".return").click(//跳转回去
    function () {
        window.location.href = "./f.html"
    }
)
range[0].onclick = function () {//减号
    ink.value--;
    input_s.value--;
    people_number();
    if (input_s.value < 4) {
        input_s.value = 4;
        alert("玩家数量不能小于4！");
    }
}
add[0].onclick = function () {//加号
    ink.value++;
    input_s.value++;
    people_number();
    if (input_s.value > 18) {
        input_s.value = 18;
        alert("玩家数量不能大于18！");
    }
}
ink.oninput = function () {//进度条数值对应
    input_s.value = ink.value;
    people_number();
}

input_s.oninput = function () {//同上
    ink.value = input_s.value;
    people_number();
}
var killer_number;
var civilians_number;

function people_number() {//设置人数比例
    if (input_s.value < 4 || input_s.value > 18) {
        kill.innerHTML = "";
        civilian.innerHTML = "";
    } else {
        killer_number = Math.floor(input_s.value / 3);
        civilians_number = input_s.value - killer_number;
        kill.innerHTML = killer_number;
        civilian.innerHTML = civilians_number;
    }
}
input_s.onchange = function () {//弹窗
    if (input_s.value < 4 || input_s.value > 18) {
        alert("玩家数量应为4-18，请重新输入玩家数量！")
    }
}
var killerArr;
var civiliansArr;

function arrRandom() {//乱序
    people_number()
    killerArr = new Array(killer_number).fill('杀手');//内容替换
    civiliansArr = new Array(civilians_number).fill('平民');
    var allArr = killerArr.concat(civiliansArr);//合并成一个
    console.log(allArr);
    var newArr = [];
    // console.log(newArr);
    for (i = 0, len = allArr.length; i < len; i++) {
        var a = Math.floor(Math.random() * (allArr.length - 1));
        newArr[i] = allArr[a];
        allArr.splice(a, 1);//乱序挑一个踢一个
    }
    return newArr;
}
$(".footer").click(function () {
    arrRandom();
    sessionStorage.setItem("record", JSON.stringify(arrRandom()));//储存数值
    sessionStorage.setItem("killerArr", JSON.stringify(killerArr));
    sessionStorage.setItem("civiliansArr", JSON.stringify(civiliansArr));
    // console.log(JSON.stringify(arrRandom()));
    // console.log(JSON.stringify(killerArr));
    // // console.log(JSON.stringify(civiliansArr));
    window.location.href = "./f-2.html"
});


