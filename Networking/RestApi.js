import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput, Button, TouchableOpacity } from 'react-native'


const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [newUser, setNewUser] = useState({ name: '', email: '' })
    const [updateUser, setUpdateUser] = useState({ id: null, name: '', email: '' })


    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL)
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            setError('Failed to load users')
        } finally {
            setLoading(false)
        }
    }


    const addUser = async () => {
        if (!newUser.name || !newUser.email) return
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });
            const addedUser = await response.json();
            setUsers([...users, addedUser])
            setNewUser({ name: '', email: '' })
        } catch (error) {
            //leave empty
        }
    }

    
    const updateUserData = async () => {
        if (!updateUser.id || !updateUser.name || !updateUser.email) return

        try {
            const response = await fetch(`${API_URL}/${updateUser.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateUser),
            });
            const updatedUser = await response.json();
            setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user))
            setUpdateUser({ id: null, name: '', email: '' })
        } catch (error) {
            setError('Failed to update user')
        }
    }


    const deleteUser = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            setUsers(users.filter(user => user.id !== id))
        } catch (error) {
            setError('Failed to delete user')
        }
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
        <View style={styles.container}>
            <Text style={styles.title}>User List</Text>


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


            <Text style={styles.subtitle}>+ New User</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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