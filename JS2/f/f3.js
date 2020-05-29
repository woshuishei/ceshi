var day = sessionStorage.getItem("day") || 1;
var killerArr = JSON.parse(sessionStorage.getItem("killerArr"));
var civiliansArr = JSON.parse(sessionStorage.getItem("civiliansArr"));
var killerDeath = JSON.parse(sessionStorage.getItem("killerDeath")) || [];
var civiliansDeath = JSON.parse(sessionStorage.getItem("civiliansDeath")) || [];
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || [];
console.log(killerArr.length)
console.log(killerDeath.length)
console.log(civiliansArr.length)
console.log(civiliansDeath.length)
console.log(allDeath);
console.log(day);
if (killerArr.length == killerDeath.length) {
    $(".picture").text("平民胜利");
    $(".z2").text("太棒了！你知道么？在捉鬼游戏中有67%的平民取得游戏最终的胜利哦！");
} else {
    $(".picture").text("杀手胜利");
    $(".z2").text("太棒了！你知道么？在捉鬼游戏中有33%的杀手取得游戏最终的胜利哦！");
}
$(".profession").text("杀手还有" + (killerArr.length - killerDeath.length) + "人" + "平民还有" + (civiliansArr.length - civiliansDeath.length) + "人");
var y = 0;
for (let i = 0; i <= day - 1; i++) {
    y += 2;
    if (i < day - 1) {
        $(".main").append(`     
   <div class="gameMessage">
       <div class="firstLine">
           <div class="firstLineLeft">第${i + 1}天</div>
           <div class="firstLineRight">0小时07分</div>
       </div>
       <div class="secondLine">晚上：${allDeath[y - 2].number}号被杀手杀死，身份是${allDeath[y - 2].name}</div>
       <div class="secondLine">白天：${allDeath[y - 1].number}号被投票投死，身份是${allDeath[y - 1].name}</div>
   </div>`)

    } else {
        $(".main").append(`     
   <div class="gameMessage">
       <div class="firstLine">
           <div class="firstLineLeft">第${i + 1}天</div>
           <div class="firstLineRight">0小时07分</div>
       </div>       
       <div class="secondLine">晚上：${allDeath[y - 2].number}号被杀手投死，身份是${allDeath[y - 2].name}</div>
   </div>`)
    }
}
console.log(y);
