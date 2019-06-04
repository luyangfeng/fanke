$(function() {
    var username = $('#username');
    var password = $('#password');
    var but = $('#but');
    but.on('click', function() {
        $.ajax({
            type: "get",
            url: "./libs/logIn.php",
            data: {
                "username": username.val(),
                "password": password.val()
            },
            dataType: "json",
            success: function(response) {
                if (response.msg == "登陆成功") {
                    alert("登陆成功，点击跳转");
                    location.href = "./fanke.html"
                }
                // console.log(response);
            }
        });
    })

})