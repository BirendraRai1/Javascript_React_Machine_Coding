// AbortController is an existing object inbuilt API present in browser
//There are three steps involved in abortController mentioned as 1 2 and 3
// 1 create a instance from AbortController
const abortcontroller = new AbortController();
(async function () {
  // fetch can have two arguments one for url and second for options
  try {
    // 2 attach signal to a fetch request
    const responsePromise = fetch("https://restcountries.com/v3.1/name/india", {
      signal: abortcontroller.signal,
    });
    //between line 8 and 10 a fetch request is being sent and we are waiting for the the responsePromise in line number 15
    console.log("request is send");
    // 3 call abort
    abortcontroller.abort(); //Here it aborts the task of request being sent
    const response = await responsePromise;
    const ans = await response.json();
    console.log("ans", ans);
  } catch (err) {
    if (err.name == "AbortError") {
      // Request was aborted
      console.log("Fetch request was aborted.");
      return err.name;
    } else {
      console.error("Fetch error:", error);
    }
  }
})();

//  lets say we want to implement a request timeout .If response takes more than 2sec then I want to abort it
//Abort controller is an api given by the browser.lets say that server sends a request
//to api and we want to cancel the request on flight.It is used to cancel the sent request

/**
 * Abort Controller
 *  1>timeout a request
 *  2>how you can manage a stale request
 * *****/
