import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
        <img 
          src={imageUrl} 
          alt={movie.title}
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
          <p className="text-gray-300 text-sm">
            {new Date(movie.release_date).getFullYear()}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard