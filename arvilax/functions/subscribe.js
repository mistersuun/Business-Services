const axios = require('axios');

exports.handler = async function (event, context) {
  const { email } = JSON.parse(event.body);

  try {
    console.log(process.env.MAILCHIMP_API_KEY);
      console.log(email)
    const response = await axios.post(
      `https://us21.api.mailchimp.com/3.0/lists/4826270621/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        auth: {
          username: 'anystring',
          password: process.env.MAILCHIMP_API_KEY,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error subscribing to Mailchimp:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe to Mailchimp' }),
    };
  }
};
