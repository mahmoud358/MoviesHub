import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getTvDetails } from '../../services/api'
import Loader from '../../components/Loader/Loader'

const MovieDetail = () => {
  const { id, type } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let data
      if (type === "movie") {
        data = await getMovieDetails(id)
      } else if (type === "tv") {
        data = await getTvDetails(id)
      }
      setItem(data)
    }
    fetchData()
  }, [id, type])

  useEffect(() => {
    if (item?.title || item?.name) {
      document.title = `${item.title || item.name} | MovieHub 🎬`
    } else {
      document.title = "MovieHub 🎬"
    }
  }, [item])

  if (!item) return <Loader />

  return (
    <div>
      <div className="relative min-h-[70vh]">
        {/* خلفية الهيرو */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title || item.name}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* المحتوى */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8 pt-20">
          {/* البوستر */}
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="w-96 rounded-lg shadow-xl"
            />
          </div>

          {/* التفاصيل */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold">{item.title || item.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <span className="flex items-center gap-1">
                <span className="text-yellow-400 text-2xl">{item.vote_average.toFixed(1)}</span>
                <span className="text-yellow-400">★</span>
              </span>
              <span className="text-gray-400">|</span>
              <span>{new Date(item.release_date || item.first_air_date).getFullYear()}</span>
              <span className="text-gray-400">|</span>
              <span>
                {type === "movie" 
                  ? `${item.runtime} min`
                  : `${item.number_of_seasons} Seasons / ${item.number_of_episodes} Episodes`}
              </span>
            </div>

            {/* الأنواع */}
            <div className="flex flex-wrap gap-2">
              {item.genres?.map(genre => (
                <span
                  key={genre.id}
                  className="px-4 py-1 bg-red-600 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* نظرة عامة */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{item.overview}</p>
            </div>

            {/* تفاصيل خاصة بالفيلم */}
            {type === "movie" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Movie Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-gray-400">Status</h3>
                    <p>{item.status}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Budget</h3>
                    <p>${item.budget?.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Revenue</h3>
                    <p>${item.revenue?.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400">Original Language</h3>
                    <p>{item.original_language?.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            )}

            {/* تفاصيل خاصة بالمسلسلات */}
            {type === "tv" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Seasons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.seasons?.map(season => (
                    <div key={season.id} className="bg-gray-800 rounded-lg p-4 shadow-lg">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                        alt={season.name}
                        className="w-full rounded-md mb-2"
                      />
                      <h3 className="font-semibold">{season.name}</h3>
                      <p className="text-sm text-gray-400">
                        {season.episode_count} Episodes
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(season.air_date).getFullYear()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* شركات الانتاج */}
            {item.production_companies?.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Production Companies</h2>
                <div className="flex flex-wrap gap-4">
                  {item.production_companies.map(company => (
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
