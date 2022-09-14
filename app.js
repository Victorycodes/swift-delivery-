const form = document.querySelector('.wrapper-form');
const alertMsg = document.querySelector('.alertmsg');
const inputNumber = document.querySelector('.number')

// FORM VALIDATION

form.addEventListener('submit', function(e) {
    
    let numberValidation = false
    let numberIsValidated = inputNumber
    let expression = /^[\+]?[(]?[0-9]{3}[)]?[-s\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    e.preventDefault();

    if (!numberIsValidated) {
        setMessage(`Please fill the space appropraitely`, alertMsg, inputNumber)
    } else if (!expression) {
        setMessage(`Please fill the space appropraitely`, alertMsg, inputNumber)
    } else {
        numberValidation = true;
    }
})

// Set message
function setMessage(errMsg, alertMsg) {
    alertMsg.style.color = 'white';
    alertMsg.textContent = errMsg;
    alertMsg.style.backgroundColor = 'red';
    alertMsg.style.borderBottomLeftRadius = '4px';
    alertMsg.style.borderBottomRightRadius = '4px';
    alertMsg.style.padding = '7px 3px 7px 15px';
    alertMsg.style.display = 'flex';
    setTimeout(() => {
    alertMsg.style.display = 'none';
    }, 3000);
}