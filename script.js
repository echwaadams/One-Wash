const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null){
        messages.push('email is required')
    }

    if (password.value.length <= 12) {
        messages.push("Password must be longer than 12 characters")
    }

    if (password.value.length >= 16) {
        messages.push("Password must be less than 16 characters")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }

})
window.addEventListener("scroll",function(){
    var div = document.querySelector("div");
    div.classList.toggle("sticky", window.scrollY > 0);
})