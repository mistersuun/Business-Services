const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    // Extract form data from the request body
    const { name, email, message } = JSON.parse(event.body);

    // Validate the form data
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Please fill out all fields' }),
      };
    }

    // Send data to Mailchimp
    const mailchimpResponse = await axios.post(
      'https://us21.api.mailchimp.com/3.0/lists/4826270621/members',
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

    // Handle Mailchimp response as needed
    if (mailchimpResponse.status !== 200) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to subscribe to Mailchimp' }),
      };
    }

    // Your contact form-specific logic...

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ success: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Error handling contact form submission:', error);

    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to handle contact form submission' }),
    };
  }
};
