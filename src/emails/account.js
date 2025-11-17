import sendGridMail from '@sendgrid/mail';

const sendGridApiKey = process.env.SENDGRID_API_KEY;
const sendEmailEnabled = Boolean(sendGridApiKey);

if (sendEmailEnabled) {
  sendGridMail.setApiKey(sendGridApiKey);
} else {
  console.warn('SENDGRID_API_KEY is not set; welcome/cancel emails are disabled.');
}

const safeSend = async (message) => {
  if (!sendEmailEnabled) return;

  try {
    await sendGridMail.send(message);
  } catch (err) {
    // Avoid crashing the dyno if email fails
    console.error('Failed to send SendGrid email:', err);
  }
};

export const sendWelcomeEmail = (email, name) =>
  safeSend({
    to: email,
    from: 'yegor02092002@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how are you doing in the app!`,
  });

export const sendCancelEmail = (email, name) =>
  safeSend({
    to: email,
    from: 'yegor02092002@gmail.com',
    subject: 'We are crying...',
    text: `Hey, ${name}, that's sad. We will miss you :(`,
  });
