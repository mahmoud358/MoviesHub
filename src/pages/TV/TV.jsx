import { useState, useEffect } from 'react'
import { getPopularTVShows } from '../../services/api'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Loader from '../../components/Loader/Loader'

const TV = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getPopularTVShows(page)
        setShows(prev => [...prev, ...data])
      } catch (error) {
        console.error('Error fetching TV shows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [page])
  useEffect(() => {
    document.title = "MovieHub 🎬 | TV";
  }, []);

  if (loading && shows.length === 0) {
    return <Loader />
  }

  return (
    <div className="py-8 px-4">
      <div className="space-y-8">
        <MovieGrid title="Popular TV Shows" items={shows} type="tv" />
        <div className="flex justify-center">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TV