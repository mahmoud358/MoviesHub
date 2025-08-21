import { useState, useEffect } from 'react'
import { getTrendingTVShows } from '../../services/api'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Loader from '../../components/Loader/Loader'

const TrendingTV = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getTrendingTVShows()
        setShows(data)
      } catch (error) {
        console.error('Error fetching trending TV shows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])
  useEffect(() => {
    document.title = "MovieHub 🎬 | Trending TV";
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="py-8 px-4">
      <MovieGrid title="Trending TV Shows" items={shows} type="tv" />
    </div>
  )
}

export default TrendingTV