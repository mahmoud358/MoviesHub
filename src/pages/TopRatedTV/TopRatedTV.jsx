import { useState, useEffect } from 'react'
import { getTopRatedTVShows } from '../../services/api'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Loader from '../../components/Loader/Loader'

const TopRatedTV = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getTopRatedTVShows()
        setShows(data)
      } catch (error) {
        console.error('Error fetching top rated TV shows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])
  useEffect(() => {
    document.title = "MovieHub 🎬 | Top Rated TV";
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="py-8 px-4">
      <MovieGrid title="Top Rated TV Shows" items={shows} type="tv" />
    </div>
  )
}

export default TopRatedTV