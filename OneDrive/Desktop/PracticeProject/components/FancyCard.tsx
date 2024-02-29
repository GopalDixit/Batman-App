import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.elevatedCards]}>
      <Image style={styles.cardImage} 
        source={{uri:'https://i.pinimg.com/564x/40/15/80/401580fc4fb0878cf5d0d58dbdf6ddcd.jpg'}}
      />
      <View style={styles.cardBody}>
        <Text style={styles.ImageTitle}>Batman</Text>
        <Text style={styles.Location}>Gotham</Text>
        <Text style={styles.Discription}>Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.</Text>
      </View>
      </View>
      <View>
          <Image style={styles.secondImage}
            source={{uri:'https://www.thefactsite.com/wp-content/uploads/2017/12/batman-facts.jpg'}}
          />
          <Text style={styles.secDisc}>As a child Bruce Wayne fell into the Batcave and suffered a traumatic experience from seeing bats in the dark while injured. The bats beneath Wayne Manor continued to appear after the murder of his parents, one even flying into his father's study - the inspiration for his vigilante persona.</Text>
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      card:{
        height:550,
        width:400,
        marginVertical:15,
        
      },
      elevatedCards:{
        backgroundColor:'#000000',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
      },
      cardImage: {
        height: 400, // Adjusted height to shift the image upward
        // borderRadius: 600,
      },
      cardBody: {
        marginTop: -10, // Adjusted marginTop to align the card body content
        marginHorizontal: 8,
      },
      ImageTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#00001a'
      },
      Location:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#00001a'
      },
      Discription:{},
      secondImage:{
        height:400
      },
      secDisc:{
        marginHorizontal: 8,
        marginTop: -80,
        color:'#ffffff'
      }

})