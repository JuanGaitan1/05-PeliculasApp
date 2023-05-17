import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { Movie} from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';


interface Props{
    title?: string; 
    movies: Movie[]
}



export const HorizontalSlider = ({title, movies}: Props ) => {

  return (
    <View style= {{height: 260}}>

    <Text style={{ fontSize:30, fontWeight: 'bold'}}>{title} </Text>

    <FlatList 
        data={movies}
        renderItem={ ({item}: any) =>( 
            <MoviePoster movie={ item } width={130} height={200}  />

        )}
        keyExtractor={ (item) => item.id.toString() }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />
    </View>
  )
}
