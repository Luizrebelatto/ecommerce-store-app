import React from "react";
import { TextInput, TextInputProps, Text } from "react-native";
import { styles } from "./styles";

interface IInputField extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label: string
}

export default function InputField({ value, onChangeText, label, ...rest }: IInputField) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </>
  );
}

