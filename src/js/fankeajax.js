$(function() {
    var list = $('.list');
    var products = $('.products');
    var str = "";
    $.ajax({
        type: "get",
        url: "./libs/fanke.php",
        dataType: "json",
        success: function(response) {
            console.log(response);
            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.picture);
                // console.log(pic);
                if (elm.type == 1) {
                    str = `
                <li>
                    <a href="./details.html?id=${elm.id}">
                        <img src="..${pic[0].src}" alt="">
                        <span>${elm.title}</span>
                        <del>￥${elm.oldprice}</del>
                        <b>￥${elm.price}</b>
                        <em>充值后<i>${elm.price}</i>元</em>
                    </a>
                </li>
                `
                    list.append(str);
                } else if (elm.type == 0) {
                    console.log(elm);
                    var str2 = "";
                    str2 = `
                    <li>
                        <a href="./details.html?id=${elm.id}"><img src="..${pic[0].src}" alt=""></a>
                    </li>
                    `
                    products.append(str2);
                }
            })
        }
    });
})