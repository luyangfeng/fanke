$(function() {
    var username = $('#username');
    var password = $('#password');
    var btn = $('#btn');
    btn.on('click', function() {
        $.ajax({
            type: "get",
            url: "./libs/reg.php",
            data: {
                "username": username.val(),
                "password": password.val()
            },
            dataType: "json",
            success: function(response) {
                if (response.msg == "注册成功") {
                    alert("注册成功，点击跳转");
                    location.href = "./logIn.html"
                }
            }
        });
    })

})