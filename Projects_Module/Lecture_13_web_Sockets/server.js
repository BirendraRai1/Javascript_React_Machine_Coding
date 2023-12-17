/*cons of http protocol
 *1>HTTP protocol are stateless(no connection server forgets about the client after serving request)
 *2>Only client can send request
 *3>its packet size is large(http were used to send files like javascript files,css file,html files)
 *4>Timeout issue
 *
 *
 * Due to this a new protocol was introduced known as web socket.
 *
 * Link of socket :https://socket.io/docs/v4/tutorial/introduction
 * * Web socket :
 *  1. it has small packet size
 *  2. it allows 2 way communication
 *  3. it keep the connection open always
 *
 * Cons:
 *  -> socket connection are expensive : client : 256 open sockets (chrome web)
 * -> packet size wrt to http is smaller ****/

/*express is fit for sending data but for socket we have to use a http packet
 *express is a abstraction over normal nodejs.Express is used to create normal apis and server rendered application
 *It has two usecases:-1>It is used to serve the file
                       2>It is used to send the data
 * It is not fit for web socket connection
                       ****/
const express = require("express");
//http is comming from nodejs we don't have to require it
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const nodeServer = http.createServer(app); //app is passed here so that nodeserver has access to it
//this io is responsible for your websocket communication
const io = new socketIo.Server(nodeServer); //nodeServer is passed to this socketIo so that io object has access to both app and express
// it will  share all the files that are in public folder
app.use(express.static("public")); //To serve the pulic file this is the middleware
// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
let room;
//This event will be called whenever someone is going to be connected to you.
//This line means that the server is waiting for the client to connect.So we should make our client web socket enabled
io.on("connection", function (socket) {
  //here in the callback of the "connection" we are going to get the socket which represents the connection between the client and the server
  console.log(socket.id, "someone is connected"); //socket.id Each new connection is assigned a random 20-characters identifier. This identifier is synced with the value on the client-side
  /*Second is that if we stop the server our client will continuously make request to the server*/

  //from socket.emit we are going to emit an event to the end client
  //   setInterval(() => {
  //     socket.emit("message from the server");
  //   }, 2000);

  //receive an event from the client
  socket.on("message", function (data) {
    //io.sockets.emit will send to all the clients including the client who has sent the message. socket.broadcast.emit will send the message to all the other clients except the client who has sent the message
    socket.broadcast.emit("recived_msg", data);
    //io.sockets.emit("recived_msg", data);
  });

  socket.on("create_grp", function (currentRoom) {
    room = currentRoom;
    console.log("grp is created");
    socket.join(currentRoom);
  });

  socket.on("join_room", function () {
    console.log(socket.id, "joined the room");
    socket.join(room);
  });

  socket.on("grp_message", function () {
    socket.to(room).emit("serv_grp_message");
  });

  socket.on("disconnect", function () {
    console.log(socket.id, "got disconnected");
  });
});
nodeServer.listen(3000, () => {
  console.log("server is running at port 3000");
});

/*In same server what happen to be used earlier you used to send the json response,file and work with web sockets as well
 *Now i am only listening with this nodeServer.So i have created a server with the help of http module that is already present inside my nodejs and when you pass
 *app inside it whenever a normal request comes to you that is not abled to be served by nodeServer that does not belong to socket is transferred to app
 *
 *
 *
 *
 *
 * when the connection is lost between the client and the server
 * after restart the socket id will change between the client and the server
 * for sending the message we have emit and for receiving the message we have on
 * similar to connection we have disconnect method as well********/
