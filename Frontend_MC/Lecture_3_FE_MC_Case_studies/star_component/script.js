/*   you have listen to three events 
                click:-when someone clicks on the star give the rating 
                        update star upto that level 
                        update Rating count 
                mouseover:-On mouseover we have to change the stars upto that 
                level to yellow
 * edge cases
                mouseleave:-on mouseleave move it to gray stars
*/

let allStars = document.querySelectorAll(".star");
for (let i = 0; i < allStars.length; i++) {
  // event listeners are asynchronous because of that it's handler function(callback function).Here we will have 5 copies and these 5 copies will occupy memory space .
  //So there will be 5 handler function in memory.//so this is not a good approach
  allStars[i].addEventListener("click", function () {
    console.log("I am clicked");
  });
}
//starContainer is an object given by a variable document
const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starsArr = document.querySelectorAll(".star");
let pidx = 0;

/****
 * We have saved memory on adding event listener to parent but the features of bubbling occurs and that
 * parent will only listen to the event when it bubbles through it.
 *
 * Edge case we need to handle is  only process the event coming from the start
 *
 * */

// event bubbble
//starContainer object contains a method addEventListener
starContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  let elem = e.target;
  let isrequired = elem.hasAttribute("idx");
  if (!isrequired) return;
  console.log(elem);
  pidx = elem.getAttribute("idx");
  fillStars(pidx);
});

starContainer.addEventListener("mouseover", function (e) {
  let elem = e.target;
  let isrequired = elem.hasAttribute("idx");
  if (!isrequired) return;
  let cidx = elem.getAttribute("idx"); //here we are not taking pidx because after hovering it because yellow upto that star and after mouseleave it does not change to gray
  changeStars(cidx);
});

starContainer.addEventListener("mouseleave", function (e) {
  // we need to reset
  changeStars(pidx);
});

function fillStars(idx) {
  // update the count
  countSpan.textContent = idx;
  changeStars(idx);
}
function changeStars(idx) {
  // reset all the stars
  for (let i = 0; i < starsArr.length; i++) {
    // classList is a property that gives you all the classes on an element
    //console.log("starsArr[i].classList ", starsArr[i].classList);
    starsArr[i].classList.remove("yellow");
  }
  // update the color to cidx
  for (let i = 0; i < idx; i++) {
    // classList is a property that gives you all the classes on an element
    starsArr[i].classList.add("yellow");
  }
}
