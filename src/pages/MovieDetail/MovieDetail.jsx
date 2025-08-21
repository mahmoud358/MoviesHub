import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../../services/api'
import Loader from '../../components/Loader/Loader'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id)
      setMovie(data)
    }
    fetchMovie()
  }, [id])
  useEffect(() => {
    if (movie?.title) {
      document.title = `${movie.title} | MovieHub 🎬`;
    } else {
      document.title = "MovieHub 🎬";
    }
  }, [movie]);

  if (!movie) return <Loader />

  return (
    <div className="">
      {/* Hero Section with Backdrop */}
      <div className="relative min-h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Movie Info */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8 pt-20">
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-96 rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <span className="flex items-center gap-1">
                <span className="text-yellow-400 text-2xl">{movie.vote_average.toFixed(1)}</span>
                <span className="text-yellow-400">★</span>
              </span>
              <span className="text-gray-400">|</span>
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span className="text-gray-400">|</span>
              <span>{movie.runtime} min</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map(genre => (
                <span
                  key={genre.id}
                  className="px-4 py-1 bg-red-600 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{movie.overview}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-400">Status</h3>
                  <p>{movie.status}</p>
                </div>
                <div>
                  <h3 className="text-gray-400">Budget</h3>
                  <p>${movie.budget?.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-gray-400">Revenue</h3>
                  <p>${movie.revenue?.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-gray-400">Original Language</h3>
                  <p>{movie.original_language?.toUpperCase()}</p>
                </div>
              </div>
            </div>

            {movie.production_companies?.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Production Companies</h2>
                <div className="flex flex-wrap gap-4">
                  {movie.production_companies.map(company => (
                    <div key={company.id} className="text-center">
                      {company.logo_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          className="h-16 object-contain bg-white rounded p-2"
                        />
                      ) : (
                        <div className="h-16 flex items-center justify-center">
                          <span>{company.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail