async function welcome_template(client,template_sid){
    const template = await client.messages.create({
        contentSid: "HXda15168c6fcc39e66483806889172289",
        from: "whatsapp:+12187876295",
        to: "whatsapp:+5216141413484",
    });
    return template
}

module.exports = {welcome_template}