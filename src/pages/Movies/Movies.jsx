import { useState, useEffect } from 'react'
import { getPopularMovies } from '../../services/api'
import MovieCard from '../../components/MovieCard/MovieCard'
import Loader from '../../components/Loader/Loader'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies(page)
      setMovies(prev => [...prev, ...data])
    }
    fetchMovies()
  }, [page])
  useEffect(() => {
    document.title = "MovieHub 🎬 | Movies";
  }, []);
  if (movies<=0) return <Loader />

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold  mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie,idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default Movies