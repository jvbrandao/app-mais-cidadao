import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../../components/Header'

import Picker from '../../components/Picker/PickerArea'


import {Container, TextSelect, TextInput, Igual, Textsobre, TextOutput, TextResultado} from './styles'

export default function Medidas() {
  
    const [numCon1, setNumCon1] = useState('')
    const setNumCon2 = useState('')
    const [tipo1, setTipo1] = useState('')
    const [tipo2, setTipo2] = useState('')
  
    function Limpar() {
      setNumCon1('')
    }
  
    const select1 = tipo1
    const select2 = tipo2
    var numero = parseFloat(numCon1)
    var resultado = ''



    //quilometro quadrado
  if (select1 === 'quilometro' && select2 === 'metro') {
    resultado = numero * 1000000

  } if (select1 === 'quilometro' && select2 === 'milha') {
    resultado = numero * 2.59

  } if (select1 === 'quilometro' && select2 === 'jarda') {
    resultado = numero * 1196000

  } if (select1 === 'quilometro' && select2 === 'pe') {
    resultado = numero * 10760000

  } if (select1 === 'quilometro' && select2 === 'pol') {
    resultado = numero * 1550000000

  } if (select1 === 'quilometro' && select2 === 'hec') {
    resultado = numero * 100

  } if (select1 === 'quilometro' && select2 === 'acre') {
    resultado = numero * 247

  } if (select1 === 'quilometro' && select2 === 'quilometro') {
    resultado = numero
  }
  //metro quadrado
  if (select1 === 'metro' && select2 === 'quilometro') {
    resultado = numero / 1000000

  } if (select1 === 'metro' && select2 === 'milha') {
    resultado = numero / 2590000

  } if (select1 === 'metro' && select2 === 'jarda') {
    resultado = numero * 1.196 

  } if (select1 === 'metro' && select2 === 'pe') {
    resultado = numero * 10.764

  } if (select1 === 'metro' && select2 === 'pol') {
    resultado = numero * 1550

  } if (select1 === 'metro' && select2 === 'hec') {
    resultado = numero / 10000

  } if (select1 === 'metro' && select2 === 'acre') {
    resultado = numero / 4047

  } if (select1 === 'metro' && select2 === 'metro') {
    resultado = numero
  }

  //milha quadrada
  if (select1 === 'milha' && select2 === 'quilometro') {
    resultado = numero * 2.59

  } if (select1 === 'milha' && select2 === 'metro') {
    resultado = numero * 2590000

  } if (select1 === 'milha' && select2 === 'jarda') {
    resultado = numero * 3098000 

  } if (select1 === 'milha' && select2 === 'pe') {
    resultado = numero * 27880000

  } if (select1 === 'milha' && select2 === 'pol') {
    resultado = numero * 4014000000

  } if (select1 === 'milha' && select2 === 'hec') {
    resultado = numero * 259

  } if (select1 === 'milha' && select2 === 'acre') {
    resultado = numero * 640

  } if (select1 === 'milha' && select2 === 'milha') {
    resultado = numero
  }

  //jarda quadrada
  if (select1 === 'jarda' && select2 === 'quilometro') {
    resultado = numero / 1196000

  } if (select1 === 'jarda' && select2 === 'metro') {
    resultado = numero / 1.196

  } if (select1 === 'jarda' && select2 === 'milha') {
    resultado = numero / 3098000 

  } if (select1 === 'jarda' && select2 === 'pe') {
    resultado = numero * 9

  } if (select1 === 'jarda' && select2 === 'pol') {
    resultado = numero * 1296

  } if (select1 === 'jarda' && select2 === 'hec') {
    resultado = numero / 11960

  } if (select1 === 'jarda' && select2 === 'acre') {
    resultado = numero / 4840

  } if (select1 === 'jarda' && select2 === 'jarda') {
    resultado = numero
  }

  //pe quadrada
  if (select1 === 'pe' && select2 === 'quilometro') {
    resultado = numero / 10760000

  } if (select1 === 'pe' && select2 === 'metro') {
    resultado = numero / 10.764

  } if (select1 === 'pe' && select2 === 'milha') {
    resultado = numero / 27880000 

  } if (select1 === 'pe' && select2 === 'jarda') {
    resultado = numero / 9

  } if (select1 === 'pe' && select2 === 'pol') {
    resultado = numero * 144

  } if (select1 === 'pe' && select2 === 'hec') {
    resultado = numero / 107639

  } if (select1 === 'pe' && select2 === 'acre') {
    resultado = numero / 43560

  } if (select1 === 'pe' && select2 === 'pe') {
    resultado = numero
  }


  //pol quadrada
  if (select1 === 'pol' && select2 === 'quilometro') {
    resultado = numero / 1550000000

  } if (select1 === 'pol' && select2 === 'metro') {
    resultado = numero / 1550

  } if (select1 === 'pol' && select2 === 'milha') {
    resultado = numero / 4014000000 

  } if (select1 === 'pol' && select2 === 'jarda') {
    resultado = numero / 1296

  } if (select1 === 'pol' && select2 === 'pe') {
    resultado = numero / 144

  } if (select1 === 'pol' && select2 === 'hec') {
    resultado = numero / 15500000

  } if (select1 === 'pol' && select2 === 'acre') {
    resultado = numero / 6273000

  } if (select1 === 'pol' && select2 === 'pol') {
    resultado = numero
  }

  //hectare quadrada
  if (select1 === 'hec' && select2 === 'quilometro') {
    resultado = numero / 100

  } if (select1 === 'hec' && select2 === 'metro') {
    resultado = numero / 10000

  } if (select1 === 'hec' && select2 === 'milha') {
    resultado = numero / 259 

  } if (select1 === 'hec' && select2 === 'jarda') {
    resultado = numero * 11960

  } if (select1 === 'hec' && select2 === 'pe') {
    resultado = numero * 107639

  } if (select1 === 'hec' && select2 === 'pol') {
    resultado = numero * 15500000

  } if (select1 === 'hec' && select2 === 'acre') {
    resultado = numero * 2.471

  } if (select1 === 'hec' && select2 === 'hec') {
    resultado = numero
  }

  //acre quadrado
  if (select1 === 'acre' && select2 === 'quilometro') {
    resultado = numero / 247
  } if (select1 === 'acre' && select2 === 'metro') {
    resultado = numero * 4047

  } if (select1 === 'acre' && select2 === 'milha') {
    resultado = numero / 640 

  } if (select1 === 'acre' && select2 === 'jarda') {
    resultado = numero * 4840

  } if (select1 === 'acre' && select2 === 'pe') {
    resultado = numero * 43560

  } if (select1 === 'acre' && select2 === 'pol') {
    resultado = numero * 6273000

  } if (select1 === 'acre' && select2 === 'hec') {
    resultado = numero * 2471

  } if (select1 === 'acre' && select2 === 'acre') {
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
          <TextSelect >Área</TextSelect>

          <Textsobre>Área a ser convertida</Textsobre>
          <TextInput
            placeholder="Ex: 10000.00"
            placeholderTextColor="#7B7B7B"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={numCon1}
            onChangeText={(text) => setNumCon1(text)}

          />
          <Textsobre>Área de conversao</Textsobre>
          <Picker onChange={setTipo1} tipo={setTipo1}/>
          <Textsobre>Área para conversão</Textsobre>
          <Picker onChange={setTipo2} tipo={setTipo2}/>
          
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
  scroll:{
    flex: 1,
    backgroundColor: '#3D9AE5'
  },
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

})