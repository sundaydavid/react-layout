import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>Me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>To</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>More...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textDecore}>😍</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 6,
        margin: 5,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'#3fa',
        shadowOpacity:0.7,
        shadowRadius:4
    },
    textDecore:{
        color: '#000000',
        fontSize:20,
        fontWeight:'bold'
    }
})