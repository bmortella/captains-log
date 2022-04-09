const axios = require("axios").default;
const stardate = require("./stardate").default;

const apiUrl = "https://ironrest.herokuapp.com/captains-log";

exports.insertLog = function (text) {
  return axios.post(apiUrl, {
    date: Date.now(),
    stardate: stardate(),
    text: text,
  });
};

exports.getLogs = function () {
  return axios.get(apiUrl);
};

exports.deleteLog = function (id) {
  return axios.delete(`${apiUrl}/${id}`);
};

exports.updateLog = function (id, text) {
  return axios.put(`${apiUrl}/${id}`, { text: text });
};

exports.fetchLog = function (id) {
  return axios.get(`${apiUrl}/${id}`);
};
