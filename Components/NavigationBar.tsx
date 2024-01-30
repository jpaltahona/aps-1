import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NavigationBar = (props:any) => {
  console.log('props  ',props)
  return (
    <View style={styles.header}>
      <TouchableOpacity>
          <Image source={require('../assets/icons/estadisticas.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate('AdminUsers')}>
        <Image source={require('../assets/icons/users.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/red.png')} style={styles.icon} />
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: '#ffffff',
    borderTopColor: '#EDEDED',
    borderTopWidth: 2
  },
  icon: {
    width: 30,
    resizeMode: 'contain',
  }
})

export default NavigationBar