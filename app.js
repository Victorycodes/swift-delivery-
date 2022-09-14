const form = document.querySelector('.wrapper-form');
const alertMsg = document.querySelector('.alertmsg');
const inputNumber = document.querySelector('.number');
const openNavbar = document.querySelector('.navbar');
const headerList = document.querySelector('.header-navbar')
const list = document.querySelector('.header-list')
const logo = document.querySelector('.logo')
const mobileHeader = document.querySelector('.navbarBtn')

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

// NAV BAR

openNavbar.addEventListener('click', headerDropdown);

// To Open Nav Bar
function headerDropdown(e) {
    headerList.style.display = "flex";
    list.style.display = "block";
    headerList.style.height = '100vh'
    headerList.style.backgroundColor = '#252b46';
    headerList.style.flexDirection = 'column';
    headerList.style.padding = '50px 40px';
    list.style.gap = '0px';
    headerList.style.margin = '0px';
    openNavbar.style.margin = '0px';
    logo.style.margin = '0px';
    logo.style.display = 'none';
    list.style.flexDirection = 'column';
    list.style.textAlign = 'center';
    headerList.style.minWidth = '375px';
    openNavbar.style.display = 'none';
    list.style.fontSize = '24px';
    list.style.fontWeight = '400'
    mobileHeader.style.padding = '0px'
}