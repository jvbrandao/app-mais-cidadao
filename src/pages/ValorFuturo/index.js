import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../../components/Header'
import { TextOutput } from '../Financiamento/styles';

import { Container, TextSelect, TextInput, Igual, Textsobre, InputView, } from './styles'


export default function ValorFuturo() {
  const [capAtual, setCapAtual] = useState('')
  const [qntMeses, setQntMeses] = useState('')
  const [jurosMensal, setJurosMensal] = useState('')
  const [valorFinal, setValorFinal] = useState('')
  const [ganhos, setGanhos] = useState('')

  const q = parseFloat(capAtual)
  const n = parseFloat(qntMeses)
  const j = parseFloat(jurosMensal / 100)
  const Q = parseFloat(valorFinal)
  const ganhoTotal = parseFloat(ganhos)


  var R = ''
  var E = ''
  if (jurosMensal !== '') {
    R = (((1 + j) ** n) * q).toFixed(2)
    E = (R - q).toFixed(2)
    R = "R$ " + R
    E = "R$ " + E
  }

  function Limpar() {
    setCapAtual('')
    setQntMeses('')
    setJurosMensal('')

  }

  var AS = ''
  var BS = ''


  if (jurosMensal !== '') {
    AS = "Valor final obtido"
    BS = "Ganhos totais"

  }

  return (
    <ScrollView style={styles.scroll}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Header />
          <TextSelect >VALOR FUTURO</TextSelect>
          <InputView>
            <Textsobre>Capital atual</Textsobre>
            <TextInput
              placeholder="Ex: 10000.00"
              placeholderTextColor="#7B7B7B"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => Keyboard.dismiss()}
              value={capAtual}
              onChangeText={(text) => setCapAtual(text)}
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
              value={jurosMensal}
              onChangeText={(text) => setJurosMensal(text)}
              disabled={true}
            />
          </InputView>
          <InputView>
            <Textsobre>{AS}</Textsobre>
            <TextOutput
              value={valorFinal}
              onChangeText={(text) => setValorFinal(text)}
              disabled={true}
            >{R}</TextOutput>
          </InputView>
          <InputView>
            <Textsobre>{BS}</Textsobre>
            <TextOutput>{E}</TextOutput>
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