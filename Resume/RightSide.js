import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const RightSide = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View style={styles.section}>
                <Text style={styles.txtclr}>Details</Text>
                <Text style={styles.txtclr}>14, P.M.Arumugam Illam,</Text>
                <Text style={styles.txtclr}>INTUC Colony 3rd Street,</Text>
                <Text style={styles.txtclr}>Bethaniyapuram,</Text>
                <Text style={styles.txtclr}>Madurai-16.</Text>
                <Text style={styles.txtclr}>9360919181</Text>
            </View>

            {/* Skills Section */}
            <View style={styles.section}>
                <Text style={styles.txtclr}>Skills</Text>

                <Text style={styles.skillName}>Training and Development</Text>
                <View style={[styles.progressBar, { width: '80%' }]} />
                
                <Text style={styles.skillName}>Goal Development Planning</Text>
                <View style={[styles.progressBar, { width: '75%' }]} />

                <Text style={styles.skillName}>React Native</Text>
                <Text style={styles.skillSubText}>Core & Custom Components, Navigation, Performance Optimization, App Architecture</Text>
                <View style={[styles.progressBar, { width: '90%' }]} />
            </View>
        </ScrollView>
    );
};

export default RightSide;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#0f109e', // Background color of the scrollable content
        flexGrow: 1,
        paddingBottom: 15,
        paddingHorizontal: 15,
    },
    section: {
        marginBottom: 20, // Adds space between sections
    },
    txtclr: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
    },
    skillName: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    skillSubText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
    },
    progressBar: {
        height: 8,
        borderRadius: 5,
        backgroundColor: '#4caf50', 
        marginBottom: 15,
    },
});
