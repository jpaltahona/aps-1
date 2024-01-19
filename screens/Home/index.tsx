import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from "native-base";
import Tarjeta from '../../Components/Tarjeta.tsx';


const Home = () => {
  return (
    <ScrollView style={styles.continer}>
      <StatusBar />
        <View style={styles.contentCard}>
          <Tarjeta />
          <Tarjeta />
        </View>
        <Tarjeta />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 16
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5, 
    gap: 3
  }
})