const axios = require("axios").default;

const apiUrl = "https://ironrest.herokuapp.com/captains-log";

exports.insertLog = function (text) {
  return axios.post(apiUrl, { date: "", text: text });
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
