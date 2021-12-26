import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MediaList from '../../components/MediaList/MediaList'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/mediaSlice'

import './home.scss'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncMovies('Harry'))
        dispatch(fetchAsyncSeries('Friends'))
    }, [dispatch])
    
    return (
        <>
            <div className='banner-img'></div>
            <MediaList />
        </>
    )
}

export default Home