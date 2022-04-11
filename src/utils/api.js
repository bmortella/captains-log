const axios = require("axios").default;
const stardate = require("./stardate").default;

const apiUrl = "https://ironrest.herokuapp.com/captains-log";

exports.insertLog = function (log) {
  return axios.post(apiUrl, {
    date: Date.now(),
    stardate: stardate(),
    text: log.text,
    image: log.image,
  });
};

exports.getLogs = function () {
  return axios.get(apiUrl);
};

exports.deleteLog = function (id) {
  return axios.delete(`${apiUrl}/${id}`);
};

exports.updateLog = function (updatedLog) {
  return axios.put(`${apiUrl}/${updatedLog.id}`, {
    text: updatedLog.text,
    image: updatedLog.image,
  });
};

exports.fetchLog = function (id) {
  return axios.get(`${apiUrl}/${id}`);
};
