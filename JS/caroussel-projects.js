/* When button is clicked, remove first div, append third one */

const mod = (value, limit) => ((value % limit) + limit) % limit;


/* Set up of variables */


const buttonPrev = document.querySelector(".projects-process__component-previous");
const buttonNext = document.querySelector(".projects-process__component-next");

var caroussel = document.querySelector(".projects-process__caroussel-items")

/* HTML code for the different learning outcomes are linked to the correct JS variables */

var slide1 = `<div class="projects-process__caroussel-item caroussel-item" id="lo1">
                            <img class="projects-process__caroussel-image" src="./images/outcomes__interactive-prototypes.png">
                            <h3 class="projects-process__caroussel-title title-box"> Interactive prototypes</h3>
                            <p class="projects-process__caroussel-paragraph paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                            <a href="learning-outcomes.html#lo__interactive"><input class="projects-process__caroussel-button button" type="button" value="See more"></a>
                        </div> `;
var slide2 = `<div class="projects-process__caroussel-item caroussel-item caroussel-item" id="lo2">
                            <img class="projects-process__caroussel-image" src="./images/outcomes__creative-iterations.png">
                            <h3 class="projects-process__caroussel-title title-box"> Creative iterations</h3>
                            <p class="projects-process__caroussel-paragraph paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                            <a href="learning-outcomes.html#lo__iterative"><input class="projects-process__caroussel-button button" type="button" value="See more"></a>
                        </div>`;
var slide3 = `<div class="projects-process__caroussel-item caroussel-item" id="lo3"> 
                            <img class="projects-process__caroussel-image" src="./images/outcomes__development.png">
                            <h3 class="projects-process__caroussel-title title-box">Transferable production</h3>
                            <p class="projects-process__caroussel-paragraph paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                            <a href="learning-outcomes.html#lo__transferable"><input class="projects-process__caroussel-button button" type="button" value="See more"></a>
                        </div>`;

var slide4 = `<div class="projects-process__caroussel-item caroussel-item" id="lo3"> 
    <img class="projects-process__caroussel-image" src="./images/learning-outcomes__professional-standard.png">
    <h3 class="projects-process__caroussel-title title-box">Personal standard</h3>
    <p class="projects-process__caroussel-paragraph paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
    <a href="learning-outcomes.html#lo__professional"><input class="projects-process__caroussel-button button" type="button" value="See more"></a>
</div>`;

var slide5 = `<div class="projects-process__caroussel-item caroussel-item" id="lo3"> 
    <img class="projects-process__caroussel-image" src="./images/learning-outcomes__personal-leadership.png">
    <h3 class="projects-process__caroussel-title title-box">Personal leadership</h3>
    <p class="projects-process__caroussel-paragraph paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
    <a href="learning-outcomes.html#lo__personal"><input class="projects-process__caroussel-button button" type="button" value="See more"></a>
</div>`;

/* All of the variables are put into an array, the whole array is being displayed on the webpage */
let index = 0;
let indexMiddle = 1;
let slides = [slide1 , slide2 , slide3, slide4, slide5];

/* All the slides are getting joined in a different variable, this deletes the comma inbetween them and replaces it with a blank space */


// let slides2 = slides.join(" ")

// /* Put the slides into the inner html of the caroussel so that they actually get displayed on the webpage before the page loads */
// caroussel.innerHTML = slides2;

function render() {
    const current = slides[index];
    const middle = slides[indexMiddle];
    const next = slides[mod(index + 2, slides.length)];
    caroussel.innerHTML = [current, middle, next].join(" ");

    console.log(middle);
    middle.className += ' test'; //note the space
}

render();


/* function for when you click on the left arrow */
function previous() {
    index = mod(index + 1, slides.length);
    indexMiddle = mod(indexMiddle + 1, slides.length);
    render();
    // const current = slides[index];
    // const next = slides[mod(index + 1, slides.length)];


//     /* Puts the first slide out of their first spot and instead puts it in the back of the row */
//    slides.push(slides.shift());

//    //console.log(slides);

//    /* Removes the comma inbetween the slides again and replaces it with a space */
//    let slides2 = slides.join(" ")

   /* puts the slides in their new spot on the page */
//    caroussel.innerHTML = [current, next].join(" ");

   //console.log(slides);

   //console.log(caroussel);
}

function next() {
    index = mod(index - 1, slides.length);
    indexMiddle = mod(indexMiddle - 1, slides.length);
    // /* Puts the second slide on the back of the array */
    // slides.push(slides.shift(1));
 
    // //console.log(slides);
    
    // /* Removes the comma inbetween the slides again and replaces it with a space */
    // let slides2 = slides.join(" ")
    
    // /* Puts this into the caroussel div */
    // caroussel.innerHTML = slides2;
 
    // console.log(slides);
    render();

    //console.log(caroussel);
 }