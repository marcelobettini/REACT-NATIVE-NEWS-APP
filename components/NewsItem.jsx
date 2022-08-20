import {View, Text, Image } from 'react-native'
import {styles} from '../styles/styles'
import React from 'react'

export default function NewsItem({item}) {
  return (item.title &&  item.description) && (    
    /*Conditional rendering: Some items where short of description and or image and that caused double separator lines.*/
      <View>
      <Text style={[styles.headline, styles.mt1, styles.mb1]}>{item.title}</Text>    
      {item.urlToImage &&
      <Image
      style={[styles.imgSize, styles.mb1]}
      source={{uri:item.urlToImage}}
      />      
    }  
      <Text>{item.description}</Text>      
      </View>    
  )
}

