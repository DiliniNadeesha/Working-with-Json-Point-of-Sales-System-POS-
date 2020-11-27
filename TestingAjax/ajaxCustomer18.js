$(document).ready(function () {
    loadCustomers();
});

var selectedRow ;

function loadCustomers() {
    $("#tbl-customers tbody tr").remove();

            var ajaxConfig = {
                method: "GET",
                url: 'http://localhost:8080/pos/api/v1/customers',
                sync: true
            };
            $.ajax(ajaxConfig).done(function (customers, status, jqXHR) {
                for (var i = 0; i < customers.length; i++) {
                    var html = '<tr>' +
                        '<td>' + customers[i].id + '</td>' +
                        '<td>' + customers[i].name + '</td>' +
                        '<td>' + customers[i].address + '</td>' +
                        '<td><i class="fa  fa-trash"></i></td>' +
                        '</tr>';
                    $("#tbl-customers tbody").append(html);
                }
            }).fail(function (jqXHR, status, error) {
                console.log(error);

            });
}

// $("#btnSave").click(function () {
//     var customer = {
//         id: $("#txtCustomerId").val(),
//         name: $("#txtCustomerName").val(),
//         address: $("#txtCustomerAddress").val()
//     };
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (http.readyState == 4 ) {
//             if (http.status == 201) {
//                 var html = '<tr>' +
//                     '<td>' + customer.id + '</td>' +
//                     '<td>' + customer.name + '</td>' +
//                     '<td>' + customer.address + '</td>' +
//                     '<td><i class="fa  fa-trash"></i></td>' +
//                     '</tr>';
//                 $("#tbl-customers tbody").append(html);
//                 $("#txtCustomerId, #txtCustomerName, #txtCustomerAddress").val("");
//                 $("#txtCustomerId").focus();
//             } else {
//                 console.log("Fail");
//                 console.log(http.responseText)
//             }
//         }
//     };
//
//     http.open('POST','http://localhost:8080/pos/api/v1/customers',true);
//     http.setRequestHeader("Content-Type", "application/json");
//     http.send(JSON.stringify(customer));
// });

$("#btnSave").click(function () {
    var customer = {
        id: $("#txtCustomerId").val(),
        name: $("#txtCustomerName").val(),
        address: $("#txtCustomerAddress").val()
    };
    var ajaxConfig = {
        method: "POST",
        url: 'http://localhost:8080/pos/api/v1/customers',
        sync: true,
        contentType: 'application/json',
        data: JSON.stringify(customer)
    };
    $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
        var html = '<tr>' +
            '<td>' + customer.id + '</td>' +
            '<td>' + customer.name + '</td>' +
            '<td>' + customer.address + '</td>' +
            '<td><i class="fa  fa-trash"></i></td>' +
            '</tr>';

        $("#tbl-customers tbody").append(html);
        $("#txtCustomerId, #txtCustomerName, #txtCustomerAddress").val("");
        $("#txtCustomerId").focus();
    });
}).fail(function (jqXHR, status, error) {
    console.log(error);
});

$("#tbl-customers").delegate("tr", "click", function () {
    var id = $(this).children("td").first().text();
    var name = $(this).children("td:nth-child(2)").text();customer
    var address = $(this).children("td:nth-child(3)").text();

    $("#txtCustomerId").val(id).focus();
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#btnSave").text("Update");
});

// function updateCustomer() {
//     var customer;
//     var id = $("#txtCustomerId").val();
//     var name = $("#txtCustomerName").val();
//     var address = $("#txtCustomerAddress").val();
//
//     customer = {
//         id: id,
//         name: name,
//         address: address
//     };
//
//     var ajaxConfig = {
//         method: "PUT",
//         url: 'http://localhost:8080/pos/api/v1/customers',
//         sync: true,
//         contentType: 'application/json',
//         data: JSON.stringify(customer)
//     };

    // $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
    //     $("#txtCustomerId").val("").focus();
    //     $("#txtCustomerName").val("");
    //     $("#txtCustomerAddress").val("");
    //     $("#btnSave").text("Save");
    //     loadCustomers();
    // });

// }).fail(function (jqXHR, status, error) {
//     console.log(error);
// });






