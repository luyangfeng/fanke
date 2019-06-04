$(function() {
    var id = location.search.split('=')[1];
    var products = $('#products');
    $.ajax({
        type: "get",
        url: "./libs/details.php",
        data: {
            'id': id
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
            var elm = response;
            var pic = JSON.parse(elm.picture);
            var str = `
                <div class="product">
                <h2>${elm.title}
                    <span>此商品一个账户限购一件</span>
                </h2>
                <ul class="ProductSubnav">
                    <li><a href="#">产品描述</a>|</li>
                    <li><a href="#">评论</a>|</li>
                    <li><a href="#">提问</a></li>
                </ul>
            </div>
            <div class="productDetails">
                <span class="blank10"></span>
                <div class="danpin_colLef">
                    <div class="danpinLeft">
                        <div class="smallImg">
                            <div class="smallImgUp upper" style='visibility: hidden'>
                            </div>
                            <ul id="imageMenu">
                                <li id="onlickImg" name="item-item-img-1" class="track">
                                    <span class="track1" style="background: url(../img/joinimages.jpg) no-repeat 0 0;"></span>
                                </li>
                                <li name="item-item-img-2" class="track">
                                    <span class="track2" style="background: url(../img/joinimages.jpg) no-repeat 0 -68px;"></span>
                                </li>
                            </ul>
                            <div class="smallImgDown downer" style='visibility: hidden'>
                            </div>
                        </div>
                    </div>
                    <div class="danpinColCenter">
                        <div class="bigImg" id="vertical">
                            <img id="midimg" src="..${pic[2].src}" title="T恤 欧飞鸿 想见你" />
                            <div id="winSelector" style="left: 0px; top: 0px; display: none;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="price">
                        <span>限时抢购价：￥<strong>${elm.price}</strong>&nbsp;&nbsp;</span>
                        <a href="#">充100返100，点击充值</a>
                    </div>
                    <div class="danpinColor_Select">
                        <div class="danpinColorTitle" style="line-height: 18px;">
                            <p>
                                颜色：</p>
                        </div>
                        <div class="selColor">
                            <ul>
                                <li id="onlickColor" name="6385287" title="白色">
                                    <div class="colorBlock" name="True">
                                        <a class="track3" name="item-item-select-color_1" href='#'>
                                            <span class="SpriteColors" style="background: url(../img/joinimages1.jpg) no-repeat;background-position: 0px -0px;">&nbsp;</span>
                                            <p>
                                                白色</p>
                                        </a>
                                    </div>
                                    <span class="colorHoverok"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="selSizeArea">
                        <div class="danpinColorTitle">
                            <p>
                                尺码：</p>
                        </div>
                        <div class="selSize">
                            <ul>
                                <li>
                                    <p>
                                        XS</p>
                                    <span></span>
                                </li>
                                <li>
                                    <p>
                                        S</p>
                                    <span></span>
                                </li>
                                <li>
                                    <p>
                                        L</p>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goodsNum">
                        <div class="danpinColorTitle" style="line-height: 18px;">
                            <p>
                                数量：</p>
                        </div>
                        <div class="danpinnumSelect">
                            <input type="number" min="1" max="${elm.inventory}" id="selectedAmount" value="1">
                        </div>
                    </div>
        
                    <div class="shoppingNews">
                        <a id="nowbuy" href="#" class="btnnowbuy"><span>立即购买</span></a>
                        <a id="addToShoppingCar" href="./shoppingTrolley.html" class="btnaddtocart"></a>
                    </div>
                </div>
                <span class="blank30"></span>
                `
            products.append(str).find('#addToShoppingCar').on('click', function() {
                add(elm.id, elm.price, $('#selectedAmount').val());
            })
        }
    });

    function add(id, price, num) {
        var shop = cookie.get('shop'); //从cookie获取shop
        var product = {
            "id": id,
            "price": price,
            "num": num
        };

        if (shop) {
            shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
})