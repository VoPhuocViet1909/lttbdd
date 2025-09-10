import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { flex: 1, margin: 4, padding: 20, backgroundColor: '#e0e0e0', borderRadius: 8, alignItems: 'center' },
  buttonText: { fontSize: 24, color: '#333' },
});