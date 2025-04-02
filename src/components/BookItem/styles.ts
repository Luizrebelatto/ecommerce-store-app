import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    author: {
        fontSize: 14,
        color: '#555',
      },
    price: {
        fontSize: 14,
        color: '#1e90ff',
        marginTop: 5,
      },
    description: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
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
})