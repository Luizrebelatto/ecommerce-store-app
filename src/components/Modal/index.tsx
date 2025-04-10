import React from "react";
import { TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

export default function Modal(){
    const { control, handleSubmit } = useForm();
    
    return (
        <View>
            <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange } }) => (
            <TextInput
                value={value}
                onChangeText={onChange}
                style={{ width: "100%", height: 40, backgroundColor: 'yellow' }}
                placeholder='Email'
            />
            )}
      />
        </View>
    )
}