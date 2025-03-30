import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './itemProduct.styles';

export default function ItemProduct() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageProduct}
      />
      <Text style={styles.title}>Amazon Basics Monitor</Text>
    </View>
  );
}
