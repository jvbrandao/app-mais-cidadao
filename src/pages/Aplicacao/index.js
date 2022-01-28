import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../../components/Header'


import { Container, TextSelect, TextInput, Igual, Textsobre, InputView, TextOutput } from './styles'


export default function Aplicacao() {
  const [deposito, setDeposito] = useState('')
  const [qntMeses, setQntMeses] = useState('')
  const [juros, setJuros] = useState('')
  const [valorFinal, setValorFinal] = useState('')
  const [ganhos, setGanhos] = useState('')

  const j = parseFloat(juros / 100)
  const n = parseFloat(qntMeses)
  const p = parseFloat(deposito)

  var S = ''
  var G = ''

  if (juros !== '') {
    S = ((1 + j) * (((((1 + j) ** n)) - 1) / j) * p).toFixed(2)
    G = (S - (p * n)).toFixed(2)

    S ="R$ " + S
    G ="R$ " + G
  }


  function Limpar() {
    setJuros('')
    setQntMeses('')
    setDeposito('')

  }

  var AS = ''
  var BS = ''


  if (juros !== '') {
    AS = "Valor final obtido"
    BS = "Ganhos totais"

  }



  return (
    <ScrollView style={styles.scroll}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container >
          <Header />
          <TextSelect >APLICAÇÃO</TextSelect>
          <InputView>
            <Textsobre>Valor do depósito regular</Textsobre>
            <TextInput
              placeholder="Ex: 10000,30"
              placeholderTextColor="#7B7B7B"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => Keyboard.dismiss()}
              value={deposito}
              onChangeText={(text) => setDeposito(text)}
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
              placeholder="Ex: 1.3"
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
              value={valorFinal}
              onChangeText={(text) => setValorFinal(text)}
              disabled={true}
            >{S}</TextOutput>
          </InputView>
          <InputView>
            <Textsobre>{BS}</Textsobre>
            <TextOutput>{G}</TextOutput>
          </InputView>
          <TouchableOpacity style={styles.button} onPress={Limpar}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
        </Container>
      </TouchableWithoutFeedback>
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