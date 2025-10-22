const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/whatsapp", (req, res) => {
  console.log("Mensaje recibido:", req.body.Body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Webhook activo en puerto 3000"));