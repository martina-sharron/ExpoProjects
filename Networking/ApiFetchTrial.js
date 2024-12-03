import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

//fetch using then catch

const ApiFetchTrial = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(jsondata => {
                setData(jsondata)
                setLoading(false)
            }).catch((err) => {
                setError('failed to fetch data', err)
            })
    }
    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size='large' color='navyblue' />
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <Text>{JSON.stringify(data[0], null, 5)}</Text>
            )}
        </View>
    )
}

export default ApiFetchTrial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})