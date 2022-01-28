import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../../components/Header'

import Picker from '../../components/Picker/PickerTemperatura'


import { Container, TextSelect, TextInput, Igual, Textsobre, TextOutput, TextResultado } from './styles'

export default function Medidas() {

    const [numCon1, setNumCon1] = useState('')
    const [tipo1, setTipo1] = useState('')
    const [tipo2, setTipo2] = useState('')

    const select1 = tipo1
    const select2 = tipo2
    var G = parseFloat(numCon1)

    function Limpar() {
        setNumCon1('')
    }
    var resultado = ''
    //celsius 
    if (select1 === 'celsius' && select2 === 'fahrenheit') {
        resultado = (G * (9 / 5)) + 32
    } if (select1 === 'celsius' && select2 === 'kelvin') {
        resultado = G + 273.15

    } if (select1 === 'celsius' && select2 === 'celsius') {
        resultado = G
    }

    //fahrenheit 
    if (select1 === 'fahrenheit' && select2 === 'celsius') {
        resultado = (G - 32) * (5 / 9)
    } if (select1 === 'fahrenheit' && select2 === 'kelvin') {
        resultado = (G - 32) * (5 / 9) + 273.15

    } if (select1 === 'fahrenheit' && select2 === 'fahrenheit') {
        resultado = G
    }

    //fahrenheit 
    if (select1 === 'kelvin' && select2 === 'celsius') {
        resultado = G - 273.15
    } if (select1 === 'kelvin' && select2 === 'fahrenheit') {
        resultado = (G - 273.15) * (9 / 5) + 32

    } if (select1 === 'kelvin' && select2 === 'kelvin') {
        resultado = G
    }

    return (
        <ScrollView style={styles.scroll}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container >
                    <Header />
                    <TextSelect >Temperatura</TextSelect>

                    <Textsobre>Temperatura a ser convertida</Textsobre>
                    <TextInput
                        placeholder="Ex: 10000.00"
                        placeholderTextColor="#7B7B7B"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        value={numCon1}
                        onChangeText={(text) => setNumCon1(text)}

                    />
                    <Textsobre>Temperatura de conversao</Textsobre>
                    <Picker onChange={setTipo1} tipo={setTipo1} />
                    <Textsobre>Temperatura para conversão</Textsobre>
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
    scroll: {
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
