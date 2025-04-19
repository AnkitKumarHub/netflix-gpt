import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addBriefMovie } from '../utils/moviesSlice';



const MovieCard = ( {posterPath, movie} ) => {

  const dispatch = useDispatch();
  if(!posterPath) return null; // Return null if posterPath is not available

  const handleBriefPage = (BriefDetail) => {
    dispatch(addBriefMovie(BriefDetail))
    // console.log(BriefDetail);
  }
  return (
    <> 
    <div className="w-48 pr-4 hover:scale-115 cursor-pointer" onClick={() => handleBriefPage(movie)}>
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
    </>
  )
};
export default MovieCard
