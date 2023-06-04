// Start menu
let openMenuIcon = document.querySelector(".open-menu");
let headerContent = document.querySelector("header .container .content");
let closeMenu = document.querySelector(`.close-menu`);

// To Open Menu
openMenuIcon.onclick = () => {
    headerContent.style.right = "0"
    closeMenu.style.display = "block";
    openMenuIcon.style.display = "none";
    document.querySelector(".overlay").style.display = "block"
}

// To Close Menu
closeMenu.addEventListener(`click`, closeMenuFunction)

function closeMenuFunction() {
    headerContent.style.right = "-300px"
    closeMenu.style.display = "none";
    openMenuIcon.style.display = "block";
    document.querySelector(".overlay").style.display = "none"
}

// To close Menu When click out of the menu
document.addEventListener(`click`, (e) => {
    if (e.target.className === "overlay") {
        closeMenuFunction()
    }
})


// Miny Menu Link In Mobile
let parentLis = Array.from(document.querySelectorAll(`header .content .parent`));
// To Open Miny Menu if it has been Clicked
parentLis.forEach((li) => {
    li.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`parent`)) {
            e.target.children[1].classList.toggle(`active`)
        }
    })
})
// end menu

// Start Navbar //
// varaibles
let liSParent = Array.from(document.querySelectorAll('header .content > ul > li.parent > span')),
    dropDownUls = Array.from(document.querySelectorAll('header  .content > ul > li > .mega-menu > ul.drop-down')),
    arrowsImg = Array.from(document.querySelectorAll('header .content > ul > li.parent span + img'));


liSParent.forEach(li => {
    li.addEventListener('click', (e) => {
        dropDownUls.forEach(ul => {
            ul.classList.add('d-none')
        })
        e.target.parentElement.children[2].firstElementChild.classList.toggle('d-block'); // To target the ul mega menu when click on the span

        dropDownUls[e.target.dataset.num - 1].classList.contains('d-block') ? arrowsImg[e.target.dataset.num - 1].src = 'images/icon-arrow-up.svg' : arrowsImg[e.target.dataset.num - 1].src = 'images/icon-arrow-down.svg';
    })
})
// End Navbar //


/* Start Landing */
// Select Media to Change the landing img
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 991px)')

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        // Then log the following message to the console
        document.querySelector('.landing .img img').src = 'images/image-hero-mobile.png'
    }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
/* End Landing */
