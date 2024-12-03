import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ComponentB from './ComponentB'

const data = {
    name: 'Martina',
    age: 25,
    place: 'Madurai',
    year: 1998,
    Month: 'sep'
}

const ComponentA = () => {
    return (
        <View style={styles.container}>
            <ComponentB {...data} />
        </View>
    )
}

export default ComponentA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})