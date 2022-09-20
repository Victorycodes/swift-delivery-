const form = document.querySelector('.wrapper-form');
const alertMsg = document.querySelector('.alertmsg');
const inputNumber = document.getElementById('phoneNumberInput');
const openNavbar = document.querySelector('.navbar');
const headerList = document.querySelector('.header-navbar')
const list = document.querySelector('.header-list')
const logo = document.querySelector('.logo')
const mobileHeader = document.querySelector('.navbarBtn')
const closeBtn = document.querySelector('.closeNavbar')

// FORM VALIDATION

form.addEventListener('submit', function(e) {
    

    let numberIsValidated = inputNumber.value
    // let phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let phoneRegEx = /^[0-9]{11}$/; 

    e.preventDefault();

    if (!numberIsValidated) {
        setMessage(`Phone number can not be empty`)
    } else if (!phoneRegEx.test(inputNumber.value)) {
        setMessage(`Invalid phone number`)
    }
})

// Set message
function setMessage(errMsg) {
    alertMsg.style.color = 'red';
    alertMsg.style.fontStyle = 'italic'
    alertMsg.textContent = errMsg;
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
    headerList.style.animation = '10s cubic-bezier(1, 1.02, 0, -0.96) 10s 10 normal none running spin';
    headerList.style.transitionDelay = '1000ms'
    headerList.style.transitionDuration = '1000ms'
    headerList.style.transitionTimingFunction = 'ease-in'
    headerList.style.height = '100vh'
    headerList.style.backgroundColor = '#17181A';
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