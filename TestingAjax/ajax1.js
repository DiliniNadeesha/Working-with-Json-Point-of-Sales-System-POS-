$("#btnSave").click(function () {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (http.status == 200 & http.readyState == 4) {
        }
    };
    http.open('POST', 'http://localhost:8080/pos/customers5', true);
   // http.setRequestHeader("Content-Type", "multipart/form-data");

    var formData = new FormData();
    formData.append("id", $("#txtCustomerId").val());
    formData.append("name", $("#txtCustomerName").val());
    formData.append("address", $("#txtCustomerAddress").val());
    formData.append("pic", $("#txtCustomerPic")[0].files[0]);

    http.send(formData);
});