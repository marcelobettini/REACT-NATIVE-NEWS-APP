import { TouchableNativeFeedback, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import ItemSeparator from '../components/ItemSeparator';
import NewsItem from '../components/NewsItem';
import { styles } from '../styles/styles';
import useFetch from '../helpers/useFetch';

export default function HomeScreen() {
  const [params, setParams] = useState('?country=us')
  const [data, error, isLoading] = useFetch(params)

  return isLoading ?

    (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reading feed...</Text>
    </View>)
    :
    error ?
      (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> {error}</Text>
      </View>)
      :
      (<View style={[styles.pad, styles.container]}>

        <FlatList
          data={data.articles}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={[styles.heading, styles.mb3]}>latest news</Text>
          }
          keyExtractor={item => item.publishedAt}
          renderItem={({ item }) => <NewsItem item={item} />}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />

        <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>
          <TouchableNativeFeedback>
            <Text>economy</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => setParams('?category=sports')}>
            <Text>sports</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      );
}

