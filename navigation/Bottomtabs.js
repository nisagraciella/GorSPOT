import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap= require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (

        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
        <View style={styles.listitems}>
            <Image source={require('../peta/peta1.png')} style={styles.image}/>
            <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/GEOMOR.png')} style={styles.image}/>
            <Text style={styles.caption}>Peta Geomorfologi Habitat Bentik Pulau Panggang</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/ARVI.png')} style={styles.image}/>
            <Text style={styles.caption}>Peta Vegetasi Ekosistem Mangrove Pulau Nusa Kambangan Metode ARVI</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/2022.png')} style={styles.image}/>
            <Text style={styles.caption}>Peta Probabilitas Kebakaran Lahan dan Hutan Pulau Kalimantan 2022</Text>
        </View>
        </ScrollView>
    );
}

function Map(){
    return (
        <WebView
    source={ webmap }
  />
   
);
}

function Profil(){
    return (
        <View>
           <Portofolio />
        </View>
    )
}
function MahasiswaScreen(){
    return (
        <View>
           <Getjsonfile />
        </View>
    )
}

function MyTabs() {
  return (
      <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Map" component={Map} options={{
	tabBarLabel: 'Maps',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map-marked-alt" color={color} size={size} />
	),
}}
 />
      <Tab.Screen name="Profil" component={Profil} options={{
	tabBarLabel: 'Portofolio',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
	tabBarLabel: 'Mahasiswa',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}}
/>

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'strech'

    },
    listitems: {
        padding: 20,
        alignItems: 'center',

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
});
