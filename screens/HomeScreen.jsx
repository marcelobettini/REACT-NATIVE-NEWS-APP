import { TouchableNativeFeedback, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// import ItemSeparator from '../components/ItemSeparator';
import NewsItem from '../components/NewsItem';
import { styles } from '../styles/styles';
import useFetch from '../helpers/useFetch';

export default function HomeScreen() {
  const [params, setParams] = useState('');
  const [section, setSection] = useState('últimas noticias');
  const [data, error, isLoading] = useFetch(params);

  {
    if (isLoading) return (
      (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>)
    );
  }

  if (error) return (
    (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {error}</Text>
    </View>)
  );

  return (<View style={[styles.pad, styles.container, styles.mt4]}>
    <FlatList
      data={data.articles}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Text style={[styles.heading, styles.mb3]}>{section}</Text>
      }
      keyExtractor={(item, idx) => item.publishedAt + idx}
      renderItem={({ item }) => <NewsItem item={item} />}
    />

    {/* bottom navbar */}
    <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>
      <View style={styles.singleContainer}>
        <TouchableNativeFeedback onPress={() => {
          setParams('');
          setSection('latest news');
        }}>
          <MaterialIcons name="home" size={40} color="black" />
        </TouchableNativeFeedback>
        <Text>all</Text>
      </View>
      <View style={styles.singleContainer}>
        <TouchableNativeFeedback onPress={() => {
          setParams('&category=business');
          setSection('business');
        }}>
          <FontAwesome name="dollar" size={34} color="darkgreen" />
        </TouchableNativeFeedback>
        <Text>biz</Text>
      </View>
      <View style={styles.singleContainer}>
        <TouchableNativeFeedback onPress={() => {
          setParams('&category=technology');
          setSection('technology');
        }}>
          <MaterialCommunityIcons name="satellite-uplink" size={40} color="midnightblue" />
        </TouchableNativeFeedback>
        <Text>tech</Text>
      </View>

      <View style={styles.singleContainer}>
        <TouchableNativeFeedback onPress={() => {
          setParams('&category=health');
          setSection('health');
        }}>
          <Ionicons name="fitness" size={40} color="red" />
        </TouchableNativeFeedback>
        <Text>health</Text>
      </View>
      <View style={styles.singleContainer}>

        <TouchableNativeFeedback onPress={() => {
          setParams('&category=sports');
          setSection('sports');
        }}>
          <MaterialIcons name="sports-handball" size={40} color="tomato" />
        </TouchableNativeFeedback>
        <Text>sports</Text>
      </View>
    </View>
  </View >
  );
}

