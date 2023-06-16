import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Sunday David',
            status: 'Young Programmer',
            imageUrl: 'https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/315300159_626053035966387_4959463885050825104_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVCGQAyYrHrwKZOxyTPEbOlGiQjI9nlAiUaJCMj2eUCAnZSyaUdO8Jn_MLFaXDHdxYCqvbN5qyYsz_zesXcuit&_nc_ohc=L8pzsAsHF-sAX_ikB-z&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBtwNINMcCjNSMfojcgYqQxHtT9P_WnL_Bsj5NkiQr2sg&oe=647DE180'
        },
        {
            uid: 2,
            name: 'Kingsley Mandu',
            status: 'Senior Teacher',
            imageUrl: 'https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/336997272_8817399555001035_2014982264656705925_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG2K7jQIKadrdIFOFxDu_KpPCU-aaKR0GQ8JT5popHQZAp2gtJc5FMisZE7QhyARHnml41bC01H7p8RRD9kSTu_&_nc_ohc=V3YCw7XFzWgAX87R8Q9&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfAUfupbAkzp_hDSkeBYRrwCCWML3P1zY6Hq90FkZz6qOg&oe=647EE103'
        },
        {
            uid: 3,
            name: 'Genesis Williams',
            status: 'Young Movie Lord',
            imageUrl: 'https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/309542169_541858317943097_4446412986812337324_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHLdYXf40YtBXzK6shsXPdMW42YVh9n-GdbjZhWH2f4Z2e4ugSlYbHlh79hW-mYfhwAO7ylcaYtMTKHDCi6oXhf&_nc_ohc=uGBC8dwDPt0AX_3K7_j&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDedVfWt5G43RiWhMxVEoGFSzssyJGMBu_CQ3MtHLSbqg&oe=647E0C96'
        },
        {
            uid: 4,
            name: 'Melody Anderson',
            status: 'Young Teacher',
            imageUrl: 'https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/344768342_757624349406766_3177894584316991330_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHtLVztHmdNdaH7qUvqlgcCOXRdwXe6f3g5dF3Bd7p_eG-5BrrzmBzvWs-7XrYGLxlMGkSbZRAthQskhi5mCNPA&_nc_ohc=ANtmpUcziWkAX_B3vDx&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&oh=00_AfDrb9cv9Thg60f5YR4flMEhl1Pg8RAqpT2mPMY5hDuZAA&oe=647E01D6'
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {/* Looping Through the contact list */}
                {/*I distructure all the keys that we have in the contact list*/}
                {/*If you dont want to use the return keyword, use =>() else, use =>{}
            and, If you dont want to distructthe keys, use a single parameter like (items). 
            then while using it, you will reference it like 'items.uid'. etc*/}

                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                        resizeMode='stretch'
                            source={{
                                uri: imageUrl
                            }} style={styles.userImage}
                        />
                        <View >
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal:16,
        marginBottom: 4
    },
    userCard: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 3,
        backgroundColor:'#',
        padding:8,
        borderRadius:10
    },
    userImage: {
        width:60,
        height:60,
        borderRadius:60 / 2,
        marginRight:15
    },
    userName: {
        fontSize:16,
        fontWeight: '600',
        color:'#000'
    },
    userStatus: {
        fontSize:12,
    }
})