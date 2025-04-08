import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 70,
      paddingHorizontal: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      alignItems: 'center'
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