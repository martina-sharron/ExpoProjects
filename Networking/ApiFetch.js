import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Fetching = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>{JSON.stringify(data[0], null, 2)}</Text>
      )}
    </View>
  )
}

export default Fetching
