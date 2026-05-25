import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"

const ResultsGrid = () => {
    const dispatch = useDispatch()
    const {query, activetab, results, loading, error} = useSelector(store => store.search)

    // const getPhotos = async() => {
    //     const photosData = await fetchPhotos(query)
    //     return photosData
    // }
    // const getVideos = async() => {
    //     const videosData = await fetchVideos(query)
    //     return videosData
    // }
    // const getGifs = async() => {
    //     const gifData = await fetchGifs(query)
    //     return gifData
    // }
       
    
    useEffect(() => {
        const getData = async() => {
        let data;
        let result
        if(activetab === "Photos") {
            data = await fetchPhotos(query)
            result = data.results
        }
        else if(activetab === "GIFs") {
            data = await fetchGifs(query)
            result = data.data
        }
        else if(activetab === "Videos") {
            data = await fetchVideos(query)
            result = data.videos
        }
        
        console.log(result)
    }
        if(query !== ""){
            getData()
        }
    }, [query, activetab])
    
  return (
    <div className='w-full bg-white/50 h-[70vh] flex justify-center'>
        <div className='bg-black/20 w-[80%] h-full'>
            <button onClick={()=> {
               
            }}>get data</button>
        </div>
    </div>
  )
}

export default ResultsGrid