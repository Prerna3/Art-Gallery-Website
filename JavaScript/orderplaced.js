function validate() {
    let user_name = document.getElementById("name");
    let pin_code = document.getElementById("pincode");
    let user_mobile = document.getElementById("contact");
    let user_address = document.getElementById("address");
    let user_state = document.getElementById("state");
    let payment_online = document.getElementById("online");
    let payment_cod = document.getElementById("cod");
    let pat1 = /^\d{6}$/;
    let pattern = /^\d{10}$/;
    if (user_name.value == "") {
        alert("Please Enter Your Name");
        user_name.focus();
        return false;
    }
    else if (!user_mobile.value == pattern || user_mobile.value == "") {
        alert("Enter 10 Digit Phone Number");
        user_mobile.focus();
        return false;
    }
    else if (!pat1.test(pin_code.value) || pin_code.value == "") {
        alert("Pin code should be 6 digits ");
        pin_code.focus();
        return false;
    }
    else if (user_state.value == "") {
        alert("Please Select a State");
        user_state.focus();
        return false;
    }
    else if (user_address.value == "") {
        alert("Enter Address");
        user_address.focus();
        return false;
    }
    else if (payment_online.checked == false && payment_cod.checked == false) {
        alert("Select Payment Method");
        pin_code.focus();
        return false;
    }
    else {
        return orderplaced()
    }
}

function orderplaced() {
    document.getElementById("myForm").reset();
    document.getElementById('orderplaced').innerHTML = 'Thank you for shopping! Your Order has been placed Successfully!!'
}