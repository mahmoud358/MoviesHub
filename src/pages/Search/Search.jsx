import { useEffect, useState } from 'react'
import { searchMovies } from '../../services/api'
import MovieCard from '../../components/MovieCard/MovieCard'
import Loader from '../../components/Loader/Loader'
import { useDarkMode } from "../../context/darkMode"
const Search = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const { isDarkMode } = useDarkMode()

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (query.trim()) {

      const results = await searchMovies(query)
      setMovies(results)
      setLoading(false)
    }
  }
  useEffect(() => {
    document.title = "MovieHub 🎬 | Search";
  }, []);
  

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className={`flex-1 px-4 py-2 rounded-lg border  focus:outline-none focus:ring-3 focus:ring-red-600 transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 border-amber-50 text-white' : 'bg-amber-50 border-gray-800 text-black'}`}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

    {loading?<Loader />:  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-screen">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>}
    </div>
  )
}

export default Search