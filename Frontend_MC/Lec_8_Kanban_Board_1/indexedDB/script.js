let db;

let name = document.querySelector("#name");
let address = document.querySelector("#add");
let phone = document.querySelector("#ph");
let btn = document.querySelector("button");
let request = indexedDB.open("employees", 1);
request.onupgradeneeded = function (e) {
  db = e.target.result;
  //or db = request.result because e.target and request are same
  console.log("running onupgradeneeded", db);
  db.createObjectStore("employee", { keyPath: "eId" });
};

request.onsuccess = function (e) {
  console.log("running onsuccess");
  db = e.target.result;
  //or db = request.result because e.target and request are same
};

request.onerror = function (e) {
  console.log("onerror! doesnt work", e);
};

btn.addEventListener("click", function () {
  addEmployee();
});
function addEmployee() {
  let tx = db.transaction("employee", "readwrite");

  let store = tx.objectStore("employee");
  store.add({
    eId: Date.now(),
    name: name.value,
    address: address.value,
    phone: phone.value,
  });
}
