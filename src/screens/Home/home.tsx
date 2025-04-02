import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BookItem from "../../components/BookItem";
import booksData from "../../stores/data.json"

const Home = () => {
  const [books, setBooks] = useState(booksData.books);
  const [sortBooks, setSortBooks] = useState('');

  const sortingBooks = (rule) => {
    let sortedBooks = [...books];

    switch (rule) {
      case 'A-Z':
        sortedBooks = sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z-A':
        sortedBooks = sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'moreCheaper':
        sortedBooks = sortedBooks.sort((a, b) => a.price - b.price);
        break;
      case 'moreExpensive':
        sortedBooks = sortedBooks.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setBooks(sortedBooks);
    setSortBooks(rule);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Lista de Livros</Text>
    <Picker
      selectedValue={sortBooks}
      onValueChange={(itemValue, itemIndex) =>
        sortingBooks(itemValue)
      }>
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
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tituloTela: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default Home;
