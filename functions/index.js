const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51Id3I7DnovDX30Vr6ZOBkEp9bRMBkOZU71kgAUE7z3jS89WxMOhFx5jcQ6xfbEAcQWzMw6Qmq94yz0pI0hHfzBbm00Ucw3TTYs")

// API

// App Config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello gael")
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total
  console.log("payment request received  Alright!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
      amount: total, //subunits of the currency
      currency: "usd"
  })

  res.status(201).send({
      clientSecret: paymentIntent.client_secret
  })
});

// Listen command
exports.api = functions.https.onRequest(app)

// example url
// http://localhost:5001/challenge-e839a/us-central1/api