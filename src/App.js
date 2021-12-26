import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import MediaDetails from './pages/MediaDetails/MediaDetails'
import PageNotFound from './pages/PageNotFound/PageNotFound'

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media/:imdbID" element={<MediaDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;