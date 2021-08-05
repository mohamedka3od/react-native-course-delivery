import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => { setCounter(val => val + 1) };
    const handleDecrement = () => { setCounter(val => val - 1) };

    return (<View style={styles.container}>

        <Pressable onPress={handleIncrement}><Text style={styles.fontSize}>{"+"}</Text></Pressable>
        <Text style={styles.counterSize}>{counter}</Text>
        <Pressable onPress={handleDecrement}><Text style={styles.fontSize}>{"-"}</Text></Pressable>

    </View>


    );
}

export default Counter;
