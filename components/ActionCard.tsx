import { Linking, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/315300159_626053035966387_4959463885050825104_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVCGQAyYrHrwKZOxyTPEbOlGiQjI9nlAiUaJCMj2eUCAnZSyaUdO8Jn_MLFaXDHdxYCqvbN5qyYsz_zesXcuit&_nc_ohc=L8pzsAsHF-sAX_ikB-z&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBtwNINMcCjNSMfojcgYqQxHtT9P_WnL_Bsj5NkiQr2sg&oe=647DE180',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>The Kyiv City Administration reported one child was among the dead, and 10 people were wounded. The casualty toll was the most from one attack on Kyiv in the past month. The attack also damaged apartment buildings, a medical clinic, a water pipeline and cars. Earlier, the city government had said that two children were killed before revising the number to one.

            Ukraine's General Staff reported that the Air Forces intercepted all 10 missiles, which it identified as short-range ballistic Iskander missiles.

            Russia has repeatedly targeted Kyiv with waves of drone and missile attacks since the start of the invasion, but attacks against the capital have significantly intensified over the past month as Ukraine prepares for a counteroffensive. </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://web.facebook.com/bianca.sunny.397')}>
            <Text style={styles.socialLinks}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/sunday-david-951369266/')}>
            <Text style={styles.socialLinks}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4

  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190
  },
  bodyContainer: {
    padding: 10,

  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#02198B',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius:10
  }
})