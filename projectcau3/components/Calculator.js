import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './Display';
import Keyboard from './Keyboard';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <Display input={input} result={result} />
      <Keyboard onButtonPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', justifyContent: 'center' },
});