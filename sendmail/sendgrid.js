const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)
sgMail.send ({
  to: 'sandy4adhi@gmail.com', // Change to your recipient
  from: 'sandy4adhi@gmail.com', // Change to your verified sender
  subject: 'my first mail',
  text: 'hi there i will fight',
  html: '<a href= "www.google.com">click<a/>'
})

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })