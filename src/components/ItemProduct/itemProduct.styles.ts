import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    imageProduct: {
        width: 80,
        height: 120,
        borderRadius: 4,
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700'
    }
})