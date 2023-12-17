console.log("working");
//normally the server will be sending html file to the client(browser) but browser needs to tell the server i need to initiate so in the below line we are initiating
// In the below line we are intiating a websocket connection
const socket = io("http://localhost:3000"); //here we are getting the io object and passing the address of the server
//here using socket.on we are listening to the event emmitted from the server
//event based architecture is very important without which your socket io will not work
socket.on("message from the server", function () {
  console.log("I am connected to the socket");
});

const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const grp = document.querySelector("#grp");
const joinGrp = document.querySelector("#join_grp");
const stg = document.querySelector("#send_to_group");
//run for sender
btn.addEventListener("click", function () {
  let value = input.value;
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    socket.emit("message", value);
    input.value = "";
  }
});

grp.addEventListener("click", function () {
  console.log("group created request");
  socket.emit("create_grp", Math.random(0, 1) * 1000);
});

joinGrp.addEventListener("click", function () {
  console.log("grp join request");
  socket.emit("join_room");
});

stg.addEventListener("click", function () {
  let value = input.value;
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    socket.emit("grp_message", value);
    input.value = "";
  }
});

//this code will run for receiver
socket.on("recived_msg", function (value) {
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
});

socket.on("serv_grp_message", function (data) {
  console.log("grp message", data);
});

/*whatever messages are coming from the server are red in color and whatever messages we are sending from the client are green in color
 *which can be viewed in the network tab then ws and then on messages****/
