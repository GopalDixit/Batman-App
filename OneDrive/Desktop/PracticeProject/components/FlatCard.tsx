import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>

        <View style={[styles.card, styles.cardOne]}>
          <Text>I'm</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Bruce</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Wayne</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>And</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text>Batman</Text>
        </View>
        <View style={[styles.card, styles.cardSix]}>
          <Text style={styles.bat}>🦇</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: '#2000B4',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'rgb(255 255 53)',
  },
  cardFive: {
    backgroundColor: 'orange',
  },
  cardSix: {
    backgroundColor: '#ffffff',
  },
  bat:{
    fontSize:40,
    color:'#000000'
  }
});
