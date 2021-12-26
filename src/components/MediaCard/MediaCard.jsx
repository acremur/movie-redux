import { Link } from 'react-router-dom'
import './mediaCard.scss'

const MovieCard = ({ data: { Poster, Title, Year, imdbID } }) => {

    const notFoundImg = 'https://ia-latam.com/wp-content/uploads/2018/12/No-image-found-1.jpg'
    
    return (
        <div className='card-item'>
            <Link to={`/media/${imdbID}`}>
                <div className="card-inner">
                    <div className="card-top">
                        {Poster === 'N/A' ? (
                            <img src={notFoundImg} alt={Title} />
                        ) : (
                            <img src={Poster} alt={Title} />
                        )}
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{Title}</h4>
                            <p>{Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard