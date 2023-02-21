function validateForm() 
{
    clearErrorMessages();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateUsername();
} 

function clearErrorMessages()
{
    //doesn't work currently
    var errorDiv = document.getElementById("errorMessages").innerHTML;
    errorDiv = "";
}

function validateFirstName()
{
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("firstname").value;

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20)
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters.</p>";
    else
    validFirstname = true;
    
    //4) Send error message to HTML
    document.getElementById("errorMessages").innerHTML = errorMessages;

    //5) return status of each field
    //return (validFirstname);  
}

function validateLastName()
{
    //1) Create variable
    //var validLastname=false;

    //2) read value from HTML
    var validLastname = document.getElementById("lastname").value;

    //3) Do validation
    if (validLastname==="null" || validLastname==="" || validLastname.length > 20)
    errorMessages += "<p>The last name is required and cannot be greater than 20 characters.</p>";
    else
      return;
    //4) Send error message to HMTL
    document.getElementById("errorMessages").innerHTML = errorMessages;

    //5) return status of each field
    //return (validFirstname && validLastname);
}

function validateEmail()
{
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
    {
        errorMessages += "<p>Valid email is required.</p>";
        document.getElementById("errorMessages").innerHTML = errorMessages;
    }
    else
    {
        return;
    }

}

function validatePhone()
{
    var phone = document.getElementById("phone").value;

    if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
    {
        errorMessages += "<p>Valid phone number is required. Use numbers only.</p>";
        document.getElementById("errorMessages").innerHTML = errorMessages;
    }
    else
    {
        return;
    }
}

function validateUsername()
{
        //1) Create variable
        //var validFirstname=false;

        //2) read value from HTML
        var userName = document.getElementById("username").value;
    
        //3) Do validation
        if (userName==="null" || userName==="" || userName.length > 12)
            errorMessages += "<p>Username is required and cannot be greater than 12 characters.</p>";
        else
        return;
        //validFirstname = true;
        
        //4) Send error message to HTML
        document.getElementById("errorMessages").innerHTML = errorMessages;
    
        //5) return status of each field
        //return (validFirstname);  
}