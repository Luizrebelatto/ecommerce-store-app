import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './itemProduct.styles';

export default function ItemProduct() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.imageProduct}
        source={require('../../assets/books/book1.jpg')}
      />
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.title}>Amazon Basics Monitor</Text>
      <View></View>
      <View style={{ borderColor:'black', borderRadius: 6, width: 80, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>Kindle</Text>
        <Text style={styles.price}>R$ 30,00</Text>
      </View>
      <View style={{ borderColor:'black', borderRadius: 6, width: 80, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>Kindle</Text>
        <Text style={styles.price}>R$ 30,00</Text>
      </View>
      </View>
    </View>
  );
}
