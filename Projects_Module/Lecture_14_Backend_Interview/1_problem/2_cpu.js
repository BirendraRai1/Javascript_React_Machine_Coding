/***
 * CPU intensive task
 * cpu processing : image processing , creating files
 * Solution of dos attack is spin up a new process (child process,cluster)
 *
 *
 * ******/

const express = require("express");
const cors = require("cors");
const app = express();
//serial and parallel
function calculateFibonacci(number) {
  if (number <= 1) return number;
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}
app.use(cors());
// this type of attack is doS ->denial of service attack
app.get("/fib", (req, res) => {
  const { number } = req.query;
  console.log("received req");
  if (!number || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a valid positive number." });
  }
  const answer = calculateFibonacci(number);
  console.log(answer);
  res.status(200).json({
    status: "success",
    message: answer,
  });
});
app.listen(3000, () => console.log("server is running on port 3000"));

//In this case of calculating fibonacci of 40 will be very large . Here we are doing a lot of
//things so it will take a lot of time to give response.Everything will be done sequentially
//In this case response time will become very huge.There are two important observation request
//will be send you earlier but response will be served you later so response time will become
//very huge

//in nodejs there is a guy known as libub and you are totally sitting inside an operating system
//All your request goes to os and from os it is sent to libub and libub will then send it to server
//when the server gets exhausted libub keeps the request with itself so that when the guy is available
//then they can serve it

//DdoS ->distributed denial of service
//dos ->denial of service
