import {useEffect, useState} from 'react'
import movieDB from "../api/movieDB";
import { Movie, MovieDbMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState{
  nowPlaying:Movie[];
  popular:Movie[];
  topRated:Movie[];
  upcoming:Movie[];

}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying:[],
      popular:[],
      topRated:[],
      upcoming:[],
    })
    const [isLoding, setIsLoding] = useState(true)

    const getMovies= async () => {
        const nowPlayingPromise = movieDB.get<MovieDbMoviesResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovieDbMoviesResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovieDbMoviesResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDbMoviesResponse>('/upcoming');

        const resp = await Promise.all([
           nowPlayingPromise,
           popularPromise,
           topRatedPromise,
           upcomingPromise
          ])

        
        setMoviesState({
          nowPlaying: resp[0].data.results , 
          popular: resp [1].data.results ,
          topRated: resp[2].data.results , 
          upcoming: resp[3].data.results
        })
    


        setIsLoding(false);
    }

    useEffect(() =>{
      getMovies();
    }, [])
    

  return {
    ...moviesState,
    isLoding,
   
  }
}
