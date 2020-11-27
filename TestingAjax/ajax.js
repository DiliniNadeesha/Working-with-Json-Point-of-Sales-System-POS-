$("#btnSave").click(function () {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (http.status == 200 & http.readyState == 4) {
        }
    };
    http.open('POST', 'http://localhost:8080/pos/customers4', true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 1st Method
    // var queryString = "id=" + $("#txtCustomerId").val() +
    //     "&name" + $("#txtCustomerName").val() + "&address" + $("#txtCustomerAddress").val();


    // 2nd Method
    // var queryString = new URLSearchParams();
    // queryString.append("id", $("#txtCustomerId").val());
    // queryString.append("name", $("#txtCustomerName").val());
    // queryString.append("address", $("#txtCustomerAddress").val());


    // 3rd Method
    var queryString = new FormData();
    queryString.append("id", $("#txtCustomerId").val());
    queryString.append("name", $("#txtCustomerName").val());
    queryString.append("address", $("#txtCustomerAddress").val());

    // 4th Method
    var queryString = $("#frmCustomer").serialize();

    // 1st Method
    // http.send(queryString);

    // 2nd Method
    // http.send(queryString.toString());

    // 3rd Method
    // http.send(queryString);

    // 4th Method
    http.send(queryString);
});