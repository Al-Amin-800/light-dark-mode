// light/dark moode starts here=>
let body = document.querySelector('body')

let btn = document.querySelector(".darkModeTogglerBtn");
let sunIcon = btn.querySelector(".sun");
let heading = document.querySelector(".textarea");
function darkModeToggler () {
    body.classList.toggle('darkmode')

    let isDarkMode = body.classList.contains("darkmode");

    if(isDarkMode==true){
        heading.innerHTML = "Dark Mode"
        sunIcon.style.marginTop = '-100%'


    } 
    if(isDarkMode ==false) {

        heading.innerHTML = "Light Mode";
        sunIcon.style.marginTop = "0%";
    }


}


btn.addEventListener('click', darkModeToggler)
// light/dark moode end



//*  custom cursor
let cursor = document.querySelector('.cursor')
let cursorOne = document.querySelector(".cursor_one");
let cursorTwo = document.querySelector(".cursor_two");
let cursorThree = document.querySelector(".cursor_three");
let cursorFour = document.querySelector(".cursor_four");
let cursorFive = document.querySelector(".cursor_five");
function customMouse (event) {
    let mouseLeft = event.pageX;
    let mouseTop = event.pageY;
    console.log(mouseLeft)
    // cursor.style.left = `${mouseLeft}px`;
    // cursor.style.top = `${mouseTop}px`;

    cursor.animate({
      left: `${mouseLeft}px`,
      top: `${mouseTop}px`,
    }, {
        duration: 300,
        fill: 'forwards'
    });


    cursorOne.animate(
      {
        left: `${mouseLeft}px`,
        top: `${mouseTop}px`,
      },
      {
        duration: 400,
        fill: "forwards",
      }
    );
    cursorTwo.animate({
      left: `${mouseLeft}px`,
      top: `${mouseTop}px`,
    }, {
        duration: 500,
        fill: 'forwards'
    });
    cursorThree.animate({
      left: `${mouseLeft}px`,
      top: `${mouseTop}px`,
    }, {
        duration: 600,
        fill: 'forwards'
    });
    cursorFour.animate({
      left: `${mouseLeft}px`,
      top: `${mouseTop}px`,
    }, {
        duration: 700,
        fill: 'forwards'
    });
    cursorFive.animate({
      left: `${mouseLeft}px`,
      top: `${mouseTop}px`,
    }, {
        duration: 800,
        fill: 'forwards'
    });



}


window.addEventListener('mousemove',customMouse )