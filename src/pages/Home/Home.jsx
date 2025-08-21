import { useState, useEffect } from 'react'
import {
  getTrendingMovies,
  getTrendingTVShows,
  getTopRatedMovies,
  getTopRatedTVShows
} from '../../services/api'
import Slider from '../../components/Slider/Slider'
import Loader from '../../components/Loader/Loader'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingTV, setTrendingTV] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [topRatedTV, setTopRatedTV] = useState([])
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    const fetchData = async () => {
      const [movies, tv, ratedMovies, ratedTV] = await Promise.all([
        getTrendingMovies(),
        getTrendingTVShows(),
        getTopRatedMovies(),
        getTopRatedTVShows()
      ])
      setTrendingMovies(movies)
      setTrendingTV(tv)
      setTopRatedMovies(ratedMovies)
      setTopRatedTV(ratedTV)
      setLoading(false)
    }

    fetchData()
  }, [])
  useEffect(() => {
    document.title = "MovieHub 🎬 | Home";
  }, []);

  return (
    <div className="space-y-12 py-8">
    {loading?<Loader />:
    <>
    <Slider
        title="Trending Movies"
        items={trendingMovies}
        type="movie"
      />
      <Slider
        title="Trending TV Shows"
        items={trendingTV}
        type="tv"
      />
      <Slider
        title="Top Rated Movies"
        items={topRatedMovies}
        type="movie"
      />
     <Slider
        title="Top Rated TV Shows"
        items={topRatedTV}
        type="tv"
      />
      </>}
    </div>
  )
}

export default Home