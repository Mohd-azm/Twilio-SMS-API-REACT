const accountSid = 'ID';
const authToken = 'PASS';
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services("ID-SERVICES")
      .verifications
      .create({to: 'PHONE-NUMBER', channel: 'sms'})
      .then(verification => console.log(verification.sid));