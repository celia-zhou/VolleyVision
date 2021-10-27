import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ReactPlayer from "react-player";

function VideoGallery() {
  return (
    <div>
        <ImageList sx={{ width: 1160, height: 1100 }} cols={3}>
            {itemData.map((item) => (
                <ImageListItem sx={{pb: 1}} key={item.urlLink}>
                <ReactPlayer
                    url={item.urlLink}
                    controls
                    width = "350px"
                    height = "300px"
                />
                <ImageListItemBar sx={{pb: 2}} position="below" title={item.name} />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
  )
}
export default VideoGallery

const itemData = [
    {
        urlLink: 'https://www.youtube.com/watch?v=459Oda8XPy0&t=3s',
        name: 'USA vs. Australia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=X4zQpPVT3EY',
        name: 'USA vs. Latvia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=459Oda8XPy0&t=3s',
        name: 'USA vs. Australia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=X4zQpPVT3EY',
        name: 'USA vs. Latvia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=459Oda8XPy0&t=3s',
        name: 'USA vs. Australia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=X4zQpPVT3EY',
        name: 'USA vs. Latvia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=459Oda8XPy0&t=3s',
        name: 'USA vs. Australia - Tokyo 2021'
    },
    {
        urlLink: 'https://www.youtube.com/watch?v=X4zQpPVT3EY',
        name: 'USA vs. Latvia - Tokyo 2021'
    }
  ];