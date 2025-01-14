const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input-group input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    inputs.forEach((input) => {
        if(!input.value) {
            console.log(input.value)
            input.parentElement.classList.add('error')
        } else {
            console.log(input.value)
            input.parentElement.classList.remove('error')
        }
        if(input.type == 'email') {
            if(validateEmail(input.value)) {
                input.parentElement.classList.remove('error');
            } else {
                input.parentElement.classList.add('error')
            }
        }
        if(input.type == 'password') {
            if(validatePassword(input.value)) {
                input.parentElement.classList.remove('error');
            } else {
                input.parentElement.classList.add('error');
            }
            
        }
    })

   
})
//Valida o email
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//valida a senha
const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;
    return passwordRegex.test(password);
}