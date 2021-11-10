// import axios from 'axios';
const axios = require('axios');
const react = require('react');

const { CLIENT_ID, ClIENT_SECRET, REDIRECT_URIS } = require("../components/Youtube/config");

function authorize(){ 
  react.useEffect(() => {
    axios.request({
      method: "GET",
      baseURL: "https://accounts.google.com/o/oauth2/v2/auth",
      client_id: CLIENT_ID, 
      redirect_uri: REDIRECT_URIS,
      response_type: "token",
      scope: "https://www.googleapis.com/auth/youtube.readonly",
      state: "pass-through value"
    }).then(respose => {
      console.log(respose);  
    }); 
  }, []);
}
