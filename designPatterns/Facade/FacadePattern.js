const axios = require("axios");
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "content-Type": "application/json" },
  }).then((res) => res.json());
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: { "content-Type": "application/json" },
  }).then((res) => res.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

//using fetch
// function getFetch(url, params = {}) {
//   const queryString = Object.entries(params)
//     .map((param) => {
//       return `${params[0]}=${params[1]}`;
//     })
//     .join("&");
//   return fetch(url, {
//     method: "GET",
//     headers: { "content-Type": "application/json" },
//   }).then((res) => res.json());
// }

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

//using axios
//axios wont run we have to install it
function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data); //for axios it is res.data
}
