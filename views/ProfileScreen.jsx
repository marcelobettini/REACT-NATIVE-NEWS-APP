import { Image, View, Text, TouchableNativeFeedback} from 'react-native';
import { styles } from '../styles/styles';
export default function ProfileScreen({navigation, route}) {
  const {name} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text>Profile Screen</Text>
      <Text>{name} is in tha house</Text>
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/home.png')} />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Config')}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/config.png')} />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}