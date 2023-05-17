
import React from 'react'
import { View, ActivityIndicator, Dimensions, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../componenst/MoviePoster';
import { HorizontalSlider } from '../componenst/HorizontalSlider';
import { ScrollView } from 'react-native-gesture-handler';


const {width: windowWid} = Dimensions.get('window')




export const HomeScreen = ({navigation}:{navigation:any}) => {

    const { nowPlaying, popular, topRated , upcoming, isLoding } = useMovies()
    const {top} = useSafeAreaInsets()


    if (isLoding) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color="blue" size= {70}/>
            </View>
        )
    }
  return (
    
    <ScrollView>
        <View style={{marginTop: top + 20}}>


            <View style= {{height: 440 }}>

                <Carousel
                    data={ nowPlaying }
                    renderItem={ ({item}: any) => <MoviePoster movie={ item }/>}
                    sliderWidth={windowWid}
                    itemWidth={300}
                />

            </View>

                <HorizontalSlider title='Populares' movies={popular}/>
                <HorizontalSlider title='Tops' movies={topRated}/>
                <HorizontalSlider title='UpComing' movies={upcoming}/>

        </View>
    </ScrollView>
  )
}
