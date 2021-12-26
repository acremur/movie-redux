import notFoundImg from '../../images/pnf.jpg'
import './pageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className='pnf-container'>
            <img src={notFoundImg} alt="not-found" />
        </div>
    )
}

export default PageNotFound