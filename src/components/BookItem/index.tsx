import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface IItemProduct {
    id?: number;
    title: string;
    author: string;
    description: string;
    price: number;
}

export default function ItemProduct(item: IItemProduct) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <Text style={styles.price}>Price: US${item.price.toFixed(2)}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
}
