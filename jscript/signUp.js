function validate(){
    var fullName = document.getElementById('fname').value;
    var myEmail = document.getElementById("email").value;
    var myPword = document.getElementById("pword").value;
    var myRepward = document.getElementById("repword").value;
    var myMob = document.getElementById("mob").value;
    var letter = /^[A-Z]/;
    var number = /^[0]\d{9}$/;
    var emails = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})$/;
    var password =/^[a-z]/; 
    // var isValid = true;
    if (!letter.test(fullName)){
        alert("First letter should be capital letter");
        document.getElementById("fname").style.border = "solid 3px red";
        return false;
    }
    else {
        document.getElementById("fname").style.border = "solid 3px green";
        true;
    }
    if(fullName.trim()==""){
        alert("This is a required field");
        document.getElementById(fname).style.border = "solid 3px red";
        return false;
    } else {
        document.getElementById("fname").style.border = "solid 3px green";
        true;
    }
    if(!emails.test(myEmail)){ 
        alert("This is a invalid Email address");
    document.getElementById("email").style.border = "solid 3px red";
    return false;

    }
    else {
        document.getElementById("email").style.border = "solid 3px green";
        true;
    }
    if(!number.test(myMob)){
        alert("This is a invalid Mobile Number");
        document.getElementById("mob").style.border = "solid 3px red";
        return false;

    } else {
        document.getElementById("mob").style.border = "solid 3px green";
        true;
    }
    if(!password.test(myPword)){
        alert("This is a invalid Password");
        document.getElementById("pword").style.border = "solid 3px red";
        return false;

    }else {
        document.getElementById("pword").style.border = "solid 3px green";
        true;
    }
    if(myPword!==myRepward){
        alert("This is a wrong Password");
        document.getElementById("repword").style.border = "solid 3px red";
        return false;
 
    }else {
        document.getElementById("repword").style.border = "solid 3px green";
        true;
    }

}







