const axios = require("axios");
const uri = process.env.VUE_APP_URI;

export default axios.create({
  baseURL: uri,
});
