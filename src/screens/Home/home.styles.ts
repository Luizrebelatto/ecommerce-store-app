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
    headerTitle: { 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-around' 
    },
    circle: {
      width: 40, 
      height: 40, 
      borderRadius: 20, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    plusSymbol: {
      fontSize: 30, 
      fontWeight: 'bold'
    }
});