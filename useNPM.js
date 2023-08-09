const request = require('request');

const apiUrl = 'https://www.secondexample.com';

request(apiUrl, { json: true }, (err, response, body) => {
  if (err) {
    console.error('Error while sending the request:', err);

    return;
  }

  // Check if the response was successful (status code 200)
  if (response.statusCode === 200) {
    console.log('Response:', response.statusCode);
    console.log('Response:', body);
  } else {
    console.error('Request failed. Status code:', response.statusCode);
    console.log(response.statusCode)
  }
});
