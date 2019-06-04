$(function() {
    var shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        // console.log(shop)
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "./libs/shoppingTrolley.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(response) {
                var template = "";
                response.forEach(function(elm) {
                    console.log(elm);
                    var pic = JSON.parse(elm.picture);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                    <tr class="selected">
                        <td class="white bd-left">&nbsp;</td>
                        <td class="bar" rowspan="1">
                            <input type="checkbox" name="" id="p-item" class="track ckb">
                        </td>
                        <td class="image">
                        <a href="http://item.vancl.com/6384668.html?ref=hp-hp-syms-1_4-v:n" target="_bank"></a>
                        <img src="..${pic[1].src}" alt="">
                        </td>
                        <td class="name">
                        <a href="http://item.vancl.com/6384668.html?ref=hp-hp-syms-1_4-v:n" target="_bank" title="T恤 山鸟叔 鸟类学8 黑色">
                                    ${elm.title}
                        </a>
                        </td>
                        <td class="size">
                        <a target="_bank" title="s"><b> L</b></a>
                        </td>
                        <td class="price">￥${elm.price}</td>
                        <td class="qty">
                        <div>
                            <input type="number" min="1" max="${elm.inventory}" id="qty" value="${arr[0].num}" >
                        </div>
                        </td>
                        <td class="sum">￥${(elm.price*arr[0].num).toFixed(2)}</td>
                        <td class="operate">
                        <a href="" class="del track">删除</a>
                        </td>
                        <td class="white bd-right">&nbsp;</td>

                    </tr>`;

                    $('tbody').append(template);
                });
            }
        });
    }
})