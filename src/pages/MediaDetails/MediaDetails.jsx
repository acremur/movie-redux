import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMediaDetails, getMediaDetails, removeSelectedMedia } from '../../redux/movies/mediaSlice'
import './mediaDetails.scss'

const MovieDetails = () => {

    const { imdbID } = useParams()
    const dispatch = useDispatch()
    const details = useSelector(getMediaDetails)

    useEffect(() => {
        dispatch(fetchAsyncMediaDetails(imdbID))
        
        return () => dispatch(removeSelectedMedia())
    }, [dispatch, imdbID])
    
    const { Title, imdbRating, imdbVotes, Runtime, Year, Plot, Director, Actors, Genre, Language, Awards, Poster } = details
    
    return (
        <div className='media-section'>
            {Object.keys(details).length === 0 ? (
                <div className='spinner' />
            ) : (
                <>
                    <div className="section-left">
                        <div className="media-title">{Title}</div>
                        <div className="media-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {Year}
                            </span>
                        </div>
                        <div className="media-plot">{Plot}</div>
                        <div className="media-info">
                            <div>
                                <span>Director</span>
                                <span>{Director}</span>
                            </div>
                            <div>
                                <span>Cast</span>
                                <span>{Actors}</span>
                            </div>
                            <div>
                                <span>Genre</span>
                                <span>{Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={Poster} alt={Title} />
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDetails