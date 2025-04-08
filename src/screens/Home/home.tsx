import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BookItem from "../../components/BookItem";
import booksData from "../../stores/data.json";
import { styles } from './home.styles';
import { sortingBooks } from '../../utils/sorting';


export default function Home() {
  const [books, setBooks] = useState(booksData.books);
  const [rule, setRule] = useState('');

  const handleSorting = (rule) => {
    const sortedBooks = sortingBooks(rule, books);
    setBooks(sortedBooks);
    setRule(rule);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={styles.title}>BOOK STORE</Text>
        <View style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>+</Text>
        </View>
      </View>

      <Picker
        selectedValue={rule}
        testID='sort-picker'
        onValueChange={(itemValue) => handleSorting(itemValue)}
      >
        <Picker.Item label="Sort by" value="" />
        <Picker.Item label="A-Z" value="A-Z" />
        <Picker.Item label="Z-A" value="Z-A" />
        <Picker.Item label="More cheaper" value="moreCheaper" />
        <Picker.Item label="More Expensive" value="moreExpensive" />
      </Picker>

      <FlatList
        data={books}
        renderItem={({ item, index }) => (
          <BookItem
            author={item.author}
            description={item.description}
            price={item.price}
            title={item.title}
            key={index}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
