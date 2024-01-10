import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Journey = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textCont} variant="headlineMedium">Journey</Text>
        </View>
    )
}

export default Journey

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCont: {
        fontSize: 36
    }
});