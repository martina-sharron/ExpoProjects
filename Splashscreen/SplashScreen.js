import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function Splash() {

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const loadResourcesAndData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setIsReady(true)
      }
    }
    loadResourcesAndData()
  }, [])

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync()
    }
  }, [isReady])


  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/famm.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to the Family Get-Together!</Text>
      <Text style={styles.subText}>Where love, laughter, and memories are made.</Text>
      <Text style={styles.subText}>Let's make this day unforgettable!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 5,
  },
})
