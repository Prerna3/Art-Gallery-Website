function valid() {
    let first_name = document.getElementById("fname");
    let user_mobile = document.getElementById("phoneno");
    let user_email = document.getElementById("email")
    let user_msg = document.getElementById("msg")
    let pattern = /^\d{10}$/;
    let email_pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (first_name.value == "") {
        alert("Please Enter Your Name!");
        first_name.focus();
        return false;
    }
    else if (!user_mobile.value == pattern || user_mobile.value == "") {
        alert("Enter 10 Digit Phone Number!");
        user_mobile.focus();
        return false;
    }
    else if (user_email.value == "" || !user_email.value == email_pat) {
        alert("Please Enter Correct Email Id!");
        user_email.focus();
        return false;
    }
    else if (user_msg.value == "") {
        alert("Please Enter Your Query or Message!");
        user_msg.focus();
        return false;
    }

    else {
        return sendmessage()
    }
}

function sendmessage() {
    document.getElementById("myForm").reset();
    alert("Message Sent Successfully!!");
}