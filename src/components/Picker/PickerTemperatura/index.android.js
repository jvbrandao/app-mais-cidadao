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
                {label: 'Grau Celsius', value: 'celsius', color: '#000'},
                {label: 'Kelvin', value: 'kelvin', color: '#000'},
                {label: 'Grau Fahrenheit', value: 'fahrenheit', color: '#000'}
            ]}
            />
        </PickerView>
    )
}

