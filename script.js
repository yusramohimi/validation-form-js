// trim(): pour enlever l'espace; let myname = "    you  sra   " console.log(myname.trim()) expected output : "yousra"
//charAt[i] : renvoie le caractere qui a la position i ; let name = "yousra" console.log(name.charAt(0)) expected output : "y"
// slice()
// forEach


const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');


//errorMsg function
function errorMsg(input,msg){
    const form_control = input.parentElement;
    // console.log(form_control);
    form_control.className = "form-control error"
    const small = form_control.querySelector('small');
    // console.log(small);
    small.innerText=msg
}
// successMsg function
function successMsg(input){
    const form_control = input.parentElement;
    form_control.className = "form-control success"
}


// email function 
function emailCheck(input){
    const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input).toLowerCase());
    if(re.test(input.value.trim())){
        successMsg(input);
    }else{
        errorMsg(input,'Email is not valid')
    }
    
}


// check length function
function checkLength(input,min,max){
    if(input.value.length < min){
        errorMsg(input,`${(input.id)} must be atleast ${min} characters`)
    } else if (input.value.length > max){
        errorMsg(input,`${(input.id)} must be less then ${max} characters`)
    } else {
        successMsg(input)
    }
}

// password match
function checkPassword(password1,password2){
    if (password1.value !== password2.value){
        errorMsg(password2,"Passwords do not match")
    }
}


// //event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    // username
    if (username.value.trim() === ""){
        errorMsg(username,"Username is required");
    }else {
         successMsg(username);
    }

    // email
    if (email.value.trim() === ""){
        errorMsg(email,"Email is required");
    }else if(!emailCheck(email.value)){
        errorMsg(email,"Email is not valid")
    } else{
         successMsg(email);
    }

    // password
    if (password.value.trim() === ""){
        errorMsg(password,"Password is required");
    }else {
         successMsg(password);
    }


    // cpassword
    if (cpassword.value.trim() === ""){
        errorMsg(cpassword,"Confirm password is required");
    }else {
         successMsg(cpassword);
    }


    emailCheck(email);
    checkLength(username,4,20);
    checkLength(password,4,20);
    checkPassword(password,cpassword);
})































