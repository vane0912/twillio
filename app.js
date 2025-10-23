
const express = require('express');
const {handle_message} = require("./functions/conditions")
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/whatsapp", async (req, res) => {
  const response = await handle_message(req.body)
  res.send(response)
});

app.listen(3000, () => console.log("Server running"));