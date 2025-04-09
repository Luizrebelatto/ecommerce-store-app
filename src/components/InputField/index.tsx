import React from "react";
import { TextInput, Text } from "react-native";
import { styles } from "./styles";

interface IInputField {
    value: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    label?: string;
}

export default function InputField(data: IInputField){
    return(
        <>
            <Text style={styles.label}>{data.label}</Text>
            <TextInput
                value={data.value}
                onChangeText={data.onChangeText}
                style={styles.textInput}
                placeholder={data.placeholder}
                keyboardType="default"
            />
        </>
    )
}