import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput, Button, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAdding, setIsAdding] = useState(false)

  // State for new user and updated user
  const [newUser, setNewUser] = useState({ name: '', email: '' })
  const [updateUser, setUpdateUser] = useState({ id: null, name: '', email: '' })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setUsers(response.data)
    } catch (error) {
      setError('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  const addUser = async () => {
    if (!newUser.name || !newUser.email) return

    try {
      const response = await axios.post(API_URL, newUser)
      setUsers([...users, response.data])
      setNewUser({ name: '', email: '' })
      setIsAdding(false)
    } catch (error) {
      setError('Failed to add user')
    }
  }

  const updateUserData = async () => {
    if (!updateUser.name || !updateUser.email || !updateUser.id) return

    try {
      const response = await axios.put(`${API_URL}/${updateUser.id}`, updateUser)
      setUsers(users.map(user => user.id === response.data.id ? response.data : user))
      setUpdateUser({ id: null, name: '', email: '' })
    } catch (error) {
      setError('Failed to update user')
    }
  }

  const deleteUser = (id) => {
    Alert.alert(
      "Delete User",
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK", 
          onPress: async () => {
            try {
              await axios.delete(`${API_URL}/${id}`)
              setUsers(users.filter(user => user.id !== id))
            } catch (error) {
              setError('Failed to delete user')
            }
          }
        }
      ]
    )
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar hidden={true} />
      <Text style={styles.title}>User List</Text>

      <View style={styles.addNewUserContainer}>
        <TouchableOpacity onPress={() => setIsAdding(!isAdding)}>
          <Text style={styles.subtitle}>+ Add New User</Text>
        </TouchableOpacity>

        {isAdding && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newUser.name}
              onChangeText={(text) => setNewUser({ ...newUser, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={newUser.email}
              onChangeText={(text) => setNewUser({ ...newUser, email: text })}
            />
            <Button title="Add User" onPress={addUser} />
          </>
        )}
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setUpdateUser(item)}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => deleteUser(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {updateUser.id && (
        <>
          <Text style={styles.subtitle}>Edit User</Text>
          <TextInput
            style={styles.input}
            placeholder="Updated Name"
            value={updateUser.name}
            onChangeText={(text) => setUpdateUser({ ...updateUser, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Updated Email"
            value={updateUser.email}
            onChangeText={(text) => setUpdateUser({ ...updateUser, email: text })}
          />
          <Button title="Update User" onPress={updateUserData} />
        </>
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#007BFF',
  },
  addNewUserContainer: {
    width: '100%',
    marginBottom: 20,
  },
  userItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
})
