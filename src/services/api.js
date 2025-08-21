import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
  params: {
    api_key: import.meta.env.VITE_API_KEY
  }
})

export const getTrendingMovies = async () => {
  const response = await api.get('/trending/movie/day')
  return response.data.results
}

export const getTrendingTVShows = async () => {
  const response = await api.get('/trending/tv/day')
  return response.data.results
}

export const getTopRatedMovies = async () => {
  const response = await api.get('/movie/top_rated')
  return response.data.results
}

export const getTopRatedTVShows = async () => {
  const response = await api.get('/tv/top_rated')
  return response.data.results
}

export const searchMovies = async (query) => {
  const response = await api.get('/search/movie', {
    params: { query }
  })
  
  return response.data.results
}

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`)
  return response.data
}

export const getPopularMovies = async (page = 1) => {
  const response = await api.get('/movie/popular',{
    params: { page }
  })
  
  return response.data.results
}

export const getPopularTVShows = async (page = 1) => {
  const response = await api.get('/tv/popular', {
    params: { page }
  })
  return response.data.results
}