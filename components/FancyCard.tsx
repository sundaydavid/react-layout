import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevator]}>
                <Image source={{
                    uri: 'https://th.bing.com/th/id/OIP.lpk9qT4xjVvRlDV7SIqToAHaDH?pid=ImgDet&rs=1'
                }}
                    style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>FITVII Fitness Tracker</Text>
                    <Text style={styles.cardLabel}>Smart Watch with 24/7</Text>
                    <Text style={styles.cardDescription}>
                        Blood Pressure Heart Rate and Blood Oxygen Monitor,
                        Sleep Tracker with Calorie Step Counter,
                        IP68 Waterproof Activity Tracker for Women Men Android iOS
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: Dimensions.get('window').width / 1.1,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevator: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel: {
        color: '#000000',
        fontSize:15,
        fontWeight:'500',
        marginBottom:6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize:13,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter: {
        color: '#758283'
    }
})