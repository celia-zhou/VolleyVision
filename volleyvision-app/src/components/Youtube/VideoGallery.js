import React, {useEffect, useState} from 'react';
// import youtube from './youtube'
import VideoCard from './VideoCard';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

const { YOUTUBE_API_KEY } = require("./config");

const RecommendedVideos = () => {

    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //   axios
    //     .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //     .then(response => {
    //       console.log(response.data.items)
    //       createVideoCards(response.data.items);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       setIsError(true);
    //     })
    // }, [])

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
    async function createVideoCards(videoItems) {
      let newVideoCards = [];
      for (const video of videoItems) {
        const videoId = video.id;
        const snippet = video.snippet;
        const channelId = snippet.channelId;
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=7NOSDKb0HlU&key=${YOUTUBE_API_KEY}`)
        // const response = await axios
        //                       .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

        const title = snippet.title;
        const image = snippet.thumbnails.medium.url;
        const views = video.statistics.viewCount;
        // const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const channel = snippet.channelTitle;

        newVideoCards.push({
          videoId,
          image,
          title,
          channel,
          views,
          // timestamp,
          channelImage
        });
      };
      setVideoCards(newVideoCards);
      setIsLoading(false);
    }

    Authorization: Bearer [YOUR_ACCESS_TOKEN]
    Accept: application/json
    
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

export default RecommendedVideos;