import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({ onChange }) {
    return (
        <PickerView>
            <RNPickerSelect
                style={{
                    inputIOS: {
                        fontSize: 20,
                        borderRadius: 10,
                        color: 'black',  
                      },
                      inputAndroid: {
                        fontSize: 20,
                        borderRadius: 10,
                        color: 'black', 
                      },
                }}
                placeholder={{
                    label: 'Selecione o tipo',
                    value: null,
                }}
                onValueChange={(tipo1) => onChange(tipo1)}
                items={[
                    { label: 'Quilometro', value: 'quilometro' },
                    { label: 'Metro', value: 'metro' },
                    { label: 'Centimetro', value: 'centimetro' },
                    { label: 'Milimetro', value: 'milimetro' },
                    { label: 'Micrometro', value: 'micrometro' },
                    { label: 'Nanometro', value: 'nanometro' },
                    { label: 'Milha', value: 'milha' },
                    { label: 'Jarda', value: 'jarda' },
                    { label: 'Pé', value: 'pe' },
                    { label: 'Polegada', value: 'polegada' },
                    { label: 'Milha Náutica', value: 'milhaNautica' }
                ]}
            />
        </PickerView>
    )
}
