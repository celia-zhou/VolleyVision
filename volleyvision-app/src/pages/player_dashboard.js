import React from 'react'
import MatchTable from '../components/Matches/RecentMatches'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'

import {CLIENT_ID,  REDIRECT_URI, YOUTUBE_API_KEY} from '../components/Youtube/config';

const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`
const List_Container = styled.div`
    position: absolute;
    left: 300px;
    top: 200px;
    font: Times New Roman;
    background-color: white;
    font-size: 30px;
    width: 75%;
`


// If there's an access token, try an API request.
// Otherwise, start OAuth 2.0 flow.
function tryYTRequest() {
    var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
    if (params && params['access_token']) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',
            'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&' +
            'access_token=' + params['access_token']);
        xhr.onreadystatechange = function (e) {
          console.log(xhr.response);
        };
        xhr.send(null);
    }
  }
  function oauth2SignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': CLIENT_ID,
                  'redirect_uri': REDIRECT_URI,
                  'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                  'state': 'try_yt_request',
                  'include_granted_scopes': 'true',
                  'response_type': 'token'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

const Player_Dashboard = () => {
    return (
        <div onload={tryYTRequest()}>
            <SideBar/>
            
            <Container>
                Player Dashboard
            </Container>
            
            <List_Container>
                <MatchTable/>
            </List_Container>
            <Container>
{tryYTRequest()}
            </Container>
            <SearchBar/>
        </div>
    )
}

export default Player_Dashboard

// "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&access_token=ya29.a0ARrdaM-5pvDOq4lhHaPLnUxhnPHzFPICqTvs2KbGI41DNPepUjL_OSLISY2UF3-KFikLbVWsT7hyKsA_FIU739tXCscxr5XggbQK201PNGZaWCU8HB_mNUSjLCkKWihCXIxpzxKbUCJOqGFyQysO5RwhKZo3"