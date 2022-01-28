import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({ onChange }){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                inputIOS: {
                    fontSize: 20,
                    borderRadius: 10,
                    color: 'black',  
                    textAlign: 'center'

                  },
                  inputAndroid: {
                    fontSize: 20,
                    borderRadius: 10,
                    color: 'black', 
                    textAlign: 'center'
                  },
            }}
            placeholder={{
                label: 'Selecione o tipo',
                color: '#7B7B7B',
                value: null,

            }}
            onValueChange={ (tipo1) => onChange(tipo1) }
            items={[
                {label: 'Quilometro quadrado', value: 'quilometro', color: '#000'},
                {label: 'Metro quadrado', value: 'metro', color: '#000'},
                {label: 'Milha quadrada', value: 'milha', color: '#000'},
                {label: 'Jarda quadrada', value: 'jarda', color: '#000'},
                {label: 'Pé quadrado', value: 'pe', color: '#000'},
                {label: 'Polegada quadrada', value: 'pol', color: '#000'},
                {label: 'Hectare quadrado', value: 'hec', color: '#000'},
                {label: 'Acre quadrado', value: 'acre', color: '#000'}
            ]}
            />
        </PickerView>
    )
}

