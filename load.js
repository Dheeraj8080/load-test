const axios = require("axios");

const url = "https://slowservant-gull.toystack.dev"; // Replace with the URL you want to test
const interval = 1; // Time interval between requests in milliseconds

let requestCount = 0;

async function sendRequest() {
  try {
    const response = await axios.get(url);
    console.log(`Request #${requestCount++} - Status: ${response.status}`);
  } catch (error) {
    console.log(`Request #${requestCount++} - Error: ${error.message}`);
  }
}

function startLoadTest() {
  setInterval(sendRequest, interval);
}

startLoadTest();
