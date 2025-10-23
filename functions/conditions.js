require('dotenv').config("../.env")
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {welcome_template} = require("./templates")
const twilio = require("twilio")

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


let message_responses = {
    "Hola" : welcome_template,
    "Paquete vacacional": ""
}

async function handle_message(message){
    const response = new MessagingResponse();
    if(message_responses[message.Body]){
        return await message_responses[message.Body](client)
    }else{
        const twilio_message = await response.message("En un momento uno de nuestros agentes se contactara contigo.");
        return twilio_message.toString()
    }
}

module.exports = {handle_message};