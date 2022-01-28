import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './src/pages/Home'
import Comprimento from './src/pages/Comprimento'
import Aplicacao from './src/pages/Aplicacao'
import Financiamento from './src/pages/Financiamento'
import ValorFuturo from './src/pages/ValorFuturo'
import Area from './src/pages/Area'
import Temperatura from './src/pages/Temperatura'



const Drawer = createDrawerNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerStyle={{
        backgroundColor: '#3D9AE5'
      }}
      drawerContentOptions={{
        labelStyle:{
          fontWeight: 'bold',
          fontSize:20,
        },
        activeTintColor: '#7ED957',
        activeBackgroundColor: '#2D73AB',
        marginTop: 50,
      }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Aplicacao" component={Aplicacao} />
        <Drawer.Screen name="Financiamento" component={Financiamento} />
        <Drawer.Screen name="ValorFuturo" component={ValorFuturo} />
        <Drawer.Screen name="Comprimento" component={Comprimento} />
        <Drawer.Screen name="Area" component={Area} />
        <Drawer.Screen name="Temperatura" component={Temperatura} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}