import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card, styles.elevatedCards]}>
           <Text >Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
           <Text >Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
           <Text >To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
           <Text >Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
           <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
           <Text>😎</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      container: {
        // flexDirection: 'row',
        padding: 8,
      },
      card:{
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center',
        margin:8
      },
      elevatedCards:{
        backgroundColor:'#CAD5E2',
        elevation:15,
      },

})