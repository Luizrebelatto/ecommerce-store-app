import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import booksData from "../../stores/data.json"

const LivroScreen = () => {
  const [books, setBooks] = useState(booksData.books);
  const [filtro, setFiltro] = useState('');
  const [sortBooks, setSortBooks] = useState('');

  const filterBooks = (texto) => {
    setFiltro(texto);
    const filterBooks = booksData.books.filter((book) =>
      book.title.toLowerCase().includes(texto.toLowerCase())
    );
    setBooks(filterBooks);
  };

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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.autor}>Autor: {item.author}</Text>
      <Text style={styles.preco}>Preço: R${item.price.toFixed(2)}</Text>
      <Text style={styles.descricao}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Lista de Livros</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por título..."
        value={filtro}
        onChangeText={filterBooks}
      />

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
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 14,
    color: '#555',
  },
  preco: {
    fontSize: 14,
    color: '#1e90ff',
    marginTop: 5,
  },
  descricao: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
});

export default LivroScreen;
