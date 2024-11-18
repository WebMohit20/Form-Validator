const form = document.getElementById("form");
const name_box = document.getElementById("name");
const email_box = document.getElementById("email");
const password_box = document.getElementById("password");
const password_box2 = document.getElementById("confirm-password");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    required([name_box,email_box,password_box,password_box2]);
    checkLength(name_box,3,15);
    checkLength(password_box,6,25);
    passwordChecker(password_box,password_box2);
    
})

function required(inputFields){
    inputFields.forEach((field)=>{
        if(field.value.trim()=== ""){
            field.parentElement.className ="form-handler error"
            field.parentElement.querySelector("small").innerText=`${getFieldName(field.id)} is Required`
        }
        else{
            field.parentElement.className ="form-handler success"
        }
    })
    
}

function passwordChecker(password_box,password_box2){
    if(password_box.value !== password_box2.value){
        error(password_box2,"Password doesn't match")
    }
    else{
        success(password_box2)
    }
}

function checkLength(field,min,max){
    // console.log(field.value.length);
    
    if(field.value.length<min){
        error(field,`${getFieldName(field.id)} must be atleast ${min} characters`)
    }
    else if(field.value.length>max){
        error(field,`${getFieldName(field.id)} must be less than ${max} characters`)
    }
    else{
        success(field);
    }
}

function getFieldName(fieldName){
    return fieldName[0].toUpperCase()+fieldName.slice(1);
}

function error(input,msg){
    // console.log(1);
    const formHandler = input.parentElement; 
    formHandler.className = "form-handler error"
    formHandler.querySelector("small").innerText = msg;
}

function success(input){
    // console.log(1);
    const formHandler = input.parentElement; 
    formHandler.className = "form-handler success"
}

// function validateEmail(email) {
//     const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }