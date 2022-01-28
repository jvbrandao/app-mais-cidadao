import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';

import Header from '../../components/Header'





import { Container, TextSelect, TextInput, Igual, Textsobre, InputView, TextOutput } from './styles'


export default function Financiamento() {
  const [valor, setValor] = useState('')
  const [qntMeses, setQntMeses] = useState('')
  const [juros, setJuros] = useState('')
  const [prestacao, setPrestacao] = useState('')
  const [totalPago, setTotalPago] = useState('')
  const [totalJuros, setTotalJuros] = useState('')


  const q = parseFloat(valor)
  const n = parseFloat(qntMeses)
  const j = parseFloat(juros / 100)
  const p = parseFloat(prestacao)



  var Q = ''
  var T = ''
  var J = ''

  if (juros !== '') {
    Q = (q * ((((1 + j) ** n) * j) / (((1 + j) ** n) - 1))).toFixed(2)
    T = parseFloat(n * Q).toFixed(2)
    J = parseFloat(T - q).toFixed(2)

    Q = "R$ " + Q
    T = "R$ " + T
    J = "R$ " + J

  }


  function Limpar() {
    setValor('')
    setQntMeses('')
    setJuros('')

  }
  
  var AS = ''
  var BS = ''
  var CS = ''

  if (juros !== '') {
    AS = "Valor da prestação"
    BS = "Valor total pago"
    CS = "Total pago de juros"
  }

  

  return (

    <ScrollView style={styles.scroll}>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Container >
            <Header />
            <TextSelect >FINANCIAMENTO</TextSelect>
            <InputView>
              <Textsobre>Valor financiado</Textsobre>

              <TextInput
                placeholder="Ex: 10000,00"
                placeholderTextColor="#7B7B7B"

                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => Keyboard.dismiss()}
                value={valor}
                onChangeText={(text) => setValor(text)}

              />
            </InputView>
            <InputView>
              <Textsobre>Quantidade de meses</Textsobre>
              <TextInput
                placeholder="Ex: 12"
                placeholderTextColor="#7B7B7B"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => Keyboard.dismiss()}
                value={qntMeses}
                onChangeText={(text) => setQntMeses(text)}
                disabled={true}
              />
            </InputView>
            <InputView>
              <Textsobre>Taxa de juros mensal (%a.m.)</Textsobre>
              <TextInput
                placeholder="Ex: 1.2"
                placeholderTextColor="#7B7B7B"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => Keyboard.dismiss()}
                value={juros}
                onChangeText={(text) => setJuros(text)}
                disabled={true}
              />
            </InputView>

            <InputView>

              <Textsobre>{AS}</Textsobre>
              <TextOutput
                value={prestacao}
                onChangeText={(text) => setPrestacao(text)}
                disabled={true}
              >{Q}</TextOutput>
            </InputView>
            <InputView>
              <Textsobre>{BS}</Textsobre>
              <TextOutput
                value={totalPago}
                onChangeText={(text) => setTotalPago(text)}
                disabled={true}
              >{T}</TextOutput>
            </InputView>

            <InputView>
              <Textsobre>{CS}</Textsobre>
              <TextOutput>{J}</TextOutput>
            </InputView>

            <TouchableOpacity style={styles.button} onPress={Limpar}>
              <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>

          </Container>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>

  );
}



const styles = StyleSheet.create({

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
    height: 50,
    width: '50%',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#3D9AE5'
  }

})