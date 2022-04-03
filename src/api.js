const axios = require("axios").default;

const apiUrl = "https://ironrest.herokuapp.com/captains-log";

exports.insertLog = function (text) {
  return axios.post(apiUrl, { date: "", text: text });
};
