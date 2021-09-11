const axios = require('axios');

async function getBtcPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return response;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getBtcPrice;