var customers = [];
$("#btnAdd").click(function () {

    var  id = $("#txtCustomerId").val();
    var name = $("#txtCustomerName").val();
    var address = $("#txtCustomerAddress").val();


                var html = '<tr>' +
                    '<td>' + id +'</td>' +
                    '<td>' + name +'</td>' +
                    '<td>' + address +'</td>' +
                    '</tr>';

                $("#tbl-customers tbody").append(html);

                customers.push({
                    id: id,
                    name: name,
                    address: address
                });

                $("#txtCustomerId, #txtCustomerName, #txtCustomerAddress").val("");
                $("#tbl-customers").focus();
    });

$("#btnSave").click(function () {

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {

        }
    };

    http.open('POST','http://localhost:8080/pos/customers7',true);
    http.setRequestHeader("COntent-Type", "application/json");
    http.send(JSON.stringify(customers));

});


