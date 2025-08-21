import { useState, useEffect } from 'react'
import { getTopRatedMovies } from '../../services/api'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Loader from '../../components/Loader/Loader'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTopRatedMovies()
        setMovies(data)
      } catch (error) {
        console.error('Error fetching top rated movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])
  useEffect(() => {
    document.title = "MovieHub 🎬 | Top Rated Movies";
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="py-8 px-4">
      <MovieGrid title="Top Rated Movies" items={movies} type="movie" />
    </div>
  )
}

export default TopRatedMovies