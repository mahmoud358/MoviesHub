import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

const MovieGrid = ({ title, items, type = 'movie' }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold ">{title}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items?.map(item => (
          <Link key={item.id} to={`/${type}/${item.id}`} className="transform hover:scale-105 transition-transform duration-200">
            <MovieCard movie={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MovieGrid