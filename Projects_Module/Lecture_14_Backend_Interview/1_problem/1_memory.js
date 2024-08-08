/***
 * Ram,cache->memory
 * *****/

//->in nodejs receive as well as send request
//everything related to http
const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", function (request, response) {
  console.log("got the request");
  fs.readFile("./big.file", (err, data) => {
    //the big file is not in this directory it can be of 455MB and monitor on it in activity
    //on vs code terminal run node 1_memory.js and in the main terminal run curl http://localhost:3000
    //whats the issue with the current code
    //lets say you have 128 GB of ram.If you are sending the files where you have to first read the files
    //and then send the data .first you have to get all the content into the ram and then send the data .This
    //is not a good way to send the data.This is the bottleneck and the bottleneck is the memory
    //The solution is the streaming
    if (err) throw err;
    response.end(data);
  });
});
server.listen(3000, () => {
  console.log("listening on port 3000");
});
