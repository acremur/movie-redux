import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../../redux/movies/mediaSlice'
// import Slider from 'react-slick'

import MediaCard from '../MediaCard/MediaCard'
// import Settings from '../../common/settings'

import './mediaList.scss'

const MovieList = () => {

    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllSeries)
    let renderMovies = ''
    let renderSeries = ''

    const getMedia = (mediaType) => (
        mediaType.Response === 'True' ? (
            mediaType.Search.map(media => (
                <MediaCard key={media.imdbID} data={media} />
            ))
        ) : (
            <div className="media-error">
                <h3>{mediaType.Error}</h3>
            </div>
        )
    )

    const renderMedia = (mediaType, renderMedia) => (
        <div className="media-list">
            <h2>{mediaType}</h2>
            <div className="media-container">
                {/* <Slider { ...Settings } > */}
                    {renderMedia}
                {/* </Slider> */}
            </div>
        </div>
    )

    renderMovies = getMedia(movies)
    renderSeries = getMedia(series)
    
    return (
        <div className='media-wrapper'>
            {renderMedia('Movies', renderMovies)}
            {renderMedia('Series', renderSeries)}
        </div>
    )
}

export default MovieList