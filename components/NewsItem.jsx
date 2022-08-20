import {View, Text, Image } from 'react-native'
import {styles} from '../styles/styles'
import React from 'react'

export default function NewsItem({item}) {
  return (
    <View>
      <Text style={[styles.headline, styles.mt1, styles.mb]}>{item.title}</Text>
      <Text style={ styles.mb1}>{item.description}</Text>
      <Image
      style={[styles.imgSize, styles.mb3]}
      source={{uri:item.urlToImage}}
      />
    </View>
  )
}

