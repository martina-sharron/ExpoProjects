import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MyResume = () => {
    return (
        <View style={styles.container}>
            <View style={styles.separator}>
                <View style={styles.leftContent}>
                <LeftSide />
                </View>
                <View style={styles.rightContent}>
                    <RightSide />
                </View>

            </View>
        </View>
    )
}

export default MyResume

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 10,
        marginTop:20,
    },
    separator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContent:{
        flex:1.5,
    },
    rightContent:{
        flex:1,
    }
})