import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const livrosData = [
  { id: 1, titulo: '1984', autor: 'George Orwell', ano: 1949, descricao: 'Um romance distópico sobre um futuro totalitário...', preco: 39.90 },
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899, descricao: 'A história de Bentinho e sua relação com Capitu...', preco: 29.90 },
  { id: 3, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', ano: 1954, descricao: 'A jornada de Frodo Bolseiro para destruir o Um Anel...', preco: 59.90 },
  { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943, descricao: 'A história de um príncipe que viaja de planeta em planeta...', preco: 19.90 },
  { id: 5, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997, descricao: 'O início da saga de Harry Potter, um jovem bruxo...', preco: 49.90 },
];

const LivroScreen = () => {
  const [livros, setLivros] = useState(livrosData);
  const [filtro, setFiltro] = useState('');
  const [ordenacao, setOrdenacao] = useState('');

  const filtrarLivros = (texto) => {
    setFiltro(texto);
    const livrosFiltrados = livrosData.filter((livro) =>
      livro.titulo.toLowerCase().includes(texto.toLowerCase())
    );
    setLivros(livrosFiltrados);
  };

  const ordenarLivros = (criterio) => {
    let livrosOrdenados = [...livros];

    switch (criterio) {
      case 'A-Z':
        livrosOrdenados = livrosOrdenados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'Z-A':
        livrosOrdenados = livrosOrdenados.sort((a, b) => b.titulo.localeCompare(a.titulo));
        break;
      case 'maisBarato':
        livrosOrdenados = livrosOrdenados.sort((a, b) => a.preco - b.preco);
        break;
      case 'maisCaro':
        livrosOrdenados = livrosOrdenados.sort((a, b) => b.preco - a.preco);
        break;
      default:
        break;
    }

    setLivros(livrosOrdenados);
    setOrdenacao(criterio);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.autor}>Autor: {item.autor}</Text>
      <Text style={styles.preco}>Preço: R${item.preco.toFixed(2)}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Lista de Livros</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por título..."
        value={filtro}
        onChangeText={filtrarLivros}
      />

<Picker
  selectedValue={ordenacao}
  onValueChange={(itemValue, itemIndex) =>
    ordenarLivros(itemValue)
  }>
  <Picker.Item label="Ordenar por" value="" />
        <Picker.Item label="A-Z" value="A-Z" />
        <Picker.Item label="Z-A" value="Z-A" />
        <Picker.Item label="Mais baratos" value="maisBarato" />
        <Picker.Item label="Mais caros" value="maisCaro" />
</Picker>

      <FlatList
        data={livros}
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
