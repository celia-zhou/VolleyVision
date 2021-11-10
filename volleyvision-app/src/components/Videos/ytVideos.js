import React from 'react';
import ReactPlayer from "react-player";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function getAccessToken() {
  var currToken = new URLSearchParams(window.location.hash).get('access_token');
  

  if (currToken != null && currToken != sessionStorage.getItem('accessToken')) {
    sessionStorage.setItem('accessToken', currToken);
    
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET',
        'https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&access_token=' + sessionStorage.getItem('accessToken'));
  xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonResp = JSON.parse(xhr.response);
        sessionStorage.setItem('playlistID', jsonResp.items[0].contentDetails.relatedPlaylists.uploads);
      }
      else if (xhr.readyState === 4 && xhr.status === 403) {
        // Token invalid, so prompt for user permission.
        alert("Access denied. Must authorize access to a Youtube account.");
      }
  };

  xhr.send(null);
  return true;
}

function getUploads() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&access_token=' + sessionStorage.getItem('accessToken')+'&playlistId='+sessionStorage.getItem('playlistID'));
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var jsonResp = JSON.parse(xhr.response);
      const jsonVideos = jsonResp.items;
      const videoIDArr = [];

      
      for(let i = 0; i < jsonVideos.length; i++) {
        videoIDArr.push({id: jsonVideos[i].contentDetails.videoId, title: jsonVideos[i].snippet.title});
      }
      sessionStorage.setItem('uploadedVideos', JSON.stringify(videoIDArr));
    }
    else if (xhr.readyState === 4 && xhr.status === 404) {
      alert("No videos found.");
    }

  };

  xhr.send(null);
}

function createVideoElems() {
  const videoElems = [];
  const uploadedInfo = JSON.parse(sessionStorage.getItem('uploadedVideos'));

  for(let i = 0; i < uploadedInfo.length; i++) {
    videoElems.push(    {
      urlLink: `https://www.youtube.com/watch?v=${uploadedInfo[i].id}`,
      title: uploadedInfo[i].title
  })
  }

  return videoElems;
}

export default function YTVideos() {
  getAccessToken();

  if (sessionStorage.getItem('accessToken') != null) {
    getUploads();
  
    const videoElems = createVideoElems();

    return (
      <div>
          <ImageList sx={{ position: 'absolute', top: 220, left: 300, width: 1100, height: 1100, bgcolor:"#DBEBFB"}} cols={3}>
          {videoElems.map((item) => (
              <ImageListItem sx={{pb: 1}} key={item.urlLink}>
                  <ReactPlayer
                      url={item.urlLink}
                      pip = "true"
                      width = "350px"
                      height = "300px"
                  />
                <ImageListItemBar sx={{pb: 3}} position="below" title={item.title} />
              </ImageListItem>
          ))}
          </ImageList>
      </div>
  );
  }
  
  return null;
}
