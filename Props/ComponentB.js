import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentB = ({ name, age, place }) => {
    return (
        <View style={styles.container}>
            <Text>name:{name}</Text>
            <Text>age:{age}</Text>
            <Text>place:{place}</Text>
        </View>
    )
}

export default ComponentB

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})