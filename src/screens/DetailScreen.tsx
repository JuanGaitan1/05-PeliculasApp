import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';

const screenHeight =  Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};




export const DetailScreen = ({ route }: Props) => {

  const movie= route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const { isLoading, cast, movieFull} = useMovieDetails(movie.id)
  
  
  return (
    <ScrollView>
        <View style={styles.imageConteiner}>

            <Image
                source={{uri}}
                style={styles.PosterImage}
            />

        </View>
        <View style= {styles.marginContainer}>
            <Text style={styles.subTitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
        <View style= {styles.marginContainer}>
           <Icon 
           name="star-outline"
           color= 'grey'
           size={20}
           
           />
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  PosterImage:{
    flex: 1,
    
  },
  imageConteiner:{
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop: 20,
  },
  subTitle:{
  fontSize: 16,
  opacity:0.8
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
})