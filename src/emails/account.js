import sendGridMail from '@sendgrid/mail'

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

// sendGridMail.send({
//   to: 'yegor02092002@gmail.com',
//   from: 'yegor02092002@gmail.com',
//   subject: 'This is my first email!',
//   text: 'I hope this one actually gets to you!'
// });

export const sendWelcomeEmail = (email, name) => {
  sendGridMail.send({
    to: email,
    from: 'yegor02092002@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how are you doing in the app!`,
  });
}

export const sendCancelEmail = (email, name) => {
  sendGridMail.send({
    to: email,
    from: 'yegor02092002@gmail.com',
    subject: 'We are crying...',
    text: `Hey, ${name}, that's sad. We will miss you :(`,
  });
}


