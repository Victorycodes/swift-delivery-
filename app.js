const form = document.querySelector('.wrapper-form');
const alertMsg = document.querySelector('.alertmsg');
const inputNumber = document.querySelector('.number');
const openNavbar = document.querySelector('.navbar');
const headerList = document.querySelector('.header-navbar')
const list = document.querySelector('.header-list')
const logo = document.querySelector('.logo')
const mobileHeader = document.querySelector('.navbarBtn')
const closeBtn = document.querySelector('.closeNavbar')

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

// To Open Nav Bar
openNavbar.addEventListener('click', headerDropdown);

function headerDropdown(e) {
    headerList.style.display = "flex";
    headerList.style.height = '100vh'
    headerList.style.backgroundColor = '#252b46';
    headerList.style.flexDirection = 'column';
    headerList.style.padding = '50px 40px';
    headerList.style.margin = '0px';
    openNavbar.style.margin = '0px';
    logo.style.margin = '0px';
    logo.style.display = 'none';
    headerList.style.minWidth = '375px';
    openNavbar.style.display = 'none';
    mobileHeader.style.padding = '0px'
}


// To Close Nav Bar
closeBtn.addEventListener('click', closeDropdown);

function closeDropdown(e) {
    headerList.style.display = 'none';
    openNavbar.style.display = 'flex';
    logo.style.display = 'flex';
    openNavbar.style.margin = '-20px 44px 0px 0px';
    logo.style.margin = '42px 0px 0px 44px';
}