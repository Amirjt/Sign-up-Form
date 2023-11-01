const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeat = document.getElementById("repeat");
const emailTxt = document.getElementById("emailtxt");
const passwordTxt = document.getElementById("passwordtxt");
const repeatTxt = document.getElementById("repeattxt");
const btn = document.querySelector("button");

function validateInputs() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    const isEmailValid = emailRegex.test(emailInput.value);
    const isPasswordValid = passwordInput.value.length >= 8;
    const isRepeatValid = repeat.value === passwordInput.value;

    emailTxt.classList.toggle("hidden", isEmailValid);
    repeatTxt.classList.toggle("hidden", isRepeatValid);

    if (!isPasswordValid) {
        passwordTxt.textContent = "Your Password is too short";
        passwordTxt.style.color = "red";
        passwordTxt.classList.remove("hidden");
        passwordInput.style.border = "1px solid red"
    } else if (isPasswordValid && passwordInput.value.length < 12) {
        passwordTxt.textContent = "Your Password is not bad";
        passwordTxt.style.color = "orange";
        passwordTxt.classList.remove("hidden");
        passwordInput.style.border = "1px solid orange"
    } else {
        passwordTxt.textContent = "Your Password is Great";
        passwordTxt.style.color = "green";
        passwordTxt.classList.remove("hidden");
        passwordInput.style.border = "1px solid green"
    }

    if(isEmailValid){
        emailInput.style.border = "1px solid green"
    }else {
        emailInput.style.border = "1px solid red"
    }

    const isAnyInputEmpty = !emailInput.value || !passwordInput.value || !repeat.value;
    const isButtonDisabled = !isEmailValid || !isPasswordValid || !isRepeatValid || isAnyInputEmpty;

    if (isButtonDisabled) {
        btn.setAttribute("disabled", "");
        btn.classList.add("cursor-not-allowed");
    } else {
        btn.removeAttribute("disabled");
        btn.classList.remove("cursor-not-allowed");
    }
}

// Initially, validate inputs to disable the button if any are empty
validateInputs();

emailInput.addEventListener("input", validateInputs);
passwordInput.addEventListener("input", validateInputs);
repeat.addEventListener("input", validateInputs);

btn.addEventListener("click", () => {
    emailTxt.style.display = "none";
    passwordTxt.style.display = "none";
    repeatTxt.style.display = "none";
    location.href = "https://jettweb.ir/";
});


