import React, {useEffect, useState} from 'react';
// import youtube from './youtube'
import VideoCard from './VideoCard';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

const { YOUTUBE_API_KEY } = require("./config");

const ChannelConnect = () => {

    useEffect(() => {
        console.log("Ready to get Youtube data!");
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=7NOSDKb0HlU&key=${YOUTUBE_API_KEY}`
        ;
        // const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;
        axios
        .get(url)
        .then(response => {
          console.log(response.data.items)
          createVideoCards(response.data.items);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
    }, [])
    
    if(isError) {
      return <Alert severity="error" className='loading'>No Results found!</Alert>
    }
    return (
        
        <div>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <div className="recommendedvideos__videos">
                {
                  videoCards.map(item => {
                    return (
                        <VideoCard key={item.videoId}
                            title={item.title}
                            image={item.image}
                            views={item.views}
                            // timestamp={item.timestamp}
                            channel={item.channel}
                            channelImage={item.channelImage}
                        />
                    )
                  })
                }
            </div>
        </div>
    )
}

export default ChannelConnect;