import { Link } from 'react-router-dom'
import { useDarkMode } from '../../context/darkMode'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={`flex flex-col items-center justify-center min-h-[70vh] px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600 animate-bounce mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have vanished into the movie universe. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaHome size={20} />
            Back to Home
          </Link>
          <Link 
            to="/search" 
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-red-600 ${isDarkMode ? 'hover:bg-red-600/20' : 'hover:bg-red-50'} transition-colors`}
          >
            <FaSearch size={20} />
            Search Movies
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound