import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between'
    },
    imageProduct: {
        width: 150,
        height: 150,
        borderRadius: 4,
        backgroundColor: 'yellow',
        marginRight: 10
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})