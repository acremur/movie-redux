import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/mediaSlice'
import './header.scss'

const Header = () => {

    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = e => {
        e.preventDefault()
        
        if (query === '') return alert('Please enter search term!')
        dispatch(fetchAsyncMovies(query))
        dispatch(fetchAsyncSeries(query))
        setQuery('')
    }
    
    return (
        <div className='header'>
            <Link to='/'>
                <div className="logo">Movie App</div>
            </Link>

            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Movie or serie' 
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button type='submit'>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header