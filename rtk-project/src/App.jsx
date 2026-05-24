import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'
import { fetchGifs } from './api/mediaApi'

const App = () => {
  return (
    <div>
      <button onClick={async ()=> {
        const photos = await fetchPhotos("cat")
        console.log(photos)
      }}>Get Photos</button>
      <button onClick={async ()=> {
        const videos = await fetchVideos("car")
        console.log(videos)
      }}>
        Get Videos
      </button>
      <button onClick={async ()=> {
        const gifs = await fetchGifs("car")
        console.log(gifs)
      }}>
        Get Gifs
      </button>
    </div>
  )
}

export default App