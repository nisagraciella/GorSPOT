import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

// const webmap= require('../peta/map.html');
const Tab = createBottomTabNavigator();
const petaweb = 'https://nisagraciella.github.io/ResponsiPGPBL/map.html'
const forminput = 'https://nisagraciella.github.io/ResponsiPGPBL/'

function HomeScreen() {
    return (
        <View>
            <ScrollView>
            
            <Text style={styles.title}>GOR Spot Yogyakarta</Text>
            <Text style={{textAlign: 'center'}}>Informasi Biaya Sewa dan Rating GOR</Text>
            <View style={styles.listitems}>
            <Image source={require('../peta/area.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR AREA Badminton</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 50k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.7</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/karanggayam.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR KARANGGAYAM</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 50k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.4</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/jambon.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR JAMBON</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 45k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.6</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/kalasan.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR KALASAN</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 50k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.8</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/lembah.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR LEMBAH UGM</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 35k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.5</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/gandok.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR BADMINTON GANDOK MULYA</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 30k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.4</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/sorowajan.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR SOROWAJAN</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 50k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.5</Text>
        </View>
        <View style={styles.listitems}>
            <Image source={require('../peta/supriyati.jpg')} style={styles.image}/>
            <Text style={styles.caption}>GOR SUPRIYATI</Text>
            <Text style={styles.deskripsi}>Biaya Sewa 40k/jam</Text>
            <Text style={styles.deskripsi}>Rating 4.5</Text>
        </View>
        </ScrollView>
        </View>
        
    );
}

function Map(){
    return (
        <WebView
    source={{uri: petaweb }}
  />
   
);
}

function callapiScreen(){
    return (
        <View>
            <Callapi />
        </View>
    )
}

function Profil(){
    return (
        <View>
           <Portofolio />
        </View>
    )
}
function AddDataScreen(){
    return (
        <WebView
        source={{uri: forminput }}
      />
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

  <Tab.Screen name="callapi" component={callapiScreen} options={{
	tabBarLabel: 'GOR',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="building" color={color} size={size} />
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
<Tab.Screen name="Add Data" component={AddDataScreen} options={{
	tabBarLabel: 'Add Data',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="plus-circle" color={color} size={size} />
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
    },
    deskripsi: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },

    container: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#C69774',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FCF5ED',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7,
      }
});
