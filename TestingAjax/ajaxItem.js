var items = [];
$("#btnAdd").click(function () {

    var code = $("#txtCode").val();
    var description = $("#txtDesc").val();
    var unitPrice = $("#txtUnitPrice").val();
    var qtyOnHand = $("#txtQtyOnHand").val();


                var html = '<tr>' +
                    '<td>' + code +'</td>' +
                    '<td>' + description +'</td>' +
                    '<td>' + unitPrice +'</td>' +
                    '<td>' + qtyOnHand +'</td>' +
                    '</tr>';

                $("#tbl-items tbody").append(html);

                items.push({
                    code: code,
                    description: description,
                    unitPrice: unitPrice,
                    qtyOnHand: qtyOnHand
                });

                $("#txtCode, #txtDesc, #txtUnitPrice, #txtQtyOnHand").val("");
                $("#tbl-items").focus();
    });

$("#btnSave").click(function () {

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {

        }
    };

    http.open('POST','http://localhost:8080/pos/items',true);
    http.setRequestHeader("COntent-Type", "application/json");
    http.send(JSON.stringify(items));

});


