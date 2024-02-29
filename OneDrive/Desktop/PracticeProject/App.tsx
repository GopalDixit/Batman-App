import { View, Text,StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <FlatCard/>
      <ElevatedCards/>
      <FancyCard/>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
  },
});
export default App