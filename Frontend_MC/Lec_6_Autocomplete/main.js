import getCountries from "./fetchData.js";

// getCountries("india").then(function (res) {
//     console.log(res)
// })
const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

const handleSearch = async (keyword) => {
  const countriesArr = await getCountries(keyword);
  const countryNameArr = countriesArr.map((country) => country.name.common);
  return countryNameArr;
};

const populateSuggestionBox = (countryNameArr) => {
  if (countryNameArr.length) {
    suggestionBox.classList.add("visible");
  } else {
    suggestionBox.classList.remove("visible");
  }
  // before showing any result make sure you reset your suggestion box
  suggestionBox.innerHTML = "";

  const fragment = document.createDocumentFragment();
  // add all the lis to that fragment
  countryNameArr.forEach((countryName) => {
    const li = document.createElement("li");
    li.innerText = countryName;
    li.onclick = function () {
      console.log("I am here");
      inputBox.value = li.innerText;
      suggestionBox.classList.remove("visible");
    };
    fragment.appendChild(li);
  });
  suggestionBox.appendChild(fragment);
};

const handleSuggestions = async (e) => {
  console.log(e.target.value);
  const keyword = e.target.value;
  const countryNameArr = await handleSearch(keyword);
  populateSuggestionBox(countryNameArr);
};
/****
 * debounce function takes two arguments.first is the function which it wants to debounce.Second is delay
 * debounce function is like an angry teacher .Lets say it is 8 am.He tells please come after 30 minutes.
 * lets say you went after 20 minutes.Now he will say you have to again wait for 30 minutes come after 8:50
 * ***/

function debounce(fn, delay = 1000) {
  // intial value of timerId is undefined
  let timerId;
  return function (...args) {
    //grumpy
    if (timerId) {
      console.log("I am reseting you now wait again from the start");
      clearTimeout(timerId);
    }
    // they want to call the fn after a delay
    timerId = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}
//user starts an action that is typing hello.
//There was certain duration of time required to type hello .
//Debouncing says that we want to make sure that you have typed the input that you want to give.
//when you have given the input then only debouncing starts its work

inputBox.addEventListener("input", debounce(handleSuggestions));

// if interval b/w two subseqnet key press is more than delay then only i will call it again

// There is only two usecases either setTimout calls it self
//or
// clearTimout kill it

//debouncing is if you have an interval shorter than delay then you have to wait again
