import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BookItem from "../../components/BookItem";
import booksData from "../../stores/data.json";
import { styles } from './home.styles';
import { sortingBooks } from '../../utils/sorting';
import ModalForm from '../../components/ModalForm';

export default function Home() {
  const [books, setBooks] = useState(booksData.books);
  const [rule, setRule] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSorting = (rule) => {
    const sortedBooks = sortingBooks(rule, books);
    setBooks(sortedBooks);
    setRule(rule);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Form data recebida na Home:", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>BOOK STORE</Text>
        <TouchableOpacity style={styles.circle} onPress={() => setShowModal(true)}>
          <Text style={styles.plusSymbol}>+</Text>
        </TouchableOpacity>
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
      <ModalForm
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmitForm={handleFormSubmit}
      />
    </View>
  );
}
