let user = document.getElementById('username');
let pass = document.getElementById('password');


username = user.textContent;
password = pass.textContent;

let validUsername = false;
let validPassword = false;




for(let i = 0; i < username.length(); i++){
    if(username[i] == "@"){
        validPassword = true;
    }


}


if(password.length() >=6){
    validPassword = true;

}


function check(){
    if(validUsername && validPassword){
        alert("Login Successful!");
    }else if(!validPassword){
        alert("password should be atleast 6 characters");
    }else if(!validPassword && !validUsername){
        alert("Invalid email and password");
    }
    else{
        alert("Invalid email, should contain '@");
    }
}
