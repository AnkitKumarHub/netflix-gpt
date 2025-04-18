import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ( {posterPath} ) => {
  if(!posterPath) return null; // Return null if posterPath is not available
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN_URL+posterPath} alt="MovieText" />
    </div>
  )
}

export default MovieCard
