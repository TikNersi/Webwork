const height = document.querySelector(".fixed-info");
const textLanding = document.querySelector(".s-landing");
const logo = document.querySelector(".web-logo-img")
window.addEventListener('scroll', function () {
    const scr = window.scrollY;
    if(scr > 67) {
        height.classList.add("added-class")
        textLanding.classList.add("s-landing--show")
        logo.classList.add("web-logo-img-adder")
    } else {
        height.classList.remove("added-class")
        textLanding.classList.remove("s-landing--show")
        logo.classList.remove("web-logo-img-adder")
    }
})
const heading = document.querySelector(".ttt");
window.addEventListener("scroll", function() {
    let scrolling = window.scrollY;
    console.log(scrolling)
        if(scrolling > 30) {
            heading.classList.add("added-scroll")
        } else {
            heading.classList.remove("added-scroll")
        }
})
const imgLeft = document.querySelector(".left-image-hidden");
const content = document.querySelector(".content")
window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if(scroll > 1000) {
        imgLeft.classList.add("smooth-scr")
    } else {
        imgLeft.classList.remove("smooth-scr")
    }
})
window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if(scroll > 1000) {
        content.classList.add("smooth-cont")
    } else {
        content.classList.remove("smooth-cont")
    }
})
const imgRight = document.querySelector(".right-image-hidden");
const content2 = document.querySelector(".content2")
window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    console.log(scroll)
    if(scroll > 1320) {
        imgRight.classList.add("smooth-scr2")
    } else {
        imgRight.classList.remove("smooth-scr2")
    }
})
window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if(scroll > 1320) {
        content2.classList.add("smooth-cont2")
    } else {
        content2.classList.remove("smooth-cont2")
    }
})