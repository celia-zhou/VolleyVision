import React, {useEffect, useState} from 'react';
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
  let [videoElems, setVideoElems] = useState([]);

  useEffect(() => {
    const getVideoState = async () => {
      if (sessionStorage.getItem('accessToken') === null) {
        var currToken = new URLSearchParams(window.location.hash).get('access_token');
  
        if (currToken !== null && currToken !== sessionStorage.getItem('accessToken')) {
          sessionStorage.setItem('accessToken', currToken);
        }
      
        const response = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&access_token=' + sessionStorage.getItem('accessToken'));
        if (response.status === 200) {
          let jsonResp = await response.json();
          sessionStorage.setItem('playlistID', jsonResp.items[0].contentDetails.relatedPlaylists.uploads);
        } else if (response.status === 403) {
          alert("Access denied. Must authorize access to a Youtube account.");
        }
        /*
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
        */
      }

      if (sessionStorage.getItem('accessToken') !== null) {
        const response = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&access_token=' + sessionStorage.getItem('accessToken')+'&playlistId='+sessionStorage.getItem('playlistID'));
        if (response.ok) {
          let data = await response.json();
          let jsonVideos = data.items;

          let videoIdArr = [];
          for(let i = 0; i < jsonVideos.length; i++) {
            videoIdArr.push({id: jsonVideos[i].contentDetails.videoId, title: jsonVideos[i].snippet.title});
          }
          const videoElems = [];
        
          for(let i = 0; i < videoIdArr.length; i++) {
            videoElems.push(    {
              urlLink: `https://www.youtube.com/watch?v=${videoIdArr[i].id}`,
              title: videoIdArr[i].title
          })
        }
        setVideoElems(videoElems)
      }
      }
    };
    getVideoState();
  }, [])

  if (videoElems.length === 0) {
    return null;
  } else {
        return (
        <div>
            <ImageList sx={{ position: 'absolute', top: 220, left: 300, width: 1100, height: 1100, bgcolor:"#DBEBFB"}} cols={3}>
            {videoElems.map((item) => (
                <ImageListItem sx={{pb: 1}} key={item.urlLink}>
                    <ReactPlayer
                        url={item.urlLink}
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
}