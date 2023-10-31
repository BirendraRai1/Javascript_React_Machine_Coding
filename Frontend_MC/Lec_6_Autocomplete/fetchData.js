/**   make HTTP request from browser.It returns a promise
it is an promise based API*/
/***
 * Fetch API request ->
 * *  Here we are getting GET request and this get request gives you response object
 * * response object is composed of header (metadata)+body(actual data)
 *      * To extarct actual data you have to call response.json() and
 *       this fn is also promise based
 * * The route in fetch request should be public , or you should be authenticated
 * */

// fetch(`https://restcountries.com/v3.1/name/`)
//     .then(
//         function (response) {
//             // this response contains both-> data(body)+ metadata(header).You get the body in the form of readable stream that is in the form of binary
////To convert that binary into json we have called response.json() and it is also a promise based function
//             console.log("response", response)
//             return response.json();
//         }
//     ).then((data) => {
//         console.log("data", data);
//     }).catch(err => {
//         console.log("in catch");
//         console.log("hello", err);
//     })

async function getCountries(keyword) {
  try {
    // http response
    const rawResponse = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`
    );
    const response = await rawResponse.json();
    // console.log("data",data);
    console.log(rawResponse.status);
    if (rawResponse.status == 404) {
      console.log("Page not found");
      return [];
    } else {
      console.log("Data found");
    }
    return response;
  } catch (err) {
    console.log("err", err);
  }
}
/*If you see an async function always await for it because it always return a promise
because for await we will stop but not javascript
getCountries("india").then((res)=>{
console.log(res)
})
*/

export default getCountries;
