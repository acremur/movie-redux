import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MediaList from '../../components/MediaList/MediaList'
import { 
    fetchAsyncMovies, 
    fetchAsyncSeries, 
    getQueryState 
} from '../../redux/movies/mediaSlice'

import './home.scss'

const Home = () => {

    const dispatch = useDispatch()
    const query = useSelector(getQueryState)

    useEffect(() => {
        if (query === '') {
            dispatch(fetchAsyncMovies('Harry'))
            dispatch(fetchAsyncSeries('Friends'))
        } else {
            dispatch(fetchAsyncMovies(query))
            dispatch(fetchAsyncSeries(query))
        }
    }, [])
    
    return (
        <>
            <div className='banner-img'></div>
            <MediaList />
        </>
    )
}

export default Home