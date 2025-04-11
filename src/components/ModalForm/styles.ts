import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: 20,
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 20,
      maxHeight: "90%",
    },
    title: {
      fontSize: 18,
      marginBottom: 16,
      fontWeight: "bold",
    },
    label: {
      fontWeight: "600",
      marginTop: 12,
      marginBottom: 4,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      padding: 10,
      backgroundColor: "#fff",
    },
    error: {
      color: "red",
      fontSize: 12,
      marginTop: 2,
    },
    actions: {
      marginTop: 20,
    },
    cancel: {
      marginTop: 10,
      color: "#555",
      textAlign: "center",
    },
  });
  