var xhr = new XMLHttpRequest();
var result = xhr.open('GET',
    'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=' +YOUTUBE_API_KEY);

    xhr.onreadystatechange = function () {
        // In local files, status is 0 upon success in Mozilla Firefox
        if(xhr.readyState === XMLHttpRequest.DONE) {
          var status = xhr.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(xhr.responseText);
          } else {
            // Oh no! There has been an error with the request!
          }
        }
      };
      xhr.send();