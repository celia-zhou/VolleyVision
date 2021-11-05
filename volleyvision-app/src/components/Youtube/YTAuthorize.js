import axios from 'axios';

const { CLIENT_ID, ClIENT_SECRET } = require("./config");

axios.request({
  url: "/oauth/token",
  method: "post",
  baseURL: "http://sample.oauth.server.com/",
  auth: {
    username: "myUsername", // This is the client_id
    password: "myPassword" // This is the client_secret
  },
  data: {
    "grant_type": "client_credentials",
    "scope": "public"    
  }
}).then(respose => {
  console.log(respose);  
}); 