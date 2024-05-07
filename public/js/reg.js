function validateForm() {
    var fullName = document.forms["regForm"]["userFullName"].value;
    var email = document.forms["regForm"]["userEmail"].value;
    var tel = document.forms["regForm"]["userTel"].value;
    var socialsUsername = document.forms["regForm"]["userNameForSocials"].value;

    if (fullName == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (tel == "") {
        alert("Phone Number must be filled out");
        return false;
    }
   
    if (socialsUsername == "") {
        alert("Socials Username must be filled out");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

