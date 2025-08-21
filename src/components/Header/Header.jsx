import { useState } from 'react'

import { FaSearch, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useDarkMode } from '../../context/darkMode'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg sticky top-0 z-50 transition-colors duration-200`}>
      <nav className="px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-red-600">MovieHub</Link>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/movies" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>Movies</Link>
            <Link to="/tv" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>TV Shows</Link>
            <Link to="/trending-tv" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>Trending TV</Link>
            <Link to="/top-rated-movies" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>Top Rated Movies</Link>
            <Link to="/top-rated-tv" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>Top Rated TV</Link>
            <Link to="/search" className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-red-600 transition-colors`}>
              <FaSearch className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`flex flex-col space-y-4 pt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <Link
              to="/movies"
              className=" hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              Movies
            </Link>
            <Link
              to="/tv"
              className=" hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              TV Shows
            </Link>
            <Link
              to="/trending-tv"
              className=" hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              Trending TV
            </Link>
            <Link
              to="/top-rated-movies"
              className=" hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              Top Rated Movies
            </Link>
            <Link
              to="/top-rated-tv"
              className=" hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              Top Rated TV
            </Link>
            <Link
              to="/search"
              className=" hover:text-red-600 transition-colors flex items-center gap-2"
              onClick={toggleMenu}
            >
              <FaSearch className="text-xl" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header