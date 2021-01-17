import axios from "axios";

const proxyURL = process.env.REACT_APP_PROXY

  // process.env.NODE_ENV === "production"
  //   process.env.REACT_APP_PROXY   ?
  //   : "http://localhost:5000";

const API = axios.create({
  baseURL: proxyURL,
  withCredentials: true,
  timeout: 5000,
});

export { API };