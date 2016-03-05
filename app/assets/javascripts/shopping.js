function add_to_cart(id) {
    var choosed_name = document.getElementById('name' + id).innerHTML.trim();
    var choosed_sort = document.getElementById('sort' + id).innerHTML.trim();
    var choosed_unit = document.getElementById('unit' + id).innerHTML.trim();
    var choosed_price = document.getElementById('price' + id).innerHTML.trim();
    var choosed_count = parseInt(1);
    var goods_number = document.getElementById('total_goods_number');
    var url = "/home/save_info/";
    var data = {name: choosed_name, sort: choosed_sort, unit: choosed_unit, price: choosed_price, count: choosed_count};
    post(url, data);
    window.location.reload();
}

function car_number() {
    var table_tr = document.getElementById("show_cart_counts");
    var cart_counts = table_tr.rows.length;
    console.log(cart_counts);
    var cart_number = document.getElementById('cart_goods_number');
    cart_number.innerHTML = cart_counts - 1;
    var goods_number = document.getElementById('total_goods_number');
    var cart_total_number = cart_number.innerHTML;
    console.log(cart_total_number);
    goods_number.innerHTML = cart_total_number;
}

function post(url, data) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        async: false,
        success: function (result) {
            alert(result)
        }
    });
}

function minus_count(id) {
    var goods_count = document.getElementById('goods_count' + id);
    var count = goods_count.innerHTML;
    if (count > 0) {
        goods_count.innerHTML = count * 1 - 1;
        //var price = document.getElementById('price' + id).innerHTML;
        //document.getElementById('sum' + id).innerHTML = (goods_count.innerHTML * price).toFixed(1);
    }
    var choosed_name = document.getElementById('name' + id).innerHTML.trim();
    var choosed_sort = document.getElementById('sort' + id).innerHTML.trim();
    var choosed_unit = document.getElementById('unit' + id).innerHTML.trim();
    var choosed_price = document.getElementById('price' + id).innerHTML.trim();
    var url = "/home/update_count/";
    var data = {
        name: choosed_name,
        sort: choosed_sort,
        unit: choosed_unit,
        price: choosed_price,
        count: goods_count.innerHTML
    };
    post(url, data);
    window.location.reload();
}
function add_count(id) {
    var inventory = document.getElementById('inventory' + id).innerHTML;
    console.log(inventory);
    console.log('==============');
    var goods_count = document.getElementById('goods_count' + id);
    var count = goods_count.innerHTML;
    if (count < parseInt(inventory)) {
        goods_count.innerHTML = parseInt(count) + 1;
    }

    var choosed_name = document.getElementById('name' + id).innerHTML.trim();
    var choosed_sort = document.getElementById('sort' + id).innerHTML.trim();
    var choosed_unit = document.getElementById('unit' + id).innerHTML.trim();
    var choosed_price = document.getElementById('price' + id).innerHTML.trim();
    var price = document.getElementById('price' + id).innerHTML;
    document.getElementById('sum' + id).innerHTML = (goods_count.innerHTML * price).toFixed(1);
    var url = "/home/update_count/";
    var data = {
        name: choosed_name,
        sort: choosed_sort,
        unit: choosed_unit,
        price: choosed_price,
        count: goods_count.innerHTML
    };
    post(url, data);
    window.location.reload();
}
