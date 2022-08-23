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
  const [params, setParams] = useState('')
  const [data, error, isLoading] = useFetch(params)

  return isLoading ?

    (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>)
    :
    error ?
      (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> {error}</Text>
      </View>)
      :
      (<View style={[styles.pad, styles.container, styles.mt2]}>

        <FlatList
          data={data.articles}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={[styles.heading, styles.mb3]}>últimas noticias</Text>
          }
          keyExtractor={(item, idx) => item.publishedAt + idx}
          renderItem={({ item }) => <NewsItem item={item} />}
        //  ItemSeparatorComponent={() => <ItemSeparator />}

        />

        <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>

          <View style={styles.singleContainer}>
            <TouchableNativeFeedback onPress={() => setParams('')}>
              <MaterialIcons name="home" size={40} color="black" />
            </TouchableNativeFeedback>
            <Text>todas</Text>
          </View>
          <View style={styles.singleContainer}>
            <TouchableNativeFeedback onPress={() => setParams('&category=business')}>
              <FontAwesome name="dollar" size={34} color="darkgreen" />
            </TouchableNativeFeedback>
            <Text>negocios</Text>
          </View>
          <View style={styles.singleContainer}>
            <TouchableNativeFeedback onPress={() => setParams('&category=technology')}>
              <MaterialCommunityIcons name="satellite-uplink" size={40} color="midnightblue" />
            </TouchableNativeFeedback>
            <Text>tecno</Text>
          </View>

          <View style={styles.singleContainer}>
            <TouchableNativeFeedback onPress={() => setParams('&category=health')}>
              <Ionicons name="fitness" size={40} color="red" />
            </TouchableNativeFeedback>
            <Text>salud</Text>
          </View>
          <View style={styles.singleContainer}>

            <TouchableNativeFeedback onPress={() => setParams('&category=sports')}>
              <MaterialIcons name="sports-handball" size={40} color="tomato" />
            </TouchableNativeFeedback>
            <Text>deporte</Text>
          </View>
        </View>
      </View >
      );
}

