import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Discover = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textCont} variant="headlineMedium">Discover</Text>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCont: {
        fontSize: 36
    }
});