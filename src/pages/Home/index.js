import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import {useNavigation} from '@react-navigation/native'



export default function Home() {

    const navigation = useNavigation();

    function irMedidas(){
      navigation.navigate('Comprimento')
    }
    function irAplicacao(){
      navigation.navigate('Aplicacao')
    }
    function irFinanciamento(){
      navigation.navigate('Financiamento')
    }
    function irValorFuturo(){
      navigation.navigate('ValorFuturo')
    }
    function irArea(){
      navigation.navigate('Area')
    }
    function irTemperatura(){
      navigation.navigate('Temperatura')
    }
 return (
      <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.container}>
        <Image 
          style={styles.Logo}
          source={require('../../img/logo.png')}
        />
        <Text style={styles.textSelect}>SELECIONE QUAL DESEJA</Text>

        <TouchableOpacity style={styles.button} onPress={irAplicacao}>
            <Text style={styles.textButton}>Aplicacao</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={irFinanciamento}>
            <Text style={styles.textButton}>Financiamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={irValorFuturo}>
            <Text style={styles.textButton}>Valor Futuro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={irMedidas}>
            <Text style={styles.textButton}>Comprimento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={irArea}>
            <Text style={styles.textButton}>Área</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={irTemperatura}>
            <Text style={styles.textButton}>Temperatura</Text>
        </TouchableOpacity>

      </SafeAreaView>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D9AE5'
  },
  Logo:{
    width: 390,
    height: 275,

  },
  textSelect:{
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#000',
    height: 50,
    width: '90%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  textButton:{
    color: '#FFF',
    fontSize:20,
    fontWeight: 'bold',
  },
  scroll:{
    flex: 1,
    backgroundColor: '#3D9AE5'
  }

})