const axios = require("axios");

module.exports.myDateTime = async function () {
  const res = await axios.get(
    "http://api.weatherapi.com/v1/current.json?key=e6a73467a3e94aa184c122435212812&q=Bangladesh&aqi=no"
  );
  return res.json(data);
};
