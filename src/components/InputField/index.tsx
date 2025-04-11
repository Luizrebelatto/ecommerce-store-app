import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface IInputField extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputField({ value, onChangeText, ...rest }: IInputField) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

