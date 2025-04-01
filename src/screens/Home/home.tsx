import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const livrosData = [
  { id: 1, titulo: '1984', autor: 'George Orwell', ano: 1949, descricao: 'Um romance distópico sobre um futuro totalitário...' },
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899, descricao: 'A história de Bentinho e sua relação com Capitu...' },
  { id: 3, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', ano: 1954, descricao: 'A jornada de Frodo Bolseiro para destruir o Um Anel...' },
  { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943, descricao: 'A história de um príncipe que viaja de planeta em planeta...' },
  { id: 5, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997, descricao: 'O início da saga de Harry Potter, um jovem bruxo...' },
  { id: 6, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945, descricao: 'Uma fábula política que critica os regimes totalitários...' },
  { id: 7, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', ano: 1967, descricao: 'A história épica da família Buendía em Macondo...' },
  { id: 8, titulo: 'O Alquimista', autor: 'Paulo Coelho', ano: 1988, descricao: 'A jornada de Santiago, um jovem pastor, em busca de um tesouro...' },
  { id: 9, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937, descricao: 'Bilbo Bolseiro embarca em uma jornada para recuperar um tesouro...' },
  { id: 10, titulo: 'A Menina que Roubava Livros', autor: 'Markus Zusak', ano: 2005, descricao: 'A história de Liesel Meminger, uma menina na Alemanha nazista...' },
  // Adicione os outros livros aqui, conforme o JSON anterior
];

const Home = () => {
  // Estado para armazenar os livros e o filtro
  const [livros, setLivros] = useState(livrosData);
  const [filtro, setFiltro] = useState('');

  // Função para filtrar os livros com base no título
  const filtrarLivros = (texto) => {
    setFiltro(texto);
    const livrosFiltrados = livrosData.filter((livro) =>
      livro.titulo.toLowerCase().includes(texto.toLowerCase())
    );
    setLivros(livrosFiltrados);
  };

  // Componente de item para exibir os livros
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.autor}>Autor: {item.autor}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Lista de Livros</Text>

      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Filtrar por título..."
        value={filtro}
        onChangeText={filtrarLivros}
      />

      {/* Lista de livros filtrados */}
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
  descricao: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
});

export default Home;
