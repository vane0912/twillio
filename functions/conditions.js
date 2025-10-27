require('dotenv').config("../.env")
const {send_template} = require("./templates")
const twilio = require("twilio")

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


let message_responses = {
    "Hola, quiero más información sobre el paquete a Colombia" : "HXc7e7fd2369627dd4f872eef0e1584145",
    "Cotizar": "HX8d8c84160760afa9494d5f00a2ed95f0",
    "Fallback": "HXda15168c6fcc39e66483806889172289",
    "Tengo más preguntas": "HXbc12dc3989e61fa666fa604151262c5a"
}

async function handle_message(message){
    if(message_responses[message.Body]){
        const template_id = message_responses[message.Body];
        return await send_template(client, template_id)
    }else{
        const template_id = message_responses.Fallback;
        return await send_template(client, template_id)
    }
}

module.exports = {handle_message};