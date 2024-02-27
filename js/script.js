

function validateEmail(email) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

let email = document.getElementById("email")
let error = document.querySelector(".error")
let container = document.querySelector(".container")
let sucontainer = document.querySelector(".success-container")
let email_span = document.querySelector(".email-span")

document.getElementById('subEmail').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("email here ", email.value);
    var isValid = validateEmail(email.value);
    if (isValid == false) {
        error.style.display = "flex"
        email.classList.add("danger")
    }
    else {
        email_span.innerHTML = email.value
        container.style.display = "none"
        sucontainer.style.display = "flex"
    }
})

document.getElementById("dismiss").addEventListener("click", () => {
    console.log('hi, I am dismissed');
    container.style.display = "flex"
    sucontainer.style.display = "none"
})

