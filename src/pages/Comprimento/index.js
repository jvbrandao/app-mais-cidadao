import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../../components/Header'

import Picker from '../../components/Picker/PickerComprimento'


import { Container, TextSelect, TextInput, Igual, Textsobre, TextOutput, TextResultado } from './styles'


export default function Medidas() {

  const [numCon1, setNumCon1] = useState('')
  const setNumCon2 = useState('')
  const [tipo1, setTipo1] = useState('')
  const [tipo2, setTipo2] = useState('')



  const select1 = tipo1
  const select2 = tipo2
  var numero = parseFloat(numCon1)
  var resultado = ''

  function Limpar() {
    setNumCon1('')
  }



  //metro
  if (select1 === 'metro' && select2 === 'quilometro') {
    resultado = numero / 1000

  } if (select1 === 'metro' && select2 === 'centimetro') {
    resultado = numero * 100

  } if (select1 === 'metro' && select2 === 'milimetro') {
    resultado = numero * 1000

  } if (select1 === 'metro' && select2 === 'micrometro') {
    resultado = numero * 1000000

  } if (select1 === 'metro' && select2 === 'nanometro') {
    resultado = numero * 1000000000

  } if (select1 === 'metro' && select2 === 'milha') {
    resultado = numero / 1609

  } if (select1 === 'metro' && select2 === 'jarda') {
    resultado = numero * 1.094

  } if (select1 === 'metro' && select2 === 'pe') {
    resultado = numero * 3.281

  } if (select1 === 'metro' && select2 === 'polegada') {
    resultado = numero * 39.37

  } if (select1 === 'metro' && select2 === 'milhaNautica') {
    resultado = numero / 1852

  } if (select1 === 'metro' && select2 === 'metro') {
    resultado = numero
  }

  //quilometro
  if (select1 === 'quilometro' && select2 === 'metro') {
    resultado = numero * 1000

  } if (select1 === 'quilometro' && select2 === 'centimetro') {
    resultado = numero * 100000

  } if (select1 === 'quilometro' && select2 === 'milimetro') {
    resultado = numero * 1000000

  } if (select1 === 'quilometro' && select2 === 'micrometro') {
    resultado = numero * 1000000000

  } if (select1 === 'quilometro' && select2 === 'nanometro') {
    resultado = numero * 1000000000000

  } if (select1 === 'quilometro' && select2 === 'milha') {
    resultado = numero / 1.609

  } if (select1 === 'quilometro' && select2 === 'jarda') {
    resultado = numero * 1094

  } if (select1 === 'quilometro' && select2 === 'pe') {
    resultado = numero * 3281

  } if (select1 === 'quilometro' && select2 === 'polegada') {
    resultado = numero * 39370

  } if (select1 === 'quilometro' && select2 === 'milhaNautica') {
    resultado = numero / 1.852

  } if (select1 === 'quilometro' && select2 === 'quilometro') {
    resultado = numero
  }

  //centimetro
  if (select1 === 'centimetro' && select2 === 'metro') {
    resultado = numero / 100

  } if (select1 === 'centimetro' && select2 === 'quilometro') {
    resultado = numero / 100000

  } if (select1 === 'centimetro' && select2 === 'milimetro') {
    resultado = numero * 10

  } if (select1 === 'centimetro' && select2 === 'micrometro') {
    resultado = numero * 10000

  } if (select1 === 'centimetro' && select2 === 'nanometro') {
    resultado = numero * 10000000

  } if (select1 === 'centimetro' && select2 === 'milha') {
    resultado = numero / 160934

  } if (select1 === 'centimetro' && select2 === 'jarda') {
    resultado = numero / 91.44

  } if (select1 === 'centimetro' && select2 === 'pe') {
    resultado = numero / 30.48

  } if (select1 === 'centimetro' && select2 === 'polegada') {
    resultado = numero / 2.54

  } if (select1 === 'centimetro' && select2 === 'milhaNautica') {
    resultado = numero / 185200

  } if (select1 === 'centimetro' && select2 === 'centimetro') {
    resultado = numero
  }

  //milimetro
  if (select1 === 'milimetro' && select2 === 'metro') {
    resultado = numero / 1000

  } if (select1 === 'milimetro' && select2 === 'quilometro') {
    resultado = numero / 1000000

  } if (select1 === 'milimetro' && select2 === 'centimetro') {
    resultado = numero / 10

  } if (select1 === 'milimetro' && select2 === 'micrometro') {
    resultado = numero * 1000

  } if (select1 === 'milimetro' && select2 === 'nanometro') {
    resultado = numero * 1000000

  } if (select1 === 'milimetro' && select2 === 'milha') {
    resultado = numero / 1609000000

  } if (select1 === 'milimetro' && select2 === 'jarda') {
    resultado = numero / 914

  } if (select1 === 'milimetro' && select2 === 'pe') {
    resultado = numero / 305

  } if (select1 === 'milimetro' && select2 === 'polegada') {
    resultado = numero / 25.4

  } if (select1 === 'milimetro' && select2 === 'milhaNautica') {
    resultado = numero / 1852000000

  } if (select1 === 'milimetro' && select2 === 'milimetro') {
    resultado = numero
  }

  //micrometro
  if (select1 === 'micrometro' && select2 === 'metro') {
    resultado = numero / 1000000

  } if (select1 === 'micrometro' && select2 === 'quilometro') {
    resultado = numero / 1000000000

  } if (select1 === 'micrometro' && select2 === 'centimetro') {
    resultado = numero / 10000

  } if (select1 === 'micrometro' && select2 === 'milimetro') {
    resultado = numero / 1000

  } if (select1 === 'micrometro' && select2 === 'nanometro') {
    resultado = numero * 1000

  } if (select1 === 'micrometro' && select2 === 'milha') {
    resultado = numero / 1609000000000

  } if (select1 === 'micrometro' && select2 === 'jarda') {
    resultado = numero / 914400

  } if (select1 === 'micrometro' && select2 === 'pe') {
    resultado = numero / 304800

  } if (select1 === 'micrometro' && select2 === 'polegada') {
    resultado = numero / 25400

  } if (select1 === 'micrometro' && select2 === 'milhaNautica') {
    resultado = numero / 1852000000000

  } if (select1 === 'micrometro' && select2 === 'micrometro') {
    resultado = numero
  }

  //nanometro
  if (select1 === 'nanometro' && select2 === 'metro') {
    resultado = numero / 1000000000

  } if (select1 === 'nanometro' && select2 === 'quilometro') {
    resultado = numero / 1000000000000

  } if (select1 === 'nanometro' && select2 === 'centimetro') {
    resultado = numero / 10000000

  } if (select1 === 'nanometro' && select2 === 'milimetro') {
    resultado = numero / 1000000

  } if (select1 === 'nanometro' && select2 === 'micrometro') {
    resultado = numero / 1000

  } if (select1 === 'nanometro' && select2 === 'milha') {
    resultado = numero / 1609000000000000

  } if (select1 === 'nanometro' && select2 === 'jarda') {
    resultado = numero / 914400000000

  } if (select1 === 'nanometro' && select2 === 'pe') {
    resultado = numero / 304800000000

  } if (select1 === 'nanometro' && select2 === 'polegada') {
    resultado = numero / 2540000000

  } if (select1 === 'nanometro' && select2 === 'milhaNautica') {
    resultado = numero / 1852000000000000

  } if (select1 === 'milha' && select2 === 'nanometro') {
    resultado = numero
  }

  //milha
  if (select1 === 'milha' && select2 === 'metro') {
    resultado = numero * 1609

  } if (select1 === 'milha' && select2 === 'quilometro') {
    resultado = numero * 1.609

  } if (select1 === 'milha' && select2 === 'centimetro') {
    resultado = numero * 160934

  } if (select1 === 'milha' && select2 === 'milimetro') {
    resultado = numero * 1609000000

  } if (select1 === 'milha' && select2 === 'micrometro') {
    resultado = numero * 1609000000000

  } if (select1 === 'milha' && select2 === 'nanometro') {
    resultado = numero * 1609000000000000

  } if (select1 === 'milha' && select2 === 'jarda') {
    resultado = numero * 1760

  } if (select1 === 'milha' && select2 === 'pe') {
    resultado = numero * 5280

  } if (select1 === 'milha' && select2 === 'polegada') {
    resultado = numero * 63360

  } if (select1 === 'milha' && select2 === 'milhaNautica') {
    resultado = numero / 1.151

  } if (select1 === 'milha' && select2 === 'milha') {
    resultado = numero
  }
  //jarda
  if (select1 === 'jarda' && select2 === 'metro') {
    resultado = numero / 1.094

  } if (select1 === 'jarda' && select2 === 'quilometro') {
    resultado = numero / 1094

  } if (select1 === 'jarda' && select2 === 'centimetro') {
    resultado = numero * 91.44

  } if (select1 === 'jarda' && select2 === 'milimetro') {
    resultado = numero * 914

  } if (select1 === 'jarda' && select2 === 'micrometro') {
    resultado = numero * 914400

  } if (select1 === 'jarda' && select2 === 'nanometro') {
    resultado = numero * 914400000000

  } if (select1 === 'jarda' && select2 === 'milha') {
    resultado = numero / 1760

  } if (select1 === 'jarda' && select2 === 'pe') {
    resultado = numero * 3

  } if (select1 === 'jarda' && select2 === 'polegada') {
    resultado = numero * 36

  } if (select1 === 'jarda' && select2 === 'milhaNautica') {
    resultado = numero / 2025

  } if (select1 === 'jarda' && select2 === 'jarda') {
    resultado = numero
  }

  //pe
  if (select1 === 'pe' && select2 === 'metro') {
    resultado = numero / 3.281

  } if (select1 === 'pe' && select2 === 'quilometro') {
    resultado = numero / 3281

  } if (select1 === 'pe' && select2 === 'centimetro') {
    resultado = numero * 30.48

  } if (select1 === 'pe' && select2 === 'milimetro') {
    resultado = numero * 305

  } if (select1 === 'pe' && select2 === 'micrometro') {
    resultado = numero * 304800

  } if (select1 === 'pe' && select2 === 'nanometro') {
    resultado = numero * 304800000000

  } if (select1 === 'pe' && select2 === 'milha') {
    resultado = numero / 5280

  } if (select1 === 'pe' && select2 === 'jarda') {
    resultado = numero / 3

  } if (select1 === 'pe' && select2 === 'polegada') {
    resultado = numero * 12

  } if (select1 === 'pe' && select2 === 'milhaNautica') {
    resultado = numero / 6076

  } if (select1 === 'pe' && select2 === 'pe') {
    resultado = numero
  }

  //polegada
  if (select1 === 'polegada' && select2 === 'metro') {
    resultado = numero / 39.37

  } if (select1 === 'polegada' && select2 === 'quilometro') {
    resultado = numero / 39370

  } if (select1 === 'polegada' && select2 === 'centimetro') {
    resultado = numero * 2.54

  } if (select1 === 'polegada' && select2 === 'milimetro') {
    resultado = numero * 25.4

  } if (select1 === 'polegada' && select2 === 'micrometro') {
    resultado = numero * 25400

  } if (select1 === 'polegada' && select2 === 'nanometro') {
    resultado = numero * 2540000000

  } if (select1 === 'polegada' && select2 === 'milha') {
    resultado = numero / 63360

  } if (select1 === 'polegada' && select2 === 'jarda') {
    resultado = numero / 36

  } if (select1 === 'polegada' && select2 === 'pe') {
    resultado = numero / 12

  } if (select1 === 'polegada' && select2 === 'milhaNautica') {
    resultado = numero / 72913

  } if (select1 === 'polegada' && select2 === 'polegada') {
    resultado = numero
  }

  //milhaNautica
  if (select1 === 'milhaNautica' && select2 === 'metro') {
    resultado = numero * 1852

  } if (select1 === 'milhaNautica' && select2 === 'quilometro') {
    resultado = numero * 1.852

  } if (select1 === 'milhaNautica' && select2 === 'centimetro') {
    resultado = numero * 185200

  } if (select1 === 'milhaNautica' && select2 === 'milimetro') {
    resultado = numero * 1852000000

  } if (select1 === 'milhaNautica' && select2 === 'micrometro') {
    resultado = numero * 1852000000000

  } if (select1 === 'milhaNautica' && select2 === 'nanometro') {
    resultado = numero * 1852000000000000

  } if (select1 === 'milhaNautica' && select2 === 'milha') {
    resultado = numero * 1.151

  } if (select1 === 'milhaNautica' && select2 === 'jarda') {
    resultado = numero * 2025

  } if (select1 === 'milhaNautica' && select2 === 'pe') {
    resultado = numero * 6076

  } if (select1 === 'milhaNautica' && select2 === 'polegada') {
    resultado = numero * 72913

  } if (select1 === 'milhaNautica' && select2 === 'milhaNautica') {
    resultado = numero
  }

  if(resultado < 0){
    resultado = resultado.toFixed(2)
  }

  return (
    <ScrollView style={styles.scroll}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container >
          <Header />
          <TextSelect >COMPRIMENTO</TextSelect>

          <Textsobre>Numero a ser convertido</Textsobre>
          <TextInput
            placeholder="Ex: 10000.00"
            placeholderTextColor="#7B7B7B"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={numCon1}
            onChangeText={(text) => setNumCon1(text)}

          />
          <Textsobre>Medida de conversao</Textsobre>
          <Picker onChange={setTipo1} tipo={setTipo1} />

          <Textsobre>Medida para conversão</Textsobre>
          <Picker onChange={setTipo2} tipo={setTipo2} />

          <Igual >=</Igual>

          <TextResultado>Resultado</TextResultado>

          <TextOutput>{resultado}</TextOutput>

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