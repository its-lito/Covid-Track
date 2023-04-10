function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
    
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function checkPassword(){
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;

    if (password === confirmPassword ){        
    }
    else {
        setInputError(ConfirmPassword, "Passwords don't match");
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    const profile = document.querySelector("#profile");
    const changePassword = document.querySelector("#changePassword");

    document.querySelector("#changePassword").addEventListener("click", e => {
        e.preventDefault();
        profile.classList.add("form--hidden");
        changePassword.classList.remove("form--hidden");
    } );

    document.querySelector("#profile").addEventListener("click", e => {
        e.preventDefault();
        profile.classList.remove("form--hidden");
        changePassword.classList.add("form--hidden");
    } );


    changePassword.addEventListener("confirm", e => {
        e.preventDefault();

        checkPassword();
        
    changePassword.addEventListener("input", e => {
            clearInputError(changePassword);
        });
    });



    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "newPassword" && e.target.value.length == 0){
                setInputError(inputElement, "Password can not be empty");
            }
            if (e.target.id === "newPassword" && e.target.value.length > 0 && (e.target.value.length < 8 || e.target.value.length < 10)) {
                setInputError(inputElement, "Password must contain at least 8 characters");
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

        
    });
});