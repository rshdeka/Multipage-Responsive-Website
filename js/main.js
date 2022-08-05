// ---------------------- NAVBAR ----------------------------
// change navbar style on scrolling
const navbar = document.querySelector('nav');            // get the 'nav' section
window.addEventListener('scroll', () => {
    navbar.classList.toggle('window-scroll', window.scrollY > 0)
})


// -------------------------- FAQ ----------------------------
// show/hide faq answers
const faqs = document.querySelectorAll('.faq');          // get the 'faq' class
faqs.forEach(faq => {                                    // add an eventListener for each of them
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');                    // on click, toggle the 'open' class

        // change + icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'            // change + icon to - after opening the answer
        } else{
            icon.className = 'uil uil-plus'             // change - icon to + after closing the answer
        }
    })
})


// --------------------- NAV MENU (Media Queries) -----------------------
// show nav menu column
// we will use JS to display the nav menu column when clicked on '='
const menu = document.querySelector('.nav_menu');                 // get the 'nav_menu' class
const menuOpenBtn = document.querySelector('#open-menu-btn');     // get the id's first
const menuCloseBtn = document.querySelector('#close-menu-btn');

menuOpenBtn.addEventListener('click', () => {
    menu.style.display = "flex";                         // change display to flex on click -> open
    // after opening, display 'X' button and remove '='
    menuCloseBtn.style.display = "inline-block";
    menuOpenBtn.style.display = "none";                  // menu '=' button should disapper
})

// function to close nav menu column
const closeNav = () => {
    menu.style.display = "none";                        // change display to none on click -> close
    menuCloseBtn.style.display = "none";                // close 'X' button should disapper
    menuOpenBtn.style.display = "inline-block";  
}

// hide nav menu column
menuCloseBtn.addEventListener('click', closeNav);


// --------------------- FORM Submission -----------------------