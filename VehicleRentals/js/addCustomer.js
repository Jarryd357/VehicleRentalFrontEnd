var URL = "http://localhost:8080";

    function validateCustomerFirstName(customerFirstName) {
        if (customerFirstName === "") {
            $("#errorName").text("Please enter a First Name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtName").click(function () {
                $("#errorName").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z]/.test(customerFirstName)) {
            $("#errorName").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtName").click(function () {
                $("#errorName").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return customerFirstName;
    }

    function validateCustomerLastName(customerLastName) {
        if (customerLastName === "") {
            $("#errorCustomerLastName").text("Please enter a Last Name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtSurname").click(function () {
                $("#errorCustomerLastName").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(customerLastName)) {
            $("#errorSurname").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtSurname").click(function () {
                $("#errorSurname").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return customerLastName;
    }

    function validateAddressStreet(addressStreet) {
        if (addressStreet === "") {
            $("#errorAddressStreet").text("Please enter street name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressStreet").click(function () {
                $("#errorAddressStreet").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (isNaN(addressStreet)) {
            $("#errorAddressStreet").text("Only valid numbers are allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressStreet").click(function () {
                $("#errorAddressStreet").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return addressStreet;
    }

    function validateAddressCity(addressCity) {
        if (addressCity === "") {
            $("#errorAddressCity").text("Please enter a City name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressCity").click(function () {
                $("#errorAddressCity").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(city)) {
            $("#errorAddressCity").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressCity").click(function () {
                $("#errorAddressCity").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return addressCity;
    }

    function validateAddressCode(addressCode) {
        if (addressCode === "") {
            $("#errorAddressCode").text("Please enter a address code.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressCode").click(function () {
                $("#errorAddressCode").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (isNaN(addressCode)) {
            $("#errorAddressCode").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtAddressCode").click(function () {
                $("#errorAddressCode").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return addressCode;
    }

    function validateContactNo(contactNo) {
        if (contactNo === "") {
            $("#errorContactNo").text("Please enter Contact  no.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtContactNo").click(function () {
                $("#errorContactNo").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(contactNo)) {
            $("#errorContactNo").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtContactNo").click(function () {
                $("#errorContactNo").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return contactNo;
    }

    function validateCustomerEmail(customerEmail) {

        var matchingEmails = null;

        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/customer/read?",
            data: "customerEmail=" + customerEmail,
            async: false,
            success: function(response)
            {
                //console.log(response);
                matchingEmails = response.customerEmail;
                //$("#successMessage3").html(matchingEmails + " its empty 3");

            }

        });

        if(customerEmail == matchingEmails)
        {
            $("#errorCustomerEmail").html("The email address already exists, please try again");
            $("#txtEmail").click(function(){
                $("#errorCustomerEmail").fadeOut('slow');
            });
            event.preventDefault();
            return 0;
        }
        else if (email === "") {
            $("#errorCustomerEmail").text("Please enter a Email address.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtCustomerEmail").click(function () {
                $("#errorCustomerEmail").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if(validEmail(email) === false) {
            $("#errorCustomerEmail").text("Email is invalid! Please try again.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtCustomerEmail").click(function () {
                $("#errorCustomerEmail").fadeOut('slow');
            });
        }
        else
            return customerEmail;

        function validCustomerEmail(customerEmail)
        {
            var filter = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;
            if(filter.test(customerEmail))
                return true;
            else
                return false;
        }

    }
	
	function validateCustomerAccPassword(customerAccPassword) {
        if (customerAccPassword === "") {
            $("#errorCustomerAccPassword").text("Please enter Password.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtCustomerAccPassword").click(function () {
                $("#errorCustomerAccPassword").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z-, ]/.test(complex)) {
            $("#errorCustomerAccPassword").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtCustomerAccPassword").click(function () {
                $("#errorCustomerAccPassword").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return customerAccPassword;
    }


    function validate() {

        var firstname = validateName($("#txtName").val());
        var lastname = validateSurname($("#txtSurname").val());
        var addressStreet = validateEmail($("#txtEmail").val());
        var addressArea = validateCity($("#txtCity").val());
        var addressCity = validateHouseNumber($("#txtHouseNumber").val());
        var addressCode = validateProvince($("#txtProvince").val());
        var contactNo = validatePostalCode($("#txtPostalCode").val());
        var email = validateComplex($("#txtComplex").val());
        var accPassword = validateStreet($("#txtStreet").val());

        if (name == false || surname == false || email == false || houseNumber == false
            || province == false || postalCode == false || complex == false
            || street == false || city == false) {
            event.preventDefault();
            return;
        }
        else {

            $(document).ready(function () {
                var customerData =  "name=" + name+ "&surname=" + surname+ "&email=" + email + "&city=" + city +
                "&province=" + province + "&complex=" + complex + "&street=" + street + "&houseNumber=" + houseNumber + "" +
                "&postalCode=" + postalCode;

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: URLlink + "/customer/addCustomer?",
                    data: customerData,
                    success: function (response) {
                        location.href="customerPage.html";
                    },
                    error: function(xhr){
                        alert("Adding Customer Failed");
                    }
                })
            });
        }
}

