import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Display({ input, result }) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.inputText}>{input}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: { marginBottom: 24, padding: 12, borderRadius: 8, backgroundColor: '#f5f5f5' },
  inputText: { fontSize: 28, color: '#333', textAlign: 'right' },
  resultText: { fontSize: 32, color: '#007AFF', textAlign: 'right', marginTop: 8 },
});