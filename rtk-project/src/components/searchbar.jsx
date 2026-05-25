import { useState } from 'react'
import { fetchPhotos } from '../api/mediaApi'
import { fetchVideos } from '../api/mediaApi'
import { fetchGifs } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const Searchbar = () => {
const [userInp, setuserInp] = useState("")
const dispatch = useDispatch()
const submitHandler =(elem) => {
    elem.preventDefault()
    dispatch(setQuery(userInp));
    setuserInp("")
}
  return (
    <div>
        <form onSubmit={(elem)=> {
            submitHandler(elem)
            
            
        }}>
            <input type="text" placeholder='search anything' value={userInp || ""} onChange={(elem)=> {
                const value = elem.target.value
                setuserInp(value)
            }}/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Searchbar