import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

export default function ButtonRow({ row, onButtonPress }) {
  return (
    <View style={styles.row}>
      {row.map((btn) => (
        <Button key={btn} label={btn} onPress={() => onButtonPress(btn)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
});