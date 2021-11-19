// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navBTN = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navBTN.addEventListener('click', function(){
    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if(linksContainerHeight == 0){
    linksContainer.style.height = `${linksHeight}px`;
    }else {
    linksContainer.style.height = 0;
    }
})


// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const nav = document.getElementById('nav');
    const navHeight = nav.style.height;
    const topLink = document.querySelector('.top-link');

    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav');
    }else {
        nav.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else {
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
