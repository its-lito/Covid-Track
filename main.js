function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
    
}

//setFormMessage(loginForm, "success", "Log in successfull");

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function checkPassword(){
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password === confirmPassword ){
        
    }
    else {
        setInputError(signupConfirmPassword, "Passwords don't match");
    }
}

function formsubmit(){
    let signupUsername = document.getElementById("signupUsername").value;
    let email = document.getElementById("email").value;
    let signupPassword = document.getElementById("signupPassword").value;

    signupUsername.submit();
    email.submit();
    signupPassword.submit();

}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    } );

    document.querySelector("#linkLogIn").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    } );

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username or password");
    });

    //

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        checkPassword();
//        setInputError(signupPassword, "Passwords don't match");
        
        createAccountForm.addEventListener("input", e => {
            clearInputError(signupPassword);
        });
    });



    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length == 0){
                setInputError(inputElement, "Username can not be empty");
            }
            if(e.target.id === "signupPassword" && e.target.value.length == 0){
                setInputError(inputElement, "Password can not be empty");
            }
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && (e.target.value.length < 8 || e.target.value.length < 10)) {
                setInputError(inputElement, "Password must contain at least 8 characters");
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

        
    });
});


//"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
////onclick="formsubmit()"