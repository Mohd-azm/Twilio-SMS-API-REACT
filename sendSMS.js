require('dotenv').config(); 

const accountSid = process.env.ID;
const authToken = process.env.PASS;

const client = require('twilio')(accountSid , authToken);

const sendSMS =async (body) => {

    let msgOptions = {
        from : process.env.TWILIO_FROM_NUMBER,
        to: process.env.TO_NUMBER,
        body
    }

    try {
        
      const messages = await client.messages.create(msgOptions);
      console.log(messages);
    } catch (error){
        console.error(error);
    }

}

sendSMS('Hi Code Learn');