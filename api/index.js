const express = require("express");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

/*if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
*/

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", async (req, res) => {
  console.log(req.body);
  const body = {
    source: req.body.token?.id,
    amount: req.body.amount,
    currency: "NOK",
    description: "Learning React",
  };

  try {
    const charge = await stripe.charges.create(body);
    res.send({ success: charge });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }

  /*stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(400).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });*/
});
