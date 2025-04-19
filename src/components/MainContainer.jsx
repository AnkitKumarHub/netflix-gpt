import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return; // also known as early return if movies is null or undefined

    const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomIndex = randomNum(0, movies.length - 1);

    const mainMovie = movies[randomIndex];

    // console.log(mainMovie);
    
    if(!movies) return null;

    const {original_title, overview, id } = mainMovie;
  return (
    <div className='pt-[34%] bg-black w-full h-full md:pt-0 scrollbar-hide::-webkit-scrollbar scrollbar-hide'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/> 
    </div>
  )
}

export default MainContainer
