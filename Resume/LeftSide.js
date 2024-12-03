import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const LeftSide = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>

            <View style={styles.leftSideContainer}>
                <Text style={styles.name}>Martina Sharron</Text>

                <Text style={styles.heading}>Summary</Text>
                <Text style={styles.paragraph}>
                    Experienced process Engineer with a proven track record at Hiya Tech Solution in Madurai. Specializing in international-level e-commerce. Demonstrated expertise in training and development, as well as goal-setting and performance planning. Skilled in quality control and high-priority ticket resolution. Recently transitioned into front-end development to advance my career. Currently working remotely as an intern developer at DoodleBlue Innovation Pvt Ltd. in Chennai, focusing on React Native mobile app development.
                </Text>

                <Text style={styles.heading}>Employment History</Text>
                <Text style={styles.jobTitle}>Team Leader, Hiya Tech Solution Pvt Ltd</Text>
                <Text style={styles.date}>September 2019 - November 2022</Text>

                <View style={styles.txtgap}>
                    <Text style={styles.listItem}>Specialized in international-level e-commerce for over three years.</Text>
                    <Text style={styles.listItem}>Demonstrated high energy and focus on production role.</Text>
                    <Text style={styles.listItem}>Ensured accuracy of orders across various marketplaces.</Text>
                    <Text style={styles.listItem}>Updated database with relevant new information.</Text>
                    <Text style={styles.listItem}>Identified sources including customer sites across various countries and industry conferences.</Text>
                    <Text style={styles.listItem}>Handled quality control and quality checking for the team.</Text>
                    <Text style={styles.listItem}>Completed high-priority tickets by deadline.</Text>
                </View>
                <Text style={styles.heading}>Education</Text>
                <Text style={{fontWeight:'900'}}>CSI College of Arts and Science, 2019</Text>
                <Text>Bachelor of Science : Mathematics <Text style={{fontWeight:'900'}}>CGPA - 7.07</Text></Text>
                <Text style={{fontWeight:'900'}}>Capron Hall Higher Secondary School, 2016</Text>
                <Text>Certification of Higher Education : Computer Science</Text>
                <Text style={styles.heading}>Internships</Text>
                <Text style={{fontSize:16,fontWeight:'bold'}}>React Native Developer, Intern</Text>
                <Text style={{fontSize:14,fontStyle:'italic',color:'grey'}}>July 2024 - November 2024</Text>
                <Text>Currently working remotely as an intern at DoodleBlue Innovation Pvt. Ltd. in Chennai, focusing on <Text style={{fontWeight:'bold'}}>React Native Mobile App Development</Text></Text>
                <Text style={styles.heading}>Projects</Text>
                <Text style={styles.listItem}> {'\u2022'} WhatsApp Clone</Text>
                <Text style={styles.listItem}> {'\u2022'} FlipKart Clone</Text>
                <Text style={styles.listItem}> {'\u2022'} Scratch Card</Text>
                <Text style={styles.listItem}> {'\u2022'} Push Notifications</Text>
                <Text style={styles.listItem}> {'\u2022'} Deep Linking</Text>
                <Text style={styles.listItem}> {'\u2022'} Lock Authentication</Text>
            </View>
        </ScrollView>
    );
};

export default LeftSide;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
        fontSize: 18,
    },
    leftSideContainer: {
        padding: 20,
        flex: 2,
        backgroundColor: '#fff', // Optional, depending on your design
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading: {
        fontSize: 19,
        fontWeight: '800',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        marginBottom: 20,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: 15,
    },
    txtgap: {
        marginTop: 10,
    },
    listItem: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    
});
