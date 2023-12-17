const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const shortId = require("shortid");
const cors = require("cors");
// it is part of nodejs
const crypto = require("crypto");

const app = express();
dotenv.config();
/*From my frontend that is served using vite server on port 5174 I am getting the UI rendered
 *after that we are making request to the express server on port 3000.So the next requesting
 *I am making is invalid.That request is known as cors request
 ***/
app.use(cors());
app.use(express.json());
const { PUBLIC_KEY, PRIVATE_KEY, WEBHOOK_SECERET } = process.env;
/***
 * this instance identifies your server
 * **/
const razorpayInstance = new Razorpay({
  key_id: PUBLIC_KEY,
  key_secret: PRIVATE_KEY,
});

app.get("/", function (req, res) {
  res.status(200).json({
    status: "success",
    message: "ngrok started",
  });
});

// initial booking
app.post("/checkout", async function (req, res) {
  const amount = 500;
  const currency = "INR";
  const payment_capture = 1;
  try {
    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: shortId.generate(),
      payment_capture: payment_capture,
    };
    // you create an order.You are telling your payment gateway that some user
    // is going to pay in a bit  of time
    const orderObject = await razorpayInstance.orders.create(options); //here it encrypts the packet with the help of public and private key
    //here the call goes to the razorpay server and the orderid gets created on the razorpay dashboard
    // you send the order id to frontend
    res.status(200).json({
      status: "success",
      message: {
        id: orderObject.id,
        currency: orderObject.currency,
        amount: orderObject.amount,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
});
// payment verification
//Basically after payment razorpay only knows about the data of payment but for us a server to know about the data
//just need to tell the razorpay that please use this url and whenever a payment is done please send about the status of payment on this url
app.post("/verification", async function (req, res) {
  try {
    // this object -> sha256+webhook_secret
    const shasum = crypto.createHmac("sha256", WEBHOOK_SECERET);
    shasum.update(JSON.stringify(req.body));
    const freshSignature = shasum.digest("hex");
    const razorPaySign = req.headers["x-razorpay-signature"];
    // console.log(req.headers);;
    console.log(freshSignature, razorPaySign);
    if (freshSignature == razorPaySign) {
      // ok
      console.log("Payment is verified", req.body);
      res.status(200).json({
        message: "OK",
      });
    } else {
      // there some tempering
      res.status(403).json({ message: "Invalid" });
    }
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
});

app.listen(3000, function () {
  console.log("Listening at port 3000");
});

/*Since our backend is not hoisted so it is in my local network.In order to webhook to work our razorpay server
 *should be allowed to reach our local server.So there is a thing known as tunneling.It takes a local server and creates a temporarily available proxy
 *Any request sent to this proxy will be redirected to our local server
 *This localhost 3000 will be tunneled using ngrok application.See the ngrok documentation for refrence
 *******/
