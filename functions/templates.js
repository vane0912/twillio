async function send_template(client,template_sid){
    const template = await client.messages.create({
        contentSid: template_sid,
        from: "whatsapp:+12187876295",
        to: "whatsapp:+5216141413484",
    });
    return template
}

module.exports = {send_template}