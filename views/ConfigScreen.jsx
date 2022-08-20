import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { styles } from '../styles/styles'

export default function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text>Configuration Screen</Text>
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around" }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/home.png')} />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Profile', {name: "Pancracio"})}>
          <Image
            style={styles.tabIcon}
            source={require('../assets/profile.png')} />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

