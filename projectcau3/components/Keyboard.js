import React from 'react';
import { View } from 'react-native';
import ButtonRow from './ButtonRow';

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', 'C', '=', '+'],
];

export default function Keyboard({ onButtonPress }) {
  return (
    <View>
      {buttons.map((row, idx) => (
        <ButtonRow key={idx} row={row} onButtonPress={onButtonPress} />
      ))}
    </View>
  );
}