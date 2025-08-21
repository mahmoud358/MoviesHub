import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'
import { useDarkMode } from '../../context/darkMode'

const Footer = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'} pt-12 pb-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-600">MovieDB</h3>
            <p className="text-sm">
              Your ultimate destination for movies and TV shows. Discover the latest releases, trending content, and top-rated entertainment.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/movies" className="hover:text-red-600 transition-colors">Movies</Link></li>
              <li><Link to="/tv" className="hover:text-red-600 transition-colors">TV Shows</Link></li>
              <li><Link to="/trending-tv" className="hover:text-red-600 transition-colors">Trending</Link></li>
              <li><Link to="/top-rated-movies" className="hover:text-red-600 transition-colors">Top Rated</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube size={24} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaGithub size={24} /></a>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-red-600`}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>


        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} my-8`}></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>&copy; {new Date().getFullYear()} MovieDB. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer