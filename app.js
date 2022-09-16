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
    let expression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    e.preventDefault();

    if (!numberIsValidated) {
        setMessage(`Please fill the space appropraitely`, alertMsg, inputNumber)
        return false
    } else if (!expression) {
        setMessage(`Please fill the space appropraitely`, alertMsg, inputNumber)
        return false
    } else {
        // numberValidation = true;
        return true;
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
    headerList.style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    headerList.style.transformStyle = 'preserve-3d';
    headerList.style.height = '100vh'
    headerList.style.backgroundColor = '#252b46';
    headerList.style.flexDirection = 'column';
    headerList.style.padding = '70px 40px';
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
    openNavbar.style.margin = '10px 25px 0px 0px';
    // logo.style.margin = '57px 0px 20px 20px';
    logo.style.marginLeft = '20px'
    mobileHeader.style.padding = '17px 25px'
}