$("#footer").click(function () {
    $("#addText").text("")
    var name = document.getElementById("name").value//获取值
    var pwd = document.getElementById("pwd").value
    var xhr = new XMLHttpRequest();//异步请求
    xhr.open("post", "http://localhost/carrots-admin-ajax/a/login", true)//请求方式
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//固定写法
    xhr.send("name=" + name + "&pwd=" + pwd);
    xhr.onload = function () {
        let date = JSON.parse(xhr.responseText)
        if (date.code == 0) {
            alert("登录成功")
        } else {
            $("#addText").text(date.message)
        }
    }

});
// $(document).ready(function () { //页面加载完才执行以下代码。这行代码使用后，html中不能写on事件，要在js中写
//     $("button").click(function () {
//         var name = $("#name").val();
//         var pwd = $("#pwd").val();
//         $.ajax({
//             type: "post",
//             url: "/carrots-admin-ajax/a/login",
//             // data: "name=" + name + "&pwd=" + pwd,发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。查看 processData 选项说明以禁止此自动转换。必须为 Key/Value 格式。如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为 '&foo=bar1&foo=bar2'。
//             data: {
//                 name: name,
//                 pwd: pwd
//             },
//             success: function (result) {
//                 console.log(result)
//                 let data = JSON.parse(result);
//                 if (data.code === 0) {
//                     alert("登录成功！");
//                 } else {
//                     document.getElementById("addText").innerHTML = data.message;
//                 }
//             }
//         });
//     });
// });

var newDay = new Date();
console.log(newDay);

console.log(Number(newDay));